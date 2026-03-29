/**
 * Struktūriniai testai – LT / EN / ET / LV puslapiai
 * Tikrina, kad visų kalbų index.html ir privatumo puslapiuose yra būtini elementai.
 * Paleisti: node tests/structure.test.js (arba npm test)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT_INDEX = path.join(__dirname, '..', 'index.html');
const LT_INDEX = path.join(__dirname, '..', 'lt', 'index.html');
const LT_PRIVATUMAS = path.join(__dirname, '..', 'lt', 'privatumas.html');
const EN_INDEX = path.join(__dirname, '..', 'en', 'index.html');
const EN_PRIVACY = path.join(__dirname, '..', 'en', 'privacy.html');
const ET_INDEX = path.join(__dirname, '..', 'et', 'index.html');
const ET_PRIVACY = path.join(__dirname, '..', 'et', 'privacy.html');
const LV_INDEX = path.join(__dirname, '..', 'lv', 'index.html');
const LV_PRIVACY = path.join(__dirname, '..', 'lv', 'privacy.html');

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ${message}`);
    return false;
  }
  console.log(`✅ ${message}`);
  return true;
}

function checkLibraryPage(html, lang, copyButtonText, skipText, privacyLink) {
  let passed = 0;
  let failed = 0;
  for (let i = 1; i <= 8; i++) {
    if (assert(html.includes(`id="prompt${i}"`), `${lang}: Prompt ${i} ID`)) passed++;
    else failed++;
  }
  for (let i = 1; i <= 8; i++) {
    if (assert(html.includes(`id="block${i}"`), `${lang}: Anchor block${i}`)) passed++;
    else failed++;
  }
  const copyCount = (html.match(new RegExp(copyButtonText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
  if (assert(copyCount >= 8, `${lang}: Copy buttons >= 8`)) passed++;
  else failed++;
  const codeBlocks = (html.match(/class="[^"]*code-block[^"]*"/g) || []).length;
  if (assert(codeBlocks >= 8, `${lang}: Code-block count >= 8`)) passed++;
  else failed++;
  const checkboxes = (html.match(/class="[^"]*prompt-done[^"]*"/g) || []).length;
  if (assert(checkboxes >= 8, `${lang}: Prompt-done checkbox >= 8`)) passed++;
  else failed++;
  if (assert(html.includes('skip-link') && html.includes(skipText), `${lang}: Skip link`)) passed++;
  else failed++;
  if (assert(html.includes('id="main-content"') && html.includes('<main'), `${lang}: Main region`)) passed++;
  else failed++;
  if (assert(html.includes('id="progressText"') && html.includes('id="progressBarFill"'), `${lang}: Progress`)) passed++;
  else failed++;
  if (assert(html.includes('id="toast"') && html.includes('role="status"'), `${lang}: Toast`)) passed++;
  else failed++;
  if (assert(html.includes(privacyLink), `${lang}: Privacy link`)) passed++;
  else failed++;
  if (assert(html.includes('copyPrompt') && html.includes('selectText'), `${lang}: Copy functions`)) passed++;
  else failed++;
  if (assert(html.includes('localStorage') && html.includes('di_prompt_done_'), `${lang}: localStorage`)) passed++;
  else failed++;
  if (assert(html.includes('hiddenTextarea'), `${lang}: Fallback textarea`)) passed++;
  else failed++;
  if (assert(html.includes('data-hreflang-suite="library"'), `${lang}: data-hreflang-suite library`)) passed++;
  else failed++;
  if (assert(html.includes('../js/hreflang.js'), `${lang}: hreflang.js`)) passed++;
  else failed++;
  if (assert(html.includes('lang-switcher-list'), `${lang}: lang-switcher-list`)) passed++;
  else failed++;
  if (assert(html.includes('aria-current="page"'), `${lang}: aria-current=page`)) passed++;
  else failed++;
  return { passed, failed };
}

function checkPrivacyI18n(html, label) {
  let passed = 0;
  let failed = 0;
  const ids = ['hreflang-lt', 'hreflang-en', 'hreflang-et', 'hreflang-lv', 'hreflang-default'];
  for (const id of ids) {
    if (assert(html.includes(`id="${id}"`), `${label} privacy: ${id}`)) passed++;
    else failed++;
  }
  if (assert(html.includes('data-hreflang-suite="privacy"'), `${label} privacy: data-hreflang-suite`)) passed++;
  else failed++;
  if (assert(html.includes('../js/hreflang.js'), `${label} privacy: hreflang.js`)) passed++;
  else failed++;
  if (assert(html.includes('lang-switcher-list'), `${label} privacy: lang-switcher-list`)) passed++;
  else failed++;
  const linkCount = (html.match(/class="lang-link"/g) || []).length;
  if (assert(linkCount >= 3, `${label} privacy: lang-link >= 3`)) passed++;
  else failed++;
  return { passed, failed };
}

function run() {
  let passed = 0;
  let failed = 0;

  // --- Root redirect ---
  const rootHtml = readFile(ROOT_INDEX);
  if (assert(rootHtml && (rootHtml.includes('Redirecting') || rootHtml.includes('location')), 'Root index: redirect page')) passed++;
  else failed++;
  if (assert(
    rootHtml && ['lt', 'en', 'et', 'lv'].every(function (code) {
      return rootHtml.includes("localStorage.setItem('lang','" + code + "')");
    }),
    'Root index: manual lang links set localStorage'
  )) passed++;
  else failed++;

  // --- LT library ---
  const ltHtml = readFile(LT_INDEX);
  if (!ltHtml) {
    console.error('❌ lt/index.html nerastas');
    process.exit(1);
  }
  const ltRes = checkLibraryPage(ltHtml, 'LT', 'Kopijuoti promptą', 'Pereiti prie turinio', 'privatumas.html');
  passed += ltRes.passed;
  failed += ltRes.failed;
  if (assert(ltHtml.includes('lang="lt"'), 'LT: html lang="lt"')) passed++;
  else failed++;

  // --- EN library ---
  const enHtml = readFile(EN_INDEX);
  if (!enHtml) {
    console.error('❌ en/index.html nerastas');
    process.exit(1);
  }
  const enRes = checkLibraryPage(enHtml, 'EN', 'Copy prompt', 'Skip to content', 'privacy.html');
  passed += enRes.passed;
  failed += enRes.failed;
  if (assert(enHtml.includes('lang="en"'), 'EN: html lang="en"')) passed++;
  else failed++;

  // --- ET library ---
  const etHtml = readFile(ET_INDEX);
  if (!etHtml) {
    console.error('❌ et/index.html nerastas');
    process.exit(1);
  }
  const etRes = checkLibraryPage(etHtml, 'ET', 'Kopeeri prompt', 'Otse sisuni', 'privacy.html');
  passed += etRes.passed;
  failed += etRes.failed;
  if (assert(etHtml.includes('lang="et"'), 'ET: html lang="et"')) passed++;
  else failed++;

  // --- LV library ---
  const lvHtml = readFile(LV_INDEX);
  if (!lvHtml) {
    console.error('❌ lv/index.html nerastas');
    process.exit(1);
  }
  const lvRes = checkLibraryPage(lvHtml, 'LV', 'Kopēt promptu', 'Tieši uz saturu', 'privacy.html');
  passed += lvRes.passed;
  failed += lvRes.failed;
  if (assert(lvHtml.includes('lang="lv"'), 'LV: html lang="lv"')) passed++;
  else failed++;

  // --- Privacy pages exist ---
  if (assert(readFile(LT_PRIVATUMAS) !== null && readFile(LT_PRIVATUMAS).length > 0, 'lt/privatumas.html egzistuoja')) passed++;
  else failed++;
  if (assert(readFile(EN_PRIVACY) !== null && readFile(EN_PRIVACY).length > 0, 'en/privacy.html egzistuoja')) passed++;
  else failed++;
  if (assert(readFile(ET_PRIVACY) !== null && readFile(ET_PRIVACY).length > 0, 'et/privacy.html egzistuoja')) passed++;
  else failed++;
  if (assert(readFile(LV_PRIVACY) !== null && readFile(LV_PRIVACY).length > 0, 'lv/privacy.html egzistuoja')) passed++;
  else failed++;

  const ltPriv = readFile(LT_PRIVATUMAS);
  const enPriv = readFile(EN_PRIVACY);
  const etPriv = readFile(ET_PRIVACY);
  const lvPriv = readFile(LV_PRIVACY);
  const prLt = checkPrivacyI18n(ltPriv || '', 'LT');
  const prEn = checkPrivacyI18n(enPriv || '', 'EN');
  const prEt = checkPrivacyI18n(etPriv || '', 'ET');
  const prLv = checkPrivacyI18n(lvPriv || '', 'LV');
  passed += prLt.passed + prEn.passed + prEt.passed + prLv.passed;
  failed += prLt.failed + prEn.failed + prEt.failed + prLv.failed;

  console.log('\n---');
  console.log(`Rezultatas: ${passed} praeina, ${failed} nepraeina.`);
  if (failed > 0) {
    process.exit(1);
  }
  console.log('Visi struktūriniai testai praeina.\n');
}

run();
