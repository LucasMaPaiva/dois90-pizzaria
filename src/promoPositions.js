/**
 * Onde uma seção de promoção pode entrar na página inicial.
 * Compartilhado entre o site público (PromoSections) e o painel (PromosEditor)
 * para que as duas pontas nunca saiam de sincronia.
 */
export const PROMO_POSITIONS = [
  { id: 'apos-inicio', label: 'Depois do Início' },
  { id: 'apos-cardapio', label: 'Depois do Cardápio' },
  { id: 'apos-unidades', label: 'Depois das Unidades' },
  { id: 'apos-galeria', label: 'Depois da Galeria de redes' },
];

/**
 * Tamanhos recomendados, medidos nos dois vídeos que a Dois90 já usa hoje.
 * A seção ocupa a largura toda e a altura sai da proporção do arquivo — então
 * o que muda entre um formato e outro é a altura da faixa na página.
 */
export const PROMO_FORMATS = [
  {
    id: 'faixa-larga',
    label: 'Faixa larga',
    size: '4330 × 1080',
    ratio: '4:1',
    reference: 'igual à do Combo Esfiha',
  },
  {
    id: 'faixa-cinema',
    label: 'Faixa cinema',
    size: '2534 × 1080',
    ratio: '2,35:1',
    reference: 'igual à do Sorteio da Moto',
  },
];
