import React from 'react';
import './ComboAeroporto.css';

export default function ComboAeroporto() {
  return (
    <div id="b_3536911_1_177342856039632336" className="gpc-b " style={{ height: "auto", padding: "80px 0", background: "#080808" }}>
      <div className="gpc-b_sobreposicao"></div>
      <div className="centralizar" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
        
        {/* Glow effect (luz de fundo) */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, rgba(199, 154, 82, 0.15) 0%, transparent 65%)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none"
        }}></div>

        <div className="combo-container" style={{ 
          border: "1px solid rgba(199, 154, 82, 0.2)", 
          padding: "20px", 
          borderRadius: "12px", 
          background: "rgba(11, 11, 11, 0.5)",
          backdropFilter: "blur(10px)",
          maxWidth: "1150px",
          width: "95%",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}>
          <div className="combo-flex-container">
            <img 
              src="/esfiha em dobro 02.png" 
              alt="Promoção Esfiha em Dobro" 
              className="combo-image"
            />
            <img 
              src="/esfiha-em-dobro-foto-esfirra.png" 
              alt="Nossas Esfihas" 
              className="combo-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
