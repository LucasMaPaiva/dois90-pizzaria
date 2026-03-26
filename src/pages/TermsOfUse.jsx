import React, { useEffect } from 'react';
import './LegalPages.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper">
      <Navbar />
      <div className="legal-content-container">
        <h1>Termos de Uso</h1>
        <p className="last-updated">Última atualização: Março de 2026</p>
        
        <section>
          <h2>1. Aceitação dos Termos</h2>
          <p>Ao acessar e utilizar o site da Dois90, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.</p>
        </section>

        <section>
          <h2>2. Uso do Site</h2>
          <p>Este site é destinado à consulta de cardápio, informações sobre nossas unidades e participação no programa de fidelidade. É proibido o uso indevido do conteúdo, incluindo reprodução não autorizada de imagens e textos.</p>
        </section>

        <section>
          <h2>3. Pedidos e Pagamentos</h2>
          <p>Os preços e a disponibilidade dos produtos podem ser alterados sem aviso prévio. Os pedidos realizados através de links de terceiros (como WhatsApp ou plataformas de delivery) estão sujeitos aos termos e condições dessas respectivas plataformas.</p>
        </section>

        <section>
          <h2>4. Propriedade Intelectual</h2>
          <p>Todo o conteúdo deste site, incluindo logotipos, textos, ícones e imagens, é de propriedade exclusiva da Dois90 ou de seus licenciadores, protegidos pelas leis de direitos autorais.</p>
        </section>

        <section>
          <h2>5. Limitação de Responsabilidade</h2>
          <p>A Dois90 não se responsabiliza por danos diretos ou indiretos decorrentes do uso do site ou da impossibilidade de uso, incluindo falhas técnicas ou interrupções de serviço.</p>
        </section>

        <section>
          <h2>6. Foro e Legislação Aplicável</h2>
          <p>Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca da sede da empresa para dirimir quaisquer controvérsias.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
