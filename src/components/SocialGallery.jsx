import React, { useState } from 'react';
import './SocialGallery.css';
import './modal.css';

const SocialGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const galleryImages = [
    '/gallery/acai.png',
    '/gallery/bread.png',
    '/gallery/interior.png',
    '/gallery/lunch.png',
    '/gallery/pasta.jpeg',
    '/gallery/pizza.png'
  ];

  return (
    <section className="social-gallery-section" id="social-gallery">
      <div className="social-card-glass">
        <div className="gallery-side">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="cta-side">
          <div className="social-badge">| SOCIAL</div>
          <h2>Confira nossas</h2>
          <span className="large-text">redes</span>
          
          <button className="social-btn-gold" onClick={() => setModalOpen(true)}>
            Confira nossas redes sociais <span className="arrow-icon">→</span>
          </button>
        </div>

        <div className="avatar-side">
          <img src="/milla celular.png" alt="Redes Sociais Dois90" loading="lazy" />
        </div>
      </div>

      {modalOpen && (
        <div className="location-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="location-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="location-modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            <h3 className="location-modal-title">Nossas Redes Sociais</h3>
            <p className="location-modal-subtitle">Escolha o perfil que deseja visitar:</p>
            
            <div className="social-unit-group">
              <h4 className="unit-name-modal">Pizzaria Dois90</h4>
              <div className="social-links-grid">
                <a 
                  href="https://www.instagram.com/dois90pizzaria/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="location-modal-btn social-btn-insta"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/pizzariadois90/?locale=pt_BR" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="location-modal-btn social-btn-fb"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className="social-unit-group">
              <h4 className="unit-name-modal">Gelateria Dois90</h4>
              <div className="social-links-grid">
                <a 
                  href="https://www.instagram.com/dois90gelateria/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="location-modal-btn social-btn-insta"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/gelateriadois90/?locale=pt_BR" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="location-modal-btn social-btn-fb"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialGallery;
