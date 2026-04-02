import { useState } from "react";
import "./modal.css";

const unitsData = {
  aeroporto: {
    name: "Unidade Aeroporto",
    maps: "https://www.google.com/maps/dir//pizzaria+dois90+-+R.+Yey%C3%AA+Coelho,+580A+-+Aeroporto,+Boa+Vista+-+RR,+69310-118",
    order: "https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa",
    whatsappPizzaria: "https://wa.me/559591520290",
    whatsappGelateria: "https://api.whatsapp.com/send?phone=5595991500290",
    hasPizzaria: true,
    hasGelateria: true,
    hasRestaurante: true,
    services: ["DELIVERY", "DRIVE THRU", "ÁREA KIDS"],
    hours: {
      pizzaria: {
        title: "Pizzaria",
        items: [
          { label: "Loja física", time: "17:30 – 23:00" },
          { label: "Delivery", time: "17:30 – 23:00" },
          { label: "Drive", time: "17:30 – 23:00" },
          { label: "Jantar", time: "18:30 – 22:00" }
        ]
      },
      restaurante: {
        title: "Restaurante",
        items: [
          { label: "Seg – Sáb", time: "11:15 – 14:15" },
          { label: "Delivery", time: "11:15 – 14:15" },
          { label: "Drive", time: "11:15 – 14:15" }
        ]
      },
      gelateria: {
        title: "Gelateria",
        items: [
          { label: "Loja física (Seg-Sáb)", time: "11:15 – 23:00" },
          { label: "Loja física (Dom)", time: "12:00 – 23:00" },
          { label: "Delivery (Seg-Sáb)", time: "08:30 – 22:00" },
          { label: "Delivery (Dom)", time: "12:00 – 22:00" }
        ]
      }
    }
  },
  cacari: {
    name: "Unidade Caçari",
    maps: "https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KcXKtcmZCJONMRJLiq0VPBD5&daddr=Av.+Ville+Roy,+2155+-+Terreo+-+Ca%C3%A7ari,+Boa+Vista+-+RR,+69307-725",
    order: "http://pigz.com.br/dois90pizzaria",
    whatsappPizzaria: "https://api.whatsapp.com/send?phone=559536218600",
    hasPizzaria: true,
    hasGelateria: false,
    services: ["DELIVERY", "ÁREA KIDS"],
    hours: {
      pizzaria: {
        title: "Pizzaria",
        items: [
          { label: "Seg – Dom", time: "18:00 – 23:00" },
          { label: "Todos os dias", time: "" }
        ]
      }
    }
  },
  aparecida: {
    name: "Unidade Aparecida",
    maps: "https://www.google.com/maps/dir//Gelatos+dois90,+R.+Jos%C3%A9+Bonif%C3%A1cio,+504+-+Aparecida,+Boa+Vista+-+RR,+69306-275/@2.8190514,-60.6844148,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8d93061c67223ac5:0xf86e983235c87193!2m2!1d-60.6600877!2d2.8374779?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D",
    order: "https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-e-cafeteria-dois90-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d",
    whatsappGelateria: "https://api.whatsapp.com/send?phone=5595981126473",
    hasPizzaria: false,
    hasGelateria: true,
    services: ["DELIVERY", "ÁREA KIDS"],
    hours: {
      gelateria: {
        title: "Gelateria",
        items: [
          { label: "Loja Física", time: "Seg – Dom: 12:15 – 23:15" },
          { label: "Delivery/Retirada", time: "Seg – Dom: 08:30 – 22:00" }
        ]
      }
    }
  }
};

