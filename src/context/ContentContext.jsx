import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ContentContext = createContext(null);

/**
 * Carrega o conteudo editavel (menu, hero, locations) da API uma unica vez.
 *
 * Se a API estiver fora, cai para o /content.json estatico versionado no repo,
 * para que o site publico nunca apareca vazio por causa do painel.
 */
export function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/content', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!data?.menu || !data?.hero || !data?.locations) {
        throw new Error('resposta da API incompleta');
      }
      setContent(data);
      setSource('api');
    } catch (err) {
      console.warn('[content] API indisponivel, usando /content.json:', err.message);
      try {
        const res = await fetch('/content.json', { cache: 'no-store' });
        setContent(await res.json());
        setSource('fallback');
      } catch (fallbackErr) {
        console.error('[content] fallback tambem falhou:', fallbackErr.message);
        setContent(null);
        setSource('none');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  if (loading) return null;

  return (
    <ContentContext.Provider value={{ content, source, reload: load }}>
      {children}
    </ContentContext.Provider>
  );
}

// Provider e hook moram juntos por convencao do React Context.
// eslint-disable-next-line react-refresh/only-export-components
export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent precisa estar dentro de <ContentProvider>');
  return ctx;
}
