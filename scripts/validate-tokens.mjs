#!/usr/bin/env node
/**
 * Validate design tokens: css/tokens.css ↔ docs/design_system.md ↔ tokens/tokens.json
 * Usage: node scripts/validate-tokens.mjs [--json]
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const checkJson = process.argv.includes('--json');

const JSON_COLOR_MAP = {
  '--bg': ['color', 'bg'],
  '--bg-subtle': ['color', 'bgSubtle'],
  '--white': ['color', 'white'],
  '--text': ['color', 'text'],
  '--text-light': ['color', 'textLight'],
  '--border': ['color', 'border'],
  '--accent-gold': ['color', 'accent', 'gold'],
  '--accent-gold-hover': ['color', 'accent', 'goldHover'],
  '--accent-gold-dark': ['color', 'accent', 'goldDark'],
  '--accent-dark': ['color', 'accent', 'dark'],
  '--accent-dark-hover': ['color', 'accent', 'darkHover'],
  '--brand-teal': ['color', 'brand', 'teal'],
  '--brand-teal-hover': ['color', 'brand', 'tealHover'],
  '--brand-teal-dark': ['color', 'brand', 'tealDark'],
  '--green': ['color', 'feedback', 'green'],
  '--green-hover': ['color', 'feedback', 'greenHover'],
  '--error': ['color', 'feedback', 'error'],
  '--blue-light': ['color', 'palette', 'blueLight'],
  '--orange': ['color', 'palette', 'orange'],
  '--orange-light': ['color', 'palette', 'orangeLight'],
  '--purple': ['color', 'palette', 'purple'],
  '--tertiary-light': ['color', 'palette', 'tertiaryLight'],
};

function parseTokensCss(css) {
  const rootMatch = css.match(/:root\s*\{([^}]+)\}/s);
  if (!rootMatch) throw new Error('No :root block in tokens.css');
  const tokens = new Map();
  const re = /--([a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(rootMatch[1])) !== null) {
    tokens.set(`--${m[1]}`, m[2].trim());
  }
  return tokens;
}

function normalizeHex(v) {
  const h = v.replace(/['"]/g, '').trim().toLowerCase();
  if (/^#[0-9a-f]{3}$/.test(h)) {
    return '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
  }
  return h;
}

function parseDesignSystemMd(md) {
  const documented = new Map();
  const rowRe = /\|\s*`(--[a-z0-9-]+)`\s*\|\s*`?(#[0-9A-Fa-f]{3,8})`?\s*\|/g;
  let m;
  while ((m = rowRe.exec(md)) !== null) {
    documented.set(m[1], normalizeHex(m[2]));
  }
  return documented;
}

function getJsonValue(obj, path) {
  let cur = obj;
  for (const key of path) {
    if (!cur || typeof cur !== 'object') return null;
    cur = cur[key];
  }
  return cur && typeof cur === 'object' && '$value' in cur ? cur.$value : null;
}

function hexPrimitivesFromCss(tokens) {
  const out = new Map();
  for (const [name, value] of tokens) {
    if (/^#[0-9A-Fa-f]{3,8}$/i.test(value)) {
      out.set(name, normalizeHex(value));
    }
  }
  return out;
}

let errors = 0;

const tokensPath = join(root, 'css', 'tokens.css');
const mdPath = join(root, 'docs', 'design_system.md');
const jsonPath = join(root, 'tokens', 'tokens.json');

const cssTokens = parseTokensCss(readFileSync(tokensPath, 'utf8'));
const mdTokens = parseDesignSystemMd(readFileSync(mdPath, 'utf8'));
const cssHex = hexPrimitivesFromCss(cssTokens);

for (const [name, hex] of mdTokens) {
  if (!cssHex.has(name)) continue;
  const cssVal = cssHex.get(name);
  if (cssVal !== hex) {
    console.error(`❌ Mismatch ${name}: CSS=${cssVal} docs=${hex}`);
    errors++;
  } else {
    console.log(`✅ ${name} CSS ↔ docs`);
  }
}

if (cssTokens.get('--blue') !== cssTokens.get('--accent-dark')) {
  console.error('❌ --blue must equal --accent-dark (deprecated alias)');
  errors++;
} else {
  console.log('✅ --blue deprecated alias matches --accent-dark');
}

if (checkJson && existsSync(jsonPath)) {
  const json = JSON.parse(readFileSync(jsonPath, 'utf8'));
  for (const [cssName, path] of Object.entries(JSON_COLOR_MAP)) {
    if (!cssHex.has(cssName)) continue;
    const jsonVal = getJsonValue(json, path);
    if (jsonVal == null) {
      console.error(`❌ JSON missing path ${path.join('.')} for ${cssName}`);
      errors++;
      continue;
    }
    if (normalizeHex(String(jsonVal)) !== cssHex.get(cssName)) {
      console.error(`❌ JSON/CSS mismatch ${cssName}: CSS=${cssHex.get(cssName)} JSON=${jsonVal}`);
      errors++;
    } else {
      console.log(`✅ ${cssName} CSS ↔ JSON`);
    }
  }
}

if (errors > 0) {
  console.error(`\nvalidate-tokens: ${errors} error(s)`);
  process.exit(1);
}
console.log('\nvalidate-tokens: OK');
