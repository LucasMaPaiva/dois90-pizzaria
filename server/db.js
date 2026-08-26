import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'content.db');

// Document store simples: uma linha por secao, cada uma guardando o JSON
// daquela secao. Evita modelar pizza/unidade como linhas relacionais.
export const SECTIONS = ['menu', 'hero', 'locations'];

fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS content (
    section    TEXT PRIMARY KEY,
    data       TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);

const selectAll = db.prepare('SELECT section, data, updated_at FROM content');
const selectOne = db.prepare('SELECT data FROM content WHERE section = ?');
const upsert = db.prepare(`
  INSERT INTO content (section, data, updated_at) VALUES (?, ?, ?)
  ON CONFLICT(section) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at
`);

/** Popula o banco na primeira subida, a partir do seed.json. */
function seedIfEmpty() {
  const seedPath = path.join(__dirname, 'seed.json');
  if (!fs.existsSync(seedPath)) return;

  const seed = JSON.parse(fs.readFileSync(seedPath, 'utf8'));
  const now = new Date().toISOString();
  let inserted = 0;

  for (const section of SECTIONS) {
    if (seed[section] === undefined) continue;
    if (selectOne.get(section)) continue; // ja existe: nunca sobrescreve edicao do cliente
    upsert.run(section, JSON.stringify(seed[section]), now);
    inserted++;
  }

  if (inserted) console.log(`[db] seed aplicado em ${inserted} secao(oes)`);
}

seedIfEmpty();

export function getAllContent() {
  const out = {};
  for (const row of selectAll.all()) {
    out[row.section] = JSON.parse(row.data);
  }
  return out;
}

export function getUpdatedAt() {
  const out = {};
  for (const row of selectAll.all()) {
    out[row.section] = row.updated_at;
  }
  return out;
}

export function setSection(section, data) {
  const now = new Date().toISOString();
  upsert.run(section, JSON.stringify(data), now);
  return now;
}

export default db;
