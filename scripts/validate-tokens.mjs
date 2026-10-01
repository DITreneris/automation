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
  '--color-text-on-dark': ['color', 'textOnDark'],
  '--blue-light': ['color', 'palette', 'blueLight'],
  '--orange-light': ['color', 'palette', 'orangeLight'],
  '--tertiary-light': ['color', 'palette', 'tertiaryLight'],
};

const JSON_DIMENSION_MAP = {
  '--radius-sm': ['dimension', 'radius', 'sm'],
  '--radius-md': ['dimension', 'radius', 'md'],
  '--radius-lg': ['dimension', 'radius', 'lg'],
  '--radius-xl': ['dimension', 'radius', 'xl'],
  '--space-0': ['dimension', 'space', '0'],
  '--space-1': ['dimension', 'space', '1'],
  '--space-1_5': ['dimension', 'space', '1_5'],
  '--space-2': ['dimension', 'space', '2'],
  '--space-3': ['dimension', 'space', '3'],
  '--space-4': ['dimension', 'space', '4'],
  '--space-5': ['dimension', 'space', '5'],
  '--space-6': ['dimension', 'space', '6'],
  '--space-7': ['dimension', 'space', '7'],
  '--space-8': ['dimension', 'space', '8'],
  '--font-size-xs': ['font', 'size', 'xs'],
  '--font-size-sm': ['font', 'size', 'sm'],
  '--font-size-meta': ['font', 'size', 'meta'],
  '--font-size-body-sm': ['font', 'size', 'bodySm'],
  '--font-size-body': ['font', 'size', 'body'],
  '--font-size-button': ['font', 'size', 'button'],
  '--font-size-lead': ['font', 'size', 'lead'],
  '--font-size-h2': ['font', 'size', 'h2'],
  '--font-size-h2-lg': ['font', 'size', 'h2Lg'],
  '--font-size-hero': ['font', 'size', 'hero'],
};

/** JSON stores the clamp maximum; CSS stores the full clamp(). */
const HERO_CLAMP_MAX = '3.25rem';

function parseTokensCss(css) {
  const rootMatch = css.match(/:root\s*\{([^}]+)\}/s);
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

for (const [name, hex] of cssHex) {
  if (!mdTokens.has(name)) {
    console.error(`❌ ${name} (${hex}) is in tokens.css but missing from docs/design_system.md`);
    errors++;
    continue;
  }
  if (mdTokens.get(name) !== hex) {
    console.error(`❌ Mismatch ${name}: CSS=${hex} docs=${mdTokens.get(name)}`);
    errors++;
  } else {
    console.log(`✅ ${name} CSS ↔ docs`);
  }
}

for (const [name, hex] of mdTokens) {
  if (!cssHex.has(name)) {
    console.error(`❌ ${name} (${hex}) is documented but not a hex primitive in tokens.css`);
    errors++;
  }
}

if (checkJson && existsSync(jsonPath)) {
  const json = JSON.parse(readFileSync(jsonPath, 'utf8'));
  for (const [cssName, path] of Object.entries(JSON_COLOR_MAP)) {
    if (!cssHex.has(cssName)) {
      console.error(`❌ JSON map expects ${cssName} in tokens.css`);
      errors++;
      continue;
    }
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

  const goldDesc = json?.color?.accent?.gold?.$description;
  if (typeof goldDesc === 'string' && /focus ring/i.test(goldDesc)) {
    console.error('❌ color.accent.gold.$description still calls gold the focus ring');
    errors++;
  } else {
    console.log('✅ gold description is not the focus ring');
  }

  for (const [cssName, path] of Object.entries(JSON_DIMENSION_MAP)) {
    const cssVal = cssTokens.get(cssName);
    const jsonVal = getJsonValue(json, path);
    if (cssVal == null) {
      console.error(`❌ CSS missing ${cssName} for JSON ${path.join('.')}`);
      errors++;
      continue;
    }
    if (jsonVal == null) {
      console.error(`❌ JSON missing path ${path.join('.')} for ${cssName}`);
      errors++;
      continue;
    }
    const jsonStr = String(jsonVal).trim();
    if (cssName === '--font-size-hero') {
      if (jsonStr !== HERO_CLAMP_MAX || !cssVal.includes(HERO_CLAMP_MAX)) {
        console.error(`❌ Hero size: CSS=${cssVal} JSON=${jsonStr} (JSON must be clamp max ${HERO_CLAMP_MAX})`);
        errors++;
      } else {
        console.log(`✅ ${cssName} CSS clamp ↔ JSON max ${HERO_CLAMP_MAX}`);
      }
      continue;
    }
    if (cssVal !== jsonStr) {
      console.error(`❌ JSON/CSS mismatch ${cssName}: CSS=${cssVal} JSON=${jsonStr}`);
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
