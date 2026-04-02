import { useState } from "react";
import "./modal.css";
import "./Locations.css";

const unitsData = [
  {
    id: "aeroporto",
    name: "Aeroporto",
    address: "R. Yeyê Coelho, 580A - Aeroporto",
    maps: "https://www.google.com/maps/dir//pizzaria+dois90+-+R.+Yey%C3%AA+Coelho,+580A+-+Aeroporto,+Boa+Vista+-+RR,+69310-118",
    order: "https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa",
    whatsapp: "https://wa.me/559591520290",
    image: "/units/aeroporto-pizzaria.jpeg",
    amenities: [
      { id: "delivery", label: "Delivery", icon: "🚚" },
      { id: "drive", label: "Drive-thru", icon: "🚗" },
      { id: "kids", label: "Área Kids", icon: "🧒" }
    ],
    sectors: [
      {
        id: "pizzaria",
        name: "Pizzaria",
        hours: [
          { label: "Loja física", time: "17:30 - 23h" },
          { label: "Delivery", time: "17:30 - 23h" },
          { label: "Drive", time: "17:30 - 23h" },
          { label: "Jantar", time: "18:30 - 22h" }
        ]
      },
      {
        id: "restaurante",
        name: "Restaurante",
        hours: [
          { label: "Segunda a sábado", time: "11:15 - 14:15" },
          { label: "Status", time: "Possui Delivery e Drive" }
        ]
      },
      {
        id: "gelateria",
        name: "Gelateria",
        hours: [
          { label: "Delivery Seg-Sáb", time: "08:30 - 22h" },
          { label: "Delivery Dom", time: "12:00 - 22h" },
          { label: "Loja física Seg-Sáb", time: "11:15 - 23h" },
          { label: "Loja física Dom", time: "12:00 - 23h" }
        ]
      }
    ]
  },
  {
    id: "cacari",
    name: "Caçari",
    address: "Av. Ville Roy, 2185 - Caçari",
    maps: "https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KcXKtcmZCJONMRJLiq0VPBD5&daddr=Av.+Ville+Roy,+2155+-+Terreo+-+Ca%C3%A7ari,+Boa+Vista+-+RR,+69307-725",
    order: "http://pigz.com.br/dois90pizzaria",
    whatsapp: "https://api.whatsapp.com/send?phone=559536218600",
    image: "/units/cacari.jpeg",
    amenities: [
      { id: "delivery", label: "Delivery", icon: "🚚" },
      { id: "kids", label: "Área Kids", icon: "🧒" }
    ],
    sectors: [
      {
        id: "pizzaria",
        name: "Pizzaria",
        hours: [
          { label: "Todos os dias", time: "18:00 - 23:00" }
        ]
      }
    ]
  },
  {
    id: "aparecida",
    name: "Aparecida",
    address: "R. José Bonifácio, 504 - Aparecida",
    maps: "https://www.google.com/maps/dir//Gelatos+dois90,+R.+Jos%C3%A9+Bonif%C3%A1cio,+504+-+Aparecida,+Boa+Vista+-+RR,+69306-275",
    order: "https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-e-cafeteria-dois90-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d",
    whatsapp: "https://api.whatsapp.com/send?phone=5595981126473",
    image: "/units/aparecida.jpeg",
    amenities: [
      { id: "delivery", label: "Delivery", icon: "🚚" },
      { id: "kids", label: "Área Kids", icon: "🧒" }
    ],
    sectors: [
      {
        id: "gelateria",
        name: "Gelateria",
        hours: [
          { label: "Delivery / Retirada", time: "Seg-Dom 08:30 - 22:00" },
          { label: "Loja física", time: "Seg-Dom 12:15 - 23:15" }
        ]
      }
    ]
  }
];

export default function Locations() {
  const [selectedSector, setSelectedSector] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);

  const openHoursModal = (unit, sector) => {
    setActiveUnit(unit);
    setSelectedSector(sector);
  };

  const closeHoursModal = () => {
    setSelectedSector(null);
    setActiveUnit(null);
  };

  return (
    <section className="locations-section" id="visit-us">
      <div className="locations-container">
        <div className="locations-header">
          <span className="label">NOSSAS UNIDADES</span>
          <h2><span>Perto de onde </span><i>você está</i></h2>
        </div>

        <div className="locations-grid">
          {unitsData.map((unit) => (
            <div key={unit.id} className="location-card">
              <div className="location-amenities">
                {unit.amenities.map((amenity) => (
                  <span key={amenity.id} className="amenity-badge">
                    {amenity.icon} {amenity.label}
                  </span>
                ))}
              </div>

              <div className="location-photo">
                {unit.image ? (
                  <img src={unit.image} alt={`Fachada ${unit.name}`} loading="lazy" />
                ) : (
                  <div className="location-photo-placeholder">
                    <i>📷 Espaço para foto</i>
                  </div>
                )}
              </div>

              <h3>{unit.name}</h3>
              <p className="location-address">{unit.address}</p>

              <div className="location-sectors">
                {unit.sectors.map((sector) => (
                  <button 
                    key={sector.id} 
                    className="sector-link"
                    onClick={() => openHoursModal(unit, sector)}
                  >
                    <b>{sector.name}</b> <span>🕒 Ver horários</span>
                  </button>
                ))}
              </div>

              <div className="location-actions">
                <a href={unit.order} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  FAZER PEDIDO
                </a>
                <a href={unit.maps} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  COMO CHEGAR
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hours Modal */}
      {selectedSector && activeUnit && (
        <div className="location-modal-overlay" onClick={closeHoursModal}>
          <div className="location-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="location-modal-close" onClick={closeHoursModal}>&times;</button>
            <h3 className="location-modal-title">{selectedSector.name}</h3>
            <p className="location-modal-subtitle">Unidade {activeUnit.name}</p>

            <div className="hours-list">
              {selectedSector.hours.map((item, idx) => (
                <div key={idx} className="hour-item">
                  <span className="hour-label">{item.label}</span>
                  <span className="hour-time">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="location-modal-options" style={{ marginTop: '30px' }}>
              <a href={activeUnit.whatsapp} target="_blank" rel="noopener noreferrer" className="location-modal-btn">
                📱 Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
