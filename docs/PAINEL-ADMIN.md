# Painel de Edição — Dois90 Pizzaria

## Por que estamos fazendo isso

Hoje o site da Dois90 é 100% estático: cardápio, preços de exibição, descrições,
horários de cada unidade e textos do início ficam hardcoded direto no código
(`src/components/Menu.jsx`, `Hero.jsx`, `Locations.jsx`). Toda vez que uma pizza
muda de nome, uma unidade ajusta o horário de funcionamento ou um link de pedido
muda, é preciso mexer em código e fazer novo deploy.

A ideia é dar ao cliente (dono da pizzaria) um jeito de editar esse conteúdo
sozinho, sem depender de programador — com login simples, protegido por senha —
e depois gravar um vídeo tutorial ensinando ele a usar.

Vamos começar pela **Dois90** e, depois de validado, replicar o mesmo padrão pro
**Apiário Costa**.

## Decisões já tomadas

- **Persistência em SQLite embutido** (arquivo único, sem servidor de banco
  separado) — guardado como *document store* simples: uma tabela
  `content(section, data, updated_at)` com uma linha por seção (`menu`, `hero`,
  `locations`), cada uma guardando o JSON daquela seção. Evita modelar pizza/
  unidade como linhas relacionais (schema instável) mas ainda persiste de
  verdade entre deploys, via volume Docker nomeado.
- **Login único via senha em `.env`** (`ADMIN_PASSWORD` + `JWT_SECRET`), sem
  necessidade de múltiplos usuários por enquanto.
- **Backend novo**: serviço Docker `api` (Node/Express) rodando ao lado do `app`
  (nginx) já existente, no mesmo `docker-compose.yml`. O nginx faz proxy de
  `/api/*` pro serviço `api` — não precisa de rede externa nem do Nginx Proxy
  Manager pra essa comunicação interna.
- **Escopo v1 do que é editável**: cardápio (nome/descrição/selo de cada item),
  unidades (endereço, links de pedido/maps/WhatsApp, horários por setor) e
  textos do Início (tagline, título, subtítulo, botões). Upload de imagem pelo
  painel fica pra uma fase 2 — hoje as imagens continuam sendo arquivos
  estáticos versionados no código.

## O que já existia no repo antes de começar (achado numa investigação de branches)

Em `origin/main` havia um `public/content.json` órfão com o cardápio/hero/
unidades já extraídos pra JSON, mas **nenhum componente lia esse arquivo** — foi
aparentemente preparado por uma sessão anterior mas nunca ligado a nada. Havia
também 4 commits "chore: atualiza conteúdo via admin", mas eram edições manuais
diretas nesse JSON (não vinham de um painel funcionando) — não existe nenhum
login, backend ou UI de edição em nenhuma branch. Aproveitamos o *schema* já
desenhado nesse `content.json` (ele já cobre `menu`, `hero`, `locations` e ainda
`socialGallery`, `footer`, `orderModal`, `videos` de forma limpa) como ponto de
partida dos dados.

## ⚠️ Importante: crédito da Inicial no footer

**Antes de finalizar essa mudança**, adicionar no footer do site da Dois90 (e do
Apiário Costa, quando replicarmos lá) um crédito de desenvolvimento — algo como
*"Feito por Inicial Inovações Tecnológicas"* com link pro nosso site
(`https://inicialtecnologia.com.br/`), igual muita agência faz no rodapé dos
sites que entrega. Isso não estava no escopo original desse painel, mas é uma
alteração pequena que deve entrar junto — não esquecer.

## O que já foi feito (código, ainda não commitado)

- `server/`: backend Express novo (`index.js`, `db.js`, `package.json`,
  `Dockerfile`, `.dockerignore`) com as rotas:
  - `GET /api/content` (público) — retorna todas as seções salvas no SQLite.
  - `POST /api/auth/login`, `GET /api/auth/me`, `POST /api/auth/logout`.
  - `PUT /api/content/:section` (protegido, `section` ∈ `menu|hero|locations`).
  - `GET /api/health`.
  - `server/seed.json` — cópia do `content.json` existente, usada pra popular o
    banco na primeira subida (se a tabela estiver vazia).
