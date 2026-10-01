#!/usr/bin/env node
/**
 * Lint design token usage – banned colors, privacy SSOT, hex outside tokens.css
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const BANNED_HEX = ['#2b6cb0', '#2c5282'];
const SKIP_DIRS = new Set(['node_modules', '.git', 'docs/archive']);
const SKIP_FILES = [/CHANGELOG\.md$/i];

const PRIVACY_FILES = [
  'en/privacy.html',
  'et/privacy.html',
  'lv/privacy.html',
  'de/privacy.html',
  'ja/privacy.html',
  'zh/privacy.html',
  'lt/privatumas.html',
];

const COMPONENT_CSS = ['css/library.css', 'css/privacy.css'];

let errors = 0;

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

function isSkipped(rel) {
  return SKIP_FILES.some((re) => re.test(rel));
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  errors++;
}

// Banned hex repo-wide
for (const file of walk(root)) {
  const rel = relative(root, file).replace(/\\/g, '/');
  if (isSkipped(rel) || rel.startsWith('docs/archive/')) continue;
  const ext = rel.split('.').pop();
  if (!['html', 'css', 'js', 'md', 'mdc'].includes(ext)) continue;
  if (rel.startsWith('tests/')) continue;
  const content = readFileSync(file, 'utf8').toLowerCase();
  for (const hex of BANNED_HEX) {
    if (content.includes(hex)) {
      fail(`Banned color ${hex} in ${rel}`);
    }
  }
}

// Privacy pages
for (const rel of PRIVACY_FILES) {
  const html = readFileSync(join(root, rel), 'utf8');
  if (!html.includes('href="../css/tokens.css"')) {
    fail(`${rel}: missing tokens.css link`);
  }
  if (!html.includes('href="../css/privacy.css"')) {
    fail(`${rel}: missing privacy.css link`);
  }
  if (/<style[^>]*>[\s\S]*?#[0-9a-f]{3,8}/i.test(html)) {
    fail(`${rel}: inline <style> with hex colors`);
  }
}

function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

// Hex, rgba, and the color keyword white belong in tokens.css only.
for (const rel of COMPONENT_CSS) {
  const css = stripComments(readFileSync(join(root, rel), 'utf8'));
  const hexes = css.match(/#[0-9A-Fa-f]{3,8}/g) || [];
  for (const hex of hexes) {
    fail(`${rel} contains hex ${hex} – use var(--token) from tokens.css`);
  }
  if (/rgba?\s*\(/i.test(css)) {
    fail(`${rel} contains rgb/rgba – move the value into tokens.css`);
  }
  const bareWhite = css.match(/(?<![\w-])white(?![\w-])/gi) || [];
  if (bareWhite.length > 0) {
    fail(`${rel} contains the color keyword white – use var(--white)`);
  }
}

// Inline <style> hex is illegal. <meta name="theme-color"> may stay a literal.
for (const file of walk(root)) {
  const rel = relative(root, file).replace(/\\/g, '/');
  if (!rel.endsWith('.html')) continue;
  const html = readFileSync(file, 'utf8');
  const styles = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
  for (const block of styles) {
    if (/#[0-9A-Fa-f]{3,8}/i.test(block) || /rgba?\s*\(/i.test(block)) {
      fail(`${rel}: inline <style> with a raw color – use tokens.css`);
    }
  }
}

if (errors > 0) {
  console.error(`\nlint-design-tokens: ${errors} error(s)`);
  process.exit(1);
}
console.log('lint-design-tokens: OK');
