import './PromoSections.css';
import { useContent } from '../context/ContentContext';

/**
 * Renderiza as seções de promoção de uma posição da página.
 *
 * Um modelo só: largura cheia, altura saindo da proporção do arquivo. Vídeo
 * toca em loop e sem som (nunca com som — o visitante não pediu áudio).
 */
export default function PromoSections({ position }) {
  const { content } = useContent();
  const sections = (content?.promos?.sections ?? []).filter(
    (promo) => promo.enabled && promo.media && promo.position === position
  );

  if (!sections.length) return null;

  return (
    <>
      {sections.map((promo) => {
        const media =
          promo.type === 'video' ? (
            <video
              src={promo.media}
              autoPlay
              loop
              muted
              playsInline
              className="promo-band-media"
            />
          ) : (
            <img
              src={promo.media}
              alt={promo.name || 'Promoção'}
              // Nao usar loading="lazy" aqui: antes de carregar, a faixa tem
              // altura 0 (width 100% / height auto sem proporcao conhecida), e
              // o Chrome entao nunca a considera perto da viewport -- a imagem
              // nunca carrega, nunca ganha altura, e o impasse se mantem.
              // Sao poucas faixas e elas sao conteudo destacado; eager e o certo.
              decoding="async"
              className="promo-band-media"
            />
          );

        return (
          <section className="promo-band" key={promo.id}>
            {promo.link ? (
              <a href={promo.link} target="_blank" rel="noopener noreferrer">
                {media}
              </a>
            ) : (
              media
            )}
          </section>
        );
      })}
    </>
  );
}
