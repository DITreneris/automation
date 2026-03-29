#!/usr/bin/env node
/**
 * Offline HTML validation (html-validate). Add new pages to FILES.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { HtmlValidate } from 'html-validate';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const FILES = [
  'index.html',
  'lt/index.html',
  'lt/privatumas.html',
  'en/index.html',
  'en/privacy.html',
  'et/index.html',
  'et/privacy.html',
  'lv/index.html',
  'lv/privacy.html',
];

const config = JSON.parse(readFileSync(join(root, '.htmlvalidate.json'), 'utf8'));
const hv = new HtmlValidate(config);
let errors = 0;

for (const rel of FILES) {
  const filePath = join(root, rel);
  const html = readFileSync(filePath, 'utf8');
  const report = await hv.validateString(html, filePath);
  if (!report.valid) {
    errors += report.results.reduce((n, r) => n + r.messages.length, 0);
    console.log(hv.formatReport(report));
  }
}

if (errors > 0) {
  process.exit(1);
}
console.log(`html-validate: OK (${FILES.length} files)`);
