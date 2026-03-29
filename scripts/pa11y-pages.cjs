'use strict';

/**
 * Run pa11y against a fixed list of library + privacy URLs (expects static server already up).
 * Usage: PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs
 */
const { spawnSync } = require('child_process');
const path = require('path');

const base = (process.env.PA11Y_BASE || 'http://127.0.0.1:3000').replace(/\/$/, '');
const npxBin = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const paths = [
  '/',
  '/lt/',
  '/en/',
  '/et/',
  '/lv/',
  '/lt/privatumas.html',
  '/en/privacy.html',
  '/et/privacy.html',
  '/lv/privacy.html',
];

const extraArgs = [
  '--standard',
  'WCAG2AA',
  '--ignore',
  'warning',
  '--reporter',
  'cli',
  '--',
  '--no-sandbox',
];

for (const p of paths) {
  const url = base + (p.startsWith('/') ? p : '/' + p);
  const r = spawnSync(npxBin, ['pa11y', url, ...extraArgs], {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
    shell: false,
  });
  if (r.status !== 0) process.exit(r.status == null ? 1 : r.status);
}
