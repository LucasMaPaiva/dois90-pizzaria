# Backup do conteúdo — Dois90

Runbook operacional. O conteúdo que o cliente edita pelo painel (cardápio,
unidades, promoções, textos do início) e as fotos e vídeos que ele sobe **não
estão no git** — vivem no volume Docker `dois90-db-data`, no servidor. Perder o
volume sem backup significa voltar ao `server/seed.json`: as edições do cliente e
todos os arquivos que ele subiu somem.

---

## Comandos do dia a dia

```bash
make backup                                     # gera um snapshot
make backup-list                                # lista, do mais novo ao mais antigo
make restore FILE=dois90-2026-08-26-1453.tar.gz # restaura
```

O `make deploy` já tira um snapshot antes de subir — rede de segurança para
quando a mudança é nossa, não do cliente.

---

## Por que o jeito óbvio não funciona

**Não faça `cp content.db` nem `docker cp`.**

O banco roda em modo WAL. Numa medição real durante o desenvolvimento:

```
-rw-r--r-- 1 root root   4096  content.db
-rw-r--r-- 1 root root  32768  content.db-shm
-rw-r--r-- 1 root root 185432  content.db-wal
```

O `content.db` tinha **4 KB** e o `content.db-wal` tinha **185 KB** — quase todo
o conteúdo vivia no WAL. Copiar só o `content.db` produz um arquivo que abre
com:

```
Error: no such table: content
```

Um backup que parece ter dado certo e não tem nada dentro. É o pior tipo de
falha: silenciosa, e você só descobre no dia em que precisa dele.

O certo é `VACUUM INTO`, que gera um arquivo único, compacto e
transacionalmente consistente mesmo com a aplicação escrevendo. É o que o
`server/backup.js` faz, e ele roda `integrity_check` no resultado **antes** de
declarar sucesso.

## A ordem importa

A mídia é capturada **antes** do banco, de propósito:

- Um upload que aconteça entre os dois passos entra no pacote sem ninguém
  apontar pra ele — um órfão inofensivo.
- Na ordem inversa, o banco poderia referenciar um arquivo que não está no
  pacote, e a promoção quebraria no restore.

A cópia da mídia usa hardlink dentro do próprio volume: instantânea e sem gastar
disco.

## Onde as coisas ficam

| O quê | Onde | No git? |
|---|---|---|
| Banco e mídia enviada | volume `dois90-db-data` | não |
| Snapshots | `./backups` no host | não (`.gitignore`) |
| Conteúdo inicial | `server/seed.json` | sim |

Os **dados** ficam no volume nomeado — não precisa migrar nada. Só os
**snapshots** caem num diretório normal do host, para que cron e rclone alcancem
sem precisar entrar no container.

## O que o restore faz

1. Valida o pacote **antes** de tocar em produção (`integrity_check` + confere
   que existem seções).
2. Guarda um `pre-restore-*.db` do estado atual — um restore errado também tem
   volta.
3. Remove os arquivos `-wal` e `-shm` junto com o banco. Sem isso o SQLite tenta
   reaplicar um WAL que não pertence mais àquele banco.
4. Acrescenta a mídia **sem apagar** o que já existe, para não destruir arquivo
   enviado depois do snapshot e ainda referenciado.

---

# Cópia externa para o Google Drive

> ## 🚧 Status: PENDENTE
>
> Esta parte **ainda não está configurada** na VPS. O Workspace já existe;
> falta executar os passos abaixo. Até lá o backup roda normalmente, mas
> **fica somente local na VPS**.
>
> O que já funciona hoje: snapshot diário, verificação de integridade, retenção e
> restore. O que falta: a cópia sair do servidor.

Um backup no mesmo servidor protege contra erro do cliente — ele apagou uma
promoção, trocou uma foto errada, zerou uma descrição. **Não protege contra
perder o servidor**, que é o cenário mais grave: disco morto, conta suspensa,
VPS recriada. Para isso é preciso uma cópia fora.

