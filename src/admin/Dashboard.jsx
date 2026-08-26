import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from './api';
import HeroEditor from './HeroEditor';
import MenuEditor from './MenuEditor';
import LocationsEditor from './LocationsEditor';

const TABS = [
  { id: 'menu', label: 'Cardápio', Editor: MenuEditor },
  { id: 'locations', label: 'Unidades', Editor: LocationsEditor },
  { id: 'hero', label: 'Início', Editor: HeroEditor },
];

export default function Dashboard({ onSignOut }) {
  const [saved, setSaved] = useState(null); // conteudo como esta no banco
  const [draft, setDraft] = useState(null); // conteudo em edicao
  const [activeTab, setActiveTab] = useState('menu');
  const [loadError, setLoadError] = useState('');
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const shellRef = useRef(null);

  useEffect(() => {
    api
      .fetchContent()
      .then((data) => {
        setSaved(data);
        setDraft(data);
      })
      .catch((err) => setLoadError(err.message));
  }, []);

  const dirty = useMemo(() => {
    if (!saved || !draft) return {};
    return Object.fromEntries(
      TABS.map(({ id }) => [id, JSON.stringify(saved[id]) !== JSON.stringify(draft[id])])
    );
  }, [saved, draft]);

  const anyDirty = Object.values(dirty).some(Boolean);

  // Avisa antes de fechar a aba com alteracao nao salva.
  useEffect(() => {
    if (!anyDirty) return;
    const warn = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [anyDirty]);

  async function handleSave(section) {
    setSaving(true);
    setFeedback(null);
    try {
      await api.saveSection(section, draft[section]);
      setSaved((prev) => ({ ...prev, [section]: draft[section] }));
      setFeedback({ kind: 'ok', text: 'Alterações publicadas. O site já está atualizado.' });
    } catch (err) {
      setFeedback({ kind: 'error', text: err.message });
    } finally {
      setSaving(false);
    }
  }

  function handleDiscard(section) {
    if (!confirm('Descartar as alterações não salvas desta aba?')) return;
    setDraft((prev) => ({ ...prev, [section]: saved[section] }));
    setFeedback(null);
  }

  if (loadError) {
    return (
      <div className="adm-shell" ref={shellRef}>
        <p className="adm-error">Não foi possível carregar o conteúdo: {loadError}</p>
      </div>
    );
  }

  if (!draft) {
    return (
      <div className="adm-shell" ref={shellRef}>
        <p className="adm-muted">Carregando conteúdo…</p>
      </div>
    );
  }

  const { Editor } = TABS.find((t) => t.id === activeTab);

  return (
    <div className="adm-shell" ref={shellRef}>
      <header className="adm-topbar">
        <div className="adm-topbar-left">
          <img src="/logo.svg" alt="Dois90" className="adm-topbar-logo" />
          <span className="adm-topbar-title">Painel de edição</span>
        </div>
        <div className="adm-topbar-right">
          <Link to="/" className="adm-btn adm-btn-ghost">
            Ver site
          </Link>
          <button type="button" className="adm-btn adm-btn-ghost" onClick={onSignOut}>
            Sair
          </button>
        </div>
      </header>

      <nav className="adm-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`adm-tab${tab.id === activeTab ? ' active' : ''}`}
            onClick={() => {
              setActiveTab(tab.id);
              setFeedback(null);
              shellRef.current?.scrollTo({ top: 0 });
            }}
          >
            {tab.label}
            {dirty[tab.id] && <span className="adm-dot" title="Alterações não salvas" />}
          </button>
        ))}
      </nav>

      <main className="adm-main">
        <Editor
          value={draft[activeTab]}
          onChange={(next) => setDraft((prev) => ({ ...prev, [activeTab]: next }))}
        />
      </main>

      <footer className="adm-savebar">
        {feedback && <span className={`adm-feedback ${feedback.kind}`}>{feedback.text}</span>}
        {!feedback && dirty[activeTab] && (
          <span className="adm-muted">Você tem alterações não salvas nesta aba.</span>
        )}
        {!feedback && !dirty[activeTab] && <span className="adm-muted">Tudo salvo.</span>}

        <div className="adm-savebar-actions">
          <button
            type="button"
            className="adm-btn adm-btn-ghost"
            onClick={() => handleDiscard(activeTab)}
            disabled={!dirty[activeTab] || saving}
          >
            Descartar
          </button>
          <button
            type="button"
            className="adm-btn adm-btn-primary"
            onClick={() => handleSave(activeTab)}
            disabled={!dirty[activeTab] || saving}
          >
            {saving ? 'Publicando…' : 'Publicar alterações'}
          </button>
        </div>
      </footer>
    </div>
  );
}
