const JSON_HEADERS = { 'Content-Type': 'application/json' };

async function request(url, options = {}) {
  const res = await fetch(url, { credentials: 'same-origin', ...options });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.error || `Erro ${res.status}`);
  return body;
}

export function login(password) {
  return request('/api/auth/login', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ password }),
  });
}

export function logout() {
  return request('/api/auth/logout', { method: 'POST' });
}

export function me() {
  return request('/api/auth/me');
}

/** Limites de caracteres e de quantidade, definidos no backend. */
export function fetchLimits() {
  return request('/api/limits');
}

export function fetchContent() {
  return request('/api/content', { cache: 'no-store' });
}

/** Salva uma secao inteira. `section` deve ser menu, hero ou locations. */
export function saveSection(section, data) {
  return request(`/api/content/${section}`, {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify(data),
  });
}

/**
 * Envia um arquivo de mídia e devolve { url, type, size }.
 * O upload nao usa JSON_HEADERS: o navegador precisa definir o boundary do
 * multipart sozinho.
 */
export async function uploadMedia(file) {
  const body = new FormData();
  body.append('file', file);
  return request('/api/upload', { method: 'POST', body });
}
