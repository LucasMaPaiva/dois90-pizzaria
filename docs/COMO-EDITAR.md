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

### Os limites e por que eles existem

Alguns campos param de aceitar texto quando chegam no limite, e um contador
aparece do lado do nome do campo quando você está perto dele. Não é frescura: um
texto muito longo desalinha os cards no site.

| Campo | Limite |
|---|---|
| Nome do item | 60 caracteres |
| Descrição do item | 200 caracteres |
| Selo | 24 caracteres |
| Itens por subcategoria | 30 |
| Linhas de horário por setor | 12 |
| Promoções | 8 |

Quando um limite de quantidade é atingido, o botão de adicionar fica cinza e
explica o motivo. Para adicionar outro, remova algum primeiro.

## 4. Editar as unidades

1. Clique na aba **Unidades**.
2. Clique na unidade (Aeroporto, Caçari ou Aparecida).
3. Ajuste o que precisar:
   - **Nome** e **Endereço** — o que aparece no card da unidade.
   - **Foto da fachada** — clique em **Trocar arquivo** e escolha a imagem no
     seu computador. O tamanho recomendado é **1600 × 890** (proporção 16:9),
     igual às fotos atuais.
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



## 5. Criar e editar promoções

As promoções são **faixas** que aparecem entre as seções do site — como a do
Combo Esfiha, que aparece logo depois do cardápio. Cada faixa é um arquivo só:
uma imagem ou um vídeo, ocupando a largura toda da página.

1. Clique na aba **Promoções**.
2. Para criar: clique em **+ Adicionar promoção** no fim da lista.
3. Para editar uma que já existe: clique no nome dela.
4. Preencha:
   - **Mostrar no site** — a chavinha que liga e desliga. Uma promoção
     desligada continua salva, só não aparece. *Prefira desligar a remover* se a
     promoção pode voltar depois.
   - **Nome da promoção** — só para você se achar no painel; não aparece no site.
   - **Onde aparece na página** — escolha entre *Depois do Início*, *Depois do
     Cardápio*, *Depois das Unidades* e *Depois da Galeria de redes*.
   - **Arquivo da promoção** — clique em **Trocar arquivo** e escolha do seu
     computador.
   - **Link ao clicar** — opcional. Se preencher, a faixa inteira vira clicável.
5. Use as setas **↑ ↓** para mudar a ordem, quando houver mais de uma promoção
   no mesmo lugar da página.
6. Clique em **Publicar alterações**.

### Que tamanho o arquivo tem que ter

A faixa sempre ocupa a largura toda da tela. O que muda de um formato para o
outro é a **altura** dela na página. Os dois tamanhos abaixo são exatamente os
das promoções que a Dois90 já usa hoje:

| Formato | Tamanho | Proporção | Igual à |
|---|---|---|---|
| **Faixa larga** | 4330 × 1080 | 4:1 | promoção do Combo Esfiha |
| **Faixa cinema** | 2534 × 1080 | 2,35:1 | promoção do Sorteio da Moto |

A *faixa larga* é uma tira fina, atravessando a tela. A *faixa cinema* é bem
mais alta, ocupa mais espaço na página.

Aceita **JPG, PNG, WebP ou MP4**, no máximo **25 MB**. Vídeo toca sozinho, em
loop e **sempre sem som** — não coloque narração nem música, porque ninguém vai
ouvir.

> Se o arquivo não tiver exatamente essa proporção, ele não fica cortado nem
> esticado: a faixa só fica mais alta ou mais baixa do que o esperado.

## 6. Editar os textos do Início

1. Clique na aba **Início**.
2. Ajuste o que quiser:
   - **Tarja de cima** — a linha pequena acima do título.
   - **Título principal** — o texto grande.
   - **Subtítulo** — o parágrafo abaixo do título.
   - **Botão principal** — o texto do botão que abre a escolha de unidade.
   - **Botão secundário** — o texto do botão que leva ao *Quem Somos*.
   - **Texto de rolagem** — a frase no pé da primeira tela.
3. Clique em **Publicar alterações**.

## 7. Conferir o resultado

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
