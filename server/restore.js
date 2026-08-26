/**
 * Restaura um snapshot gerado pelo backup.js.
 *
 * Roda dentro do container `api`:  node restore.js dois90-2026-08-26-1453.tar.gz
 *
 * Antes de sobrescrever qualquer coisa, guarda o estado atual num snapshot
 * `pre-restore`, para que um restore errado tambem tenha volta.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import Database from 'better-sqlite3';

const DB_PATH = process.env.DB_PATH || '/data/content.db';
const UPLOADS_DIR = process.env.UPLOADS_DIR || path.join(path.dirname(DB_PATH), 'uploads');
const BACKUP_DIR = process.env.BACKUP_DIR || '/backups';

const file = process.argv[2];
if (!file) {
  console.error('Uso: node restore.js <arquivo.tar.gz>');
  console.error('Disponiveis:');
  for (const f of fs.readdirSync(BACKUP_DIR).filter((f) => f.endsWith('.tar.gz')).sort()) {
    console.error('  ' + f);
  }
  process.exit(1);
}

const archive = path.isAbsolute(file) ? file : path.join(BACKUP_DIR, file);
if (!fs.existsSync(archive)) {
  console.error(`Nao encontrei ${archive}`);
  process.exit(1);
}

const staging = path.join(path.dirname(DB_PATH), '.restore-staging');
fs.rmSync(staging, { recursive: true, force: true });
fs.mkdirSync(staging, { recursive: true });

try {
  execFileSync('tar', ['xzf', archive, '-C', staging]);

  const incomingDb = path.join(staging, 'content.db');
  if (!fs.existsSync(incomingDb)) throw new Error('o pacote nao tem content.db');

  // Valida o que veio ANTES de mexer no que esta em producao.
  const check = new Database(incomingDb, { readonly: true });
  const integrity = check.pragma('integrity_check', { simple: true });
  const sections = check.prepare('SELECT section FROM content ORDER BY section').all();
  check.close();
  if (integrity !== 'ok') throw new Error(`integrity_check do pacote falhou: ${integrity}`);
  if (!sections.length) throw new Error('o pacote nao tem nenhuma secao');
  console.log(`[restore] pacote valido: ${sections.map((r) => r.section).join(', ')}`);

  // Rede de seguranca: guarda o estado atual antes de sobrescrever.
  if (fs.existsSync(DB_PATH)) {
    const safety = path.join(BACKUP_DIR, `pre-restore-${Date.now()}.db`);
    const current = new Database(DB_PATH, { readonly: true });
    current.exec(`VACUUM INTO '${safety.replace(/'/g, "''")}'`);
    current.close();
    console.log(`[restore] estado atual guardado em ${safety}`);
  }

  // Troca o banco. Os arquivos -wal e -shm tem que sair junto, senao o SQLite
  // tenta reaplicar um WAL que nao pertence mais a este banco.
  for (const suffix of ['', '-wal', '-shm']) {
    fs.rmSync(DB_PATH + suffix, { force: true });
  }
  fs.copyFileSync(incomingDb, DB_PATH);

  // Midia: acrescenta sem apagar o que existe, para nao destruir arquivo
  // enviado depois do snapshot e ainda referenciado.
  const incomingUploads = path.join(staging, 'uploads');
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  let restored = 0;
  if (fs.existsSync(incomingUploads)) {
    for (const f of fs.readdirSync(incomingUploads)) {
      fs.copyFileSync(path.join(incomingUploads, f), path.join(UPLOADS_DIR, f));
      restored++;
    }
  }
  console.log(`[restore] ${restored} arquivo(s) de midia restaurado(s)`);
  console.log('[restore] pronto. Reinicie a api:  docker compose restart api');
} finally {
  fs.rmSync(staging, { recursive: true, force: true });
}
