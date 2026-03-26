import { useState } from "react";
import "./modal.css";

const unitsData = {
  aeroporto: {
    name: "Bairro Aeroporto",
    maps: "https://www.google.com/maps/dir//pizzaria+dois90+-+R.+Yey%C3%AA+Coelho,+580A+-+Aeroporto,+Boa+Vista+-+RR,+69310-118",
    order: "https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa",
    whatsappPizzaria: "https://wa.me/559591520290",
    whatsappGelateria: "https://api.whatsapp.com/send?phone=5595991500290",
    hasPizzaria: true,
    hasGelateria: true,
  },
  cacari: {
    name: "Bairro Caçari",
    maps: "https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KcXKtcmZCJONMRJLiq0VPBD5&daddr=Av.+Ville+Roy,+2155+-+Terreo+-+Ca%C3%A7ari,+Boa+Vista+-+RR,+69307-725",
    order: "http://pigz.com.br/dois90pizzaria",
    whatsappPizzaria: "https://api.whatsapp.com/send?phone=559536218600",
    hasPizzaria: true,
    hasGelateria: false,
  },
  aparecida: {
    name: "Bairro Aparecida",
    maps: "https://www.google.com/maps/dir//Gelatos+dois90,+R.+Jos%C3%A9+Bonif%C3%A1cio,+504+-+Aparecida,+Boa+Vista+-+RR,+69306-275/@2.8190514,-60.6844148,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8d93061c67223ac5:0xf86e983235c87193!2m2!1d-60.6600877!2d2.8374779?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D",
    order: "https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-e-cafeteria-dois90-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d",
    whatsappGelateria: "https://api.whatsapp.com/send?phone=5595981126473",
    hasPizzaria: false,
    hasGelateria: true,
  }
};

