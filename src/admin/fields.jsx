/** Campos de formulario reutilizados pelos editores do painel. */

export function TextField({ label, value, onChange, hint, placeholder }) {
  return (
    <label className="adm-field">
      <span className="adm-label">{label}</span>
      <input
        type="text"
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {hint && <span className="adm-hint">{hint}</span>}
    </label>
  );
}

export function TextArea({ label, value, onChange, rows = 3, hint, placeholder }) {
  return (
    <label className="adm-field">
      <span className="adm-label">{label}</span>
      <textarea
        rows={rows}
        value={value ?? ''}
        placeholder={placeholder}
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
