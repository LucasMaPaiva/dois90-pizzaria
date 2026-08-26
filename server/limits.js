/**
 * Limites do conteudo editavel pelo painel.
 *
 * Os valores sao ancorados no conteudo real de hoje, com folga de ~1,5 a 2x,
 * para impedir que um texto gigante ou uma lista sem fim desalinhe o layout do
 * site. O comentario ao lado de cada limite e o maior valor em uso hoje.
 *
 * Este arquivo e a fonte unica: o painel busca esses numeros em GET /api/limits
 * em vez de repetir as constantes no frontend.
 */

export const LIMITS = {
  text: {
    // Cardapio
    menuHeading: 60,
    menuTitle: 60,
    menuTitleHighlight: 40,
    menuSubtitle: 200, // hoje: 105
    categoryLabel: 40, // hoje: 25
    subcategoryLabel: 40, // hoje: 22
    itemName: 60, // hoje: 33
    itemDesc: 200, // hoje: 128
    itemBadge: 24, // hoje: 12

    // Inicio
    heroTagline: 60, // hoje: 31
    heroTitle: 60, // hoje: 28
    heroSubtitle: 220, // hoje: 136
    heroCta: 30,
    heroScrollText: 40,

    // Unidades
    locationsLabel: 60,
    locationsTitle: 60,
    locationsTitleHighlight: 40,
    unitName: 30, // hoje: 9
    unitAddress: 80, // hoje: 34
    hourLabel: 40, // hoje: 19
    hourTime: 40, // hoje: 23

    // Promocoes
    promoName: 40,

    // Links: o do Google Maps do Cacari tem 185 caracteres
    url: 500,
  },

  count: {
    itemsPerSubcategory: 30, // hoje: 10 (Esfihas)
    hoursPerSector: 12, // hoje: 4
    promoSections: 8,
  },
};

const T = LIMITS.text;
const C = LIMITS.count;

function checkText(errors, where, value, max) {
  if (value === undefined || value === null || value === '') return;
  if (typeof value !== 'string') {
    errors.push(`${where}: deve ser texto.`);
    return;
  }
  if (value.length > max) {
    errors.push(`${where}: passou do limite de ${max} caracteres (tem ${value.length}).`);
  }
}

function checkCount(errors, where, list, max) {
  if (Array.isArray(list) && list.length > max) {
    errors.push(`${where}: no maximo ${max} (tem ${list.length}).`);
  }
}

function validateMenu(data, errors) {
  checkText(errors, 'Tarja da secao', data.heading, T.menuHeading);
  checkText(errors, 'Titulo do cardapio', data.title, T.menuTitle);
  checkText(errors, 'Titulo em destaque', data.titleHighlight, T.menuTitleHighlight);
  checkText(errors, 'Subtitulo do cardapio', data.subtitle, T.menuSubtitle);

  for (const cat of data.categories ?? []) {
    checkText(errors, `Categoria "${cat.label}"`, cat.label, T.categoryLabel);

    for (const sub of cat.subcategories ?? []) {
      checkText(errors, `Subcategoria "${sub.label}"`, sub.label, T.subcategoryLabel);
      checkCount(errors, `Itens em "${sub.label}"`, sub.items, C.itemsPerSubcategory);

      for (const item of sub.items ?? []) {
        checkText(errors, `Nome de "${item.name}"`, item.name, T.itemName);
        checkText(errors, `Descricao de "${item.name}"`, item.desc, T.itemDesc);
        checkText(errors, `Selo de "${item.name}"`, item.badge, T.itemBadge);
      }
    }
  }
}

function validateHero(data, errors) {
  checkText(errors, 'Tarja de cima', data.tagline, T.heroTagline);
  checkText(errors, 'Titulo principal', data.title, T.heroTitle);
  checkText(errors, 'Subtitulo', data.subtitle, T.heroSubtitle);
  checkText(errors, 'Botao principal', data.ctaPrimary, T.heroCta);
  checkText(errors, 'Botao secundario', data.ctaSecondary, T.heroCta);
  checkText(errors, 'Texto de rolagem', data.scrollText, T.heroScrollText);
}

function validateLocations(data, errors) {
  checkText(errors, 'Tarja da secao', data.label, T.locationsLabel);
  checkText(errors, 'Titulo das unidades', data.title, T.locationsTitle);
  checkText(errors, 'Titulo em destaque', data.titleHighlight, T.locationsTitleHighlight);

  for (const unit of data.units ?? []) {
    checkText(errors, `Nome da unidade "${unit.name}"`, unit.name, T.unitName);
    checkText(errors, `Endereco de "${unit.name}"`, unit.address, T.unitAddress);
    checkText(errors, `Link de pedido de "${unit.name}"`, unit.order, T.url);
    checkText(errors, `Link do maps de "${unit.name}"`, unit.maps, T.url);
    checkText(errors, `Link do WhatsApp de "${unit.name}"`, unit.whatsapp, T.url);
    checkText(errors, `Foto de "${unit.name}"`, unit.image, T.url);

    for (const sector of unit.sectors ?? []) {
      checkCount(errors, `Horarios em "${sector.name}"`, sector.hours, C.hoursPerSector);
      for (const hour of sector.hours ?? []) {
        checkText(errors, `Descricao de horario em "${sector.name}"`, hour.label, T.hourLabel);
        checkText(errors, `Horario em "${sector.name}"`, hour.time, T.hourTime);
      }
    }
  }
}

function validatePromos(data, errors) {
  checkCount(errors, 'Promocoes', data.sections, C.promoSections);
  for (const promo of data.sections ?? []) {
    checkText(errors, `Nome da promocao "${promo.name}"`, promo.name, T.promoName);
    checkText(errors, `Arquivo da promocao "${promo.name}"`, promo.media, T.url);
    checkText(errors, `Link da promocao "${promo.name}"`, promo.link, T.url);
  }
}

const VALIDATORS = {
  menu: validateMenu,
  hero: validateHero,
  locations: validateLocations,
  promos: validatePromos,
};

/** Devolve a lista de problemas encontrados (vazia = pode salvar). */
export function validateSection(section, data) {
  const errors = [];
  VALIDATORS[section]?.(data, errors);
  return errors;
}
