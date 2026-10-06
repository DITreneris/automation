#!/usr/bin/env node
/**
 * WCAG contrast locks for token pairs the page checkers never see
 * (pseudo-element numbers, the copied-button state, the focus ring).
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const css = readFileSync(join(root, 'css', 'tokens.css'), 'utf8');

function parseTokens(source) {
  const rootMatch = source.match(/:root\s*\{([^}]+)\}/s);
  if (!rootMatch) throw new Error('No :root block in tokens.css');
  const tokens = new Map();
  const re = /--([a-z0-9_-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(rootMatch[1])) !== null) {
    tokens.set(`--${m[1]}`, m[2].trim());
  }
  return tokens;
}

function normalizeHex(v) {
  const h = v.trim().toLowerCase();
  if (/^#[0-9a-f]{3}$/.test(h)) {
    return '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
  }
  return h;
}

function resolveColor(tokens, name, depth = 0) {
  const value = tokens.get(name);
  if (value == null) throw new Error(`Missing token ${name}`);
  const alias = value.match(/^var\((--[a-z0-9_-]+)\)$/i);
  if (alias) {
    if (depth > 6) throw new Error(`Alias cycle at ${name}`);
    return resolveColor(tokens, alias[1], depth + 1);
  }
  if (!/^#[0-9a-f]{3,8}$/i.test(value)) {
    throw new Error(`${name} is not a solid color: ${value}`);
  }
  return normalizeHex(value);
}

function channel(c) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(fg, bg) {
  const L1 = luminance(fg);
  const L2 = luminance(bg);
  const hi = Math.max(L1, L2);
  const lo = Math.min(L1, L2);
  return (hi + 0.05) / (lo + 0.05);
}

/** min: ratio must be >= min. max: ratio must stay below max (known miss). */
const PAIRS = [
  { fg: '--accent-dark', bg: '--orange-light', min: 4.5, label: 'instruction numbers' },
  { fg: '--white', bg: '--green-hover', min: 4.5, label: 'copied button' },
  { fg: '--color-focus-ring', bg: '--white', min: 3, label: 'focus ring on white' },
  { fg: '--color-focus-ring', bg: '--bg', min: 3, label: 'focus ring on page' },
  { fg: '--accent-gold', bg: '--white', max: 3, label: 'gold is not light-surface text or focus' },
  { fg: '--text', bg: '--bg', min: 4.5, label: 'body on page' },
  { fg: '--text-light', bg: '--white', min: 4.5, label: 'secondary text on white' },
  { fg: '--brand-teal', bg: '--white', min: 4.5, label: 'teal link on white' },
  { fg: '--brand-teal', bg: '--bg', max: 4.5, label: 'teal on page stays below AA; use --brand-teal-dark' },
  { fg: '--brand-teal-dark', bg: '--white', min: 4.5, label: 'teal-dark on white' },
  { fg: '--error', bg: '--white', min: 4.5, label: 'error on white' },
  { fg: '--error', bg: '--bg', min: 4.5, label: 'error on page' },
  { fg: '--white', bg: '--brand-teal', min: 4.5, label: 'white on teal button' },
];

const tokens = parseTokens(css);
let errors = 0;

for (const pair of PAIRS) {
  const fg = resolveColor(tokens, pair.fg);
  const bg = resolveColor(tokens, pair.bg);
  const ratio = contrast(fg, bg);
  const shown = ratio.toFixed(2);
  if (pair.min != null && ratio < pair.min) {
    console.error(`❌ ${pair.label}: ${pair.fg} on ${pair.bg} = ${shown}:1 (need ≥ ${pair.min})`);
    errors++;
  } else if (pair.max != null && ratio >= pair.max) {
    console.error(`❌ ${pair.label}: ${pair.fg} on ${pair.bg} = ${shown}:1 (must stay < ${pair.max})`);
    errors++;
  } else {
    const bound = pair.min != null ? `≥ ${pair.min}` : `< ${pair.max}`;
    console.log(`✅ ${pair.label}: ${shown}:1 (${bound})`);
  }
}

/** Whole rule only: `.btn:focus` must not satisfy `.btn:focus-visible`. */
const RULE_LOCKS = [
  ['.instructions li::before', 'color: var(--accent-dark)'],
  ['.btn.success', 'background: var(--color-feedback-success)'],
  ['.btn.success:hover', 'background: var(--color-feedback-success)'],
  ['.btn:focus-visible', 'outline: var(--focus-ring-width) solid var(--focus-ring-color)'],
  ['.cta-button:focus-visible', 'outline: var(--focus-ring-width) solid var(--white)'],
  ['.header-brand a.brand-lockup:focus-visible', 'outline: 2px solid var(--white)'],
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function blocksFor(css, selector) {
  const re = new RegExp(
    `(?:^|[\\n,{])\\s*${escapeRegExp(selector)}\\s*\\{([^}]*)\\}`,
    'g',
  );
  const blocks = [];
  let match;
  while ((match = re.exec(css)) !== null) blocks.push(match[1]);
  return blocks;
}

const libraryCss = readFileSync(join(root, 'css', 'library.css'), 'utf8');
const privacyCss = readFileSync(join(root, 'css', 'privacy.css'), 'utf8');

for (const [selector, declaration] of RULE_LOCKS) {
  const blocks = blocksFor(libraryCss, selector);
  if (blocks.length === 0) {
    console.error(`❌ missing rule ${selector}`);
    errors++;
    continue;
  }
  if (!blocks.some((block) => block.includes(declaration))) {
    console.error(`❌ ${selector} is missing \`${declaration}\``);
    errors++;
  } else {
    console.log(`✅ ${selector} → ${declaration}`);
  }
}

for (const [rel, source] of [['css/library.css', libraryCss], ['css/privacy.css', privacyCss]]) {
  const outlines = source.match(/(?:^|[;{\s])outline\s*:[^;]+;/g) || [];
  const gold = outlines.filter((line) => line.includes('--accent-gold'));
  if (gold.length > 0) {
    console.error(`❌ ${rel} outline uses --accent-gold (${gold.length})`);
    errors++;
  } else {
    console.log(`✅ ${rel} outlines avoid --accent-gold`);
  }
}

if (errors > 0) {
  console.error(`\ncheck-contrast: ${errors} error(s)`);
  process.exit(1);
}
console.log('\ncheck-contrast: OK');