export default function Locations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [hoursData, setHoursData] = useState(null);

  const openModal = (unitKey) => {
    setSelectedUnit(unitsData[unitKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUnit(null);
  };

  const openHoursModal = (unitKey, categoryKey) => {
    const unit = unitsData[unitKey];
    setHoursData(unit.hours[categoryKey]);
    setIsHoursModalOpen(true);
  };

  const closeHoursModal = () => {
    setIsHoursModalOpen(false);
    setHoursData(null);
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
          <div className="c e_texto">
            <p className="services-list">
              {unitsData.aeroporto.services.map((s, i) => (
                <span key={i}><b>{s}</b>{i < unitsData.aeroporto.services.length - 1 ? " • " : ""}</span>
              ))}
            </p>
          </div>
        </div>
        <div id="e_3536911_1_177341095061029346" className="gpc-e e_texto dd dm e_3536911_1_177341095061029346">
          <div className="c e_texto">
            <p className="services-list">
              {unitsData.cacari.services.map((s, i) => (
                <span key={i}><b>{s}</b>{i < unitsData.cacari.services.length - 1 ? " • " : ""}</span>
              ))}
            </p>
          </div>
        </div>
        <div id="e_3536911_1_177341095480096768" className="gpc-e e_texto dd dm e_3536911_1_177341095480096768">
          <div className="c e_texto">
            <p className="services-list">
              {unitsData.aparecida.services.map((s, i) => (
                <span key={i}><b>{s}</b>{i < unitsData.aparecida.services.length - 1 ? " • " : ""}</span>
              ))}
            </p>
          </div>
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

        {/* BOXES - AEROPORTO */}
        {/* ROW 1: Clickable Categories */}
        {/* 1. PIZZARIA */}
        <div id="e_3536911_1_177341043586466135" className="gpc-e e_caixa dd dm e_3536911_1_177341043586466135 clickable" onClick={() => openHoursModal('aeroporto', 'pizzaria')}><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341050297651173" className="gpc-e e_texto dd dm e_3536911_1_177341050297651173 clickable" onClick={() => openHoursModal('aeroporto', 'pizzaria')}>
          <div className="c e_texto"><p><span><b>PIZZARIA</b></span></p></div>
        </div>
        {/* 2. RESTAURANTE */}
        <div id="e_3536911_1_177341056214779187" className="gpc-e e_caixa dd dm e_3536911_1_177341056214779187 clickable" onClick={() => openHoursModal('aeroporto', 'restaurante')}><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341056214731717" className="gpc-e e_texto dd dm e_3536911_1_177341056214731717 clickable" onClick={() => openHoursModal('aeroporto', 'restaurante')}>
          <div className="c e_texto"><p><span><b>RESTAURANTE</b></span></p></div>
        </div>
        {/* 3. GELATERIA */}
        <div id="e_3536911_1_177341058195818301" className="gpc-e e_caixa dd dm e_3536911_1_177341058195818301 clickable" onClick={() => openHoursModal('aeroporto', 'gelateria')}><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341058195840414" className="gpc-e e_texto dd dm e_3536911_1_177341058195840414 clickable" onClick={() => openHoursModal('aeroporto', 'gelateria')}>
          <div className="c e_texto"><p><span><b>GELATERIA</b></span></p></div>
        </div>

        {/* BOXES - CAÇARI */}
        <div id="e_3536911_1_177341095061067093" className="gpc-e e_caixa dd dm e_3536911_1_177341095061067093 clickable" onClick={() => openHoursModal('cacari', 'pizzaria')}><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095061056193" className="gpc-e e_texto dd dm e_3536911_1_177341095061056193 clickable" onClick={() => openHoursModal('cacari', 'pizzaria')}><div className="c e_texto"><p><span><b>PIZZARIA</b></span></p></div></div>

        {/* BOXES - APARECIDA */}
        <div id="e_3536911_1_177341095480062151" className="gpc-e e_caixa dd dm e_3536911_1_177341095480062151 clickable" onClick={() => openHoursModal('aparecida', 'gelateria')}><div className="c borda_igual e_caixa"></div></div>
        <div id="e_3536911_1_177341095480018946" className="gpc-e e_texto dd dm e_3536911_1_177341095480018946 clickable" onClick={() => openHoursModal('aparecida', 'gelateria')}><div className="c e_texto"><p><span><b>GELATERIA</b></span></p></div></div>

        {/* Schedules and Buttons */}
        <div id="e_3536911_1_177341095480012793" className="gpc-e e_texto dd dm e_3536911_1_177341095480012793">
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
      {/* Interactive Order Modal */}
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

              {selectedUnit.hasPizzaria && selectedUnit.whatsappPizzaria && (
                <a href={selectedUnit.whatsappPizzaria} target="_blank" rel="noopener noreferrer" className="location-modal-btn">
                  📱 WhatsApp - Pizzaria
                </a>
              )}

              {selectedUnit.hasGelateria && selectedUnit.whatsappGelateria && (
                <a href={selectedUnit.whatsappGelateria} target="_blank" rel="noopener noreferrer" className="location-modal-btn">
                  🍦 WhatsApp - Gelateria
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Business Hours Modal */}
      {isHoursModalOpen && hoursData && (
        <div className="location-modal-overlay" onClick={closeHoursModal}>
          <div className="location-modal-content hours-modal" onClick={(e) => e.stopPropagation()}>
            <button className="location-modal-close" onClick={closeHoursModal}>&times;</button>
            <h3 className="location-modal-title">{hoursData.title}</h3>
            <p className="location-modal-subtitle">Horários de Funcionamento</p>
            
            <div className="hours-list">
              {hoursData.items.map((item, idx) => (
                <div key={idx} className="hours-row">
                  <span className="hours-label">{item.label}</span>
                  <span className="hours-time">{item.time}</span>
                </div>
              ))}
            </div>
            
            <button className="location-modal-btn hours-close-btn" onClick={closeHoursModal}>
              FECHAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
