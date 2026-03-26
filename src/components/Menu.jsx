import { useState } from "react";
import "./modal.css";
export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      id="b_3536911_1_177340533469b404961c76e"
      className="gpc-b "
    >
      <div className="gpc-b_sobreposicao"></div>
      <div className="centralizar">
        <div
          id="e_3536911_1_177340843781815322"
          className="gpc-e e_texto dd dm e_3536911_1_177340843781815322"
        >
          <div className="c e_texto">
            <p>
              <span>
                <b>O QUE VOCÊ QUER HOJE?</b>
              </span>
            </p>
          </div>
        </div>
        <div
          id="e_3536911_1_177340843781822615"
          className="gpc-e e_linha_horizontal dd dm e_3536911_1_177340843781822615"
        >
          <div className="c e_linha_horizontal"></div>
        </div>
        <div
          id="e_3536911_1_177340843781810056"
          className="gpc-e e_titulo dd dm e_3536911_1_177340843781810056"
          style={{ width: "100%" }}
        >
          <div className="c e_titulo">
            <h2>
              <b>
                <span>Escolha agora e </span>
                <i>aproveite</i>
              </b>
            </h2>
          </div>
        </div>
        <div
          id="e_3536911_1_177340843781848514"
          className="gpc-e e_texto dd dm e_3536911_1_177340843781848514"
        >
          <div className="c e_texto">
            <p>
              <span>
                Pizzas artesanais, gelatos italianos, sobremesas e muito mais —
                tudo feito com ingredientes selecionados.
              </span>
            </p>
          </div>
        </div>
        <div
          id="e_3536911_1_177340831289929755"
          className="gpc-e e_html dd dm e_3536911_1_177340831289929755"
        >
          <div className="c e_html">
            {" "}
            <section className="cardapio" id="cardapio">
              {" "}
              <div className="main-tabs">
                {" "}
                <button
                  className="main-tab active"
                  onClick={(e) =>
                    window.switchMain(e.currentTarget, "pizzaria")
                  }
                >
                  {" "}
                  🍕 Pizzaria &amp; Massas{" "}
                </button>{" "}
                <button
                  className="main-tab"
                  onClick={(e) =>
                    window.switchMain(e.currentTarget, "restaurante")
                  }
                >
                  {" "}
                  🍽️ Restaurante{" "}
                </button>{" "}
                <button
                  className="main-tab"
                  onClick={(e) =>
                    window.switchMain(e.currentTarget, "gelateria")
                  }
                >
                  {" "}
                  🍦 Gelateria &amp; Sobremesas{" "}
                </button>{" "}
              </div>{" "}
              <div className="panel active" id="panel-pizzaria">
                {" "}
                <div className="sub-tabs">
                  {" "}
                  <button
                    className="sub-tab active"
                    onClick={(e) => window.switchSub(e.currentTarget, "trad")}
                  >
                    {" "}
                    Tradicionais{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "espec")}
                  >
                    {" "}
                    Especialidades{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "prem")}
                  >
                    {" "}
                    Premium{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "especiais")}
                  >
                    {" "}
                    Especiais{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "doce")}
                  >
                    {" "}
                    Doces{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "esf")}
                  >
                    {" "}
                    Esfihas{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "mass")}
                  >
                    {" "}
                    Massas{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "combp")}
                  >
                    {" "}
                    Combos{" "}
                  </button>{" "}
                </div>{" "}
                <div className="panel active" id="panel-trad">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.03s" }}
                    >
                      {" "}
                      <div className="product-badge">Mais pedida</div>{" "}
                      <div className="product-name">Calabresa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, calabresa, cebola e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    >
                      {" "}
                      <div className="product-name">Portuguesa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, presunto, ovos, cebola, azeitona e
                        orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    >
                      {" "}
                      <div className="product-name">À Moda</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, presunto, calabresa, ovos, cebola
                        e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    >
                      {" "}
                      <div className="product-name">Milho e Bacon</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, milho, bacon e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.27s" }}
                    >
                      {" "}
                      <div className="product-name">Toscana</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, calabresa, tomate, manjericão, muçarela e
                        orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.33s" }}
                    >
                      {" "}
                      <div className="product-name">Muçarela</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-espec">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.03s" }}
                    >
                      {" "}
                      <div className="product-name">Macuxi</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, carne de sol na manteiga, muçarela e banana
                        frita.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    >
                      {" "}
                      <div className="product-name">Filé com Fritas</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, filé, muçarela, batata frita e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    >
                      {" "}
                      <div className="product-name">Filé com Catupiry</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, filé grelhado, catupiry, muçarela, cebola
                        roxa e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    >
                      {" "}
                      <div className="product-name">Filé Peperoncino</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, filé com pimentões assados, muçarela,
                        alho, pimenta e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.27s" }}
                    >
                      {" "}
                      <div className="product-name">Nordestina</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, carne de sol, muçarela, cebola
                        roxa, queijo coalho e biquinho.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.33s" }}
                    >
                      {" "}
                      <div className="product-name">Camarão</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, muçarela, camarão alho e óleo, creme
                        de leite e cebola.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-prem">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.39s" }}
                    >
                      {" "}
                      <div className="product-name">Espanhola c/ Bacon e Catupiry</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, presunto, calabresa, ovos, muçarela, bacon, cebola, catupiry e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.45s" }}
                    >
                      {" "}
                      <div className="product-name">Frango com Catupiry</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, frango, muçarela, catupiry e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.51s" }}
                    >
                      {" "}
                      <div className="product-name">Bem-querer</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, peito de peru, cebola roxa, muçarela e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.57s" }}
                    >
                      {" "}
                      <div className="product-name">Serra do Tepequém</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, tomate seco, manjericão e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.63s" }}
                    >
                      {" "}
                      <div className="product-name">Pizza Baiana</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, peito de peru, pimenta calabresa, alho poró, muçarela, bacon e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.69s" }}
                    >
                      {" "}
                      <div className="product-name">Frango Premium</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, frango, alho frito, pimenta calabresa, muçarela e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-especiais">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.03s" }}
                    >
                      {" "}
                      <div className="product-name">Frango ao Molho</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, frango, muçarela, milho e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    >
                      {" "}
                      <div className="product-name">Espanhola</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, presunto, calabresa, creme de leite, ovos, muçarela, cebola e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    >
                      {" "}
                      <div className="product-name">Calabresa com Catupiry</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, calabresa, cebola e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    >
                      {" "}
                      <div className="product-name">Margherita</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, tomate, manjericão e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.27s" }}
                    >
                      {" "}
                      <div className="product-name">Três Queijos</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, provolone, parmesão e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.33s" }}
                    >
                      {" "}
                      <div className="product-name">Mineira</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, queijo coalho, bacon, fio de mel de abelha.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-doce">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.63s" }}
                    >
                      {" "}
                      <div className="product-name">Banana</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Banana, trufa de leite ninho, mussarela e canela em
                        pó{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.69s" }}
                    >
                      {" "}
                      <div className="product-name">M&amp;Ms</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Mussarela, creme de chocolate com avelã e M&amp;M's
                        coloridos{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("pizzaria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-esf">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }}>
                      {" "}
                      <div className="product-name">Carne</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }}>
                      {" "}
                      <div className="product-name">Calabresa</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }}>
                      {" "}
                      <div className="product-name">Carne com Cebola</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }}>
                      {" "}
                      <div className="product-name">Calabresa com Cebola</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }}>
                      {" "}
                      <div className="product-name">Queijo</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.33s" }}>
                      {" "}
                      <div className="product-name">Bacon</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.39s" }}>
                      {" "}
                      <div className="product-name">Creme de Frango</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.45s" }}>
                      {" "}
                      <div className="product-name">Queijo com Alho Gratinado</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.51s" }}>
                      {" "}
                      <div className="product-name">Creme de Frango com Catupiry</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.57s" }}>
                      {" "}
                      <div className="product-name">Nutella</div>{" "}
                      <div className="product-desc">{" "}Chocolate com Avelã e M&amp;Ms{" "}</div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-mass">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }}>
                      {" "}
                      <div className="product-name">Lasanha à Bolonhesa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Carne à bolonhesa refogada, molhos vermelho e branco, muçarela e parmesão gratinado.{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }}>
                      {" "}
                      <div className="product-name">Fettuccine do Chef</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho branco, presunto, bacon, alho. Massa gratinada com muçarela, parmesão e orégano.{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }}>
                      {" "}
                      <div className="product-name">Spaghetti à Bolonhesa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, manjericão e carne moída com alho. Gratinada com muçarela, parmesão e orégano.{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }}>
                      {" "}
                      <div className="product-name">Fettuccine Alfredo</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Bacon, alho e salsinha ao molho Alfredo. Gratinado com parmesão, creme de leite, muçarela e orégano.{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }}>
                      {" "}
                      <div className="product-name">Spaghetti del Mare</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Camarão e tomate cereja refogados no alho, molho vermelho, parmesão, ervas e limão siciliano.{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-combp">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }}>
                      {" "}
                      <div className="product-name">Combo Clássico</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Pizza G Tradicional + Coca-Cola 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }}>
                      {" "}
                      <div className="product-name">Combo Especial</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Pizza G Especial + Coca-Cola 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }}>
                      {" "}
                      <div className="product-name">Combo Premium</div>{" "}
                      <div className="product-desc">
                        {" "}
                        1 Pizza G Premium + Refri de 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }}>
                      {" "}
                      <div className="product-name">Combo Dose Dupla</div>{" "}
                      <div className="product-desc">
                        {" "}
                        2 Pizzas G Tradicional + Refri de 2L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }}>
                      {" "}
                      <div className="product-name">Combo da Casa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        1 Pizza G Esp. da casa + Refri 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.33s" }}>
                      {" "}
                      <div className="product-name">Combo Dois90</div>{" "}
                      <div className="product-desc">
                        {" "}
                        1 Pizza G Tradicional + 1 Pizza G Premium + Refri de 2L{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.39s" }}>
                      {" "}
                      <div className="product-name">Combo Turma Toda</div>{" "}
                      <div className="product-desc">
                        {" "}
                        12 Esfihas Tradicionais + Coca-Cola 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={() => openModal("pizzaria")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="panel" id="panel-restaurante">
                {" "}
                <div className="sub-tabs">
                  {" "}
                  <button className="sub-tab active" onClick={(e) => window.switchSub(e.currentTarget, "carnes")}>{" "}Carnes{" "}</button>{" "}
                  <button className="sub-tab" onClick={(e) => window.switchSub(e.currentTarget, "especialidades_rest")}>{" "}Especialidades da Casa{" "}</button>{" "}
                  <button className="sub-tab" onClick={(e) => window.switchSub(e.currentTarget, "peixes")}>{" "}Peixes{" "}</button>{" "}
                  <button className="sub-tab" onClick={(e) => window.switchSub(e.currentTarget, "aves")}>{" "}Aves{" "}</button>{" "}
                </div>{" "}
                <div className="panel active" id="panel-carnes">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }}>
                      {" "}
                      <div className="product-badge">Prato Kids</div>{" "}
                      <div className="product-name">Isca de Carne</div>{" "}
                      <div className="product-desc">{" "}Arroz, Isca de Carne e Batata Frita.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }}>
                      {" "}
                      <div className="product-name">Picadinho do Tio Junior</div>{" "}
                      <div className="product-desc">{" "}Arroz Branco, Feijão, Picadinho, Banana Frita e Salada Verde.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }}>
                      {" "}
                      <div className="product-name">Bife à Cavalo</div>{" "}
                      <div className="product-desc">{" "}Arroz, Feijão, Bife em Isca, Ovo Frito e Batata Frita.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }}>
                      {" "}
                      <div className="product-name">Strogonoff de Carne</div>{" "}
                      <div className="product-desc">{" "}Arroz, Batata Frita e Strogonoff de Carne.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }}>
                      {" "}
                      <div className="product-name">Carne de Sol com Baião</div>{" "}
                      <div className="product-desc">{" "}Carne de Sol em Tiras Acebolada, Baião de Dois, Farofa e Vinagrete.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.33s" }}>
                      {" "}
                      <div className="product-name">Bife à Parmegiana (Alcatra)</div>{" "}
                      <div className="product-desc">{" "}Arroz, Bife Empanado, Molho de Tomate Pelati Gratinado no Forno com Mussarela e Batata Frita.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.39s" }}>
                      {" "}
                      <div className="product-name">Carne de Sol Acebolada</div>{" "}
                      <div className="product-desc">{" "}Carne de Sol em Tiras Acebolada, Arroz, Feijão, Batata Frita e Vinagrete.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.45s" }}>
                      {" "}
                      <div className="product-name">Picanha Grelhada</div>{" "}
                      <div className="product-desc">{" "}Arroz com Brócolis, Picanha Grelhada, Batata Frita, Farofa e Vinagrete.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-especialidades_rest">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }}>
                      {" "}
                      <div className="product-name">Salada Ceasar c/ Frango Grelhado</div>{" "}
                      <div className="product-desc">{" "}Frango Grelhado, Salada (Alface, Cenoura, Tomate), Molhos, Parmesão, Ovo Cozido e Croutons.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }}>
                      {" "}
                      <div className="product-name">Spaghetti à Bolonhesa</div>{" "}
                      <div className="product-desc">{" "}Picadinho, Molho de Tomate Pelati e Queijo Parmesão.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }}>
                      {" "}
                      <div className="product-name">Costelinha Suína</div>{" "}
                      <div className="product-desc">{" "}Arroz com brócolis, maionese da casa e feijão tropeiro. Opcional: Arroz branco/Barbecue.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }}>
                      {" "}
                      <div className="product-name">Panqueca de Carne c/ Salada</div>{" "}
                      <div className="product-desc">{" "}1 Panqueca de Picadinho ao Molho Vermelho e Parmesão, com Salada Tropical.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }}>
                      {" "}
                      <div className="product-name">Escondidinho de Carne de Sol</div>{" "}
                      <div className="product-desc">{" "}300G. Acompanha: Arroz Branco.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-peixes">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }}>
                      {" "}
                      <div className="product-name">Peixe à Delícia</div>{" "}
                      <div className="product-desc">{" "}Peixe Empanado Gratinado ao Molho Bechamel, Arroz, Farofa, Batata Frita e Banana Frita.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }}>
                      {" "}
                      <div className="product-name">Costelinha de Tambaqui Assada</div>{" "}
                      <div className="product-desc">{" "}Baião, Vinagrete e Farofa de Banana. Opcional: Arroz Branco e Feijão.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }}>
                      {" "}
                      <div className="product-name">Tambaqui à Moda da Casa</div>{" "}
                      <div className="product-desc">{" "}Filé Assado e Gratinado c/ Vinagrete Cremoso, Arroz c/ Brócolis e Farofa de Banana.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-aves">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }}>
                      {" "}
                      <div className="product-name">Frango Broaster</div>{" "}
                      <div className="product-desc">{" "}Filé de Frango em Isca Empanado, Purê de Batata e Legumes no Vapor.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }}>
                      {" "}
                      <div className="product-name">Frango Grelhado</div>{" "}
                      <div className="product-desc">{" "}Filé de Frango Grelhado, Arroz com Brócolis, Batata Frita, Farofa e Vinagrete.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }}>
                      {" "}
                      <div className="product-name">Frango à Milanesa</div>{" "}
                      <div className="product-desc">{" "}Filé de frango em isca empanado, arroz, feijão e purê de batata.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }}>
                      {" "}
                      <div className="product-name">Frango à Pizzaiolo</div>{" "}
                      <div className="product-desc">{" "}Filé gratinado c/ molho Pelati e mussarela, arroz e batata frita.{" "}</div>{" "}
                      <button onClick={() => openModal("restaurante")} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="panel" id="panel-gelateria">
                {" "}
                <div className="sub-tabs">
                  {" "}
                  <button
                    className="sub-tab active"
                    onClick={(e) => window.switchSub(e.currentTarget, "gel")}
                  >
                    {" "}
                    Gelatos{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "tort")}
                  >
                    {" "}
                    Tortas{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "acai")}
                  >
                    {" "}
                    Açaí Dois90{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "milk")}
                  >
                    {" "}
                    Milkshakes{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "bolos")}
                  >
                    {" "}
                    Bolos{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "cafe")}
                  >
                    {" "}
                    Panificação &amp; Café{" "}
                  </button>{" "}
                  <button
                    className="sub-tab"
                    onClick={(e) => window.switchSub(e.currentTarget, "combg")}
                  >
                    {" "}
                    Combos{" "}
                  </button>{" "}
                </div>{" "}
                <div className="panel active" id="panel-gel">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.03s" }}
                    >
                      {" "}
                      <div className="product-badge">Mais pedido</div>{" "}
                      <div className="product-name">Gelato Duo</div>{" "}
                      <div className="product-desc">
                        {" "}
                        2 bolas artesanais — escolha entre 24 sabores frescos
                        diários{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    >
                      {" "}
                      <div className="product-badge">Popular</div>{" "}
                      <div className="product-name">Gelato Quarteto</div>{" "}
                      <div className="product-desc">
                        {" "}
                        4 bolas artesanais em copo térmico — 24 sabores à
                        escolha{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    >
                      {" "}
                      <div className="product-name">Porção Família</div>{" "}
                      <div className="product-desc">
                        {" "}
                        8 bolas artesanais em caixa térmica — perfeito para
                        levar para casa{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-tort">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.03s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Torta Ninho com Chocolate M
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa branca artesanal, brigadeiro Ninho e black,
                        chantininho{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Torta Floresta Negra M
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa de chocolate, chantininho, amarenas e ganache{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    >
                      {" "}
                      <div className="product-name">Torta Abacaxi M</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa branca, abacaxi em pedaços, brigadeiro branco
                        artesanal{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Torta Ninho com Chocolate G
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Versão grande — perfeita para celebrações em
                        família{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-acai">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.03s" }}
                    >
                      {" "}
                      <div className="product-name">Açaí Frozen 400ml</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Açaí frozen cremoso, refrescante, sem açúcar
                        adicionado{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    >
                      {" "}
                      <div className="product-name">Açaí Frozen 500ml</div>{" "}
                      <div className="product-desc">
                        {" "}
                        A pedida certa para qualquer hora do dia{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    >
                      {" "}
                      <div className="product-name">Açaí Frozen 700ml</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Açaí puro, saboroso e energético no tamanho maior{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    >
                      {" "}
                      <div className="product-badge">Promoção</div>{" "}
                      <div className="product-name">Açaí Médio 1 Litro</div>{" "}
                      <div className="product-desc">
                        {" "}
                        O sabor incomparável no tamanho família. Pronto para
                        servir.{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-milk">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.69s" }}
                    >
                      {" "}
                      <div className="product-name">
                        MilkShake OvoMaltina
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Cremoso, gelado e intenso com OvoMaltina{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.75s" }}
                    >
                      {" "}
                      <div className="product-name">
                        MilkShake Ninho com Oreo
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Leite ninho cremoso com pedaços de Oreo e chantilly{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.81s" }}
                    >
                      {" "}
                      <div className="product-name">MilkShake Morango</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Morango fresco batido com sorvete artesanal e
                        chantilly{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-bolos">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.87s" }}
                    >
                      {" "}
                      <div className="product-badge">Zero Lactose</div>{" "}
                      <div className="product-name">
                        Bolo Chocolate Zero Lactose
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Intenso sabor de chocolate, para todos os paladares{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.93s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Bolo Ninho com Nutella
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa leite ninho coberta com Nutella cremosa{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.99s" }}
                    >
                      {" "}
                      <div className="product-name">Bolo Mesclado</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa mesclada de chocolate e baunilha, sabor
                        equilibrado{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.05s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Pudim de Leite Condensado
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Feito artesanalmente, sem trigo — cremoso e
                        irresistível{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-cafe">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.11s" }}
                    >
                      {" "}
                      <div className="product-name">Pão Artesanal</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Pão caseiro artesanal grande, assado na hora na
                        gelateria{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.17s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Pão Integral 7 Grãos
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Artesanal, nutritivo, crocante por fora e macio por
                        dentro{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.23s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Cappuccino com Chantilly
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Cappuccino cremoso com chantilly frescinho{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-combg">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.29s" }}
                    >
                      {" "}
                      <div className="product-badge">Só no Delivery</div>{" "}
                      <div className="product-name">Combo Tarde Gostosa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Gelato Quarteto (4 bolas) + MilkShake 340ml à
                        escolha{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.35s" }}
                    >
                      {" "}
                      <div className="product-badge">Família</div>{" "}
                      <div className="product-name">Combo Família</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Porção Família (8 bolas) + Torta M + Bebida à
                        escolha{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.41s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Combo Café da Manhã
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Café com Leite + Pão Artesanal + Fatia de Bolo{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.47s" }}
                    >
                      {" "}
                      <div className="product-name">
                        Combo Sobremesa Solo
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Torta M + Gelato Duo (2 bolas) + Calda Quente{" "}
                      </div>{" "}
                      <button
                        onClick={() => openModal("gelateria")}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </section>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="location-modal-overlay" onClick={closeModal}>
          <div
            className="location-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="location-modal-close" onClick={closeModal}>
              &times;
            </button>
            <h3 className="location-modal-title">Escolha a Unidade</h3>
            <p className="location-modal-subtitle">
              Para onde deseja enviar seu pedido?
            </p>
            <div className="location-modal-options">
              {modalType === "pizzaria" ? (
                <>
                  <a
                    href="https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa"
                    className="location-modal-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pizzaria Dois90 - Bairro Aeroporto
                  </a>
                  <a
                    href="http://pigz.com.br/dois90pizzaria"
                    className="location-modal-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pizzaria Dois90 - Bairro Caçari
                  </a>
                </>
              ) : modalType === "gelateria" ? (
                <>
                  <a
                    href="https://pedido.anota.ai/loja/dois90-gelateria-hc-nathana-martins?f=msa"
                    className="location-modal-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gelateria Dois90 - Bairro Aeroporto
                  </a>
                  <a
                    href="https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-e-cafeteria-dois90-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d"
                    className="location-modal-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gelateria Dois90 - Bairro Aparecida
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa"
                    className="location-modal-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dois90 - Bairro Aeroporto
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
