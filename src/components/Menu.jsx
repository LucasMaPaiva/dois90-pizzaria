import { useState } from 'react';
import './modal.css';
import OrderModal from './OrderModal';
import { useContent } from '../context/ContentContext';

export default function Menu() {
  const { content } = useContent();
  const menu = content?.menu;
  const categories = menu?.categories ?? [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  // Subcategoria ativa por categoria: { [categoryId]: subcategoryId }
  const [activeSub, setActiveSub] = useState(() =>
    Object.fromEntries(categories.map((cat) => [cat.id, cat.subcategories?.[0]?.id]))
  );

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  if (!menu) return null;

  return (
    <div id="b_3536911_1_177340533469b404961c76e" className="gpc-b ">
      <div className="gpc-b_sobreposicao"></div>
      <div className="centralizar">
        <div id="e_3536911_1_177340843781815322" className="gpc-e e_texto dd dm e_3536911_1_177340843781815322">
          <div className="c e_texto"><p><span><b>{menu.heading}</b></span></p></div>
        </div>

        <div id="e_3536911_1_177340843781822615" className="gpc-e e_linha_horizontal dd dm e_3536911_1_177340843781822615">
          <div className="c e_linha_horizontal"></div>
        </div>

        <div
          id="e_3536911_1_177340843781810056"
          className="gpc-e e_titulo dd dm e_3536911_1_177340843781810056"
          style={{ width: '100%' }}
        >
          <div className="c e_titulo">
            <h2><b><span>{menu.title} </span><i>{menu.titleHighlight}</i></b></h2>
          </div>
        </div>

        <div id="e_3536911_1_177340843781848514" className="gpc-e e_texto dd dm e_3536911_1_177340843781848514">
          <div className="c e_texto"><p><span>{menu.subtitle}</span></p></div>
        </div>

        <div id="e_3536911_1_177340831289929755" className="gpc-e e_html dd dm e_3536911_1_177340831289929755">
          <div className="c e_html">
            <section className="cardapio" id="cardapio">
              <div className="main-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`main-tab${cat.id === activeCategory ? ' active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {categories.map((cat) => {
                const subcategories = cat.subcategories ?? [];
                const currentSub = activeSub[cat.id] ?? subcategories[0]?.id;

                return (
                  <div
                    key={cat.id}
                    id={`panel-${cat.id}`}
                    className={`panel${cat.id === activeCategory ? ' active' : ''}`}
                  >
                    <div className="sub-tabs">
                      {subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          type="button"
                          className={`sub-tab${sub.id === currentSub ? ' active' : ''}`}
                          onClick={() => setActiveSub((prev) => ({ ...prev, [cat.id]: sub.id }))}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>

                    {subcategories.map((sub) => (
                      <div
                        key={sub.id}
                        id={`panel-${sub.id}`}
                        className={`panel${sub.id === currentSub ? ' active' : ''}`}
                      >
                        <div className="products-grid">
                          {(sub.items ?? []).map((item, itemIdx) => (
                            <div
                              key={item.id}
                              className="product-card"
                              style={{ animationDelay: `${(itemIdx * 0.06 + 0.03).toFixed(2)}s` }}
                              onClick={() => openModal(cat.orderType)}
                            >
                              {item.badge && <div className="product-badge">{item.badge}</div>}
                              <div className="product-name">{item.name}</div>
                              {item.desc && <div className="product-desc">{item.desc}</div>}
                              <button
                                type="button"
                                className="product-cta"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openModal(cat.orderType);
                                }}
                              >
                                Peça já
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={modalType} />
    </div>
  );
}