export default function Locations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const openModal = (unitKey) => {
    setSelectedUnit(unitsData[unitKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUnit(null);
  };

  return (
    <div id="b_3536911_1_177340533469b404961c771" className="gpc-b ">
      <div className="gpc-b_sobreposicao"></div>
      <div className="centralizar">
        <div id="e_3536911_1_177340974125924202" className="gpc-e e_texto dd dm e_3536911_1_177340974125924202">
          <div className="c e_texto"><p><span>NOSSAS UNIDADES</span></p></div>
        </div>
        <div id="e_3536911_1_177340974125989826" className="gpc-e e_linha_horizontal dd dm e_3536911_1_177340974125989826">
          <div className="c e_linha_horizontal"></div>
        </div>
        <div id="e_3536911_1_177340974125950049" className="gpc-e e_titulo dd dm e_3536911_1_177340974125950049">
          <div className="c e_titulo"><h2><b><span>Perto de onde </span><i>você está</i></b></h2></div>
        </div>

        {/* Header Labels */}
        <div id="e_3536911_1_177341010683794619" className="gpc-e e_caixa dd dm e_3536911_1_177341010683794619"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095061016102" className="gpc-e e_caixa dd dm e_3536911_1_177341095061016102"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095480074944" className="gpc-e e_caixa dd dm e_3536911_1_177341095480074944"><div className="c borda_igual e_caixa"></div></div>

        <div id="e_3536911_1_177341016009603334" className="gpc-e e_texto dd dm e_3536911_1_177341016009603334">
          <div className="c e_texto"><p><span><b>PIZZARIA, RESTAURANTE, GELATERIA DRIVE THRU</b></span></p></div>
        </div>
        <div id="e_3536911_1_177341095061029346" className="gpc-e e_texto dd dm e_3536911_1_177341095061029346">
          <div className="c e_texto"><p><span>PIZZARIA</span></p></div>
        </div>
        <div id="e_3536911_1_177341095480096768" className="gpc-e e_texto dd dm e_3536911_1_177341095480096768">
          <div className="c e_texto"><p><span>GELATERIA</span></p></div>
        </div>

        {/* Units Titles */}
        <div id="e_3536911_1_177341025226940983" className="gpc-e e_titulo dd dm e_3536911_1_177341025226940983">
          <div className="c e_titulo"><h2><span><b>Aeroporto</b></span></h2></div>
        </div>
        <div id="e_3536911_1_177341095061007308" className="gpc-e e_titulo dd dm e_3536911_1_177341095061007308">
          <div className="c e_titulo"><h2><span>Caçari</span></h2></div>
        </div>
        <div id="e_3536911_1_177341095480059182" className="gpc-e e_titulo dd dm e_3536911_1_177341095480059182">
          <div className="c e_titulo"><h2><span>Aparecida</span></h2></div>
        </div>

        {/* Addresses */}
        <div id="e_3536911_1_177341027777389731" className="gpc-e e_texto dd dm e_3536911_1_177341027777389731">
          <div className="c e_texto"><p><span>R. Yeyê Coelho, 580A - Aeroporto</span></p></div>
        </div>
        <div id="e_3536911_1_177341095061053753" className="gpc-e e_texto dd dm e_3536911_1_177341095061053753">
          <div className="c e_texto"><p><span>Av. Ville Roy, 2185 - Caçari</span></p></div>
        </div>
        <div id="e_3536911_1_177341095480039015" className="gpc-e e_texto dd dm e_3536911_1_177341095480039015">
          <div className="c e_texto"><p><span>R. José Bonifácio, 504 - Aparecida</span></p></div>
        </div>

        {/* Lines */}
        <div id="e_3536911_1_177341029524416076" className="gpc-e e_linha_horizontal dd dm e_3536911_1_177341029524416076"><div className="c e_linha_horizontal"></div></div>
        <div id="e_3536911_1_177341095480011039" className="gpc-e e_linha_horizontal dd dm e_3536911_1_177341095480011039"><div className="c e_linha_horizontal"></div></div>
        <div id="e_3536911_1_177341095061059651" className="gpc-e e_linha_horizontal dd dm e_3536911_1_177341095061059651"><div className="c e_linha_horizontal"></div></div>

        {/* BOXES - AEROPORTO (6 BLOCKS GRID 3x2) */}
        {/* ROW 1 */}
        {/* 1. PIZZARIA (Pos 1: R1, C1) */}
        <div id="e_3536911_1_177341043586466135" className="gpc-e e_caixa dd dm e_3536911_1_177341043586466135"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341050297651173" className="gpc-e e_texto dd dm e_3536911_1_177341050297651173">
          <div className="c e_texto"><p><span><b>PIZZARIA</b></span></p></div>
        </div>
        {/* 2. RESTAURANTE (Pos 2: R1, C2) */}
        <div id="e_3536911_1_177341056214779187" className="gpc-e e_caixa dd dm e_3536911_1_177341056214779187"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341056214731717" className="gpc-e e_texto dd dm e_3536911_1_177341056214731717">
          <div className="c e_texto"><p><span><b>RESTAURANTE</b></span></p></div>
        </div>
        {/* 3. GELATERIA (Pos 3: R1, C3) */}
        <div id="e_3536911_1_177341058195818301" className="gpc-e e_caixa dd dm e_3536911_1_177341058195818301"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341058195840414" className="gpc-e e_texto dd dm e_3536911_1_177341058195840414">
          <div className="c e_texto"><p><span><b>GELATERIA</b></span></p></div>
        </div>

        {/* ROW 2 */}
        {/* 4. DELIVERY (Pos 4: R2, C1) */}
        <div id="e_3536911_1_177341060547829255" className="gpc-e e_caixa dd dm e_3536911_1_177341060547829255"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341060547893978" className="gpc-e e_texto dd dm e_3536911_1_177341060547893978">
          <div className="c e_texto"><p><span><b>DELIVERY</b></span></p></div>
        </div>
        {/* 5. DRIVE THRU (Pos 5: R2, C2) */}
        <div id="e_3536911_1_177341060547862785" className="gpc-e e_caixa dd dm e_3536911_1_177341060547862785"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341060547817371" className="gpc-e e_texto dd dm e_3536911_1_177341060547817371">
          <div className="c e_texto"><p><span><b>DRIVE THRU</b></span></p></div>
        </div>
        {/* 6. AREA KIDS (Pos 6: R2, C3) */}
        <div id="e_aeroporto_6_caixa" className="gpc-e e_caixa dd dm e_aeroporto_6_caixa"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_aeroporto_6_texto" className="gpc-e e_texto dd dm e_aeroporto_6_texto">
          <div className="c e_texto"><p><span><b>AREA KIDS</b></span></p></div>
        </div>

        {/* BOXES - CAÇARI */}
        <div id="e_3536911_1_177341095061067093" className="gpc-e e_caixa dd dm e_3536911_1_177341095061067093"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095061056193" className="gpc-e e_texto dd dm e_3536911_1_177341095061056193"><div className="c e_texto"><p><span><b>PIZZARIA</b></span></p></div></div>
        <div id="e_3536911_1_177341095061068863" className="gpc-e e_caixa dd dm e_3536911_1_177341095061068863"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095061081284" className="gpc-e e_texto dd dm e_3536911_1_177341095061081284"><div className="c e_texto"><p><span>ESTACIONAMENTO</span></p></div></div>
        <div id="e_3536911_1_177341095061081912" className="gpc-e e_caixa dd dm e_3536911_1_177341095061081912"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095061010865" className="gpc-e e_texto dd dm e_3536911_1_177341095061010865"><div className="c e_texto"><p><span><b>DELIVERY</b></span></p></div></div>

        <div id="e_cacari_4_caixa" className="gpc-e e_caixa dd dm e_cacari_4_caixa"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_cacari_4_texto" className="gpc-e e_texto dd dm e_cacari_4_texto"><div className="c e_texto"><p><span><b>ÁREA KIDS</b></span></p></div></div>

        {/* BOXES - APARECIDA */}
        <div id="e_3536911_1_177341095480062151" className="gpc-e e_caixa dd dm e_3536911_1_177341095480062151"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095480018946" className="gpc-e e_texto dd dm e_3536911_1_177341095480018946"><div className="c e_texto"><p><span><b>GELATERIA</b></span></p></div></div>
        <div id="e_3536911_1_177341095480046249" className="gpc-e e_caixa dd dm e_3536911_1_177341095480046249"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095480008896" className="gpc-e e_texto dd dm e_3536911_1_177341095480008896"><div className="c e_texto"><p><span>ÁREA KIDS</span></p></div></div>
        <div id="e_3536911_1_177341095480066631" className="gpc-e e_caixa dd dm e_3536911_1_177341095480066631"><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095480007674" className="gpc-e e_texto dd dm e_3536911_1_177341095480007674"><div className="c e_texto"><p><span>DELIVERY</span></p></div></div>

        {/* Schedules and Buttons */}
        <div id="e_3536911_1_177341063804326646" className="gpc-e e_texto dd dm e_3536911_1_177341063804326646"><div className="c e_texto"><p><span>Todos os dias</span></p></div></div>
        <div id="e_3536911_1_177341095480072858" className="gpc-e e_texto dd dm e_3536911_1_177341095480072858"><div className="c e_texto"><p><span>Todos os dias</span></p></div></div>
        <div id="e_3536911_1_177341095061016397" className="gpc-e e_texto dd dm e_3536911_1_177341095061016397">
          <div className="c e_texto"><p><span>Seg – Sex:</span><span> a partir das 17h45<br /></span><span>Sáb – Dom:</span><span> horário especial<br />Entrega: 30–40 min</span></p></div>
        </div>
        <div id="e_3536911_1_177341066573293364" className="gpc-e e_texto dd dm e_3536911_1_177341066573293364">
          <div className="c e_texto"><p><span>Gelateria: 11h30 – 23h<br />Restaurante: Seg – Sab: 11:15 – 14:00<br />Pizzaria: 18h – 23h</span></p></div>
        </div>
        <div id="e_3536911_1_177341095480012793" className="gpc-e e_texto dd dm e_3536911_1_177341095480012793">
          <div className="c e_texto"><p><span>11h30 – 23h00<br />Entrega: 40 min<br /></span></p></div>
        </div>

        <div id="e_3536911_1_177341072861382619" className="gpc-e e_botao dd dm e_3536911_1_177341072861382619">
          <button className="c borda_igual e_botao link_externo" onClick={() => openModal('aeroporto')}>FAZER PEDIDO →</button>
        </div>
        <div id="e_3536911_1_177341095061069039" className="gpc-e e_botao dd dm e_3536911_1_177341095061069039">
          <button className="c borda_igual e_botao link_externo" onClick={() => openModal('cacari')}>FAZER PEDIDO →</button>
        </div>
        <div id="e_3536911_1_177341095480063088" className="gpc-e e_botao dd dm e_3536911_1_177341095480063088">
          <button className="c borda_igual e_botao link_externo" onClick={() => openModal('aparecida')}>FAZER PEDIDO →</button>
        </div>
      </div>
      {/* Interactive Modal */}
      {isModalOpen && selectedUnit && (
        <div className="location-modal-overlay" onClick={closeModal}>
          <div className="location-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="location-modal-close" onClick={closeModal}>&times;</button>
            <h3 className="location-modal-title">{selectedUnit.name}</h3>
            <p className="location-modal-subtitle">Escolha como deseja prosseguir:</p>

            <div className="location-modal-options">
              <a href={selectedUnit.maps} target="_blank" rel="noopener noreferrer" className="location-modal-btn">
                📍 Como Chegar
              </a>
              <a href={selectedUnit.order} target="_blank" rel="noopener noreferrer" className="location-modal-btn">
                🍕 Fazer Pedido Online
              </a>

              {selectedUnit.hasPizzaria && (
                <a href={selectedUnit.whatsappPizzaria} target="_blank" rel="noopener noreferrer" className="location-modal-btn">
                  📱 WhatsApp - Pizzaria
                </a>
              )}

              {selectedUnit.hasGelateria && (
                <a href={selectedUnit.whatsappGelateria} target="_blank" rel="noopener noreferrer" className="location-modal-btn">
                  🍦 WhatsApp - Gelateria
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
