import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisitUs from '../components/VisitUs';
import './QuemSomos.css';

export default function QuemSomos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="site" className="quem-somos-page">
      <Navbar />
      
      <div className="quemsomos-container">
        <section className="quemsomos-section">
          <div className="quemsomos-text">
            <h2>Quem Sou <span>Eu</span></h2>
            <p>Eu sou de Roraima, sou do dia 12 de Junho do ano dois mil, sou de Boa Vista, sou a Pizzaria Dois90.</p>
            <p>Um nome singular para uma pizzaria, mas com certeza um nome bem contextualizado com a história de Roraima, pois 2-90 foi a placa do primeiro automóvel táxi de Boa Vista que não era um Jeep.</p>
            <p>Em 1966, o Aero Willys azul, com sua placa 2-90, tornou-se um sucesso, muitas pessoas queriam aproveitar a novidade e dar uma volta pela cidade. Assim, também foi criado o primeiro ponto de táxi de Boa Vista, localizado na esquina onde hoje são as avenidas Getúlio Vargas e Sílvio Botelho, no Centro. O ponto recebeu do então governador Hélio Campos a concessão de uma linha telefônica com o mesmo número: 2-90.</p>
          </div>
          <div className="quemsomos-image no-marking">
            <img src="/carr-aero-willys.png" alt="Aero Willys placa 2-90" />
          </div>
        </section>

        <section className="quemsomos-section reverse">
          <div className="quemsomos-text">
            <h2 className="brand-title">A Marca <span>Dois90</span></h2>
            <p className="subtitle">Tradição que faz parte da história de Boa Vista.</p>
            <p>A Dois90 é uma marca familiar tradicional de Boa Vista, com mais de 20 anos de trajetória e uma história construída com pioneirismo, constância e proximidade com o público.</p>
            <p>Sua origem remonta aos anos de 1999 e 2000, quando o negócio surgiu como Ligue Pizza, trazendo inovações importantes para a cidade, como o serviço de delivery exclusivo e o uso das primeiras caixas de pizza em papelão. Em 2005, a marca passou a se chamar Dois90, nome inspirado na placa do primeiro táxi da cidade — 2-90 —, que também batizava o posto de gasolina onde os sócios trabalhavam.</p>
            <p>Ao longo dos anos, a empresa ampliou sua atuação sem abrir mão da essência que a consolidou: produto de qualidade, atendimento atencioso e uma relação de confiança com as famílias da cidade. Em 2011, a marca deu mais um passo importante ao inaugurar a primeira gelateria de gelato artesanal de Boa Vista, reforçando seu caráter pioneiro e seu compromisso com a experiência do cliente.</p>
            <p>Hoje, a Dois90 reúne em sua operação um mix completo de produtos e serviços, com unidades de rua consolidadas e uma presença marcada pela conveniência, pelo sabor e pelo cuidado em cada detalhe.</p>
            
            <div className="brand-values">
              <div className="value-item">
                <h3>Tradição</h3>
                <p>Uma história familiar construída com consistência, memória afetiva e presença na cidade.</p>
              </div>
              <div className="value-item">
                <h3>Qualidade</h3>
                <p>Matérias-primas selecionadas, cuidado no preparo e compromisso com a entrega.</p>
              </div>
            </div>
          </div>
          <div className="quemsomos-image no-marking">
            <img src="/logo-25-anos-3d.png" alt="Logo Quem Somos Dois90" />
          </div>
        </section>
      </div>

      <VisitUs />

      <Footer />
    </div>
  );
}
