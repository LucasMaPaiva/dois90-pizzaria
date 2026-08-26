/** Campos de formulario reutilizados pelos editores do painel. */

/** Mostra o contador so quando o cliente esta chegando perto do limite. */
function Counter({ value, max }) {
  if (!max) return null;
  const length = (value ?? '').length;
  if (length < max * 0.8) return null;
  return (
    <span className={`adm-counter${length >= max ? ' full' : ''}`}>
      {length}/{max}
    </span>
  );
}

export function TextField({ label, value, onChange, hint, placeholder, max }) {
  return (
    <label className="adm-field">
      <span className="adm-label">
        {label}
        <Counter value={value} max={max} />
      </span>
      <input
        type="text"
        value={value ?? ''}
        placeholder={placeholder}
        maxLength={max}
        onChange={(e) => onChange(e.target.value)}
      />
      {hint && <span className="adm-hint">{hint}</span>}
    </label>
  );
}

export function TextArea({ label, value, onChange, rows = 3, hint, placeholder, max }) {
  return (
    <label className="adm-field">
      <span className="adm-label">
        {label}
        <Counter value={value} max={max} />
      </span>
      <textarea
        rows={rows}
        value={value ?? ''}
        placeholder={placeholder}
        maxLength={max}
        onChange={(e) => onChange(e.target.value)}
      />
      {hint && <span className="adm-hint">{hint}</span>}
    </label>
  );
}

export function Collapsible({ title, subtitle, badge, children, defaultOpen = false }) {
  return (
    <details className="adm-collapsible" open={defaultOpen}>
      <summary>
        <span className="adm-collapsible-title">{title}</span>
        {subtitle && <span className="adm-collapsible-sub">{subtitle}</span>}
        {badge != null && <span className="adm-count">{badge}</span>}
      </summary>
      <div className="adm-collapsible-body">{children}</div>
    </details>
  );
}

/**
 * Botao de adicionar que se desabilita no limite e explica por que.
 */
export function AddButton({ label, onClick, current, max }) {
  const atLimit = max != null && current >= max;
  return (
    <div className="adm-add">
      <button
        type="button"
        className="adm-btn adm-btn-ghost"
        onClick={onClick}
        disabled={atLimit}
      >
        {label}
      </button>
      {atLimit && (
        <span className="adm-hint">
          Limite de {max} atingido. Remova algum para adicionar outro.
        </span>
      )}
    </div>
  );
}
