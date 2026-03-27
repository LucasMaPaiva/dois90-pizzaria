import React from 'react';
import './PromoImage.css';

const PromoImage = () => {
  return (
    <section id="b_3536911_1_177341229844636594" className="promo-section">
      <video 
        src="/site sorteio moto.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="promo-video"
      />
      <div className="promo-overlay"></div>
      <div className="promo-content">
        {/* Content could go here if needed, but keeping it empty for just the photo */}
      </div>
    </section>
  );
};

export default PromoImage;
