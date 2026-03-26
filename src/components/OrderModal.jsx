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
          {/* Aeroporto - Pizzaria, Gelateria, Restaurante */}
          {(type === 'all' || type === 'pizzaria' || type === 'gelateria' || type === 'restaurante') && (
            <a 
              href="https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="location-modal-btn"
            >
              Dois90 Aeroporto (Anota AI)
            </a>
          )}

          {/* Caçari - Pizzaria */}
          {(type === 'all' || type === 'pizzaria') && (
            <a 
              href="http://pigz.com.br/dois90pizzaria" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="location-modal-btn"
            >
              Dois90 Caçari (Pigz)
            </a>
          )}

          {/* Aparecida - Gelateria */}
          {(type === 'all' || type === 'gelateria') && (
            <a 
              href="https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-e-cafeteria-dois90-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="location-modal-btn"
            >
              Dois90 Aparecida (iFood)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
