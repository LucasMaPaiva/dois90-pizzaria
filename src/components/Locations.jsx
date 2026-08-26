import { useState } from 'react';
import './modal.css';
import './Locations.css';
import OrderModal from './OrderModal';
import { useContent } from '../context/ContentContext';

export default function Locations() {
  const { content } = useContent();
  const locations = content?.locations;
  const units = locations?.units ?? [];

  const [selectedSector, setSelectedSector] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const openHoursModal = (unit, sector) => {
    setActiveUnit(unit);
    setSelectedSector(sector);
  };

  const closeHoursModal = () => {
    setSelectedSector(null);
    setActiveUnit(null);
  };

  if (!locations) return null;

  return (
    <section className="locations-section" id="visit-us">
      <div className="locations-container">
        <div className="locations-header">
          <span className="label">{locations.label}</span>
          <h2><span>{locations.title} </span><i>{locations.titleHighlight}</i></h2>
        </div>

        <div className="locations-grid">
          {units.map((unit) => (
            <div key={unit.id} className="location-card">
              <div className="location-amenities">
                {(unit.amenities ?? []).map((amenity) => (
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
                {(unit.sectors ?? []).map((sector) => (
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
                {unit.id === 'aeroporto' ? (
                  <button className="btn-primary" onClick={() => setOrderModalOpen(true)}>
                    FAZER PEDIDO
                  </button>
                ) : (
                  <a href={unit.order} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    FAZER PEDIDO
                  </a>
                )}
                <a href={unit.maps} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  COMO CHEGAR
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        type="aeroporto"
      />

      {/* Hours Modal */}
      {selectedSector && activeUnit && (
        <div className="location-modal-overlay" onClick={closeHoursModal}>
          <div className="location-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="location-modal-close" onClick={closeHoursModal}>&times;</button>
            <h3 className="location-modal-title">{selectedSector.name}</h3>
            <p className="location-modal-subtitle">Unidade {activeUnit.name}</p>

            <div className="hours-list">
              {(selectedSector.hours ?? []).map((item, idx) => (
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
