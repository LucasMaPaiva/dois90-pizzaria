import { useRef, useState } from 'react';
import { uploadMedia } from './api';

const ACCEPT = 'image/jpeg,image/png,image/webp,video/mp4';

/**
 * Campo de mídia: mostra o que está lá hoje, deixa trocar por upload e diz o
 * tamanho recomendado. Aceita imagem e vídeo.
 */
export default function MediaField({ label, value, type, onChange, hint }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const isVideo = type === 'video' || /\.mp4$/i.test(value || '');

  async function handleFile(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setBusy(true);
    setError('');
    try {
      const result = await uploadMedia(file);
      onChange({ media: result.url, type: result.type });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="adm-field">
      <span className="adm-label">{label}</span>

      {value ? (
        <div className="adm-media-preview">
          {isVideo ? (
            <video src={value} muted loop playsInline autoPlay />
          ) : (
            <img src={value} alt="" />
          )}
        </div>
      ) : (
        <div className="adm-media-empty">Nenhum arquivo escolhido ainda</div>
      )}

      <div className="adm-media-actions">
        <button
          type="button"
          className="adm-btn adm-btn-ghost"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
        >
          {busy ? 'Enviando…' : value ? 'Trocar arquivo' : 'Escolher arquivo'}
        </button>
        {value && <code className="adm-media-path">{value}</code>}
      </div>

      <input ref={inputRef} type="file" accept={ACCEPT} hidden onChange={handleFile} />

      {hint && <span className="adm-hint">{hint}</span>}
      <span className="adm-hint">Aceita JPG, PNG, WebP ou MP4. Máximo de 25 MB.</span>
      {error && <span className="adm-error">{error}</span>}
    </div>
  );
}
