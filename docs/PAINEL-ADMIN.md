# Painel de Edição — Dois90 Pizzaria

> Guia do cliente (como usar o painel no dia a dia): **[COMO-EDITAR.md](./COMO-EDITAR.md)**
>
> Backup e restore (runbook operacional): **[BACKUP.md](./BACKUP.md)**

## Por que estamos fazendo isso

Hoje o site da Dois90 é 100% estático: cardápio, descrições, horários de cada
unidade e textos do início ficam hardcoded direto no código. Toda vez que uma
pizza muda de nome, uma unidade ajusta o horário de funcionamento ou um link de
pedido muda, é preciso mexer em código e fazer novo deploy.

A ideia é dar ao cliente (dono da pizzaria) um jeito de editar esse conteúdo
sozinho, sem depender de programador — com login simples, protegido por senha —
e depois gravar um vídeo tutorial ensinando ele a usar.

Vamos começar pela **Dois90** e, depois de validado, replicar o mesmo padrão pro
**Apiário Costa**.

## Decisões tomadas

- **Persistência em SQLite embutido** (arquivo único, sem servidor de banco
  separado), guardado como *document store* simples: tabela
  `content(section, data, updated_at)` com uma linha por seção (`menu`, `hero`,
  `locations`), cada uma guardando o JSON daquela seção. Evita modelar pizza/
  unidade como linhas relacionais (schema instável) mas persiste de verdade
  entre deploys, via volume Docker nomeado.
- **Login único via senha em `.env`** (`ADMIN_PASSWORD` + `JWT_SECRET`), sem
  múltiplos usuários. Sessão em cookie `httpOnly` assinado com JWT, 12h.
- **Backend novo**: serviço Docker `api` (Node/Express) ao lado do `app`
  (nginx), no mesmo `docker-compose.yml`. O nginx faz proxy de `/api/*` pro
  serviço `api` — comunicação interna da rede do Docker, não passa pelo Nginx
  Proxy Manager.
- **Escopo do que é editável**: cardápio (nome/descrição/selo de cada item),
  unidades (endereço, foto da fachada, links de pedido/maps/WhatsApp, horários
  por setor), seções de promoção e textos do Início.
- **Upload de mídia** aceita JPG/PNG/WebP/MP4 até 25 MB, guardado no mesmo
  volume do banco (`/data/uploads`) e servido sob `/api/uploads/` com nome
  opaco e cache imutável.
- **Limites de tamanho e de quantidade** definidos em `server/limits.js`,
  ancorados no conteúdo real de hoje com folga de ~1,5 a 2x, para impedir que um
  texto gigante desalinhe o layout. `server/limits.js` é a fonte única: o painel
  busca os números em `GET /api/limits` em vez de repetir constantes.

### ⚠️ Por que o segredo NÃO pode ficar no frontend

Uma tentativa anterior (branch `feature/admin-cms`, abandonada) resolvia a
persistência commitando o `content.json` direto no GitHub pela API, usando um
Personal Access Token, e validava a senha comparando com
`import.meta.env.VITE_ADMIN_PASSWORD` no navegador.

Variáveis `VITE_*` são **embutidas em texto claro no bundle**: qualquer visitante
que abrisse o JS do site leria a senha do admin e um token com permissão de
escrita no repositório. É por isso que a autenticação vive no backend aqui, e
por isso o `.env.example` avisa para nunca prefixar segredo com `VITE_`.

## O que já existia no repo antes de começar

Em `origin/main` havia um `public/content.json` órfão com o cardápio/hero/
unidades já extraídos pra JSON, mas **nenhum componente lia esse arquivo**.
Aproveitamos o *schema* já desenhado nele como ponto de partida dos dados
(`server/seed.json`) e ele segue no repo como **fallback**: se a API estiver
fora, o site público carrega dele em vez de aparecer vazio.

Também havia 4 commits "chore: atualiza conteúdo via admin" — eram edições
manuais diretas nesse JSON, não vinham de um painel funcionando.

## Como está implementado

### Backend — `server/`

| Arquivo | Papel |
|---|---|
| `index.js` | Rotas Express, auth JWT, rate limit do login |
| `db.js` | SQLite (better-sqlite3), schema, seed idempotente |
| `limits.js` | Limites de texto/quantidade e o validador por seção |
| `seed.json` | Conteúdo inicial das 4 seções (cópia do `content.json`) |
| `Dockerfile` | `node:20-bookworm-slim` (usa prebuild do better-sqlite3) |

Rotas:

