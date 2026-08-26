import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import useAdminAuth from './useAdminAuth';
import Login from './Login';
import Dashboard from './Dashboard';
import './Admin.css';

export default function AdminApp() {
  const { status, signIn, signOut } = useAdminAuth();
  const navigate = useNavigate();

  // O body herda o fundo escuro do site; o painel e claro. Sem isso sobra
  // uma faixa preta abaixo do conteudo em telas curtas.
  useEffect(() => {
    const previous = document.body.style.background;
    document.body.style.background = '#f4f5f7';
    return () => {
      document.body.style.background = previous;
    };
  }, []);

  if (status === 'checking') {
    return (
      <div className="adm-shell">
        <p className="adm-muted">Verificando sessão…</p>
      </div>
    );
  }

  async function handleSignIn(password) {
    await signIn(password);
    navigate('/admin', { replace: true });
  }

  async function handleSignOut() {
    await signOut();
    navigate('/admin/login', { replace: true });
  }

  if (status !== 'authenticated') {
    return (
      <Routes>
        <Route path="login" element={<Login onSubmit={handleSignIn} />} />
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="login" element={<Navigate to="/admin" replace />} />
      <Route path="*" element={<Dashboard onSignOut={handleSignOut} />} />
    </Routes>
  );
}
