import { PROMO_FORMATS, PROMO_POSITIONS } from '../promoPositions';
import { AddButton, Collapsible, TextField } from './fields';
import MediaField from './MediaField';

function newId() {
  return `promo_${Math.random().toString(36).slice(2, 8)}`;
}

function positionLabel(id) {
  return PROMO_POSITIONS.find((p) => p.id === id)?.label ?? 'Posição não definida';
}

export default function PromosEditor({ value, onChange, limits }) {
  const promos = value ?? {};
  const T = limits?.text ?? {};
  const C = limits?.count ?? {};
  const sections = promos.sections ?? [];

  function replace(next) {
    onChange({ ...promos, sections: next });
  }

  function updateSection(idx, patch) {
    replace(sections.map((s, i) => (i === idx ? { ...s, ...patch } : s)));
  }

  function addSection() {
    replace([
      ...sections,
      {
        id: newId(),
        name: 'Nova promoção',
        media: '',
        type: 'image',
        position: 'apos-cardapio',
        link: '',
        enabled: false,
      },
    ]);
  }

  function removeSection(idx) {
    if (!confirm(`Remover a promoção "${sections[idx].name}" do site?`)) return;
    replace(sections.filter((_, i) => i !== idx));
  }

  function move(idx, delta) {
    const target = idx + delta;
    if (target < 0 || target >= sections.length) return;
    const next = [...sections];
    [next[idx], next[target]] = [next[target], next[idx]];
    replace(next);
  }

  return (
    <div className="adm-section">
      <p className="adm-section-note">
        Faixas de promoção que aparecem entre as seções do site. Cada uma é um
        arquivo só — uma imagem ou um vídeo — ocupando a largura toda da página.
        Desligue no lugar de remover se a promoção pode voltar depois.
      </p>

      <div className="adm-formats">
        <strong className="adm-formats-title">Tamanhos recomendados</strong>
        {PROMO_FORMATS.map((f) => (
          <div className="adm-format" key={f.id}>
            <span className="adm-format-name">{f.label}</span>
            <code>{f.size}</code>
            <span className="adm-hint">
              proporção {f.ratio} — {f.reference}
            </span>
          </div>
        ))}
        <span className="adm-hint">
          A faixa sempre ocupa a largura toda; a proporção do arquivo é o que
          define a altura dela na página. Vídeo toca em loop e sempre sem som.
        </span>
      </div>

      <h3 className="adm-h3">Promoções</h3>

      {!sections.length && (
        <p className="adm-muted">Nenhuma promoção cadastrada ainda.</p>
      )}

      {sections.map((promo, idx) => (
        <Collapsible
          key={promo.id}
          title={promo.name || '(sem nome)'}
          subtitle={`${positionLabel(promo.position)} · ${promo.enabled ? 'ligada' : 'desligada'}`}
        >
          <div className="adm-item-head">
            <label className="adm-toggle">
              <input
                type="checkbox"
                checked={!!promo.enabled}
                onChange={(e) => updateSection(idx, { enabled: e.target.checked })}
              />
              <span>Mostrar no site</span>
            </label>

            <div className="adm-item-actions">
              <button
                type="button"
                title="Subir"
                onClick={() => move(idx, -1)}
                disabled={idx === 0}
              >
                ↑
              </button>
              <button
                type="button"
                title="Descer"
                onClick={() => move(idx, 1)}
                disabled={idx === sections.length - 1}
              >
                ↓
              </button>
              <button
                type="button"
                className="adm-danger"
                onClick={() => removeSection(idx)}
              >
                Remover
              </button>
            </div>
          </div>

          <TextField
            label="Nome da promoção"
            value={promo.name}
            onChange={(v) => updateSection(idx, { name: v })}
            max={T.promoName}
            hint="Só para você se achar no painel — não aparece no site"
          />

          <label className="adm-field">
            <span className="adm-label">Onde aparece na página</span>
            <select
              value={promo.position}
              onChange={(e) => updateSection(idx, { position: e.target.value })}
            >
              {PROMO_POSITIONS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            <span className="adm-hint">
              Se houver mais de uma promoção no mesmo lugar, elas aparecem na
              ordem desta lista (use as setas ↑ ↓)
            </span>
          </label>

          <MediaField
            label="Arquivo da promoção"
            value={promo.media}
            type={promo.type}
            onChange={({ media, type }) => updateSection(idx, { media, type })}
          />

          <TextField
            label="Link ao clicar (opcional)"
            value={promo.link}
            onChange={(v) => updateSection(idx, { link: v })}
            max={T.url}
            placeholder="Deixe vazio para a faixa não ser clicável"
            hint="Endereço completo, começando com https://"
          />
        </Collapsible>
      ))}

      <AddButton
        label="+ Adicionar promoção"
        onClick={addSection}
        current={sections.length}
        max={C.promoSections}
      />
    </div>
  );
}
