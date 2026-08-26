# Painel de Edição — Dois90 Pizzaria

> Guia do cliente (como usar o painel no dia a dia): **[COMO-EDITAR.md](./COMO-EDITAR.md)**

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
- **Escopo v1 do que é editável**: cardápio (nome/descrição/selo de cada item),
  unidades (endereço, links de pedido/maps/WhatsApp, horários por setor) e
  textos do Início. Upload de imagem pelo painel fica pra fase 2 — as imagens
  continuam arquivos estáticos versionados no código.

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
| `seed.json` | Conteúdo inicial das 3 seções (cópia do `content.json`) |
| `Dockerfile` | `node:20-bookworm-slim` (usa prebuild do better-sqlite3) |

Rotas:

- `GET /api/health` — usada pelo healthcheck do compose.
- `GET /api/content` — **pública**, retorna as 3 seções. O site inteiro lê daqui.
- `POST /api/auth/login` — compara a senha em tempo constante, devolve cookie
  `httpOnly` + `sameSite=strict`. Rate limit: 8 tentativas / 10 min por IP.
- `GET /api/auth/me` — valida a sessão.
- `POST /api/auth/logout` — limpa o cookie.
- `PUT /api/content/:section` — **protegido**, `section` ∈ `menu|hero|locations`.

O seed **nunca sobrescreve** uma seção que já existe no banco — só popula o que
está faltando. Por isso subir de novo não desfaz edição do cliente.

### Infra

- `docker-compose.yml` — serviço `api` com volume nomeado
  `dois90-db-data:/data`, `app` com `depends_on: [api]`, healthcheck nos dois.
- `.docker/nginx.conf` — bloco `location /api/` com `proxy_pass http://api:3001`
  e `Cache-Control: no-store`.
- `.env.example` — `ADMIN_PASSWORD` e `JWT_SECRET`, com o aviso sobre `VITE_`.
- `vite.config.js` — proxy `/api` → `localhost:3001` para o `npm run dev`.

### Frontend público

- `src/context/ContentContext.jsx` — busca `GET /api/content` uma vez e expõe
  via `useContent()`. Se a API falhar, cai para `/content.json`.
- `src/components/Menu.jsx` — **reescrito**: eram ~1600 linhas de JSX hardcoded
  de um landing-page-builder antigo; virou ~130 linhas orientadas a dados.
  As mesmas classes CSS foram mantidas, então o visual é idêntico.
- `src/components/Hero.jsx` e `Locations.jsx` — mesma ideia.
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
| `LocationsEditor.jsx` | Unidade + horários por setor (linhas adicionáveis) |
| `HeroEditor.jsx` | Textos do início |
| `fields.jsx` | Campos reutilizados (`TextField`, `TextArea`, `Collapsible`) |
| `Admin.css` | Estilo utilitário, independente da identidade do site |

O `Dashboard` guarda `saved` (o que está no banco) e `draft` (em edição), compara
os dois para marcar a aba com alteração pendente, e avisa via `beforeunload` se
o cliente tentar fechar a aba com alteração não publicada. Cada aba é publicada
separadamente (um `PUT` por seção).

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

## O que falta

1. Gravar o vídeo tutorial usando o `COMO-EDITAR.md` como roteiro.
2. Limpar do `.env` as variáveis `VITE_*` que sobraram da abordagem antiga
   (`VITE_ADMIN_PASSWORD`, `VITE_GITHUB_TOKEN`, `VITE_GITHUB_OWNER`,
   `VITE_GITHUB_REPO`) — não são mais lidas por nada.
3. Apagar a branch `feature/admin-cms` depois de confirmar que nada dela é
   necessário.
4. Fase 2 (se o cliente pedir): upload de imagem pelo painel — trocar foto de
   unidade e imagens da galeria.
5. Depois de validado na Dois90: replicar o padrão (`server/`, compose, nginx,
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
- Lint: 425 erros, exatamente o mesmo baseline de `main` — nenhum novo. ✅
