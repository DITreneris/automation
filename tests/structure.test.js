/**
 * Struktūriniai testai – LT / EN / ET / LV / JA puslapiai
 * Tikrina, kad visų kalbų index.html ir privatumo puslapiuose yra būtini elementai.
 * Paleisti: node tests/structure.test.js (arba npm test)
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { COURSE_URL_EN } = require('../scripts/seo-constants.cjs');

const ALL_LANGS = ['lt', 'en', 'et', 'lv', 'ja'];

const ROOT_INDEX = path.join(__dirname, '..', 'index.html');
const LT_INDEX = path.join(__dirname, '..', 'lt', 'index.html');
const LT_PRIVATUMAS = path.join(__dirname, '..', 'lt', 'privatumas.html');
const EN_INDEX = path.join(__dirname, '..', 'en', 'index.html');
const EN_PRIVACY = path.join(__dirname, '..', 'en', 'privacy.html');
const ET_INDEX = path.join(__dirname, '..', 'et', 'index.html');
const ET_PRIVACY = path.join(__dirname, '..', 'et', 'privacy.html');
const LV_INDEX = path.join(__dirname, '..', 'lv', 'index.html');
const LV_PRIVACY = path.join(__dirname, '..', 'lv', 'privacy.html');
const JA_INDEX = path.join(__dirname, '..', 'ja', 'index.html');
const JA_PRIVACY = path.join(__dirname, '..', 'ja', 'privacy.html');
const JS_LIBRARY = path.join(__dirname, '..', 'js', 'library.js');
const JS_LIBRARY_LT = path.join(__dirname, '..', 'js', 'library.lt.js');
const JS_LIBRARY_ET = path.join(__dirname, '..', 'js', 'library.et.js');
const JS_LIBRARY_LV = path.join(__dirname, '..', 'js', 'library.lv.js');
const JS_LIBRARY_JA = path.join(__dirname, '..', 'js', 'library.ja.js');

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
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

function checkLibraryPage(html, lang, copyButtonText, skipText, privacyLink, libraryScriptPath) {
  let passed = 0;
  let failed = 0;
  const scriptSrc = libraryScriptPath ? readFile(libraryScriptPath) || '' : '';
  const htmlPlusScript = html + scriptSrc;
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
  if (assert(htmlPlusScript.includes('copyPrompt') && htmlPlusScript.includes('selectText'), `${lang}: Copy functions`)) passed++;
  else failed++;
  if (assert(htmlPlusScript.includes('localStorage') && htmlPlusScript.includes('di_prompt_done_'), `${lang}: localStorage`)) passed++;
  else failed++;
  if (assert(html.includes('hiddenTextarea'), `${lang}: Fallback textarea`)) passed++;
  else failed++;
  if (assert(html.includes('data-hreflang-suite="library"'), `${lang}: data-hreflang-suite library`)) passed++;
  else failed++;
  if (assert(html.includes('../js/hreflang.js'), `${lang}: hreflang.js`)) passed++;
  else failed++;
  if (assert(html.includes('/_vercel/insights/script.js'), `${lang}: Vercel Web Analytics`)) passed++;
  else failed++;
  if (assert(html.includes('lang-switcher--dropdown'), `${lang}: lang-switcher--dropdown`)) passed++;
  else failed++;
  if (assert(html.includes('lang-switcher-menu'), `${lang}: lang-switcher-menu`)) passed++;
  else failed++;
  if (assert(html.includes('lang-switcher-trigger'), `${lang}: lang-switcher-trigger`)) passed++;
  else failed++;
  if (assert(html.includes('lang-switcher--footer'), `${lang}: lang-switcher--footer`)) passed++;
  else failed++;
  if (assert(html.includes('header-top') && html.includes('header-brand'), `${lang}: header-top + header-brand`)) passed++;
  else failed++;
  if (assert(html.includes('../js/lang-switcher.js'), `${lang}: lang-switcher.js`)) passed++;
  else failed++;
  if (assert(html.includes('aria-current="page"'), `${lang}: aria-current=page`)) passed++;
  else failed++;
  if (assert(html.includes('../css/library.css'), `${lang}: library.css`)) passed++;
  else failed++;
  if (assert(libraryScriptPath && scriptSrc.length > 0, `${lang}: library script file`)) passed++;
  else failed++;
  if (assert(html.includes('name="theme-color"') && html.includes('#0B1320'), `${lang}: theme-color #0B1320`)) passed++;
  else failed++;
  if (assert(html.includes('rel="manifest"'), `${lang}: manifest link`)) passed++;
  else failed++;
  if (assert(html.includes('rel="apple-touch-icon"'), `${lang}: apple-touch-icon`)) passed++;
  else failed++;
  if (assert(html.includes('class="footer-contact"') && html.includes('info@promptanatomy.app'), `${lang}: footer-contact email`)) passed++;
  else failed++;
  if (assert(html.includes('1311 Park St') && html.includes('Alameda, CA 94501'), `${lang}: footer-contact address`)) passed++;
  else failed++;
  if (assert(html.includes(`href="${COURSE_URL_EN}"`) && html.includes('class="badge"'), `${lang}: badge links to course`)) passed++;
  else failed++;
  if (assert(!html.includes('cta-button-outline'), `${lang}: no hero outline CTA`)) passed++;
  else failed++;
  const heroCtaCount = (html.match(/class="cta-button"/g) || []).length;
  if (assert(heroCtaCount === 1, `${lang}: exactly one hero primary CTA`)) passed++;
  else failed++;
  if (assert(html.includes(`href="${COURSE_URL_EN}"`) && html.includes('community-cta-secondary'), `${lang}: community secondary links to course`)) passed++;
  else failed++;
  if (assert(html.includes('class="ecosystem"') && html.includes('ecosystem-figure') && html.includes('/assets/img/ecosystem/ecosystem-1200'), `${lang}: ecosystem section`)) passed++;
  else failed++;
  const communityIdx = html.indexOf('class="community"');
  const ecosystemIdx = html.indexOf('class="ecosystem"');
  const pageFooterIdx = html.indexOf('<footer class="footer">');
  if (assert(communityIdx > -1 && ecosystemIdx > communityIdx && pageFooterIdx > ecosystemIdx, `${lang}: community → ecosystem → footer order`)) passed++;
  else failed++;
  if (assert(!html.includes('footer-product-link'), `${lang}: no footer-product-link`)) passed++;
  else failed++;
  if (assert(!html.includes('badge-spinoff'), `${lang}: no badge-spinoff`)) passed++;
  else failed++;
  for (let i = 1; i <= 8; i++) {
    const blockIdx = html.indexOf(`id="block${i}"`);
    const footerIdx = html.indexOf('class="prompt-footer"', blockIdx);
    const beforeIdx = html.indexOf(`id="before-use-${i}"`, blockIdx);
    if (assert(blockIdx > -1 && footerIdx > blockIdx && beforeIdx > footerIdx, `${lang}: prompt ${i} CTA before before-use`)) passed++;
    else failed++;
  }
  const nextLinkCount = (html.match(/class="[^"]*\bprompt-next-link\b[^"]*"/g) || []).length;
  if (assert(nextLinkCount === 7, `${lang}: prompt-next-link count === 7`)) passed++;
  else failed++;
  const collapsibleCount = (html.match(/class="[^"]*\bprompt-details\b[^"]*"/g) || []).length;
  if (assert(collapsibleCount === 7, `${lang}: prompt-details count === 7`)) passed++;
  else failed++;
  const prompt1OpenIdx = html.indexOf('<!-- PROMPT 1 -->');
  const prompt2Idx = html.indexOf('<!-- PROMPT 2 -->');
  const prompt1Slice = prompt2Idx > prompt1OpenIdx ? html.slice(prompt1OpenIdx, prompt2Idx) : '';
  if (assert(prompt1Slice && !prompt1Slice.includes('prompt-details'), `${lang}: prompt 1 not collapsible`)) passed++;
  else failed++;
  if (assert(html.includes('prompt-collapse.js'), `${lang}: prompt-collapse.js script`)) passed++;
  else failed++;
  if (assert(html.includes('/assets/js/lucide.min.js') && !html.includes('unpkg.com/lucide'), `${lang}: self-hosted lucide`)) passed++;
  else failed++;
  return { passed, failed };
}

function checkLangSwitcher(html, label, currentLang, minLinks = 4) {
  let passed = 0;
  let failed = 0;
  for (const code of ALL_LANGS) {
    if (code === currentLang) continue;
    if (assert(html.includes(`data-lang="${code}"`), `${label}: lang-switcher data-lang="${code}"`)) passed++;
    else failed++;
  }
  const linkCount = (html.match(/class="[^"]*\blang-link\b[^"]*"/g) || []).length;
  if (assert(linkCount >= minLinks, `${label}: lang-link >= ${minLinks}`)) passed++;
  else failed++;
  return { passed, failed };
}

function checkSeoHead(html, label, isLibrary) {
  let passed = 0;
  let failed = 0;
  if (assert(!html.includes('hreflang="lt" href="#"'), `${label}: hreflang not placeholder`)) passed++;
  else failed++;
  if (assert(html.includes('rel="canonical"') && html.includes('www.promptanatomy.info'), `${label}: canonical`)) passed++;
  else failed++;
  if (assert(html.includes('name="description"'), `${label}: meta description`)) passed++;
  else failed++;
  if (assert(html.includes('og-image.png'), `${label}: og:image`)) passed++;
  else failed++;
  if (assert(html.includes('Prompt Anatomy – AI Automation Library'), `${label}: og:image:alt`)) passed++;
  else failed++;
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const ogTitleMatch = html.match(/property="og:title" content="([^"]*)"/);
  if (assert(titleMatch && ogTitleMatch && titleMatch[1] === ogTitleMatch[1], `${label}: og:title matches title`)) passed++;
  else failed++;
  const descMatch = html.match(/name="description" content="([^"]*)"/);
  const ogDescMatch = html.match(/property="og:description" content="([^"]*)"/);
  if (assert(descMatch && ogDescMatch && descMatch[1] === ogDescMatch[1], `${label}: og:description matches meta description`)) passed++;
  else failed++;
  if (isLibrary && assert(html.includes('application/ld+json') && html.includes('Organization'), `${label}: JSON-LD Organization`)) passed++;
  else if (!isLibrary) passed++;
  else failed++;
  return { passed, failed };
}

function checkPrivacyI18n(html, label, currentLang) {
  let passed = 0;
  let failed = 0;
  const ids = ['hreflang-lt', 'hreflang-en', 'hreflang-et', 'hreflang-lv', 'hreflang-ja', 'hreflang-default'];
  for (const id of ids) {
    if (assert(html.includes(`id="${id}"`), `${label} privacy: ${id}`)) passed++;
    else failed++;
  }
  if (assert(html.includes('data-hreflang-suite="privacy"'), `${label} privacy: data-hreflang-suite`)) passed++;
  else failed++;
  if (assert(html.includes('../js/hreflang.js'), `${label} privacy: hreflang.js`)) passed++;
  else failed++;
  if (assert(html.includes('/_vercel/insights/script.js'), `${label} privacy: Vercel Web Analytics`)) passed++;
  else failed++;
  if (assert(html.includes('lang-switcher-list'), `${label} privacy: lang-switcher-list`)) passed++;
  else failed++;
  const linkCount = (html.match(/class="[^"]*\blang-link\b[^"]*"/g) || []).length;
  if (assert(linkCount >= 4, `${label} privacy: lang-link >= 4`)) passed++;
  else failed++;
  if (assert(html.includes('name="theme-color"') && html.includes('#0B1320'), `${label} privacy: theme-color #0B1320`)) passed++;
  else failed++;
  if (assert(html.includes('rel="manifest"'), `${label} privacy: manifest link`)) passed++;
  else failed++;
  if (assert(html.includes('rel="apple-touch-icon"'), `${label} privacy: apple-touch-icon`)) passed++;
  else failed++;
  if (assert(html.includes('href="../css/tokens.css"'), `${label} privacy: tokens.css link`)) passed++;
  else failed++;
  if (assert(html.includes('href="../css/privacy.css"'), `${label} privacy: privacy.css link`)) passed++;
  else failed++;
  const bannedChakraBlue = '#' + '2B6CB0';
  if (assert(!html.includes(bannedChakraBlue) && !html.toLowerCase().includes(bannedChakraBlue.toLowerCase()), `${label} privacy: no banned off-brand blue`)) passed++;
  else failed++;
  if (assert(!/<style[^>]*>[\s\S]*?#[0-9a-f]{3,8}/i.test(html), `${label} privacy: no inline style hex`)) passed++;
  else failed++;
  const sw = checkLangSwitcher(html, `${label} privacy`, currentLang);
  passed += sw.passed;
  failed += sw.failed;
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
    rootHtml && ALL_LANGS.every(function (code) {
      return rootHtml.includes("localStorage.setItem('lang','" + code + "')");
    }),
    'Root index: manual lang links set localStorage'
  )) passed++;
  else failed++;
  if (assert(rootHtml && rootHtml.includes("var lang = 'en'"), 'Root index: default lang en')) passed++;
  else failed++;
  if (assert(rootHtml && rootHtml.includes('name="theme-color"') && rootHtml.includes('rel="manifest"'), 'Root index: theme-color + manifest')) passed++;
  else failed++;
  if (assert(rootHtml && rootHtml.includes('name="robots"') && rootHtml.includes('noindex'), 'Root index: robots noindex')) passed++;
  else failed++;
  if (assert(rootHtml && rootHtml.includes('/_vercel/insights/script.js'), 'Root index: Vercel Web Analytics')) passed++;
  else failed++;

  // --- LT library ---
  const ltHtml = readFile(LT_INDEX);
  if (!ltHtml) {
    console.error('❌ lt/index.html nerastas');
    process.exit(1);
  }
  const ltRes = checkLibraryPage(ltHtml, 'LT', 'Kopijuoti promptą', 'Pereiti prie turinio', 'privatumas.html', JS_LIBRARY_LT);
  passed += ltRes.passed;
  failed += ltRes.failed;
  if (assert(ltHtml.includes('lang="lt"'), 'LT: html lang="lt"')) passed++;
  else failed++;
  const ltSw = checkLangSwitcher(ltHtml, 'LT', 'lt', 8);
  passed += ltSw.passed;
  failed += ltSw.failed;
  const ltSeo = checkSeoHead(ltHtml, 'LT', true);
  passed += ltSeo.passed;
  failed += ltSeo.failed;

  // --- EN library ---
  const enHtml = readFile(EN_INDEX);
  if (!enHtml) {
    console.error('❌ en/index.html nerastas');
    process.exit(1);
  }
  const enRes = checkLibraryPage(enHtml, 'EN', 'Copy prompt', 'Skip to content', 'privacy.html', JS_LIBRARY);
  passed += enRes.passed;
  failed += enRes.failed;
  if (assert(enHtml.includes('lang="en"'), 'EN: html lang="en"')) passed++;
  else failed++;
  const enSw = checkLangSwitcher(enHtml, 'EN', 'en', 8);
  passed += enSw.passed;
  failed += enSw.failed;
  const enSeo = checkSeoHead(enHtml, 'EN', true);
  passed += enSeo.passed;
  failed += enSeo.failed;

  // --- ET library ---
  const etHtml = readFile(ET_INDEX);
  if (!etHtml) {
    console.error('❌ et/index.html nerastas');
    process.exit(1);
  }
  const etRes = checkLibraryPage(etHtml, 'ET', 'Kopeerige prompt', 'Otse sisuni', 'privacy.html', JS_LIBRARY_ET);
  passed += etRes.passed;
  failed += etRes.failed;
  if (assert(etHtml.includes('lang="et"'), 'ET: html lang="et"')) passed++;
  else failed++;
  const etSw = checkLangSwitcher(etHtml, 'ET', 'et', 8);
  passed += etSw.passed;
  failed += etSw.failed;
  const etSeo = checkSeoHead(etHtml, 'ET', true);
  passed += etSeo.passed;
  failed += etSeo.failed;

  // --- LV library ---
  const lvHtml = readFile(LV_INDEX);
  if (!lvHtml) {
    console.error('❌ lv/index.html nerastas');
    process.exit(1);
  }
  const lvRes = checkLibraryPage(lvHtml, 'LV', 'Kopēt promptu', 'Tieši uz saturu', 'privacy.html', JS_LIBRARY_LV);
  passed += lvRes.passed;
  failed += lvRes.failed;
  if (assert(lvHtml.includes('lang="lv"'), 'LV: html lang="lv"')) passed++;
  else failed++;
  const lvSw = checkLangSwitcher(lvHtml, 'LV', 'lv', 8);
  passed += lvSw.passed;
  failed += lvSw.failed;
  const lvSeo = checkSeoHead(lvHtml, 'LV', true);
  passed += lvSeo.passed;
  failed += lvSeo.failed;

  // --- JA library ---
  const jaHtml = readFile(JA_INDEX);
  if (!jaHtml) {
    console.error('❌ ja/index.html nerastas');
    process.exit(1);
  }
  const jaRes = checkLibraryPage(jaHtml, 'JA', 'プロンプトをコピー', '本文へスキップ', 'privacy.html', JS_LIBRARY_JA);
  passed += jaRes.passed;
  failed += jaRes.failed;
  if (assert(jaHtml.includes('lang="ja"'), 'JA: html lang="ja"')) passed++;
  else failed++;
  const jaSw = checkLangSwitcher(jaHtml, 'JA', 'ja', 8);
  passed += jaSw.passed;
  failed += jaSw.failed;
  const jaSeo = checkSeoHead(jaHtml, 'JA', true);
  passed += jaSeo.passed;
  failed += jaSeo.failed;

  // --- Privacy pages exist ---
  if (assert(readFile(LT_PRIVATUMAS) !== null && readFile(LT_PRIVATUMAS).length > 0, 'lt/privatumas.html egzistuoja')) passed++;
  else failed++;
  if (assert(readFile(EN_PRIVACY) !== null && readFile(EN_PRIVACY).length > 0, 'en/privacy.html egzistuoja')) passed++;
  else failed++;
  if (assert(readFile(ET_PRIVACY) !== null && readFile(ET_PRIVACY).length > 0, 'et/privacy.html egzistuoja')) passed++;
  else failed++;
  if (assert(readFile(LV_PRIVACY) !== null && readFile(LV_PRIVACY).length > 0, 'lv/privacy.html egzistuoja')) passed++;
  else failed++;
  if (assert(readFile(JA_PRIVACY) !== null && readFile(JA_PRIVACY).length > 0, 'ja/privacy.html egzistuoja')) passed++;
  else failed++;

  const ltPriv = readFile(LT_PRIVATUMAS);
  const enPriv = readFile(EN_PRIVACY);
  const etPriv = readFile(ET_PRIVACY);
  const lvPriv = readFile(LV_PRIVACY);
  const jaPriv = readFile(JA_PRIVACY);
  const prLt = checkPrivacyI18n(ltPriv || '', 'LT', 'lt');
  const prEn = checkPrivacyI18n(enPriv || '', 'EN', 'en');
  const prEt = checkPrivacyI18n(etPriv || '', 'ET', 'et');
  const prLv = checkPrivacyI18n(lvPriv || '', 'LV', 'lv');
  const prJa = checkPrivacyI18n(jaPriv || '', 'JA', 'ja');
  passed += prLt.passed + prEn.passed + prEt.passed + prLv.passed + prJa.passed;
  failed += prLt.failed + prEn.failed + prEt.failed + prLv.failed + prJa.failed;
  const prLtSeo = checkSeoHead(ltPriv || '', 'LT privacy', false);
  const prEnSeo = checkSeoHead(enPriv || '', 'EN privacy', false);
  const prEtSeo = checkSeoHead(etPriv || '', 'ET privacy', false);
  const prLvSeo = checkSeoHead(lvPriv || '', 'LV privacy', false);
  const prJaSeo = checkSeoHead(jaPriv || '', 'JA privacy', false);
  passed += prLtSeo.passed + prEnSeo.passed + prEtSeo.passed + prLvSeo.passed + prJaSeo.passed;
  failed += prLtSeo.failed + prEnSeo.failed + prEtSeo.failed + prLvSeo.failed + prJaSeo.failed;

  // --- Design System 2.0 ---
  const tokensCss = readFile(path.join(__dirname, '..', 'css', 'tokens.css')) || '';
  const libraryCss = readFile(path.join(__dirname, '..', 'css', 'library.css')) || '';
  if (assert(tokensCss.includes('--color-action-primary-bg'), 'DS: semantic token --color-action-primary-bg')) passed++;
  else failed++;
  if (assert(libraryCss.includes("@import url('tokens.css')"), 'DS: library.css imports tokens.css')) passed++;
  else failed++;
  if (assert(libraryCss.includes('.cta-button:focus-visible'), 'DS: .cta-button focus-visible')) passed++;
  else failed++;
  if (assert(libraryCss.includes('.btn:focus-visible'), 'DS: .btn focus-visible')) passed++;
  else failed++;
  if (assert(libraryCss.includes('.community-cta-primary:focus-visible'), 'DS: .community-cta-primary focus-visible')) passed++;
  else failed++;
  if (assert(!libraryCss.includes('community-cta-green'), 'DS: no deprecated community-cta-green in library.css')) passed++;
  else failed++;
  if (assert(
    libraryCss.includes('.next-steps-links a') && libraryCss.includes('border: 2px solid var(--brand-teal)'),
    'DS: next-steps nav chips use outline teal'
  )) passed++;
  else failed++;
  if (assert(libraryCss.includes('.footer-meta'), 'DS: .footer-meta block')) passed++;
  else failed++;
  for (const lang of ALL_LANGS) {
    const idx = readFile(path.join(__dirname, '..', lang, 'index.html'));
    if (assert(idx && idx.includes('class="footer-meta"') && idx.includes('footer-meta-link'), `${lang}: footer-meta with privacy link`)) passed++;
    else failed++;
  }
  for (const lang of ALL_LANGS) {
    const idx = readFile(path.join(__dirname, '..', lang, 'index.html'));
    if (assert(idx && idx.includes('../css/library.css'), `${lang}: library.css link`)) passed++;
    else failed++;
  }

  // --- PWA / SEO assets ---
  const assetRoot = path.join(__dirname, '..');
  const assetFiles = [
    'css/tokens.css',
    'css/privacy.css',
    'tokens/tokens.json',
    'vercel.json',
    'site.webmanifest',
    'robots.txt',
    'sitemap.xml',
    'assets/img/icons/favicon.svg',
    'assets/img/icons/favicon-16x16.png',
    'assets/img/icons/favicon-32x32.png',
    'assets/img/icons/apple-touch-icon.png',
    'assets/img/icons/android-chrome-192x192.png',
    'assets/img/icons/android-chrome-512x512.png',
    'assets/img/og/01_og_image.png',
    'assets/img/og/og-image.png',
    'assets/img/ecosystem/ecosystem2.png',
    'assets/img/ecosystem/ecosystem-800.webp',
    'assets/img/ecosystem/ecosystem-1200.webp',
    'assets/img/ecosystem/ecosystem-1200.png',
    'assets/js/lucide.min.js',
    '404.html',
  ];
  for (const f of assetFiles) {
    if (assert(fs.existsSync(path.join(assetRoot, f)), `Asset egzistuoja: ${f}`)) passed++;
    else failed++;
  }
  const manifest = readFile(path.join(assetRoot, 'site.webmanifest'));
  if (assert(manifest && manifest.includes('"theme_color"') && manifest.includes('#0B1320'), 'manifest: theme_color #0B1320')) passed++;
  else failed++;
  const sitemap = readFile(path.join(assetRoot, 'sitemap.xml'));
  if (assert(sitemap && sitemap.includes('hreflang="x-default"') && sitemap.includes('/en/'), 'sitemap: hreflang alternates')) passed++;
  else failed++;
  if (assert(sitemap && sitemap.includes('<lastmod>2026-05-29</lastmod>'), 'sitemap: lastmod')) passed++;
  else failed++;
  const robots = readFile(path.join(assetRoot, 'robots.txt'));
  if (assert(robots && robots.includes('Sitemap:') && robots.includes('sitemap.xml'), 'robots.txt: Sitemap nuoroda')) passed++;
  else failed++;

  // --- Vercel deploy surface ---
  const vercelIgnore = readFile(path.join(assetRoot, '.vercelignore'));
  if (assert(vercelIgnore && vercelIgnore.length > 0, '.vercelignore egzistuoja')) passed++;
  else failed++;
  for (const pattern of ['docs/', 'tests/', 'scripts/', '*.md', 'google-apps-script.js']) {
    if (assert(vercelIgnore && vercelIgnore.includes(pattern), `.vercelignore: ${pattern}`)) passed++;
    else failed++;
  }
  const notFound = readFile(path.join(assetRoot, '404.html'));
  if (assert(notFound && notFound.includes('href="/en/"'), '404.html: link to /en/')) passed++;
  else failed++;

  console.log('\n---');
  console.log(`Rezultatas: ${passed} praeina, ${failed} nepraeina.`);
  if (failed > 0) {
    process.exit(1);
  }
  console.log('Visi struktūriniai testai praeina.\n');
}

run();