- `GET /api/health` — usada pelo healthcheck do compose.
- `GET /api/content` — **pública**, retorna as 3 seções. O site inteiro lê daqui.
- `POST /api/auth/login` — compara a senha em tempo constante, devolve cookie
  `httpOnly` + `sameSite=strict`. Rate limit: 8 tentativas / 10 min por IP.
- `GET /api/auth/me` — valida a sessão.
- `POST /api/auth/logout` — limpa o cookie.
- `GET /api/limits` — limites de caracteres e de quantidade; o painel lê daqui.
- `PUT /api/content/:section` — **protegido**, `section` ∈
  `menu|hero|locations|promos`. Valida contra `limits.js` e devolve 422 com a
  lista de problemas se algo passar do limite.
- `POST /api/upload` — **protegido**, multipart de um arquivo. Aceita por
  mimetype **ou** por extensão (alguns clientes mandam
  `application/octet-stream` para `.mp4`), grava com nome aleatório e devolve
  `{ url, type, size }`.
- `GET /api/uploads/*` — serve a mídia enviada, com cache de 30 dias.

O seed **nunca sobrescreve** uma seção que já existe no banco — só popula o que
está faltando. Por isso subir de novo não desfaz edição do cliente.

### Infra

- `docker-compose.yml` — serviço `api` com volume nomeado
  `dois90-db-data:/data`, `app` com `depends_on: [api]`, healthcheck nos dois.
- `.docker/nginx.conf` — três locations para a API:
  - `location = /api/upload` com `client_max_body_size 30m` (o padrão do nginx é
    **1 MB**, que barraria o vídeo antes de ele chegar na API; fica acima dos
    25 MB da API para o erro amigável vir do backend, não um 413 cru do nginx).
  - `location ^~ /api/uploads/` deixando o `Cache-Control` do Express passar.
  - `location ^~ /api/` com `Cache-Control: no-store` para o conteúdo.

  O `^~` é obrigatório: sem ele, a regra regex de assets estáticos
  (`~* \.(jpe?g|png|...)$`) rouba `/api/uploads/foto.jpg` e o nginx tenta
  servir do próprio disco — 404. Locations regex têm precedência sobre prefixo.
- `.env.example` — `ADMIN_PASSWORD` e `JWT_SECRET`, com o aviso sobre `VITE_`.
- `vite.config.js` — proxy `/api` → `localhost:3001` para o `npm run dev`.

### Frontend público

- `src/context/ContentContext.jsx` — busca `GET /api/content` uma vez e expõe
  via `useContent()`. Se a API falhar, cai para `/content.json`.
- `src/components/Menu.jsx` — **reescrito**: eram ~1600 linhas de JSX hardcoded
  de um landing-page-builder antigo; virou ~130 linhas orientadas a dados.
  As mesmas classes CSS foram mantidas, então o visual é idêntico.
- `src/components/Hero.jsx` e `Locations.jsx` — mesma ideia.
- `src/components/PromoSections.jsx` — renderiza as faixas de promoção de uma
  posição. Substituiu `ComboAeroporto.jsx` (esfiha) e `PromoImage.jsx` (moto),
  que eram duas variações da mesma coisa: um arquivo de mídia em largura cheia.
  As duas viraram promoções geridas pelo painel — a da moto entra desativada,
  como estava comentada no `Home.jsx` desde o commit `a7e14c0`.
- `src/promoPositions.js` — posições e formatos, compartilhado entre o site e o
  painel para as duas pontas não saírem de sincronia.
- `src/pages/Home.jsx` — passou de 96 para 27 linhas: perdeu o `useEffect` com
  `window.switchMain`/`switchSub` (não usado mais) e ganhou quatro âncoras de
  `<PromoSections>`.
- `src/components/Footer.jsx` — crédito "Feito por Inicial Inovações
  Tecnológicas" com link pro nosso site.
- `src/App.jsx` — envolvido com `ContentProvider`; rota `/admin/*`.

#### Como a troca de abas mudou

O `Menu.jsx` antigo chamava `window.switchMain(...)` / `window.switchSub(...)`
nos `onClick`. Essas funções eram definidas num `useEffect` do
`src/pages/Home.jsx` e mexiam nas classes `.active` direto no DOM — por fora do
React. Funcionava, mas era frágil: a função tinha a lista de categorias
hardcoded (`["pizzaria", "restaurante", "gelateria"]`), então uma categoria nova
não trocaria de painel.

A versão nova troca de aba com estado React, sem tocar no DOM e sem lista
hardcoded.

