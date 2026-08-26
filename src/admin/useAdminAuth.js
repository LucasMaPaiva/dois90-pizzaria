import { useCallback, useEffect, useState } from 'react';
import * as api from './api';

/**
 * Estado de autenticacao do painel. A sessao vive num cookie httpOnly
 * assinado pelo backend — o navegador nunca ve a senha nem o segredo.
 */
export default function useAdminAuth() {
  const [status, setStatus] = useState('checking'); // checking | authenticated | anonymous

  const check = useCallback(async () => {
    try {
      await api.me();
      setStatus('authenticated');
    } catch {
      setStatus('anonymous');
    }
  }, []);

  useEffect(() => {
    check();
  }, [check]);

  const signIn = useCallback(async (password) => {
    await api.login(password);
    setStatus('authenticated');
  }, []);

  const signOut = useCallback(async () => {
    try {
      await api.logout();
    } finally {
      setStatus('anonymous');
    }
  }, []);

  return { status, signIn, signOut, recheck: check };
}
