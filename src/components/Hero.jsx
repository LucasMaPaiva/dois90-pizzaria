import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import OrderModal from './OrderModal';
import { useContent } from '../context/ContentContext';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { content } = useContent();
  const hero = content?.hero ?? {};

  return (
    <>
      <div id="b_3536911_1_177340533469b404961c762" className="gpc-b hero-section">
        <div className="gpc-b_sobreposicao"></div>
        <div className="centralizar">
          <div id="e_3536911_1_177340668315165072" className="gpc-e e_texto dd dm e_3536911_1_177340668315165072">
            <div className="c e_texto"><p><span>{hero.tagline}</span></p></div>
          </div>

          <div id="e_3536911_1_177340671892140103" className="gpc-e e_linha_horizontal esconder_mobile dd e_3536911_1_177340671892140103">
            <div className="c e_linha_horizontal"></div>
          </div>

          <div id="e_3536911_1_177340533469b404961c77c590931320" className="gpc-e e_titulo dd dm e_3536911_1_177340533469b404961c77c590931320">
            <div className="c e_titulo"><h1><span>{hero.title}</span></h1></div>
          </div>

          <div id="e_3536911_1_177340533469b404961ca47776266929" className="gpc-e e_texto dd dm e_3536911_1_177340533469b404961ca47776266929">
            <div className="c e_texto"><p><span>{hero.subtitle}</span></p></div>
          </div>

          <div id="e_3536911_1_177340701913868514" className="gpc-e e_botao dd dm e_3536911_1_177340701913868514">
            <button className="c borda_igual e_botao link_externo" onClick={() => setIsModalOpen(true)}>
              {hero.ctaPrimary}
            </button>
          </div>

          <div id="e_3536911_1_177340705079196095" className="gpc-e e_botao dd dm e_3536911_1_177340705079196095">
            <Link to="/quem-somos" className="c borda_igual e_botao borda_botao link_interno">
              {hero.ctaSecondary}
            </Link>
          </div>

          <div id="e_3536911_1_177340716891441744" className="gpc-e e_texto dd dm e_3536911_1_177340716891441744">
            <div className="c e_texto"><p><b><span>{hero.scrollText}</span><span> </span><span>⭣</span></b></p></div>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="all"
      />
    </>
  );
}