Configuração de uma vez só. Depois disso o cron cuida sozinho.

## Pré-requisitos

Confira tudo isto **antes** de começar — os passos abaixo não funcionam sem:

| # | Pré-requisito | Status | Por que é necessário |
|---|---|---|---|
| 1 | **Conta Google Workspace** (domínio próprio, plano pago) | ✅ já existe | Drive compartilhado só existe no Workspace. Sem ele, a service account não tem onde escrever. |
| 2 | Acesso ao Google Cloud Console com permissão de criar projeto e conta de serviço | ⬜ | Onde a service account e a chave JSON nascem. |
| 3 | **Google Drive API** ativada no projeto | ⬜ | Sem ela o rclone recebe 403. |
| 4 | **Drive compartilhado** criado, com a service account como Gerente de conteúdo | ⬜ | É ele que fornece a cota de armazenamento (ver a armadilha abaixo). |
| 5 | Arquivo de **chave JSON** da service account, na VPS | ⬜ | Como o rclone autentica sem navegador. |
| 6 | **rclone** instalado na VPS | ⬜ | `curl https://rclone.org/install.sh \| sudo bash` |
| 7 | `BACKUP_REMOTE` preenchido no `.env` da VPS | ⬜ | É o que liga a cópia externa no `make backup`. |
| 8 | Saída de rede da VPS para `googleapis.com` | ⬜ | Normalmente já existe; só é problema com firewall de saída restritivo. |

O item 1 está resolvido — a AE3 tem Workspace. Falta executar os itens 2 a 8,
que é o que as seções abaixo cobrem.

### Alternativa: OAuth de usuário (não é o caminho daqui)

Registrado só para o caso de um projeto sem Workspace. Dá para usar OAuth de
usuário com um Gmail comum:

```bash
# numa máquina COM navegador (seu notebook):
rclone authorize "drive"
# copie o token que ele imprime e cole no rclone config da VPS
```

Funciona, mas o backup fica amarrado a uma conta pessoal — se a pessoa sair da
empresa ou trocar a senha, o backup para em silêncio. Como existe Workspace,
use a service account.

## ⚠️ A armadilha que derruba quase todo mundo

Uma **service account não tem cota de armazenamento própria**. Se você mandar o
backup para o "Meu Drive" dela, o upload falha por falta de espaço, com um erro
que não deixa isso óbvio.

Com Google Workspace o destino tem que ser um **Drive compartilhado** (Shared
Drive) com a service account adicionada como membro. É o Drive compartilhado que
fornece o espaço a ela.

> Se a conta for um Gmail comum em vez de Workspace, não existe Drive
> compartilhado e este caminho não serve — aí é OAuth de usuário
> (`rclone authorize "drive"` numa máquina com navegador, colando o token na
> VPS). Funciona, mas amarra o backup a uma conta pessoal.

## 1. Google Cloud (navegador, uma vez)

