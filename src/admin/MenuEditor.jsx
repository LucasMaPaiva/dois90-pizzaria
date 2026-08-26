import { AddButton, Collapsible, TextArea, TextField } from './fields';

function newId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 8)}`;
}

export default function MenuEditor({ value, onChange, limits }) {
  const menu = value ?? {};
  const T = limits?.text ?? {};
  const C = limits?.count ?? {};
  const categories = menu.categories ?? [];

  const setHeader = (key) => (v) => onChange({ ...menu, [key]: v });

  function replaceCategories(next) {
    onChange({ ...menu, categories: next });
  }

  function updateCategory(catIdx, patch) {
    replaceCategories(categories.map((c, i) => (i === catIdx ? { ...c, ...patch } : c)));
  }

  function updateSub(catIdx, subIdx, patch) {
    const cat = categories[catIdx];
    updateCategory(catIdx, {
      subcategories: cat.subcategories.map((s, i) => (i === subIdx ? { ...s, ...patch } : s)),
    });
  }

  function updateItem(catIdx, subIdx, itemIdx, patch) {
    const sub = categories[catIdx].subcategories[subIdx];
    updateSub(catIdx, subIdx, {
      items: sub.items.map((it, i) => (i === itemIdx ? { ...it, ...patch } : it)),
    });
  }

  function addItem(catIdx, subIdx) {
    const sub = categories[catIdx].subcategories[subIdx];
    updateSub(catIdx, subIdx, {
      items: [...(sub.items ?? []), { id: newId('item'), name: 'Novo item', desc: '' }],
    });
  }

  function removeItem(catIdx, subIdx, itemIdx) {
    const sub = categories[catIdx].subcategories[subIdx];
    const item = sub.items[itemIdx];
    if (!confirm(`Remover "${item.name}" do cardápio?`)) return;
    updateSub(catIdx, subIdx, { items: sub.items.filter((_, i) => i !== itemIdx) });
  }

  function moveItem(catIdx, subIdx, itemIdx, delta) {
    const sub = categories[catIdx].subcategories[subIdx];
    const target = itemIdx + delta;
    if (target < 0 || target >= sub.items.length) return;
    const items = [...sub.items];
    [items[itemIdx], items[target]] = [items[target], items[itemIdx]];
    updateSub(catIdx, subIdx, { items });
  }

  return (
    <div className="adm-section">
      <p className="adm-section-note">
        Nome, descrição e selo de cada item. Para mudar o preço, use o sistema de pedidos —
        o site não exibe preços.
      </p>

      <div className="adm-grid-2">
        <TextField
          label="Tarja da seção"
          value={menu.heading}
          onChange={setHeader('heading')}
          max={T.menuHeading}
        />
        <TextField
          label="Título"
          value={menu.title}
          onChange={setHeader('title')}
          max={T.menuTitle}
        />
        <TextField
          label="Título em destaque"
          value={menu.titleHighlight}
          onChange={setHeader('titleHighlight')}
          max={T.menuTitleHighlight}
          hint="Aparece em itálico dourado, depois do título"
        />
      </div>
      <TextArea
        label="Subtítulo"
        value={menu.subtitle}
        onChange={setHeader('subtitle')}
        rows={2}
        max={T.menuSubtitle}
      />

      <h3 className="adm-h3">Categorias</h3>

      {categories.map((cat, catIdx) => (
        <Collapsible
          key={cat.id}
          title={cat.label}
          badge={(cat.subcategories ?? []).reduce((n, s) => n + (s.items?.length ?? 0), 0)}
        >
          <TextField
            label="Nome da categoria"
            value={cat.label}
            onChange={(v) => updateCategory(catIdx, { label: v })}
            max={T.categoryLabel}
            hint="O emoji faz parte do nome"
          />

          {(cat.subcategories ?? []).map((sub, subIdx) => (
            <Collapsible
              key={sub.id}
              title={sub.label}
              subtitle={`em ${cat.label}`}
              badge={sub.items?.length ?? 0}
            >
              <TextField
                label="Nome da subcategoria"
                value={sub.label}
                onChange={(v) => updateSub(catIdx, subIdx, { label: v })}
                max={T.subcategoryLabel}
              />

              <div className="adm-items">
                {(sub.items ?? []).map((item, itemIdx) => (
                  <div className="adm-item" key={item.id}>
                    <div className="adm-item-head">
                      <strong>{item.name || '(sem nome)'}</strong>
                      <div className="adm-item-actions">
                        <button
                          type="button"
                          title="Subir"
                          onClick={() => moveItem(catIdx, subIdx, itemIdx, -1)}
                          disabled={itemIdx === 0}
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          title="Descer"
                          onClick={() => moveItem(catIdx, subIdx, itemIdx, 1)}
                          disabled={itemIdx === sub.items.length - 1}
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          className="adm-danger"
                          title="Remover"
                          onClick={() => removeItem(catIdx, subIdx, itemIdx)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>

                    <TextField
                      label="Nome"
                      value={item.name}
                      onChange={(v) => updateItem(catIdx, subIdx, itemIdx, { name: v })}
                      max={T.itemName}
                    />
                    <TextArea
                      label="Descrição"
                      value={item.desc}
                      onChange={(v) => updateItem(catIdx, subIdx, itemIdx, { desc: v })}
                      rows={2}
                      max={T.itemDesc}
                    />
                    <TextField
                      label="Selo"
                      value={item.badge}
                      onChange={(v) =>
                        updateItem(catIdx, subIdx, itemIdx, { badge: v || undefined })
                      }
                      max={T.itemBadge}
                      placeholder="Deixe vazio para não mostrar selo"
                      hint="Ex: Mais pedida, Promoção, Zero Lactose"
                    />
                  </div>
                ))}
              </div>

              <AddButton
                label={`+ Adicionar item em ${sub.label}`}
                onClick={() => addItem(catIdx, subIdx)}
                current={sub.items?.length ?? 0}
                max={C.itemsPerSubcategory}
              />
            </Collapsible>
          ))}
        </Collapsible>
      ))}
    </div>
  );
}