**Ponto de atenção:** o `useEffect` do `Home.jsx` também fazia uma coisa que a
versão nova não faz — em telas de até 600px, ele removia todas as classes
`.active` depois do mount, deixando o cardápio *sem nada pré-selecionado* no
celular (o cliente precisava tocar numa categoria para ver os produtos). Hoje a
primeira categoria/subcategoria já vem aberta em qualquer tamanho de tela.
**Decidir se o comportamento antigo do mobile deve voltar.** As funções
`window.switchMain`/`switchSub`/`animateCards` no `Home.jsx` ficaram órfãs e
podem ser removidas junto com essa decisão.

### Painel — `src/admin/`

| Arquivo | Papel |
|---|---|
| `AdminApp.jsx` | Router interno (`/admin/login` e `/admin`) |
| `useAdminAuth.js` | Estado da sessão via `GET /api/auth/me` |
| `api.js` | Cliente das rotas (`login`, `saveSection`, …) |
| `Login.jsx` | Tela de senha |
| `Dashboard.jsx` | Abas, detecção de alteração pendente, publicar/descartar |
| `MenuEditor.jsx` | Categorias → subcategorias → itens (editar, ordenar, remover, adicionar) |
| `LocationsEditor.jsx` | Unidade + foto da fachada + horários por setor |
| `PromosEditor.jsx` | Promoções: criar, ligar/desligar, posição, mídia, ordem |
| `MediaField.jsx` | Campo de mídia com preview e upload |
| `HeroEditor.jsx` | Textos do início |
| `fields.jsx` | `TextField`, `TextArea`, `Collapsible`, `AddButton` (com limite) |
| `Admin.css` | Estilo utilitário, independente da identidade do site |

O `Dashboard` guarda `saved` (o que está no banco) e `draft` (em edição), compara
os dois para marcar a aba com alteração pendente, e avisa via `beforeunload` se
o cliente tentar fechar a aba com alteração não publicada. Cada aba é publicada
separadamente (um `PUT` por seção).

#### Bug do `loading="lazy"` na faixa de promoção

A imagem da faixa saía com altura zero e nunca carregava. Causa: `width: 100%`
com `height: auto` e proporção desconhecida dá altura 0 antes do arquivo
carregar — e o Chrome, então, nunca considera o elemento perto da viewport, não
dispara o carregamento, e a altura nunca chega. Impasse: sem altura não carrega,
sem carregar não tem altura. Trocar para `eager` resolveu na hora (a faixa
passou a medir 1550 × 860, a proporção 16:9 do arquivo de teste). São poucas
faixas e elas são conteúdo destacado, então `eager` é o certo aqui de qualquer
forma. O vídeo nunca teve o problema porque `autoPlay` já carrega adiantado.

#### Onde os limites são aplicados

Duas camadas, e as duas importam:

- **No painel** — `maxLength` nos campos (o navegador simplesmente para de
  aceitar), um contador que aparece a partir de 80% do limite e fica vermelho no
  limite, e o `AddButton` que se desabilita explicando o motivo.
- **Na API** — `validateSection` roda no `PUT` e devolve 422 com a lista de
  problemas. É esse o portão real: o painel é conveniência, a API é a garantia.

#### Três ajustes que só apareceram testando no navegador

- **Fonte.** O painel usava `system-ui`, que resolve para uma fonte
  monoespaçada em algumas máquinas Linux. Trocado por uma pilha ancorada em
  `Montserrat`, que o site já carrega — previsível em qualquer máquina.
- **Rolagem ao trocar de aba.** Sair do *Cardápio* (longo) para o *Início*
  (curto) mantinha a posição de rolagem e o cliente caía no meio da página.
  Agora o painel volta ao topo a cada troca de aba.
- **Topbar e abas fixas.** O cardápio é longo e o cliente tinha que rolar tudo
  de volta para trocar de aba ou clicar em *Sair*. `position: sticky` sozinho
  não funcionou: o CSS global do site define `body { overflow-y: scroll }`, o
  que transforma o `body` em scrollport e quebra a sticky. Em vez de mexer no
  CSS global, o `.adm-shell` virou o próprio container de rolagem
  (`height: 100vh; overflow-y: auto`) e a rolagem programática usa um ref do
  shell em vez de `window.scrollTo`.

## Como rodar

```bash
cp .env.example .env          # e preencher ADMIN_PASSWORD / JWT_SECRET
docker compose up -d --build
```

Site em `http://localhost:8080`, painel em `http://localhost:8080/admin`.

Em desenvolvimento, dois terminais:

```bash
cd server && npm install && ADMIN_PASSWORD=... JWT_SECRET=... npm start
npm run dev                   # o vite faz proxy de /api pro 3001
```

## Backup

Runbook completo: **[BACKUP.md](./BACKUP.md)** — inclui a configuração da cópia
externa para o Google Drive e o que fazer quando algo der errado.

