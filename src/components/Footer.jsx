import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-column branding">
          <img src="/logo.svg" alt="Dois90 Logo" className="footer-logo" />
          <p className="footer-tagline">A melhor pizza e experiência gastronômica da região. Tradição e inovação em cada fatia.</p>
          <div className="social-links">
            {/* Social icons could go here */}
          </div>
        </div>

        <div className="footer-column links">
          <h3>Links Úteis</h3>
          <ul>
            <li><button onClick={() => scrollToSection('panel-pizzaria')}>Pizzaria</button></li>
            <li><button onClick={() => scrollToSection('panel-restaurante')}>Restaurante</button></li>
            <li><button onClick={() => scrollToSection('panel-gelateria')}>Gelateria</button></li>
            <li><button onClick={() => scrollToSection('b_3536911_1_177340533469b404961c771')}>Nossas Unidades</button></li>
            <li><button onClick={() => scrollToSection('b_3536911_1_177341229844636594')}>Promoção</button></li>
          </ul>
        </div>

        <div className="footer-column legal">
          <h3>Jurídico</h3>
          <ul>
            <li><Link to="/termos">Termos de Uso</Link></li>
            <li><Link to="/privacidade">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2026 Dois90. Todos os direitos reservados.</p>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Retornar ao Topo <span className="arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
