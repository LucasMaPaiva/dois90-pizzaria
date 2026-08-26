import crypto from 'node:crypto';
import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import { SECTIONS, UPLOADS_DIR, getAllContent, getUpdatedAt, setSection } from './db.js';
import { LIMITS, validateSection } from './limits.js';

const PORT = Number(process.env.PORT) || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'dois90_session';
const SESSION_TTL = '12h';

// Midia aceita no painel: imagem para banner e video em loop.
const ALLOWED_MEDIA = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'video/mp4': '.mp4',
};
const ALLOWED_EXTENSIONS = {
  '.jpg': { ext: '.jpg', kind: 'image' },
  '.jpeg': { ext: '.jpg', kind: 'image' },
  '.png': { ext: '.png', kind: 'image' },
  '.webp': { ext: '.webp', kind: 'image' },
  '.mp4': { ext: '.mp4', kind: 'video' },
};
const MAX_UPLOAD_BYTES = 25 * 1024 * 1024; // o video da moto tem 12 MB

/**
 * Aceita pelo mimetype declarado ou, se ele nao servir, pela extensao.
 * Alguns clientes mandam application/octet-stream para .mp4, entao depender so
 * do mimetype rejeitaria arquivo legitimo.
 */
function resolveMedia(file) {
  const byMime = ALLOWED_MEDIA[file.mimetype];
  if (byMime) {
    return { ext: byMime, kind: file.mimetype.startsWith('video/') ? 'video' : 'image' };
  }
  const dot = file.originalname.lastIndexOf('.');
  if (dot === -1) return null;
  return ALLOWED_EXTENSIONS[file.originalname.slice(dot).toLowerCase()] ?? null;
}

if (!ADMIN_PASSWORD || !JWT_SECRET) {
  console.error('[api] ADMIN_PASSWORD e JWT_SECRET sao obrigatorios (defina no .env)');
  process.exit(1);
}

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(express.json({ limit: '2mb' }));
app.use(cookieParser());

/** Comparacao em tempo constante, para nao vazar a senha por timing. */
function passwordMatches(candidate) {
  if (typeof candidate !== 'string') return false;
  const a = crypto.createHash('sha256').update(candidate).digest();
  const b = crypto.createHash('sha256').update(ADMIN_PASSWORD).digest();
  return crypto.timingSafeEqual(a, b);
}

function requireAuth(req, res, next) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return res.status(401).json({ error: 'Nao autenticado' });
  try {
    req.session = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.clearCookie(COOKIE_NAME);
    res.status(401).json({ error: 'Sessao expirada' });
  }
}

// --- Rate limit simples do login, em memoria (por IP) ---
const attempts = new Map();
const MAX_ATTEMPTS = 8;
const WINDOW_MS = 10 * 60 * 1000;

function loginThrottle(req, res, next) {
  const ip = req.ip || 'unknown';
  const now = Date.now();
  const entry = attempts.get(ip);

  if (entry && now - entry.first > WINDOW_MS) attempts.delete(ip);

  const current = attempts.get(ip);
  if (current && current.count >= MAX_ATTEMPTS) {
    const waitMin = Math.ceil((WINDOW_MS - (now - current.first)) / 60000);
    return res.status(429).json({ error: `Muitas tentativas. Tente de novo em ${waitMin} min.` });
  }
  next();
}

function registerFailure(ip) {
  const entry = attempts.get(ip);
  if (entry) entry.count++;
  else attempts.set(ip, { count: 1, first: Date.now() });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOADS_DIR),
    filename: (req, file, cb) => {
      const media = resolveMedia(file);
      // Nome opaco: evita colisao e caracteres problematicos vindos do nome original.
      cb(null, `${crypto.randomBytes(12).toString('hex')}${media.ext}`);
    },
  }),
  limits: { fileSize: MAX_UPLOAD_BYTES, files: 1 },
  fileFilter: (req, file, cb) => {
    const media = resolveMedia(file);
    if (media) {
      // Guarda o tipo resolvido: o mimetype do cliente pode nao ser confiavel.
      file.resolvedKind = media.kind;
      return cb(null, true);
    }
    cb(new Error('Formato nao aceito. Envie JPG, PNG, WebP ou MP4.'));
  },
});

// --- Rotas ---

app.get('/api/health', (req, res) => {
  res.json({ ok: true, sections: Object.keys(getAllContent()) });
});

// Publico: o site inteiro le daqui.
app.get('/api/content', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json(getAllContent());
});

app.get('/api/limits', (req, res) => {
  res.json(LIMITS);
});

app.post('/api/auth/login', loginThrottle, (req, res) => {
  if (!passwordMatches(req.body?.password)) {
    registerFailure(req.ip || 'unknown');
    return res.status(401).json({ error: 'Senha incorreta.' });
  }

  attempts.delete(req.ip || 'unknown');
  const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: SESSION_TTL });

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 12 * 60 * 60 * 1000,
    path: '/',
  });
  res.json({ ok: true });
});

app.get('/api/auth/me', requireAuth, (req, res) => {
  res.json({ authenticated: true, role: req.session.role, updatedAt: getUpdatedAt() });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME, { path: '/' });
  res.json({ ok: true });
});

app.post('/api/upload', requireAuth, (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      const tooBig = err.code === 'LIMIT_FILE_SIZE';
      return res.status(tooBig ? 413 : 400).json({
        error: tooBig
          ? `Arquivo grande demais. O limite e ${MAX_UPLOAD_BYTES / 1024 / 1024} MB.`
          : err.message,
      });
    }
    if (!req.file) return res.status(400).json({ error: 'Nenhum arquivo enviado.' });

    res.json({
      url: `/api/uploads/${req.file.filename}`,
      type: req.file.resolvedKind,
      size: req.file.size,
    });
  });
});

// A midia enviada pelo painel vive sob /api/ de proposito: assim o mesmo proxy
// (nginx em producao, vite em dev) cobre tudo, sem montar o volume no nginx.
app.use(
  '/api/uploads',
  express.static(UPLOADS_DIR, { maxAge: '30d', immutable: true, index: false })
);

app.put('/api/content/:section', requireAuth, (req, res) => {
  const { section } = req.params;
  if (!SECTIONS.includes(section)) {
    return res.status(400).json({ error: `Secao invalida. Use: ${SECTIONS.join(', ')}` });
  }
  if (req.body === undefined || req.body === null || typeof req.body !== 'object') {
    return res.status(400).json({ error: 'Corpo da requisicao deve ser um objeto JSON.' });
  }

  const problems = validateSection(section, req.body);
  if (problems.length) {
    return res.status(422).json({
      error: problems.slice(0, 3).join(' '),
      problems,
    });
  }

  const updatedAt = setSection(section, req.body);
  res.json({ ok: true, section, updatedAt });
});

app.use('/api', (req, res) => res.status(404).json({ error: 'Rota nao encontrada' }));

app.listen(PORT, () => console.log(`[api] ouvindo na porta ${PORT}`));
