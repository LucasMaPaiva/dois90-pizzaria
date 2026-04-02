import { useState } from "react";
import "./modal.css";
import OrderModal from "./OrderModal";
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
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-badge">Mais pedida</div>{" "}
                      <div className="product-name">Calabresa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, calabresa, cebola e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Portuguesa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, presunto, ovos, cebola, azeitona e
                        orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">À Moda</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, presunto, calabresa, ovos, cebola
                        e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Milho e Bacon</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, milho, bacon e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.27s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Toscana</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, calabresa, tomate, manjericão, muçarela e
                        orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.33s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Muçarela</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
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
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Macuxi</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, carne de sol na manteiga, muçarela e banana
                        frita.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Filé com Fritas</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, filé, muçarela, batata frita e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Filé com Catupiry</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, filé grelhado, catupiry, muçarela, cebola
                        roxa e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Filé Peperoncino</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, filé com pimentões assados, muçarela,
                        alho, pimenta e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.27s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Nordestina</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, carne de sol, muçarela, cebola
                        roxa, queijo coalho e biquinho.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.33s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Camarão</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, muçarela, camarão alho e óleo, creme
                        de leite e cebola.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
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
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Espanhola c/ Bacon e Catupiry</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, presunto, calabresa, ovos, muçarela, bacon, cebola, catupiry e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.45s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Frango com Catupiry</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, frango, muçarela, catupiry e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.51s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Bem-querer</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, peito de peru, cebola roxa, muçarela e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.57s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Serra do Tepequém</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, tomate seco, manjericão e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.63s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Pizza Baiana</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, peito de peru, pimenta calabresa, alho poró, muçarela, bacon e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.69s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Frango Premium</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, frango, alho frito, pimenta calabresa, muçarela e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
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
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Frango ao Molho</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, frango, muçarela, milho e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Espanhola</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, presunto, calabresa, creme de leite, ovos, muçarela, cebola e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Calabresa com Catupiry</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, catupiry, calabresa, cebola e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Margherita</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, tomate, manjericão e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.27s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Três Queijos</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, provolone, parmesão e orégano.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.33s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Mineira</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, muçarela, queijo coalho, bacon, fio de mel de abelha.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
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
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">Banana</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Banana, trufa de leite ninho, mussarela e canela em
                        pó{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.69s" }}
                    onClick={() => openModal("pizzaria")}
                    >
                      {" "}
                      <div className="product-name">M&amp;Ms</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Mussarela, creme de chocolate com avelã e M&amp;M's
                        coloridos{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }}
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
                    <div className="product-card" style={{ animationDelay: "0.03s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Carne</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Calabresa</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Carne com Cebola</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Calabresa com Cebola</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Queijo</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.33s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Bacon</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.39s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Creme de Frango</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.45s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Queijo com Alho Gratinado</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.51s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Creme de Frango com Catupiry</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.57s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Nutella</div>{" "}
                      <div className="product-desc">{" "}Chocolate com Avelã e M&amp;Ms{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-mass">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Lasanha à Bolonhesa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Carne à bolonhesa refogada, molhos vermelho e branco, muçarela e parmesão gratinado.{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Fettuccine do Chef</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho branco, presunto, bacon, alho. Massa gratinada com muçarela, parmesão e orégano.{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Spaghetti à Bolonhesa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Molho pelati, manjericão e carne moída com alho. Gratinada com muçarela, parmesão e orégano.{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Fettuccine Alfredo</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Bacon, alho e salsinha ao molho Alfredo. Gratinado com parmesão, creme de leite, muçarela e orégano.{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Spaghetti del Mare</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Camarão e tomate cereja refogados no alho, molho vermelho, parmesão, ervas e limão siciliano.{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-combp">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Combo Clássico</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Pizza G Tradicional + Coca-Cola 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Combo Especial</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Pizza G Especial + Coca-Cola 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Combo Premium</div>{" "}
                      <div className="product-desc">
                        {" "}
                        1 Pizza G Premium + Refri de 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Combo Dose Dupla</div>{" "}
                      <div className="product-desc">
                        {" "}
                        2 Pizzas G Tradicional + Refri de 2L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Combo da Casa</div>{" "}
                      <div className="product-desc">
                        {" "}
                        1 Pizza G Esp. da casa + Refri 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.33s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Combo Dois90</div>{" "}
                      <div className="product-desc">
                        {" "}
                        1 Pizza G Tradicional + 1 Pizza G Premium + Refri de 2L{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.39s" }} onClick={() => openModal("pizzaria")}>
                      {" "}
                      <div className="product-name">Combo Turma Toda</div>{" "}
                      <div className="product-desc">
                        {" "}
                        12 Esfihas Tradicionais + Coca-Cola 1L ou Suco 500ml{" "}
                      </div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("pizzaria"); }} className="product-cta">Peça já</button>{" "}
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
                    <div className="product-card" style={{ animationDelay: "0.03s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-badge">Prato Kids</div>{" "}
                      <div className="product-name">Isca de Carne</div>{" "}
                      <div className="product-desc">{" "}Arroz, Isca de Carne e Batata Frita.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Picadinho do Tio Junior</div>{" "}
                      <div className="product-desc">{" "}Arroz Branco, Feijão, Picadinho, Banana Frita e Salada Verde.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Bife à Cavalo</div>{" "}
                      <div className="product-desc">{" "}Arroz, Feijão, Bife em Isca, Ovo Frito e Batata Frita.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Strogonoff de Carne</div>{" "}
                      <div className="product-desc">{" "}Arroz, Batata Frita e Strogonoff de Carne.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Carne de Sol com Baião</div>{" "}
                      <div className="product-desc">{" "}Carne de Sol em Tiras Acebolada, Baião de Dois, Farofa e Vinagrete.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.33s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Bife à Parmegiana (Alcatra)</div>{" "}
                      <div className="product-desc">{" "}Arroz, Bife Empanado, Molho de Tomate Pelati Gratinado no Forno com Mussarela e Batata Frita.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.39s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Carne de Sol Acebolada</div>{" "}
                      <div className="product-desc">{" "}Carne de Sol em Tiras Acebolada, Arroz, Feijão, Batata Frita e Vinagrete.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.45s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Picanha Grelhada</div>{" "}
                      <div className="product-desc">{" "}Arroz com Brócolis, Picanha Grelhada, Batata Frita, Farofa e Vinagrete.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-especialidades_rest">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Salada Ceasar c/ Frango Grelhado</div>{" "}
                      <div className="product-desc">{" "}Frango Grelhado, Salada (Alface, Cenoura, Tomate), Molhos, Parmesão, Ovo Cozido e Croutons.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Spaghetti à Bolonhesa</div>{" "}
                      <div className="product-desc">{" "}Picadinho, Molho de Tomate Pelati e Queijo Parmesão.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Costelinha Suína</div>{" "}
                      <div className="product-desc">{" "}Arroz com brócolis, maionese da casa e feijão tropeiro. Opcional: Arroz branco/Barbecue.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Panqueca de Carne c/ Salada</div>{" "}
                      <div className="product-desc">{" "}1 Panqueca de Picadinho ao Molho Vermelho e Parmesão, com Salada Tropical.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.27s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Escondidinho de Carne de Sol</div>{" "}
                      <div className="product-desc">{" "}300G. Acompanha: Arroz Branco.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-peixes">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Peixe à Delícia</div>{" "}
                      <div className="product-desc">{" "}Peixe Empanado Gratinado ao Molho Bechamel, Arroz, Farofa, Batata Frita e Banana Frita.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Costelinha de Tambaqui Assada</div>{" "}
                      <div className="product-desc">{" "}Baião, Vinagrete e Farofa de Banana. Opcional: Arroz Branco e Feijão.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Tambaqui à Moda da Casa</div>{" "}
                      <div className="product-desc">{" "}Filé Assado e Gratinado c/ Vinagrete Cremoso, Arroz c/ Brócolis e Farofa de Banana.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="panel" id="panel-aves">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div className="product-card" style={{ animationDelay: "0.03s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Frango Broaster</div>{" "}
                      <div className="product-desc">{" "}Filé de Frango em Isca Empanado, Purê de Batata e Legumes no Vapor.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.09s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Frango Grelhado</div>{" "}
                      <div className="product-desc">{" "}Filé de Frango Grelhado, Arroz com Brócolis, Batata Frita, Farofa e Vinagrete.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.15s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Frango à Milanesa</div>{" "}
                      <div className="product-desc">{" "}Filé de frango em isca empanado, arroz, feijão e purê de batata.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
                    </div>{" "}
                    <div className="product-card" style={{ animationDelay: "0.21s" }} onClick={() => openModal("restaurante")}>
                      {" "}
                      <div className="product-name">Frango à Pizzaiolo</div>{" "}
                      <div className="product-desc">{" "}Filé gratinado c/ molho Pelati e mussarela, arroz e batata frita.{" "}</div>{" "}
                      <button onClick={(e) => { e.stopPropagation(); openModal("restaurante"); }} className="product-cta">Peça já</button>{" "}
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

                </div>{" "}
                <div className="panel active" id="panel-gel">
                  {" "}
                  <div className="products-grid">
                    {" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.03s" }}
                    onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-badge">Mais pedido</div>{" "}
                      <div className="product-name">Gelato Doe</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Acondicionado em isopor térmico, ele mantém a temperatura ideal por horas – perfeito para levar pra casa e curtir com a família.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-badge">Popular</div>{" "}
                      <div className="product-name">Gelato Quatedo</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Quatro bolas de gelatos fresquinhos, variados e irresistíveis, acomodados no isopor para manter a qualidade e o sabor.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">Gelato Porção Família</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Oito bolas de gelatos fresquinhos, variados e irresistíveis, acomodados no isopor para manter a qualidade e o sabor.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
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
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Ninho com Chocolate
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa branca, brigadeiro Ninho, brigadeiro black e chantininho.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Abacaxi
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa branca, brigadeiro branco, abacaxi em pedaços e creme.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">Cupuaçu</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa branca, brigadeiro black, doce de cupuaçu e chantininho.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Dois Amores
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa de chocolate, brigadeiro Ninho, brigadeiro black e chantininho.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.27s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Floresta Negra
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa de chocolate, chantininho, amarenas e raspas de chocolate.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.33s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Ninho com Morango
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa branca, brigadeiro Ninho, chantininho e geleia de morango.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.39s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Prestigio
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa chocolate, brigadeiro black, coco, ganache e chocolate branco.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
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
                    onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">Açaí Frozen 400ml</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Açaí frozen cremoso, refrescante e cheio de energia, servido no copo de 400ml para matar sua vontade a qualquer hora.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.09s" }}
                    onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">Açaí Frozen 500ml</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Açaí frozen cremoso, refrescante e cheio de energia, servido no copo de 500ml para matar sua vontade a qualquer hora.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.15s" }}
                    onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">Açaí Frozen 700ml</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Açaí frozen cremoso, refrescante e cheio de energia, servido no copo de 700ml para matar sua vontade a qualquer hora.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.21s" }}
                    onClick={() => openModal("gelateria")}
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
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
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
                    onClick={() => openModal("gelateria")}
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
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.75s" }}
                    onClick={() => openModal("gelateria")}
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
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.81s" }}
                    onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">MilkShake Morango</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Morango fresco batido com sorvete artesanal e
                        chantilly{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
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
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-badge">Mais pedido</div>{" "}
                      <div className="product-name">
                        Mini Bolo Chocolate Com Cobertura
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Mini bolo de chocolate com calda de chocolate na parte superior.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.93s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Bolo de Milho
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Bolo macio e úmido, com sabor natural do milho fresco.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "0.99s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-badge">Zero Lactose</div>{" "}
                      <div className="product-name">Bolo Laranja</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Bolo fofinho, com sabor natural de laranja e zero lactose.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.05s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Bolo Ninho com Nutella
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Bolo macio de leite ninho coberto com Nutella cremosa.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.11s" }}
                      onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">
                        Bolo Mesclado
                      </div>{" "}
                      <div className="product-desc">
                        {" "}
                        Massa fofinha mesclada de chocolate e baunilha.{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
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
                    onClick={() => openModal("gelateria")}
                    >
                      {" "}
                      <div className="product-name">Pão Artesanal</div>{" "}
                      <div className="product-desc">
                        {" "}
                        Pão caseiro artesanal grande, assado na hora na
                        gelateria{" "}
                      </div>{" "}
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.17s" }}
                    onClick={() => openModal("gelateria")}
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
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
                        className="product-cta"
                      >
                        Peça já
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="product-card"
                      style={{ animationDelay: "1.23s" }}
                    onClick={() => openModal("gelateria")}
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
                        onClick={(e) => { e.stopPropagation(); openModal("gelateria"); }}
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

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        type={modalType} 
      />
    </div>
  );
}
