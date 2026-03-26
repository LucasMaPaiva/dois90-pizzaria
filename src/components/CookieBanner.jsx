import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dois90_cookie_consent');
    if (!consent) {
      // Small delay to show after initial load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dois90_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-container">
      <div className="cookie-banner-content">
        <p>
          Usamos cookies para personalizar conteúdos e melhorar a sua experiência. 
          Ao continuar navegando, você concorda com a nossa política.
        </p>
        <button onClick={handleAccept} className="cookie-accept-btn">
          Ok, entendi
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
