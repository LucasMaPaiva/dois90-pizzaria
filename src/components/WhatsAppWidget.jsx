import React, { useState, useEffect } from 'react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const [step, setStep] = useState('closed'); // 'closed', 'chat', 'units'
  const [message, setMessage] = useState('');

  const handleOpenChat = () => setStep('chat');
  const handleClose = () => {
    setStep('closed');
    setMessage('');
  };

  const handleSendToUnits = (e) => {
    e.preventDefault();
    setStep('units');
  };

  const units = [
    {
      name: 'Pizzaria - Bairro Aeroporto',
      url: 'https://wa.me/559591520290'
    },
    {
      name: 'Pizzaria - Bairro Caçari',
      url: 'https://api.whatsapp.com/send?phone=559536218600'
    },
    {
      name: 'Gelateria - Bairro Aparecida (Unid. 1)',
      url: 'https://api.whatsapp.com/send?phone=5595991500290'
    },
    {
      name: 'Gelateria - Bairro Aparecida (Unid. 2)',
      url: 'https://api.whatsapp.com/send?phone=5595981126473'
    }
  ];

  const handleFinalSend = (baseUrl) => {
    const finalMsg = message.trim() || 'oii gostaria de fazer um pedido';
    const encodedMsg = encodeURIComponent(finalMsg);
    const finalUrl = baseUrl.includes('?')
      ? `${baseUrl}&text=${encodedMsg}`
      : `${baseUrl}?text=${encodedMsg}`;
    window.open(finalUrl, '_blank');
    handleClose();
  };

  return (
    <div className="whatsapp-widget-root">
      {/* Floating Button */}
      {step === 'closed' && (
        <button className="wa-float-btn pulsing" onClick={handleOpenChat}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </button>
      )}

      {/* Chat Modal */}
      {step === 'chat' && (
        <div className="wa-modal wa-chat-modal">
          <div className="wa-header">
            <div className="wa-info">
              <div className="wa-avatar">
                <img src="/milla-novo.png" alt="Milla" />
                <span className="wa-dot-online"></span>
              </div>
              <div className="wa-user-details">
                <strong>Milla</strong>
                <span className="wa-status">Online</span>
              </div>
            </div>
            <button className="wa-close" onClick={handleClose}>&times;</button>
          </div>
          <div className="wa-body">
            <div className="wa-welcome-msg">
              <p>Oieee...<br />eu sou a Milla, a atendente virtual da Dois90</p>
            </div>
            <p className="wa-instruction">Em que podemos ajudar hoje? Digite sua mensagem abaixo:</p>
            <form onSubmit={handleSendToUnits}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva sua mensagem aqui..."
              />
              <button type="submit" className="wa-send-btn">Enviar mensagem</button>
            </form>
          </div>
        </div>
      )}

      {/* Unit Selection Modal */}
      {step === 'units' && (
        <div className="wa-modal wa-units-modal">
          <div className="wa-header">
            <strong>Escolha uma unidade:</strong>
            <button className="wa-close" onClick={handleClose}>&times;</button>
          </div>
          <div className="wa-body">
            <p>Para qual unidade você deseja enviar esta mensagem?</p>
            <div className="wa-units-list">
              {units.map((unit, idx) => (
                <button
                  key={idx}
                  className="wa-unit-option"
                  onClick={() => handleFinalSend(unit.url)}
                >
                  {unit.name}
                </button>
              ))}
            </div>
            <button className="wa-back-btn" onClick={() => setStep('chat')}>Voltar ao chat</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
