import React, { useEffect } from 'react';
import './LegalPages.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper">
      <Navbar />
      <div className="legal-content-container">
        <h1>Política de Privacidade</h1>
        <p className="last-updated">Última atualização: Março de 2026</p>
        
        <section>
          <h2>1. Introdução</h2>
          <p>A Dois90 valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.</p>
        </section>

        <section>
          <h2>2. Informações que Coletamos</h2>
          <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone ao realizar pedidos ou se cadastrar em nosso programa de fidelidade. Também coletamos dados técnicos automaticamente, como endereço IP e cookies de navegação.</p>
        </section>

        <section>
          <h2>3. Uso das Informações</h2>
          <p>Suas informações são utilizadas para processar pedidos, melhorar sua experiência no site, enviar comunicações de marketing (quando autorizado) e garantir a segurança de nossa plataforma.</p>
        </section>

        <section>
          <h2>4. Compartilhamento de Dados</h2>
          <p>Não vendemos seus dados pessoais. Compartilhamos informações apenas com parceiros essenciais para a operação (como meios de pagamento e serviços de entrega) ou por obrigação legal.</p>
        </section>

        <section>
          <h2>5. Seus Direitos</h2>
          <p>Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para isso, entre em contato conosco através de nossos canais oficiais.</p>
        </section>

        <section>
          <h2>6. Alterações nesta Política</h2>
          <p>Reservamos o direito de atualizar esta política periodicamente. Recomendamos a revisão regular desta página.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
