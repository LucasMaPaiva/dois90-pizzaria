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