- `docker-compose.yml` — novo serviço `api` (build a partir de `./server`),
  volume nomeado `dois90-db-data:/data` pra persistir o SQLite entre deploys,
  `app` com `depends_on: [api]`.
- `.docker/nginx.conf` — bloco `location /api/` fazendo proxy pro serviço `api`.
- `.env.example` — com `ADMIN_PASSWORD` e `JWT_SECRET` de exemplo.
- `src/context/ContentContext.jsx` — busca `GET /api/content` uma vez e
  disponibiliza pros componentes via `useContent()`.
- `src/components/Menu.jsx` — **reescrito do zero**: era ~1600 linhas de JSX
  hardcoded/legado de um landing-page-builder antigo (com funções globais
  `window.switchMain`/`switchSub`); virou um componente limpo de ~120 linhas,
  orientado a dados, usando estado React normal pra trocar categoria/
  subcategoria. Mantive as mesmas classes CSS (`main-tab`, `product-card` etc.)
  pra não quebrar o visual.
- `src/components/Hero.jsx` e `src/components/Locations.jsx` — mesma ideia,
  agora buscam os textos/unidades do `content` em vez de hardcoded.
- `src/App.jsx` — envolvido com `ContentProvider`; nova rota `/admin/*`
  (`react-router-dom` já estava instalado, não precisou migração de router).

## O que falta fazer

1. **Footer com crédito da Inicial** (ver seção acima — não esquecer).
2. `src/admin/AdminApp.jsx` — router interno do painel (`/admin/login` e
   `/admin`), usando um hook `useAdminAuth` (checa `GET /api/auth/me`) pra
   decidir se mostra login ou dashboard.
3. `src/admin/Dashboard.jsx` — abas "Cardápio", "Unidades", "Início", botão de
   sair e link "Ver site".
4. `src/admin/LocationsEditor.jsx` — formulário por unidade (endereço, links de
   maps/pedido/WhatsApp) + lista editável de horários por setor (adicionar/
   remover linha de horário). Segue o mesmo padrão do `MenuEditor.jsx` e
   `HeroEditor.jsx` já feitos.
5. `src/admin/Admin.css` — estilo simples e utilitário pro painel (não precisa
   seguir a identidade visual do site público, só ser limpo e usável).
6. Já feitos como referência de padrão: `src/admin/Login.jsx`,
   `src/admin/HeroEditor.jsx`, `src/admin/MenuEditor.jsx`, `src/admin/api.js`
   (`saveSection`), `src/admin/useAdminAuth.js`.
7. **Testar de ponta a ponta**: `docker compose up -d --build` local, conferir
   que os dois containers sobem saudáveis, que o site carrega cardápio/
   unidades/hero via API (visual idêntico ao atual), logar em `/admin`, editar
   algo, salvar, recarregar a home e confirmar a mudança. Depois
   `docker compose down && up -d --build` de novo pra confirmar que o volume
   `dois90-db-data` mantém a edição (prova que persiste entre deploys).
8. **Roteiro de uso** (pra servir de apoio no vídeo tutorial que o usuário vai
   gravar pro cliente): passo a passo de como acessar `/admin`, logar, e editar
   cada seção. Pode ser a segunda metade deste mesmo documento ou um arquivo
   separado (`docs/COMO-EDITAR.md`), decidir na hora.
9. Depois de validado na Dois90: replicar o mesmo padrão (server/, docker-
   compose, nginx, admin/) no **Apiário Costa**.

## Arquivos alterados até agora (não commitados)

```
 M .docker/nginx.conf
 M docker-compose.yml
 M src/App.jsx
 M src/components/Hero.jsx
 M src/components/Locations.jsx
 M src/components/Menu.jsx
?? .env.example
?? server/
?? src/admin/
?? src/context/
```
