import React from 'react';
import './modal.css';

const OrderModal = ({ isOpen, onClose, type = 'all' }) => {
  if (!isOpen) return null;

  return (
    <div className="location-modal-overlay" onClick={onClose}>
      <div className="location-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="location-modal-close" onClick={onClose}>&times;</button>
        <h3 className="location-modal-title">Fazer Pedido</h3>
        <p className="location-modal-subtitle">Escolha a unidade desejada:</p>

        <div className="location-modal-options">

          {/* Pizzaria e Restaurante Dois90 Aeroporto — exibido para pizzaria, aeroporto e all */}
          {(type === 'all' || type === 'pizzaria' || type === 'aeroporto') && (
            <a
              href="https://pigz.com.br/dois90pizzaria"
              target="_blank"
              rel="noopener noreferrer"
              className="location-modal-btn"
            >
              Pizzaria e Restaurante Dois90 Aeroporto
            </a>
          )}

          {type === 'restaurante' && (
            <a
              href="https://pigz.com.br/dois90pizzaria"
              target="_blank"
              rel="noopener noreferrer"
              className="location-modal-btn"
            >
              Restaurante Dois90 Aeroporto
            </a>
          )}

          {/* Pizzaria Dois90 Caçari — somente pizzaria e all */}
          {(type === 'all' || type === 'pizzaria') && (
            <a
              href="http://pigz.com.br/dois90pizzaria"
              target="_blank"
              rel="noopener noreferrer"
              className="location-modal-btn"
            >
              Pizzaria Dois90 Caçari
            </a>
          )}

          {/* Gelateria Dois90 Aeroporto — somente gelateria, aeroporto e all */}
          {(type === 'all' || type === 'gelateria' || type === 'aeroporto') && (
            <a
              href="https://pedido.anota.ai/loja/dois90-gelateria-hc-nathana-martins?f=msa&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleASRfENleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae53u6a23vjNEHu0taMef0Pjornjo9WTOHSzCu-s9YVsbcC7Y8GfVTGdeNA_A_aem_vsKThGFO5jvRZA_7Uh4o9g"
              target="_blank"
              rel="noopener noreferrer"
              className="location-modal-btn"
            >
              Gelateria Dois90 Aeroporto
            </a>
          )}

          {/* Gelateria Dois90 Aparecida — somente gelateria e all */}
          {(type === 'all' || type === 'gelateria') && (
            <a
              href="https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-e-cafeteria-dois90-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d"
              target="_blank"
              rel="noopener noreferrer"
              className="location-modal-btn"
            >
              Gelateria Dois90 Aparecida
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

export default OrderModal;
