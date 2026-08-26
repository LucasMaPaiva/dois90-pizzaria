/**
 * Gera um snapshot consistente do conteudo: banco + midia enviada.
 *
 * Roda dentro do container `api`:  node backup.js
 *
 * Dois cuidados que nao sao opcionais:
 *
 * 1. O banco usa WAL. Copiar o arquivo `content.db` cru NAO funciona -- boa
 *    parte dos dados vive no `content.db-wal` e a copia sai vazia ou corrompida
 *    ("no such table: content"). O jeito certo e `VACUUM INTO`, que produz um
 *    arquivo unico e transacionalmente consistente.
 *
 * 2. A midia e capturada ANTES do banco. Se um upload acontecer entre os dois
 *    passos, ele entra no pacote sem ninguem apontar pra ele -- um orfao
 *    inofensivo. Na ordem inversa, o banco poderia apontar pra um arquivo que
 *    nao esta no pacote, e a promocao quebraria no restore.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import Database from 'better-sqlite3';

const DB_PATH = process.env.DB_PATH || '/data/content.db';
const UPLOADS_DIR = process.env.UPLOADS_DIR || path.join(path.dirname(DB_PATH), 'uploads');
const BACKUP_DIR = process.env.BACKUP_DIR || '/backups';
const KEEP = Number(process.env.BACKUP_KEEP) || 14;

/** 2026-08-26-1453 — ordenavel alfabeticamente, legivel por humano. */
function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}

function human(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
}

function run() {
  const name = stamp();
  fs.mkdirSync(BACKUP_DIR, { recursive: true });

  // Staging no mesmo filesystem do volume, para os hardlinks funcionarem.
  const staging = path.join(path.dirname(DB_PATH), `.staging-${name}`);
  fs.rmSync(staging, { recursive: true, force: true });
  fs.mkdirSync(staging, { recursive: true });

  try {
    // --- 1. Midia primeiro ---
    const stagedUploads = path.join(staging, 'uploads');
    fs.mkdirSync(stagedUploads, { recursive: true });

    let mediaCount = 0;
    let mediaBytes = 0;
    if (fs.existsSync(UPLOADS_DIR)) {
      for (const file of fs.readdirSync(UPLOADS_DIR)) {
        const from = path.join(UPLOADS_DIR, file);
        if (!fs.statSync(from).isFile()) continue;
        // Hardlink: instantaneo e sem gastar disco, por estar no mesmo volume.
        fs.linkSync(from, path.join(stagedUploads, file));
        mediaCount++;
        mediaBytes += fs.statSync(from).size;
      }
    }
    console.log(`[backup] midia: ${mediaCount} arquivo(s), ${human(mediaBytes)}`);

    // --- 2. Banco depois ---
    const stagedDb = path.join(staging, 'content.db');
    const source = new Database(DB_PATH, { readonly: true });
    // VACUUM INTO nao aceita parametro vinculado; o caminho e nosso, nao entrada
    // de usuario, mas escapamos a aspa simples por seguranca.
    source.exec(`VACUUM INTO '${stagedDb.replace(/'/g, "''")}'`);
    source.close();

    // --- 3. Confere antes de declarar sucesso ---
    const check = new Database(stagedDb, { readonly: true });
    const integrity = check.pragma('integrity_check', { simple: true });
    const sections = check.prepare('SELECT section FROM content ORDER BY section').all();
    check.close();

    if (integrity !== 'ok') {
      throw new Error(`integrity_check falhou: ${integrity}`);
    }
    if (!sections.length) {
      throw new Error('o snapshot do banco saiu sem nenhuma secao');
    }
    console.log(
      `[backup] banco: ${sections.map((r) => r.section).join(', ')} — integrity_check ok`
    );

    // --- 4. Empacota ---
    const archive = path.join(BACKUP_DIR, `dois90-${name}.tar.gz`);
    execFileSync('tar', ['czf', archive, '-C', staging, 'content.db', 'uploads']);
    console.log(`[backup] gerado ${archive} (${human(fs.statSync(archive).size)})`);

    // --- 5. Retencao ---
    const olds = fs
      .readdirSync(BACKUP_DIR)
      .filter((f) => /^dois90-.*\.tar\.gz$/.test(f))
      .sort()
      .reverse()
      .slice(KEEP);

    for (const old of olds) {
      fs.unlinkSync(path.join(BACKUP_DIR, old));
      console.log(`[backup] removido antigo: ${old}`);
    }
    console.log(`[backup] mantendo os ${KEEP} mais recentes`);
  } finally {
    fs.rmSync(staging, { recursive: true, force: true });
  }
}

run();
