# Como editar o site da Dois90

Guia passo a passo do painel de edição. Serve também de roteiro para o vídeo
tutorial do cliente.

---

## 1. Entrar no painel

1. Abra o navegador e acesse **dois90.com.br/admin**
2. Digite a senha e clique em **Entrar**.

A senha é única e vale para todo o painel. Se errar muitas vezes seguidas, o
sistema bloqueia novas tentativas por alguns minutos — é proteção contra quem
tenta adivinhar a senha.

> A sessão fica ativa por 12 horas. Depois disso o painel pede a senha de novo.

## 2. Entender a tela

O painel tem três abas no topo:

| Aba | O que você edita ali |
|---|---|
| **Cardápio** | Nome, descrição e selo de cada item do menu |
| **Unidades** | Endereço, links de pedido e horários de cada loja |
| **Início** | Os textos da primeira tela do site |

Uma **bolinha dourada** ao lado do nome da aba significa que existe alteração
naquela aba que ainda não foi publicada.

No topo à direita: **Ver site** abre o site público e **Sair** encerra a sessão.

Na barra fixa embaixo da tela ficam os dois botões que importam:

- **Publicar alterações** — grava e o site muda na hora.
- **Descartar** — joga fora as alterações da aba atual e volta ao que estava
  publicado.

## 3. Editar o cardápio

1. Clique na aba **Cardápio**.
2. Clique na categoria que quer mexer (ex: *🍕 Pizzaria & Massas*). O número à
   direita mostra quantos itens ela tem.
3. Clique na subcategoria (ex: *Tradicionais*).
4. Agora você vê cada item com três campos:
   - **Nome** — o nome que aparece no card.
   - **Descrição** — os ingredientes. Pode deixar vazio.
   - **Selo** — a tarja dourada em cima do nome (*Mais pedida*, *Promoção*,
     *Zero Lactose*…). **Deixe vazio para não mostrar selo nenhum.**
5. Use as setas **↑ ↓** para mudar a ordem em que o item aparece.
6. **Remover** apaga o item (o painel pede confirmação).
7. **+ Adicionar item** cria um item novo no fim da lista.
8. Clique em **Publicar alterações**.

> **Preços não são editados aqui** — o site não mostra preço. Preço se muda no
> sistema de pedidos (Pigz, iFood, Anota AI).

## 4. Editar as unidades

1. Clique na aba **Unidades**.
2. Clique na unidade (Aeroporto, Caçari ou Aparecida).
3. Ajuste o que precisar:
   - **Nome** e **Endereço** — o que aparece no card da unidade.
   - **Link do botão FAZER PEDIDO** — para onde o cliente vai ao clicar.
   - **Link do COMO CHEGAR** — o endereço do Google Maps.
   - **Link do WhatsApp** — aparece dentro da janela de horários.
4. Em **Horários por setor**, cada setor (Pizzaria, Restaurante, Gelateria) tem
   uma lista de linhas. Cada linha tem duas partes:
   - a **descrição** à esquerda (ex: *Loja física*, *Delivery Seg-Sáb*)
   - o **horário** à direita (ex: *17:30 - 23h*)
5. **+ Adicionar horário** cria uma linha nova; o **✕** remove a linha.
6. Clique em **Publicar alterações**.

> **Os links precisam estar completos**, começando com `https://`. O jeito mais
> seguro é abrir a página no navegador, copiar o endereço da barra e colar aqui.

> **Trocar a foto de uma unidade** não é feito pelo painel — as fotos são
> arquivos do site. Peça para o desenvolvedor.

## 5. Editar os textos do Início

1. Clique na aba **Início**.
2. Ajuste o que quiser:
   - **Tarja de cima** — a linha pequena acima do título.
   - **Título principal** — o texto grande.
   - **Subtítulo** — o parágrafo abaixo do título.
   - **Botão principal** — o texto do botão que abre a escolha de unidade.
   - **Botão secundário** — o texto do botão que leva ao *Quem Somos*.
   - **Texto de rolagem** — a frase no pé da primeira tela.
3. Clique em **Publicar alterações**.

## 6. Conferir o resultado

Depois de publicar, clique em **Ver site** no topo. A alteração já está no ar —
não precisa esperar nem pedir deploy para ninguém.

Se a página parecer igual, aperte **Ctrl + Shift + R** (ou **Cmd + Shift + R** no
Mac) para recarregar ignorando o cache do navegador.

---

## Dúvidas comuns

**Publiquei sem querer, como voltar?**
Não existe desfazer automático. Edite de volta o valor antigo e publique de novo.
Enquanto você *não* clicou em Publicar, o botão **Descartar** volta tudo.

**Fechei a aba com alterações não publicadas.**
Elas foram perdidas — o navegador avisa antes de fechar justamente por isso. O
que está publicado continua intacto.

**Alterei uma aba e publiquei; a outra aba sumiu com o que eu tinha mexido?**
Cada aba é publicada separadamente. Publicar o *Cardápio* não publica as
*Unidades*. Publique cada aba que você mexeu.

**Esqueci a senha.**
A senha fica numa configuração do servidor. Só o desenvolvedor pode trocá-la.
