import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "404 - Página Não Encontrada | Dois90";
  }, []);

  return (
    <div className="not-found-wrapper">
      <Navbar />
      <main className="not-found-content">
        <div className="not-found-container">
          <div className="error-code">404</div>
          <h1 className="error-title">Opa! Essa fatia não está aqui.</h1>
          <p className="error-message">
            A página que você está procurando parece que foi devorada ou nunca existiu. 
            Que tal voltar para o início e escolher algo delicioso?
          </p>
          <Link to="/" className="back-home-btn">
            Voltar para o Início
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
