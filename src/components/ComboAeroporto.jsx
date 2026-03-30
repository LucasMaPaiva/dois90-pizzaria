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
          maxWidth: "1150px",
          width: "95%",
          position: "relative",
          zIndex: 1,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}>
          <video 
            src="/site esfiha.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}