1. Em [console.cloud.google.com](https://console.cloud.google.com), crie ou
   escolha um projeto.
2. **APIs e serviços → Biblioteca** → procure **Google Drive API** → **Ativar**.
3. **IAM e Admin → Contas de serviço → Criar conta de serviço**.
   Nome: `dois90-backup`. Pode pular as permissões — ela não precisa de papel
   nenhum no projeto.
4. Na conta criada: aba **Chaves → Adicionar chave → Criar nova chave → JSON**.
   Baixa um arquivo.
5. Copie o **e-mail** da conta de serviço, algo como
   `dois90-backup@seu-projeto.iam.gserviceaccount.com`.

## 2. Google Drive

Crie um **Drive compartilhado** — não uma pasta dentro do Meu Drive:

> Drive → **Drives compartilhados** → **Novo** → nome `Backups AE3`

Abra ele → **Gerenciar membros** → adicione o e-mail da conta de serviço como
**Gerente de conteúdo**.

Dentro dele, crie a pasta `dois90-backups`.

Pegue o **ID** do Drive compartilhado: abra ele no navegador, a URL é
`drive.google.com/drive/folders/XXXXXXXX` — o `XXXXXXXX` é o ID.

## 3. VPS

```bash
# instala o rclone
curl https://rclone.org/install.sh | sudo bash

# guarda a chave fora do repositório, legível só pelo root
sudo mkdir -p /etc/rclone
sudo nano /etc/rclone/dois90-backup.json     # cole o conteúdo do JSON baixado
sudo chmod 600 /etc/rclone/dois90-backup.json
```

```bash
mkdir -p ~/.config/rclone
cat >> ~/.config/rclone/rclone.conf <<'EOF'
[gdrive]
type = drive
scope = drive
service_account_file = /etc/rclone/dois90-backup.json
team_drive = COLE_O_ID_DO_DRIVE_COMPARTILHADO_AQUI
EOF
```

**Teste antes de confiar:**

```bash
rclone lsd gdrive:
rclone touch gdrive:dois90-backups/teste.txt && rclone delete gdrive:dois90-backups/teste.txt
```

Se o `lsd` listar as pastas, está resolvido. Se der erro de quota, ou o
`team_drive` está errado, ou a service account não foi adicionada como membro do
Drive compartilhado.

## 4. Ligar no projeto

No `.env` da VPS:

```
BACKUP_KEEP=14
BACKUP_REMOTE=gdrive:dois90-backups
```

Sem `BACKUP_REMOTE`, o `make backup` avisa que ficou somente local — não falha
silenciosamente.

```bash
cd /caminho/do/dois90-pizzaria
make backup
```

Deve imprimir as seções, `integrity_check ok`, e enviar para o Drive.

## 5. Cron diário

```bash
crontab -e
```

```
30 4 * * * cd /caminho/do/dois90-pizzaria && make backup >> /var/log/dois90-backup.log 2>&1
```

4h30 da manhã, com a pizzaria fechada. Confira o log depois do primeiro
disparo:

```bash
tail -20 /var/log/dois90-backup.log
```

## Retenção

`BACKUP_KEEP=14` limpa **só o lado local**. O `rclone copy` não apaga nada, então
o Drive vai acumulando. Para espelhar a retenção lá, acrescente na linha do cron:

```
&& rclone delete gdrive:dois90-backups --min-age 30d
```

30 dias no Drive contra 14 no local, de propósito: se o backup local quebrar sem
ninguém notar, a cópia externa ainda dá margem.

---

# Restaurar

## A partir de um backup local

```bash
make backup-list
make restore FILE=dois90-2026-08-26-0430.tar.gz
```

## A partir do Drive

```bash
rclone ls gdrive:dois90-backups
rclone copy gdrive:dois90-backups/dois90-2026-08-26-0430.tar.gz ./backups/
make restore FILE=dois90-2026-08-26-0430.tar.gz
```

## Teste o restore antes de precisar dele

**Backup que nunca foi restaurado não é backup, é esperança.** Rode um restore
de verdade logo depois de configurar, com o snapshot que acabou de gerar. É a
única forma de saber que funciona.

O ciclo completo foi exercitado no desenvolvimento, não só a geração: conteúdo
criado e mídia enviada → `make backup` → hero destruído e toda a mídia apagada →
`make restore` → conteúdo e mídia de volta, arquivo servindo com HTTP 200 e o
`pre-restore` criado.

---

# Quando algo der errado

| Sintoma | Causa provável |
|---|---|
| `no such table: content` ao abrir um backup | Alguém copiou o `content.db` cru em vez de usar `make backup` |
| `make backup` diz "ficou somente local" | `BACKUP_REMOTE` não está no `.env` |
| rclone reclama de quota | Destino é o Meu Drive da service account, não um Drive compartilhado — ou ela não foi adicionada como membro |
| `Cannot find module '/app/backup.js'` | A imagem da api está velha; rode `docker compose up -d --build api` |
| Restore rodou mas o site não mudou | Falta reiniciar: `docker compose restart api` (o `make restore` já faz) |