O essencial:

- `make backup`, `make backup-list`, `make restore FILE=...`. O `make deploy` já
  tira um snapshot antes de subir.
- **Nunca copie o `content.db` cru.** O banco roda em WAL; numa medição real o
  `content.db` tinha 4 KB contra 185 KB no `content.db-wal`, e a cópia abria com
  `no such table: content`. O `server/backup.js` usa `VACUUM INTO` e roda
  `integrity_check` antes de declarar sucesso.
- A mídia é capturada **antes** do banco, para que um upload no meio do caminho
  vire um órfão inofensivo em vez de uma referência quebrada.
- Dados no volume `dois90-db-data`; snapshots em `./backups`, um diretório
  normal do host que cron e rclone alcançam.
- **A cópia externa ainda não está ligada** — depende de criar a conta do Google
  Workspace. Hoje o backup é somente local na VPS.

## O que falta

1. Gravar o vídeo tutorial usando o `COMO-EDITAR.md` como roteiro.
2. **Cópia externa do backup** — bloqueada na criação da conta Google Workspace
   (Drive compartilhado só existe nela). Depois disso: service account, rclone
   na VPS e `BACKUP_REMOTE` no `.env`. Passo a passo e pré-requisitos em
   [BACKUP.md](./BACKUP.md). Até lá o backup roda diariamente, mas **não sai do
   servidor**.
3. Limpar do `.env` as variáveis `VITE_*` que sobraram da abordagem antiga
   (`VITE_ADMIN_PASSWORD`, `VITE_GITHUB_TOKEN`, `VITE_GITHUB_OWNER`,
   `VITE_GITHUB_REPO`) — não são mais lidas por nada.
4. Apagar a branch `feature/admin-cms` depois de confirmar que nada dela é
   necessário.
5. `src/components/WhatsAppPromo.jsx` não é referenciado por nada — já era
   código morto antes desta mudança, ficou de fora dela de propósito. Decidir se
   apaga.
6. Fase seguinte: liberar a troca de **todas** as imagens do site — hoje o
   upload cobre foto de unidade e mídia de promoção; falta a galeria de redes
   (`socialGallery`) e as imagens de fundo do Hero e do Quem Somos.
7. Depois de validado na Dois90: replicar o padrão (`server/`, compose, nginx,
   `src/admin/`) no **Apiário Costa**.

## Testes já feitos

- Rotas da API: health, content público, login com senha certa/errada,
  `me` autenticado e anônimo, `PUT` protegido (401 sem cookie), seção inválida
  (400), logout, 404 de rota inexistente. ✅
- Proxy do nginx: `/api/*` chega no serviço `api`, SPA continua servindo
  `/` e `/admin`, `/content.json` segue acessível como fallback. ✅
- Persistência: editar → `docker compose down` → `up -d --build` → a edição
  continua lá e o seed não reaplica (volume `dois90-db-data`). ✅
- Bundle: `grep` confirma que nenhum segredo e nenhuma variável `VITE_*` vai
  para o JS do cliente. ✅
- Visual: hero, cardápio, unidades e rodapé renderizando pela API, idênticos
  ao anterior; troca de categoria e subcategoria funcionando. ✅
- Painel no navegador: login, as três abas, expandir categoria →
  subcategoria → item, editar descrição, marcação de alteração pendente,
  publicar (o site público refletiu na hora), adicionar e remover linha de
  horário, voltar ao estado "Tudo salvo" e logout. ✅
- Limites: descrição de 250 caracteres (limite 200), 31 itens numa
  subcategoria (limite 30) e 13 horários num setor (limite 12) todos rejeitados
  com 422 e mensagem apontando o campo; conteúdo dentro do limite salvo com
  200. ✅
- Upload: sem login dá 401; JPG e MP4 de 2,7 MB e de 12 MB aceitos; `.txt`
  rejeitado com 400; arquivo de 28 MB rejeitado com a mensagem amigável de
  limite; mídia servida com `Content-Type` correto e um único
  `Cache-Control: public, max-age=2592000, immutable`. ✅
- Promoções: a faixa da esfiha renderiza como `<video>` em 1550 × 387 (a
  proporção 4:1 do arquivo), e a da moto, desligada, não renderiza. ✅
- Painel no navegador, aba Promoções: tamanhos recomendados na tela, as duas
  promoções migradas com o estado certo, criar promoção nova, upload de arquivo
  pelo `MediaField` com preview, ligar, publicar, e as duas faixas aparecendo no
  site na ordem da lista. ✅
- Lint: 425 erros, exatamente o mesmo baseline de `main` — nenhum novo. ✅
