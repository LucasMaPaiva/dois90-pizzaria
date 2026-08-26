import { useState } from 'react';

export default function Login({ onSubmit }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await onSubmit(password);
    } catch (err) {
      setError(err.message);
      setPassword('');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="adm-login">
      <form className="adm-login-card" onSubmit={handleSubmit}>
        <img src="/logo.svg" alt="Dois90" className="adm-login-logo" />
        <h1>Painel de edição</h1>
        <p className="adm-login-hint">Digite a senha para editar o conteúdo do site.</p>

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          autoComplete="current-password"
        />

        {error && <p className="adm-error">{error}</p>}

        <button type="submit" className="adm-btn adm-btn-primary" disabled={busy || !password}>
          {busy ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
