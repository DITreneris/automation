'use strict';

/** ET/LV/DE index + library.{et,lv,de}.js from en; library.lt.js from js/library.js via LT_JS_PAIRS. Run: npm run generate:et-lv */

const fs = require('fs');
const path = require('path');
const { ET_PROMPTS, LV_PROMPTS } = require('./prompt-bodies-et-lv.cjs');
const { DE_PROMPTS } = require('./prompt-bodies-de.cjs');
const { DE_NAV, DE_FOOTER_NAV, DE_PAIRS, DE_JS_PAIRS } = require('./de-pairs.cjs');

const root = path.join(__dirname, '..');
const enPath = path.join(root, 'en', 'index.html');
/** Match generator search strings to file (en uses U+2019 in places). LF only for stable CI git diff. */
const en = fs
  .readFileSync(enPath, 'utf8')
  .replace(/\u2019/g, "'")
  .replace(/\r\n/g, '\n')
  .replace(/\r/g, '\n');

function writeUtf8Lf(filePath, content) {
  const normalized =
    typeof content === 'string'
      ? content.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
      : content;
  fs.writeFileSync(filePath, normalized, 'utf8');
}

function replacePromptBodies(html, map) {
  for (const id of Object.keys(map)) {
    const re = new RegExp(
      `<pre class="code-text" id="${id}">[\\s\\S]*?<\\/pre>`,
      ''
    );
    if (!re.test(html)) throw new Error('Missing pre#' + id);
    html = html.replace(
      re,
      `<pre class="code-text" id="${id}">${map[id]}</pre>`
    );
  }
  return html;
}

function applyPairs(html, pairs) {
  for (const [from, to] of pairs) {
    if (!html.includes(from)) {
      throw new Error('Missing substring: ' + from.slice(0, 90).replace(/\n/g, '\\n'));
    }
    html = html.split(from).join(to);
  }
  return html;
}

const ET_NAV = `                <nav class="lang-switcher lang-switcher--dropdown" aria-label="Keel">
                    <button type="button"
                            class="lang-switcher-trigger"
                            id="lang-switcher-trigger-hero"
                            aria-expanded="false"
                            aria-controls="lang-switcher-menu-hero">
                        <i data-lucide="languages" aria-hidden="true" class="lang-switcher-icon"></i>
                        <span class="lang-switcher-trigger-text">Eesti</span>
                        <span class="lang-switcher-chevron" aria-hidden="true">▾</span>
                    </button>
                    <ul class="lang-switcher-menu" id="lang-switcher-menu-hero" hidden>
                        <li><a href="../lt/" class="lang-option lang-link" data-lang="lt" lang="lt" hreflang="lt" onclick="try{localStorage.setItem('lang','lt')}catch(e){}">Lietuvių</a></li>
                        <li><a href="../en/" class="lang-option lang-link" data-lang="en" lang="en" hreflang="en" onclick="try{localStorage.setItem('lang','en')}catch(e){}">English</a></li>
                        <li><span class="lang-option lang-option--current" aria-current="page" lang="et">Eesti</span></li>
                        <li><a href="../lv/" class="lang-option lang-link" data-lang="lv" lang="lv" hreflang="lv" onclick="try{localStorage.setItem('lang','lv')}catch(e){}">Latviešu</a></li>
                        <li><a href="../de/" class="lang-option lang-link" data-lang="de" lang="de" hreflang="de" onclick="try{localStorage.setItem('lang','de')}catch(e){}">Deutsch</a></li>
                        <li><a href="../ja/" class="lang-option lang-link" data-lang="ja" lang="ja" hreflang="ja" onclick="try{localStorage.setItem('lang','ja')}catch(e){}">日本語</a></li>
                        <li><a href="../zh/" class="lang-option lang-link" data-lang="zh" lang="zh-Hans" hreflang="zh-Hans" onclick="try{localStorage.setItem('lang','zh')}catch(e){}">简体中文</a></li>
                    </ul>
                </nav>`;

const ET_FOOTER_NAV = `            <nav class="lang-switcher lang-switcher--dropdown lang-switcher--footer" aria-label="Keel">
                <button type="button"
                        class="lang-switcher-trigger"
                        id="lang-switcher-trigger-footer"
                        aria-expanded="false"
                        aria-controls="lang-switcher-menu-footer">
                    <i data-lucide="languages" aria-hidden="true" class="lang-switcher-icon"></i>
                    <span class="lang-switcher-trigger-text">Eesti</span>
                    <span class="lang-switcher-chevron" aria-hidden="true">▾</span>
                </button>
                <ul class="lang-switcher-menu" id="lang-switcher-menu-footer" hidden>
                    <li><a href="../lt/" class="lang-option lang-link" data-lang="lt" lang="lt" hreflang="lt" onclick="try{localStorage.setItem('lang','lt')}catch(e){}">Lietuvių</a></li>
                    <li><a href="../en/" class="lang-option lang-link" data-lang="en" lang="en" hreflang="en" onclick="try{localStorage.setItem('lang','en')}catch(e){}">English</a></li>
                    <li><span class="lang-option lang-option--current" aria-current="page" lang="et">Eesti</span></li>
                    <li><a href="../lv/" class="lang-option lang-link" data-lang="lv" lang="lv" hreflang="lv" onclick="try{localStorage.setItem('lang','lv')}catch(e){}">Latviešu</a></li>
                    <li><a href="../de/" class="lang-option lang-link" data-lang="de" lang="de" hreflang="de" onclick="try{localStorage.setItem('lang','de')}catch(e){}">Deutsch</a></li>
                    <li><a href="../ja/" class="lang-option lang-link" data-lang="ja" lang="ja" hreflang="ja" onclick="try{localStorage.setItem('lang','ja')}catch(e){}">日本語</a></li>
                    <li><a href="../zh/" class="lang-option lang-link" data-lang="zh" lang="zh-Hans" hreflang="zh-Hans" onclick="try{localStorage.setItem('lang','zh')}catch(e){}">简体中文</a></li>
                </ul>
            </nav>`;

const LANG_NAV_RE =
  /<nav class="lang-switcher lang-switcher--dropdown" aria-label="Language">[\s\S]*?<\/nav>/;
const FOOTER_LANG_NAV_RE =
  /<nav class="lang-switcher lang-switcher--dropdown lang-switcher--footer" aria-label="Language">[\s\S]*?<\/nav>/;

const LV_NAV = `                <nav class="lang-switcher lang-switcher--dropdown" aria-label="Valoda">
                    <button type="button"
                            class="lang-switcher-trigger"
                            id="lang-switcher-trigger-hero"
                            aria-expanded="false"
                            aria-controls="lang-switcher-menu-hero">
                        <i data-lucide="languages" aria-hidden="true" class="lang-switcher-icon"></i>
                        <span class="lang-switcher-trigger-text">Latviešu</span>
                        <span class="lang-switcher-chevron" aria-hidden="true">▾</span>
                    </button>
                    <ul class="lang-switcher-menu" id="lang-switcher-menu-hero" hidden>
                        <li><a href="../lt/" class="lang-option lang-link" data-lang="lt" lang="lt" hreflang="lt" onclick="try{localStorage.setItem('lang','lt')}catch(e){}">Lietuvių</a></li>
                        <li><a href="../en/" class="lang-option lang-link" data-lang="en" lang="en" hreflang="en" onclick="try{localStorage.setItem('lang','en')}catch(e){}">English</a></li>
                        <li><a href="../et/" class="lang-option lang-link" data-lang="et" lang="et" hreflang="et" onclick="try{localStorage.setItem('lang','et')}catch(e){}">Eesti</a></li>
                        <li><span class="lang-option lang-option--current" aria-current="page" lang="lv">Latviešu</span></li>
                        <li><a href="../de/" class="lang-option lang-link" data-lang="de" lang="de" hreflang="de" onclick="try{localStorage.setItem('lang','de')}catch(e){}">Deutsch</a></li>
                        <li><a href="../ja/" class="lang-option lang-link" data-lang="ja" lang="ja" hreflang="ja" onclick="try{localStorage.setItem('lang','ja')}catch(e){}">日本語</a></li>
                        <li><a href="../zh/" class="lang-option lang-link" data-lang="zh" lang="zh-Hans" hreflang="zh-Hans" onclick="try{localStorage.setItem('lang','zh')}catch(e){}">简体中文</a></li>
                    </ul>
                </nav>`;

const LV_FOOTER_NAV = `            <nav class="lang-switcher lang-switcher--dropdown lang-switcher--footer" aria-label="Valoda">
                <button type="button"
                        class="lang-switcher-trigger"
                        id="lang-switcher-trigger-footer"
                        aria-expanded="false"
                        aria-controls="lang-switcher-menu-footer">
                    <i data-lucide="languages" aria-hidden="true" class="lang-switcher-icon"></i>
                    <span class="lang-switcher-trigger-text">Latviešu</span>
                    <span class="lang-switcher-chevron" aria-hidden="true">▾</span>
                </button>
                <ul class="lang-switcher-menu" id="lang-switcher-menu-footer" hidden>
                    <li><a href="../lt/" class="lang-option lang-link" data-lang="lt" lang="lt" hreflang="lt" onclick="try{localStorage.setItem('lang','lt')}catch(e){}">Lietuvių</a></li>
                    <li><a href="../en/" class="lang-option lang-link" data-lang="en" lang="en" hreflang="en" onclick="try{localStorage.setItem('lang','en')}catch(e){}">English</a></li>
                    <li><a href="../et/" class="lang-option lang-link" data-lang="et" lang="et" hreflang="et" onclick="try{localStorage.setItem('lang','et')}catch(e){}">Eesti</a></li>
                    <li><span class="lang-option lang-option--current" aria-current="page" lang="lv">Latviešu</span></li>
                    <li><a href="../de/" class="lang-option lang-link" data-lang="de" lang="de" hreflang="de" onclick="try{localStorage.setItem('lang','de')}catch(e){}">Deutsch</a></li>
                    <li><a href="../ja/" class="lang-option lang-link" data-lang="ja" lang="ja" hreflang="ja" onclick="try{localStorage.setItem('lang','ja')}catch(e){}">日本語</a></li>
                    <li><a href="../zh/" class="lang-option lang-link" data-lang="zh" lang="zh-Hans" hreflang="zh-Hans" onclick="try{localStorage.setItem('lang','zh')}catch(e){}">简体中文</a></li>
                </ul>
            </nav>`;

/** Longest / most specific first. (Nav is replaced via LANG_NAV_RE before applyPairs.) */
const ET_PAIRS = [
  ['<html lang="en" data-hreflang-suite="library">', '<html lang="et" data-hreflang-suite="library">'],
  [
    '<meta name="description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta name="description" content="8 harjutust valmis mallidega – tulemused minutitega.">',
  ],
  [
    '<link rel="canonical" href="https://www.promptanatomy.info/en/">',
    '<link rel="canonical" href="https://www.promptanatomy.info/et/">',
  ],
  [
    '<meta property="og:url" content="https://www.promptanatomy.info/en/">',
    '<meta property="og:url" content="https://www.promptanatomy.info/et/">',
  ],
  [
    '<meta property="og:locale" content="en_US">',
    '<meta property="og:locale" content="et_EE">',
  ],
  [
    '<meta property="og:title" content="Let AI do 30–50% of your daily tasks – Prompt Anatomy">',
    '<meta property="og:title" content="Laske tehisintellektil teha 30–50% teie igapäevastest ülesannetest – Prompti anatoomia">',
  ],
  [
    '<meta property="og:description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta property="og:description" content="8 harjutust valmis mallidega – tulemused minutitega.">',
  ],
  [
    '<meta name="twitter:title" content="Let AI do 30–50% of your daily tasks – Prompt Anatomy">',
    '<meta name="twitter:title" content="Laske tehisintellektil teha 30–50% teie igapäevastest ülesannetest – Prompti anatoomia">',
  ],
  [
    '<meta name="twitter:description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta name="twitter:description" content="8 harjutust valmis mallidega – tulemused minutitega.">',
  ],
  [
    '"@id":"https://www.promptanatomy.info/en/#webpage"',
    '"@id":"https://www.promptanatomy.info/et/#webpage"',
  ],
  [
    '"url":"https://www.promptanatomy.info/en/"',
    '"url":"https://www.promptanatomy.info/et/"',
  ],
  ['"inLanguage":"en"', '"inLanguage":"et"'],
  [
    '"name":"Let AI do 30–50% of your daily tasks – Prompt Anatomy"',
    '"name":"Laske tehisintellektil teha 30–50% teie igapäevastest ülesannetest – Prompti anatoomia"',
  ],
  [
    '"description":"8 exercises with ready-made templates – results in minutes."',
    '"description":"8 harjutust valmis mallidega – tulemused minutitega."',
  ],
  ['https://www.promptanatomy.info/en/#block', 'https://www.promptanatomy.info/et/#block'],
  ['"name":"AI Context Check"', '"name":"Tehisintellekti konteksti kontroll"'],
  ['"name":"Organization Portrait"', '"name":"Organisatsiooni portree"'],
  ['"name":"My Role in the Organization"', '"name":"Minu roll organisatsioonis"'],
  ['"name":"Job Description + KPI"', '"name":"Ametijuhend + KPI"'],
  ['"name":"Core Work Processes"', '"name":"Põhitööprotsessid"'],
  ['"name":"AI Help and Optimization"', '"name":"Tehisintellekti abi ja optimeerimine"'],
  ['"name":"Daily Prompt Library"', '"name":"Igapäevane promptide kogu"'],
  ['"name":"Critical Situation Simulation"', '"name":"Kriitilise olukorra simulatsioon"'],
  [
    '<title>Let AI do 30–50% of your daily tasks – Prompt Anatomy</title>',
    '<title>Laske tehisintellektil teha 30–50% teie igapäevastest ülesannetest – Prompti anatoomia</title>',
  ],
  [
    "<style>:root { --codeblock-copy-hint: 'Select and copy'; }</style>",
    "<style>:root { --codeblock-copy-hint: 'Valige ja kopeerige'; }</style>",
  ],
  [
    '<a href="#main-content" class="skip-link">Skip to content</a>',
    '<a href="#main-content" class="skip-link">Otse sisuni</a>',
  ],
  [
    'aria-label="Full Prompt Anatomy – interactive course (opens in new tab)">Prompt Anatomy</a>',
    'aria-label="Prompt Anatomy interaktiivne kursus (avaneb uuel kaardil)">Prompt Anatomy</a>',
  ],
  ['<h1>Let AI do 30–50% of your daily tasks</h1>', '<h1>Laske tehisintellektil teha 30–50% teie igapäevastest ülesannetest</h1>'],
  ['<p>8 exercises with ready-made templates – results in minutes.</p>', '<p>8 harjutust valmis mallidega – tulemused minutitega.</p>'],
  [
    'aria-label="Who it\'s for">Who it\'s for: Managers, specialists, consultants, freelancers.</p>',
    'aria-label="Kellele">Kellele: juhtidele, spetsialistidele, konsultantidele, vabakutselistele.</p>',
  ],
  [
    'aria-label="Use first prompt – go to prompt 1">Use first prompt</a>',
    'aria-label="Kasutage esimest prompti – minge 1. prompti juurde">Kasutage esimest prompti</a>',
  ],
  [
    '<h2 id="objectives-title"><i data-lucide="target" aria-hidden="true"></i> What you get</h2>',
    '<h2 id="objectives-title"><i data-lucide="target" aria-hidden="true"></i> Mida saate</h2>',
  ],
  [
    `<p class="objectives-intro">In 30 minutes you'll have a basic AI workflow:</p>`,
    '<p class="objectives-intro">30 minutiga saate põhilise tehisintellekti töövoo:</p>',
  ],
  ['<li><i data-lucide="check" aria-hidden="true"></i> 3–5 hours saved per week</li>', '<li><i data-lucide="check" aria-hidden="true"></i> 3–5 tundi nädalas kokkuhoitud</li>'],
  ['<li><i data-lucide="check" aria-hidden="true"></i> Up to 6× lower error risk</li>', '<li><i data-lucide="check" aria-hidden="true"></i> Kuni 6× väiksem veaoht</li>'],
  ['<li><i data-lucide="check" aria-hidden="true"></i> 8 standardized templates</li>', '<li><i data-lucide="check" aria-hidden="true"></i> 8 standardiseeritud malli</li>'],
  [
    '<li><i data-lucide="check" aria-hidden="true"></i> Clear automation logic instead of chaotic prompts</li>',
    '<li><i data-lucide="check" aria-hidden="true"></i> Selge automatiseerimise loogika kaootiliste promptide asemel</li>',
  ],
  [
    '<span>How to use this library</span>',
    '<span>Kuidas seda kogu kasutada</span>',
  ],
  [
    'aria-label="Approx. time: 3–5 min per step">~3–5 min per step</span>',
    'aria-label="Orienteeruv aeg: 3–5 min sammu kohta">~3–5 min sammu kohta</span>',
  ],
  [
    '<li>Choose a prompt and tap <strong>“Copy prompt”</strong> below the text – everything is copied in one step. On a computer, you can also select the text and use <code>Ctrl+C</code> / <code>Cmd+C</code>.</li>',
    '<li>Valige prompt ja vajutage teksti all olevat <strong>„Kopeerige prompt“</strong> — kogu tekst kopeeritakse ühe klõpsuga. Arvutis saate ka teksti märgistada ja kasutada <code>Ctrl+C</code> / <code>Cmd+C</code>.</li>',
  ],
  [
    '<li>Paste into ChatGPT, Claude, or another AI tool</li>',
    '<li>Kleepige ChatGPT-sse, Claudesse või teise tehisintellekti tööriista</li>',
  ],
  [
    `<li>If the prompt has <code>[COMPANY]</code> – replace with your company or your client's; if <code>[MY ROLE]</code> – replace with your role. The AI role (e.g. “critical analyst”) is already in the prompt – no need to change it.</li>`,
    '<li>Kui promptis on <code>[ETTEVÕTE]</code> – asendage oma või kliendi ettevõtte nimega; kui <code>[MINU ROLL]</code> – asendage oma ametinimetusega. Tehisintellekti roll (nt „kriitiline analüütik“) on juba promptis – seda muutma ei pea.</li>',
  ],
  [
    `<p id="progressText">You've used 0 of 8 prompts.</p>`,
    '<p id="progressText">Olete kasutanud 0/8 prompti.</p>',
  ],
  ['aria-label="Progress">', 'aria-label="Edenemine">'],
  ['<div class="category">Foundation</div>', '<div class="category">Alused</div>'],
  ['<h2 class="prompt-title">AI Context Check</h2>', '<h2 class="prompt-title">Tehisintellekti konteksti kontroll</h2>'],
  [
    '<p class="prompt-desc">Check what ChatGPT knows about your organization and where it might go wrong</p>',
    '<p class="prompt-desc">Kontrollige, mida ChatGPT teie organisatsiooni kohta teab ja kus võib eksida</p>',
  ],
  ['aria-label="Select and copy prompt 1"', 'aria-label="Valige ja kopeerige prompt 1"'],
  ['<h3 class="before-use-title" id="before-use-title-1">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-1">Enne kasutamist</h3>'],
  [
    `<p><strong>Use when:</strong> you start analyzing an organization; you want to check what the AI knows about the company; you're preparing to use AI with context.</p>`,
    '<p><strong>Kasutage, kui:</strong> alustate organisatsiooni analüüsi; soovite kontrollida, mida tehisintellekt ettevõtte kohta teab; valmistute tehisintellekti koos kontekstiga kasutama.</p>',
  ],
  ['<p><strong>Replace before using:</strong></p>', '<p><strong>Enne kasutamist asendage:</strong></p>'],
  [
    `<li>[COMPANY] → your company or your client's (e.g. Acme Inc).</li>`,
    '<li>[ETTEVÕTE] → teie või kliendi ettevõte (nt Acme Inc).</li>',
  ],
  [
    '<p><strong>What to do:</strong> This is not a questionnaire. Copy the text above and paste it into ChatGPT or Claude.</p>',
    '<p><strong>Mida teha:</strong> See ei ole küsimustik. Kopeerige ülalolev tekst ja kleepige ChatGPT-sse või Claudesse.</p>',
  ],
  [
    '<p><strong>What to do:</strong> Copy the text above and paste it into ChatGPT or Claude.</p>',
    '<p><strong>Mida teha:</strong> Kopeerige ülalolev tekst ja kleepige ChatGPT-sse või Claudesse.</p>',
  ],
  ['aria-label="Information about this prompt">', 'aria-label="Teave selle prompti kohta">'],
  ['<strong>Why it matters</strong>', '<strong>Miks see loeb</strong>'],
  [
    '<p>Reduces AI “hallucinations” and wrong decisions – you see what the AI knows about your context.</p>',
    '<p>Vähendab tehisintellekti „hallutsinatsioone“ ja valesid otsuseid – näete selgelt, mida tehisintellekt teie konteksti kohta tegelikult teab.</p>',
  ],
  ['aria-label="Copy prompt 1 to clipboard"', 'aria-label="Kopeerige prompt 1 lõikelauale"'],
  ['<span>Copy prompt</span>', '<span>Kopeerige prompt</span>'],
  ['aria-label="Mark this step as done"', 'aria-label="Märkige see samm tehtuks"'],
  ['<span>Mark as done</span>', '<span>Märkige tehtuks</span>'],
  ['<div class="category">Analysis</div>', '<div class="category">Analüüs</div>'],
  ['<h2 class="prompt-title" id="prompt-title-2">Organization Portrait</h2>', '<h2 class="prompt-title" id="prompt-title-2">Organisatsiooni portree</h2>'],
  ['<p class="prompt-desc">Open for the prompt – get a structured company profile in ~5 min</p>', '<p class="prompt-desc">Avage prompt — saate struktureeritud ettevõtte profiili ~5 minutiga</p>'],
  ['aria-label="Select and copy prompt 2"', 'aria-label="Valige ja kopeerige prompt 2"'],
  ['<h3 class="before-use-title" id="before-use-title-2">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-2">Enne kasutamist</h3>'],
  [
    `<p><strong>Use when:</strong> you want a clear organization profile; you're preparing context for other prompts; you're analyzing a client or partner.</p>`,
    '<p><strong>Kasutage, kui:</strong> soovite selget organisatsiooni profiili; valmistate konteksti teiste promptide jaoks; analüüsite klienti või partnerit.</p>',
  ],
  ['<strong>Application</strong>', '<strong>Rakendus</strong>'],
  [
    '<p>This prompt creates organization context for all other prompts.</p>',
    '<p>See prompt loob organisatsiooni konteksti, mida kasutatakse kõigis teistes promptides.</p>',
  ],
  ['aria-label="Copy prompt 2 to clipboard"', 'aria-label="Kopeerige prompt 2 lõikelauale"'],
  ['aria-label="Select and copy prompt 3"', 'aria-label="Valige ja kopeerige prompt 3"'],
  ['<div class="category">Role</div>', '<div class="category">Roll</div>'],
  ['<h2 class="prompt-title" id="prompt-title-3">My Role in the Organization</h2>', '<h2 class="prompt-title" id="prompt-title-3">Minu roll organisatsioonis</h2>'],
  [
    `<p class="prompt-desc">Clarify your role's purpose and impact before AI fills the gaps</p>`,
    '<p class="prompt-desc">Selgitage oma rolli eesmärki ja mõju, enne kui tehisintellekt lüngad täidab</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-3">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-3">Enne kasutamist</h3>'],
  [
    `<p><strong>Use when:</strong> you want to clarify your role; you're starting with a new company; you need a reference for your position.</p>`,
    '<p><strong>Kasutage, kui:</strong> soovite oma rolli selgitada; alustate uue ettevõttega; vajate ametikoha viidet.</p>',
  ],
  [
    `<li>[COMPANY] → your company or your client's (e.g. Acme Inc);</li>`,
    '<li>[ETTEVÕTE] → teie või kliendi ettevõte (nt Acme Inc);</li>',
  ],
  [
    '<li>[MY ROLE] → your job title (e.g. Sales Manager).</li>',
    '<li>[MINU ROLL] → teie ametinimetus (nt müügijuht).</li>',
  ],
  ['<strong>Result</strong>', '<strong>Tulemus</strong>'],
  [
    '<p>You get a clear role description – use it as a reference for the next steps.</p>',
    '<p>Saate selge rollikirjelduse – kasutage seda järgmiste sammude jaoks.</p>',
  ],
  ['aria-label="Copy prompt 3 to clipboard"', 'aria-label="Kopeerige prompt 3 lõikelauale"'],
  ['aria-label="Select and copy prompt 4"', 'aria-label="Valige ja kopeerige prompt 4"'],
  ['<div class="category">Document</div>', '<div class="category">Dokument</div>'],
  ['<h2 class="prompt-title" id="prompt-title-4">Job Description + KPI</h2>', '<h2 class="prompt-title" id="prompt-title-4">Ametijuhend + KPI</h2>'],
  ['<p class="prompt-desc">Open → practical job description with measurable KPIs</p>', '<p class="prompt-desc">Avage → praktiline ametijuhend mõõdetavate KPI-dega, mida saate kasutada</p>'],
  ['<h3 class="before-use-title" id="before-use-title-4">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-4">Enne kasutamist</h3>'],
  [
    `<p><strong>Use when:</strong> you need a job description; you're preparing for review or onboarding; you want measurable KPIs.</p>`,
    '<p><strong>Kasutage, kui:</strong> vajate ametijuhendit; valmistute ülevaatuseks või sisseelamiseks; soovite mõõdetavaid KPI-sid.</p>',
  ],
  ['<strong>Practical value</strong>', '<strong>Praktiline väärtus</strong>'],
  [
    '<p>This document can be used for self-assessment or onboarding new employees.</p>',
    '<p>Seda dokumenti saab kasutada enesehindluseks või uute töötajate sisseelamiseks.</p>',
  ],
  ['aria-label="Copy prompt 4 to clipboard"', 'aria-label="Kopeerige prompt 4 lõikelauale"'],
  ['aria-label="Select and copy prompt 5"', 'aria-label="Valige ja kopeerige prompt 5"'],
  ['<div class="category">Processes</div>', '<div class="category">Protsessid</div>'],
  ['<h2 class="prompt-title" id="prompt-title-5">Core Work Processes</h2>', '<h2 class="prompt-title" id="prompt-title-5">Põhitööprotsessid</h2>'],
  [
    '<p class="prompt-desc">See where 80% of your time goes – input for the AI optimization step</p>',
    '<p class="prompt-desc">Vaadake, kuhu läheb 80% teie ajast — sisend tehisintellekti optimeerimise sammule</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-5">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-5">Enne kasutamist</h3>'],
  [
    '<p><strong>Use when:</strong> you want to see where time goes; optimize your workday; prepare for AI integration.</p>',
    '<p><strong>Kasutage, kui:</strong> soovite näha, kuhu aeg läheb; tööpäeva optimeerida; valmistuda tehisintellekti lõimimiseks.</p>',
  ],
  ['<strong>Optimization</strong>', '<strong>Optimeerimine</strong>'],
  [
    '<p>Once you understand the processes, you can see where AI will have the biggest impact.</p>',
    '<p>Kui protsessid on selged, näete, kus tehisintellektil on suurim mõju.</p>',
  ],
  ['aria-label="Copy prompt 5 to clipboard"', 'aria-label="Kopeerige prompt 5 lõikelauale"'],
  ['aria-label="Select and copy prompt 6"', 'aria-label="Valige ja kopeerige prompt 6"'],
  ['<div class="category">AI Integration</div>', '<div class="category">Tehisintellekt</div>'],
  ['<h2 class="prompt-title" id="prompt-title-6">AI Help and Optimization</h2>', '<h2 class="prompt-title" id="prompt-title-6">Tehisintellekti abi ja optimeerimine</h2>'],
  [
    '<p class="prompt-desc">Turn your process map into concrete AI shortcuts that save hours</p>',
    '<p class="prompt-desc">Muutke oma protsessikaart konkreetseteks tehisintellekti otseteedeks, mis säästavad tunde</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-6">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-6">Enne kasutamist</h3>'],
  [
    '<p><strong>Use when:</strong> you already have process descriptions (step 5); you want concrete ways to use AI; you want to save time.</p>',
    '<p><strong>Kasutage, kui:</strong> teil on juba protsessikirjeldused (samm 5); soovite konkreetseid viise tehisintellekti kasutamiseks; soovite aega säästa.</p>',
  ],
  ['<strong>Real impact</strong>', '<strong>Tegelik mõju</strong>'],
  [
    '<p>This prompt helps identify specific places where AI can save hours per week.</p>',
    '<p>See prompt aitab leida konkreetseid kohti, kus tehisintellekt võib nädalas tunde säästa.</p>',
  ],
  ['aria-label="Copy prompt 6 to clipboard"', 'aria-label="Kopeerige prompt 6 lõikelauale"'],
  ['aria-label="Select and copy prompt 7"', 'aria-label="Valige ja kopeerige prompt 7"'],
  ['<div class="category">Library</div>', '<div class="category">Kogu</div>'],
  ['<h2 class="prompt-title" id="prompt-title-7">Daily Prompt Library</h2>', '<h2 class="prompt-title" id="prompt-title-7">Igapäevane promptide kogu</h2>'],
  [
    '<p class="prompt-desc">Open → a personal table of prompts for everyday work</p>',
    '<p class="prompt-desc">Avage → isiklik promptide tabel igapäevatööks</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-7">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-7">Enne kasutamist</h3>'],
  [
    '<p><strong>Use when:</strong> you want personal prompts for daily work and quick decisions; you want a [prompt | when | problem] table.</p>',
    '<p><strong>Kasutage, kui:</strong> soovite isiklikke prompte igapäevatööks ja kiireteks otsusteks; soovite tabelit veergudega <code>[KÜSITIS]</code> | <code>[MILLAL KASUTAN]</code> | <code>[MILLISE PROBLEEMI LAHENDAB]</code>.</p>',
  ],
  ['<strong>Daily improvement</strong>', '<strong>Igapäevane areng</strong>'],
  [
    '<p>You get a personal prompt collection – use it every day without extra thinking.</p>',
    '<p>Saate isikliku promptide kogu – kasutage iga päev lisamõtlemata.</p>',
  ],
  ['aria-label="Copy prompt 7 to clipboard"', 'aria-label="Kopeerige prompt 7 lõikelauale"'],
  ['aria-label="Select and copy prompt 8"', 'aria-label="Valige ja kopeerige prompt 8"'],
  ['<div class="category">Simulation</div>', '<div class="category">Simulatsioon</div>'],
  ['<h2 class="prompt-title" id="prompt-title-8">Critical Situation Simulation</h2>', '<h2 class="prompt-title" id="prompt-title-8">Kriitilise olukorra simulatsioon</h2>'],
  [
    '<p class="prompt-desc">Rehearse high-pressure decisions with AI before they happen</p>',
    '<p class="prompt-desc">Harjutage surve all otsuseid tehisintellektiga enne, kui need juhtuvad</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-8">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-8">Enne kasutamist</h3>'],
  [
    '<p><strong>Use when:</strong> you want to prepare for crises; plan a response to pressure; train decisions with AI.</p>',
    '<p><strong>Kasutage, kui:</strong> soovite valmistuda kriisideks; planeerida reaktsiooni survele; treenida otsuseid tehisintellektiga.</p>',
  ],
  ['<strong>Readiness</strong>', '<strong>Valmidus</strong>'],
  [
    '<p>Simulations help you learn to manage crises before they happen. Better to practice with AI than in a real situation.</p>',
    '<p>Simulatsioonid aitavad õppida kriise juhtima enne, kui need juhtuvad. Parem harjutada tehisintellektiga kui päris olukorras.</p>',
  ],
  ['aria-label="Copy prompt 8 to clipboard"', 'aria-label="Kopeerige prompt 8 lõikelauale"'],
  [
    '<a href="#block2" class="prompt-next-link">Next: Organization Portrait →</a>',
    '<a href="#block2" class="prompt-next-link">Järgmine: Organisatsiooni portree →</a>',
  ],
  [
    '<a href="#block3" class="prompt-next-link">Next: My Role in the Organization →</a>',
    '<a href="#block3" class="prompt-next-link">Järgmine: Minu roll organisatsioonis →</a>',
  ],
  [
    '<a href="#block4" class="prompt-next-link">Next: Job Description + KPI →</a>',
    '<a href="#block4" class="prompt-next-link">Järgmine: Ametijuhend + KPI →</a>',
  ],
  [
    '<a href="#block5" class="prompt-next-link">Next: Core Work Processes →</a>',
    '<a href="#block5" class="prompt-next-link">Järgmine: Põhitööprotsessid →</a>',
  ],
  [
    '<a href="#block6" class="prompt-next-link">Next: AI Help and Optimization →</a>',
    '<a href="#block6" class="prompt-next-link">Järgmine: Tehisintellekti abi ja optimeerimine →</a>',
  ],
  [
    '<a href="#block7" class="prompt-next-link">Next: Daily Prompt Library →</a>',
    '<a href="#block7" class="prompt-next-link">Järgmine: Igapäevane promptide kogu →</a>',
  ],
  [
    '<a href="#block8" class="prompt-next-link">Next: Critical Situation Simulation →</a>',
    '<a href="#block8" class="prompt-next-link">Järgmine: Kriitilise olukorra simulatsioon →</a>',
  ],
  [
    "<a href=\"#ritual-complete\" class=\"prompt-next-link\">Finished? See what's next →</a>",
    '<a href="#ritual-complete" class="prompt-next-link">Lõpetatud? Vaadake, mis edasi →</a>',
  ],
  [
    '<h2 id="ritual-complete-title">You finished the 8 prompts</h2>',
    '<h2 id="ritual-complete-title">Lõpetasite 8 prompti</h2>',
  ],
  [
    '<p>You now have context, a role picture, processes, and a personal daily set.</p>',
    '<p>Teil on nüüd kontekst, rollipilt, protsessid ja isiklik igapäevane komplekt.</p>',
  ],
  [
    'aria-label="Learn the full system – interactive course (opens in new tab)">Learn the full system →</a>',
    'aria-label="Õppige kogu süsteemi – interaktiivne kursus (avaneb uuel kaardil)">Õppige kogu süsteemi →</a>',
  ],
  ['<h2 id="next-steps-title">Jump to a step</h2>', '<h2 id="next-steps-title">Minge sammule</h2>'],
  [
    '<p>Best in order from 1 to 8.</p>',
    '<p>Parim on minna järjekorras 1–8.</p>',
  ],
  ['<a href="#block1">1. Context check</a>', '<a href="#block1">1. Konteksti kontroll</a>'],
  ['<a href="#block2">2. Organization portrait</a>', '<a href="#block2">2. Organisatsiooni portree</a>'],
  ['<a href="#block3">3. My role</a>', '<a href="#block3">3. Minu roll</a>'],
  ['<a href="#block4">4. Job description + KPI</a>', '<a href="#block4">4. Ametijuhend + KPI</a>'],
  ['<a href="#block5">5. Work processes</a>', '<a href="#block5">5. Tööprotsessid</a>'],
  ['<a href="#block6">6. AI optimization</a>', '<a href="#block6">6. Tehisintellekti optimeerimine</a>'],
  ['<a href="#block7">7. Daily library</a>', '<a href="#block7">7. Igapäevane kogu</a>'],
  ['<a href="#block8">8. Critical situation simulation</a>', '<a href="#block8">8. Kriitilise olukorra simulatsioon</a>'],
  [
    '<h2 id="ecosystem-title">Daily Workflow Library</h2>',
    '<h2 id="ecosystem-title">Daily Workflow Library</h2>',
  ],
  [
    '<p class="ecosystem-lead">Your AI operating system for strategy, tactics, and operations. You are in the Daily Workflow Library.</p>',
    '<p class="ecosystem-lead">Teie tehisintellekti operatsioonisüsteem strateegia, taktika ja operatsioonide jaoks. Olete Daily Workflow Library\'s.</p>',
  ],
  [
    'alt="Diagram: promptanatomy.app at the center, connected to promptanatomy.cloud, promptanatomy.info, promptanatomy.space, promptanatomy.help, promptanatomy.blog, promptanatomy.pro, and promptanatomy.ceo"',
    'alt="Skeem: promptanatomy.app keskel, ühendatud promptanatomy.cloud, promptanatomy.info, promptanatomy.space, promptanatomy.help, promptanatomy.blog, promptanatomy.pro ja promptanatomy.ceo"',
  ],
  [
    '<h2 id="community-title">Want more?<br>Join us on Telegram.</h2>',
    '<h2 id="community-title">Soovite rohkem?<br>Liituge Telegramis.</h2>',
  ],
  [
    '<p>Shared discussions, tips, and news about prompts and AI.</p>',
    '<p>Ühised arutelud, nõuanded ja uudised promptide ja tehisintellekti kohta.</p>',
  ],
  [
    'aria-label="Open Prompt Anatomy Telegram channel in new tab">Join Telegram</a>',
    'aria-label="Avage Prompt Anatomy Telegrami kanal uuel kaardil">Liituge Telegramiga</a>',
  ],
  [
    'aria-label="Full Prompt Anatomy – interactive course (opens in new tab)">Prompt Anatomy →</a>',
    'aria-label="Prompt Anatomy interaktiivne kursus (avaneb uuel kaardil)">Prompt Anatomy →</a>',
  ],
  [
    '<h3>Good luck with your prompts <i data-lucide="rocket" aria-hidden="true"></i></h3>',
    '<h3>Edu promptidega <i data-lucide="rocket" aria-hidden="true"></i></h3>',
  ],
  [
    '<p>If the prompt has [COMPANY] or [MY ROLE] – replace with your details. The AI role (e.g. “critical analyst”) is already set – no need to change it.</p>',
    '<p>Kui promptis on [ETTEVÕTE] või [MINU ROLL] – asendage oma andmetega. Tehisintellekti roll (nt „kriitiline analüütik“) on juba seatud – seda muutma ei pea.</p>',
  ],
  ['<span class="tag" role="listitem"><i data-lucide="bot" aria-hidden="true"></i> AI-optimized</span>', '<span class="tag" role="listitem"><i data-lucide="bot" aria-hidden="true"></i> Tehisintellektile optimeeritud</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="book-marked" aria-hidden="true"></i> 8 prompts</span>', '<span class="tag" role="listitem"><i data-lucide="book-marked" aria-hidden="true"></i> 8 prompti</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="zap" aria-hidden="true"></i> Quick start</span>', '<span class="tag" role="listitem"><i data-lucide="zap" aria-hidden="true"></i> Kiire start</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="target" aria-hidden="true"></i> Results</span>', '<span class="tag" role="listitem"><i data-lucide="target" aria-hidden="true"></i> Tulemused</span>'],
  [
    '<a href="privacy.html" class="footer-meta-link">Privacy</a>',
    '<a href="privacy.html" class="footer-meta-link">Privaatsus</a>',
  ],
  [
    'Part of Prompt Anatomy · Training &amp; checkout →',
    'Prompt Anatomy ökosüsteem · Koolitus ja kassa →',
  ],
  [
    '<p>&copy; 2026 Tomas Staniulis. Training material. All rights reserved.</p>',
    '<p>&copy; 2026 Tomas Staniulis. Õppematerjal. Kõik õigused kaitstud.</p>',
  ],
  ['aria-label="Copy text field"', 'aria-label="Kopeerimisväli"'],
  ['aria-label="Copy notification">', 'aria-label="Kopeerimisteade">'],
  ['<span>Copied</span>', '<span>Kopeeritud</span>'],
];

/** Estonian replacements for js/library.js only */
const ET_JS_PAIRS = [
  [
    "button.innerHTML = '<i data-lucide=\"check\" aria-hidden=\"true\"></i><span>Copied</span>';",
    "button.innerHTML = '<i data-lucide=\"check\" aria-hidden=\"true\"></i><span>Kopeeritud</span>';",
  ],
  [
    "showError(button, 'Something went wrong. Try copying again.');",
    "showError(button, 'Midagi läks valesti. Proovige uuesti kopeerida.');",
  ],
  [
    "showError(button, 'Something went wrong. Try copying again. Select the text and use Ctrl+C (or Cmd+C).');",
    "showError(button, 'Midagi läks valesti. Proovige uuesti. Valige tekst ja kasutage Ctrl+C (või Cmd+C).');",
  ],
  [
    "showError(button, 'Copy didn\\'t work. Select the text and use Ctrl+C (or Cmd+C).');",
    "showError(button, 'Kopeerimine ei õnnestunud. Valige tekst ja kasutage Ctrl+C (või Cmd+C).');",
  ],
  [
    "button.setAttribute('aria-label', 'Prompt copied successfully');",
    "button.setAttribute('aria-label', 'Prompt on kopeeritud');",
  ],
  [
    "button.setAttribute('aria-label', `Copy prompt ${promptId.replace('prompt', '')} to clipboard`);",
    "button.setAttribute('aria-label', `Kopeerige prompt ${promptId.replace('prompt', '')} lõikelauale`);",
  ],
  [
    "const errorMessage = message || 'Something went wrong. Try copying again.';",
    "const errorMessage = message || 'Midagi läks valesti. Proovige uuesti kopeerida.';",
  ],
  [
    "if (textEl) textEl.textContent = count === 8 ? 'Great – you\\'ve used all 8.' : 'You\\'ve used ' + count + ' of 8 prompts.';",
    "if (textEl) textEl.textContent = count === 8 ? 'Suurepärane – olete kasutanud kõiki 8 prompti.' : 'Olete kasutanud ' + count + '/8 prompti.';",
  ],
];

/** Latvian UI pairs. */
const LV_PAIRS = [
  ['<html lang="en" data-hreflang-suite="library">', '<html lang="lv" data-hreflang-suite="library">'],
  [
    '<meta name="description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta name="description" content="8 vingrinājumi ar gatavām veidnēm – rezultāti dažu minūšu laikā.">',
  ],
  [
    '<link rel="canonical" href="https://www.promptanatomy.info/en/">',
    '<link rel="canonical" href="https://www.promptanatomy.info/lv/">',
  ],
  [
    '<meta property="og:url" content="https://www.promptanatomy.info/en/">',
    '<meta property="og:url" content="https://www.promptanatomy.info/lv/">',
  ],
  [
    '<meta property="og:locale" content="en_US">',
    '<meta property="og:locale" content="lv_LV">',
  ],
  [
    '<meta property="og:title" content="Let AI do 30–50% of your daily tasks – Prompt Anatomy">',
    '<meta property="og:title" content="Ļaujiet MI veikt 30–50% no jūsu ikdienas uzdevumiem – Prompt Anatomy">',
  ],
  [
    '<meta property="og:description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta property="og:description" content="8 vingrinājumi ar gatavām veidnēm – rezultāti dažu minūšu laikā.">',
  ],
  [
    '<meta name="twitter:title" content="Let AI do 30–50% of your daily tasks – Prompt Anatomy">',
    '<meta name="twitter:title" content="Ļaujiet MI veikt 30–50% no jūsu ikdienas uzdevumiem – Prompt Anatomy">',
  ],
  [
    '<meta name="twitter:description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta name="twitter:description" content="8 vingrinājumi ar gatavām veidnēm – rezultāti dažu minūšu laikā.">',
  ],
  [
    '"@id":"https://www.promptanatomy.info/en/#webpage"',
    '"@id":"https://www.promptanatomy.info/lv/#webpage"',
  ],
  [
    '"url":"https://www.promptanatomy.info/en/"',
    '"url":"https://www.promptanatomy.info/lv/"',
  ],
  ['"inLanguage":"en"', '"inLanguage":"lv"'],
  [
    '"name":"Let AI do 30–50% of your daily tasks – Prompt Anatomy"',
    '"name":"Ļaujiet MI veikt 30–50% no jūsu ikdienas uzdevumiem – Prompt Anatomy"',
  ],
  [
    '"description":"8 exercises with ready-made templates – results in minutes."',
    '"description":"8 vingrinājumi ar gatavām veidnēm – rezultāti dažu minūšu laikā."',
  ],
  ['https://www.promptanatomy.info/en/#block', 'https://www.promptanatomy.info/lv/#block'],
  ['"name":"AI Context Check"', '"name":"MI konteksta pārbaude"'],
  ['"name":"Organization Portrait"', '"name":"Organizācijas portrets"'],
  ['"name":"My Role in the Organization"', '"name":"Mana loma organizācijā"'],
  ['"name":"Job Description + KPI"', '"name":"Amata apraksts + KPI"'],
  ['"name":"Core Work Processes"', '"name":"Galvenie darba procesi"'],
  ['"name":"AI Help and Optimization"', '"name":"MI palīdzība un optimizācija"'],
  ['"name":"Daily Prompt Library"', '"name":"Ikdienas promptu bibliotēka"'],
  ['"name":"Critical Situation Simulation"', '"name":"Kritiskas situācijas simulācija"'],
  [
    '<title>Let AI do 30–50% of your daily tasks – Prompt Anatomy</title>',
    '<title>Ļaujiet MI veikt 30–50% no jūsu ikdienas uzdevumiem – Prompt Anatomy</title>',
  ],
  [
    "<style>:root { --codeblock-copy-hint: 'Select and copy'; }</style>",
    "<style>:root { --codeblock-copy-hint: 'Atlasiet un kopējiet'; }</style>",
  ],
  [
    '<a href="#main-content" class="skip-link">Skip to content</a>',
    '<a href="#main-content" class="skip-link">Tieši uz saturu</a>',
  ],
  [
    'aria-label="Full Prompt Anatomy – interactive course (opens in new tab)">Prompt Anatomy</a>',
    'aria-label="Pilnā Prompt Anatomy – interaktīvs kurss (atveras jaunā cilnē)">Prompt Anatomy</a>',
  ],
  ['<h1>Let AI do 30–50% of your daily tasks</h1>', '<h1>Ļaujiet MI veikt 30–50% no jūsu ikdienas uzdevumiem</h1>'],
  ['<p>8 exercises with ready-made templates – results in minutes.</p>', '<p>8 vingrinājumi ar gatavām veidnēm – rezultāti dažu minūšu laikā.</p>'],
  [
    'aria-label="Who it\'s for">Who it\'s for: Managers, specialists, consultants, freelancers.</p>',
    'aria-label="Kam">Kam: vadītājiem, speciālistiem, konsultantiem, frīlanseriem.</p>',
  ],
  [
    'aria-label="Use first prompt – go to prompt 1">Use first prompt</a>',
    'aria-label="Izmantojiet pirmo promptu – uz promptu 1">Izmantojiet pirmo promptu</a>',
  ],
  [
    '<h2 id="objectives-title"><i data-lucide="target" aria-hidden="true"></i> What you get</h2>',
    '<h2 id="objectives-title"><i data-lucide="target" aria-hidden="true"></i> Ko iegūstat</h2>',
  ],
  [
    `<p class="objectives-intro">In 30 minutes you'll have a basic AI workflow:</p>`,
    '<p class="objectives-intro">30 minūtēs iegūsiet pamata MI darba plūsmu:</p>',
  ],
  ['<li><i data-lucide="check" aria-hidden="true"></i> 3–5 hours saved per week</li>', '<li><i data-lucide="check" aria-hidden="true"></i> 3–5 stundas ietaupītas nedēļā</li>'],
  ['<li><i data-lucide="check" aria-hidden="true"></i> Up to 6× lower error risk</li>', '<li><i data-lucide="check" aria-hidden="true"></i> Līdz 6× mazāks kļūdu risks</li>'],
  ['<li><i data-lucide="check" aria-hidden="true"></i> 8 standardized templates</li>', '<li><i data-lucide="check" aria-hidden="true"></i> 8 standartizētas veidnes</li>'],
  [
    '<li><i data-lucide="check" aria-hidden="true"></i> Clear automation logic instead of chaotic prompts</li>',
    '<li><i data-lucide="check" aria-hidden="true"></i> Skaidra automatizācijas loģika, nevis haotiski prompti</li>',
  ],
  ['<span>How to use this library</span>', '<span>Kā lietot šo bibliotēku</span>'],
  [
    'aria-label="Approx. time: 3–5 min per step">~3–5 min per step</span>',
    'aria-label="Orientējošais laiks: 3–5 min uz soli">~3–5 min uz soli</span>',
  ],
  [
    '<li>Choose a prompt and tap <strong>“Copy prompt”</strong> below the text – everything is copied in one step. On a computer, you can also select the text and use <code>Ctrl+C</code> / <code>Cmd+C</code>.</li>',
    '<li>Izvēlieties promptu un nospiediet <strong>„Kopēt promptu“</strong> zem teksta — viss teksts tiek nokopēts ar vienu klikšķi. Datorā varat arī atlasīt tekstu un izmantot <code>Ctrl+C</code> / <code>Cmd+C</code>.</li>',
  ],
  ['<li>Paste into ChatGPT, Claude, or another AI tool</li>', '<li>Ielīmējiet ChatGPT, Claude vai citā MI rīkā</li>'],
  [
    `<li>If the prompt has <code>[COMPANY]</code> – replace with your company or your client's; if <code>[MY ROLE]</code> – replace with your role. The AI role (e.g. “critical analyst”) is already in the prompt – no need to change it.</li>`,
    '<li>Ja promptā ir <code>[UZŅĒMUMS]</code> – aizstājiet ar savu vai klienta uzņēmuma nosaukumu; ja <code>[MANA LOMA]</code> – ar savu amatu. MI loma (piem. „kritisks analītiķis“) jau ir promptā – nav jāmaina.</li>',
  ],
  [`<p id="progressText">You've used 0 of 8 prompts.</p>`, '<p id="progressText">Esat izmantojuši 0 no 8 promptiem.</p>'],
  ['aria-label="Progress">', 'aria-label="Progres">'],
  ['<div class="category">Foundation</div>', '<div class="category">Pamati</div>'],
  ['<h2 class="prompt-title">AI Context Check</h2>', '<h2 class="prompt-title">MI konteksta pārbaude</h2>'],
  [
    '<p class="prompt-desc">Check what ChatGPT knows about your organization and where it might go wrong</p>',
    '<p class="prompt-desc">Pārbaudiet, ko ChatGPT zina par jūsu organizāciju un kur tas var kļūdīties</p>',
  ],
  ['aria-label="Select and copy prompt 1"', 'aria-label="Atlasīt un kopēt promptu 1"'],
  ['<h3 class="before-use-title" id="before-use-title-1">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-1">Pirms lietošanas</h3>'],
  [
    `<p><strong>Use when:</strong> you start analyzing an organization; you want to check what the AI knows about the company; you're preparing to use AI with context.</p>`,
    '<p><strong>Lietojiet, kad:</strong> sākat analizēt organizāciju; vēlaties pārbaudīt, ko MI zina par uzņēmumu; gatavojaties lietot MI ar kontekstu.</p>',
  ],
  ['<p><strong>Replace before using:</strong></p>', '<p><strong>Pirms lietošanas aizstājiet:</strong></p>'],
  [
    `<li>[COMPANY] → your company or your client's (e.g. Acme Inc).</li>`,
    '<li>[UZŅĒMUMS] → jūsu vai klienta uzņēmums (piem. Acme Inc).</li>',
  ],
  [
    '<p><strong>What to do:</strong> This is not a questionnaire. Copy the text above and paste it into ChatGPT or Claude.</p>',
    '<p><strong>Ko darīt:</strong> Tas nav jautājumu saraksts. Kopējiet augstāk esošo tekstu un ielīmējiet ChatGPT vai Claude.</p>',
  ],
  [
    '<p><strong>What to do:</strong> Copy the text above and paste it into ChatGPT or Claude.</p>',
    '<p><strong>Ko darīt:</strong> Kopējiet augstāk esošo tekstu un ielīmējiet ChatGPT vai Claude.</p>',
  ],
  ['aria-label="Information about this prompt">', 'aria-label="Informācija par šo promptu">'],
  ['<strong>Why it matters</strong>', '<strong>Kāpēc tas svarīgi</strong>'],
  [
    '<p>Reduces AI “hallucinations” and wrong decisions – you see what the AI knows about your context.</p>',
    '<p>Samazina MI „halucinācijas“ un nepareizus lēmumus – skaidri redzat, ko MI patiesi zina par jūsu kontekstu.</p>',
  ],
  ['aria-label="Copy prompt 1 to clipboard"', 'aria-label="Kopēt promptu 1 starpliktuvē"'],
  ['<span>Copy prompt</span>', '<span>Kopēt promptu</span>'],
  ['aria-label="Mark this step as done"', 'aria-label="Atzīmēt šo soli kā izdarītu"'],
  ['<span>Mark as done</span>', '<span>Atzīmēt kā izdarītu</span>'],
  ['<div class="category">Analysis</div>', '<div class="category">Analīze</div>'],
  ['<h2 class="prompt-title" id="prompt-title-2">Organization Portrait</h2>', '<h2 class="prompt-title" id="prompt-title-2">Organizācijas portrets</h2>'],
  ['<p class="prompt-desc">Open for the prompt – get a structured company profile in ~5 min</p>', '<p class="prompt-desc">Atveriet promptu — iegūstiet strukturētu uzņēmuma profilu ~5 minūtēs</p>'],
  ['aria-label="Select and copy prompt 2"', 'aria-label="Atlasīt un kopēt promptu 2"'],
  ['<h3 class="before-use-title" id="before-use-title-2">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-2">Pirms lietošanas</h3>'],
  [
    `<p><strong>Use when:</strong> you want a clear organization profile; you're preparing context for other prompts; you're analyzing a client or partner.</p>`,
    '<p><strong>Lietojiet, kad:</strong> vēlaties skaidru organizācijas profilu; gatavojat kontekstu citiem promptiem; analizējat klientu vai partneri.</p>',
  ],
  ['<strong>Application</strong>', '<strong>Pielietojums</strong>'],
  [
    '<p>This prompt creates organization context for all other prompts.</p>',
    '<p>Šis prompts rada organizācijas kontekstu, ko izmantosiet visos pārējos promptos.</p>',
  ],
  ['aria-label="Copy prompt 2 to clipboard"', 'aria-label="Kopēt promptu 2 starpliktuvē"'],
  ['aria-label="Select and copy prompt 3"', 'aria-label="Atlasīt un kopēt promptu 3"'],
  ['<div class="category">Role</div>', '<div class="category">Loma</div>'],
  ['<h2 class="prompt-title" id="prompt-title-3">My Role in the Organization</h2>', '<h2 class="prompt-title" id="prompt-title-3">Mana loma organizācijā</h2>'],
  [
    `<p class="prompt-desc">Clarify your role's purpose and impact before AI fills the gaps</p>`,
    '<p class="prompt-desc">Precizējiet savas lomas mērķi un ietekmi, pirms MI aizpilda nepilnības</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-3">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-3">Pirms lietošanas</h3>'],
  [
    `<p><strong>Use when:</strong> you want to clarify your role; you're starting with a new company; you need a reference for your position.</p>`,
    '<p><strong>Lietojiet, kad:</strong> vēlaties noskaidrot savu lomu; sākat jaunā uzņēmumā; vajag atsauci uz savu amatu.</p>',
  ],
  [
    `<li>[COMPANY] → your company or your client's (e.g. Acme Inc);</li>`,
    '<li>[UZŅĒMUMS] → jūsu vai klienta uzņēmums (piem. Acme Inc);</li>',
  ],
  [
    '<li>[MY ROLE] → your job title (e.g. Sales Manager).</li>',
    '<li>[MANA LOMA] → jūsu amata nosaukums (piem. pārdošanas vadītājs).</li>',
  ],
  ['<strong>Result</strong>', '<strong>Rezultāts</strong>'],
  [
    '<p>You get a clear role description – use it as a reference for the next steps.</p>',
    '<p>Iegūstat skaidru lomas aprakstu – izmantojiet kā atsauci nākamajiem soļiem.</p>',
  ],
  ['aria-label="Copy prompt 3 to clipboard"', 'aria-label="Kopēt promptu 3 starpliktuvē"'],
  ['aria-label="Select and copy prompt 4"', 'aria-label="Atlasīt un kopēt promptu 4"'],
  ['<div class="category">Document</div>', '<div class="category">Dokuments</div>'],
  ['<h2 class="prompt-title" id="prompt-title-4">Job Description + KPI</h2>', '<h2 class="prompt-title" id="prompt-title-4">Amata apraksts + KPI</h2>'],
  ['<p class="prompt-desc">Open → practical job description with measurable KPIs</p>', '<p class="prompt-desc">Atveriet → praktisku amata aprakstu ar izmērāmiem KPI, ko varat izmantot</p>'],
  ['<h3 class="before-use-title" id="before-use-title-4">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-4">Pirms lietošanas</h3>'],
  [
    `<p><strong>Use when:</strong> you need a job description; you're preparing for review or onboarding; you want measurable KPIs.</p>`,
    '<p><strong>Lietojiet, kad:</strong> vajag amata aprakstu; gatavojaties pārbaudei vai ievadīšanai; vēlaties izmērāmus KPI.</p>',
  ],
  ['<strong>Practical value</strong>', '<strong>Praktiskā vērtība</strong>'],
  [
    '<p>This document can be used for self-assessment or onboarding new employees.</p>',
    '<p>Šo dokumentu var izmantot pašnovērtējumam vai jaunu darbinieku ievadīšanai.</p>',
  ],
  ['aria-label="Copy prompt 4 to clipboard"', 'aria-label="Kopēt promptu 4 starpliktuvē"'],
  ['aria-label="Select and copy prompt 5"', 'aria-label="Atlasīt un kopēt promptu 5"'],
  ['<div class="category">Processes</div>', '<div class="category">Procesi</div>'],
  ['<h2 class="prompt-title" id="prompt-title-5">Core Work Processes</h2>', '<h2 class="prompt-title" id="prompt-title-5">Galvenie darba procesi</h2>'],
  [
    '<p class="prompt-desc">See where 80% of your time goes – input for the AI optimization step</p>',
    '<p class="prompt-desc">Redziet, kur iet 80% laika — ievade MI optimizācijas solim</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-5">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-5">Pirms lietošanas</h3>'],
  [
    '<p><strong>Use when:</strong> you want to see where time goes; optimize your workday; prepare for AI integration.</p>',
    '<p><strong>Lietojiet, kad:</strong> vēlaties redzēt, kur iet laiks; optimizējat darba dienu; gatavojaties MI integrācijai.</p>',
  ],
  ['<strong>Optimization</strong>', '<strong>Optimizācija</strong>'],
  [
    '<p>Once you understand the processes, you can see where AI will have the biggest impact.</p>',
    '<p>Saprotot procesus, redzat, kur MI būs lielākā ietekme.</p>',
  ],
  ['aria-label="Copy prompt 5 to clipboard"', 'aria-label="Kopēt promptu 5 starpliktuvē"'],
  ['aria-label="Select and copy prompt 6"', 'aria-label="Atlasīt un kopēt promptu 6"'],
  ['<div class="category">AI Integration</div>', '<div class="category">MI integrācija</div>'],
  ['<h2 class="prompt-title" id="prompt-title-6">AI Help and Optimization</h2>', '<h2 class="prompt-title" id="prompt-title-6">MI palīdzība un optimizācija</h2>'],
  [
    '<p class="prompt-desc">Turn your process map into concrete AI shortcuts that save hours</p>',
    '<p class="prompt-desc">Pārvērtiet procesu karti konkrētos MI īsceļos, kas ietaupa stundas</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-6">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-6">Pirms lietošanas</h3>'],
  [
    '<p><strong>Use when:</strong> you already have process descriptions (step 5); you want concrete ways to use AI; you want to save time.</p>',
    '<p><strong>Lietojiet, kad:</strong> jau ir procesu apraksti (5. solis); vēlaties konkrētus veidus MI lietošanai; vēlaties ietaupīt laiku.</p>',
  ],
  ['<strong>Real impact</strong>', '<strong>Reālā ietekme</strong>'],
  [
    '<p>This prompt helps identify specific places where AI can save hours per week.</p>',
    '<p>Šis prompts palīdz atrast konkrētas vietas, kur MI var ietaupīt stundas nedēļā.</p>',
  ],
  ['aria-label="Copy prompt 6 to clipboard"', 'aria-label="Kopēt promptu 6 starpliktuvē"'],
  ['aria-label="Select and copy prompt 7"', 'aria-label="Atlasīt un kopēt promptu 7"'],
  ['<div class="category">Library</div>', '<div class="category">Bibliotēka</div>'],
  ['<h2 class="prompt-title" id="prompt-title-7">Daily Prompt Library</h2>', '<h2 class="prompt-title" id="prompt-title-7">Ikdienas promptu bibliotēka</h2>'],
  [
    '<p class="prompt-desc">Open → a personal table of prompts for everyday work</p>',
    '<p class="prompt-desc">Atveriet → personīgu promptu tabulu ikdienas darbam</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-7">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-7">Pirms lietošanas</h3>'],
  [
    '<p><strong>Use when:</strong> you want personal prompts for daily work and quick decisions; you want a [prompt | when | problem] table.</p>',
    '<p><strong>Lietojiet, kad:</strong> vēlaties personīgus promptus; ikdienas darbam un ātriem lēmumiem; vēlaties tabulu ar kolonnām <code>[PROMPTTEKSTS]</code> | <code>[KAD LIETOJU]</code> | <code>[KĀDU PROBLĒMU RISINA]</code>.</p>',
  ],
  ['<strong>Daily improvement</strong>', '<strong>Ikdienas uzlabojums</strong>'],
  [
    '<p>You get a personal prompt collection – use it every day without extra thinking.</p>',
    '<p>Iegūstat personīgu promptu kolekciju – lietojiet katru dienu bez liekām pārdomām.</p>',
  ],
  ['aria-label="Copy prompt 7 to clipboard"', 'aria-label="Kopēt promptu 7 starpliktuvē"'],
  ['aria-label="Select and copy prompt 8"', 'aria-label="Atlasīt un kopēt promptu 8"'],
  ['<div class="category">Simulation</div>', '<div class="category">Simulācija</div>'],
  ['<h2 class="prompt-title" id="prompt-title-8">Critical Situation Simulation</h2>', '<h2 class="prompt-title" id="prompt-title-8">Kritiskas situācijas simulācija</h2>'],
  [
    '<p class="prompt-desc">Rehearse high-pressure decisions with AI before they happen</p>',
    '<p class="prompt-desc">Izspēlējiet spiediena lēmumus ar MI, pirms tie notiek</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-8">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-8">Pirms lietošanas</h3>'],
  [
    '<p><strong>Use when:</strong> you want to prepare for crises; plan a response to pressure; train decisions with AI.</p>',
    '<p><strong>Lietojiet, kad:</strong> vēlaties sagatavoties krīzēm; plānot reakciju uz spiedienu; trenēt lēmumus ar MI.</p>',
  ],
  ['<strong>Readiness</strong>', '<strong>Gatavība</strong>'],
  [
    '<p>Simulations help you learn to manage crises before they happen. Better to practice with AI than in a real situation.</p>',
    '<p>Simulācijas palīdz mācīties pārvaldīt krīses pirms tās notiek. Labāk trenēties ar MI nekā reālā situācijā.</p>',
  ],
  ['aria-label="Copy prompt 8 to clipboard"', 'aria-label="Kopēt promptu 8 starpliktuvē"'],
  [
    '<a href="#block2" class="prompt-next-link">Next: Organization Portrait →</a>',
    '<a href="#block2" class="prompt-next-link">Tālāk: Organizācijas portrets →</a>',
  ],
  [
    '<a href="#block3" class="prompt-next-link">Next: My Role in the Organization →</a>',
    '<a href="#block3" class="prompt-next-link">Tālāk: Mana loma organizācijā →</a>',
  ],
  [
    '<a href="#block4" class="prompt-next-link">Next: Job Description + KPI →</a>',
    '<a href="#block4" class="prompt-next-link">Tālāk: Amata apraksts + KPI →</a>',
  ],
  [
    '<a href="#block5" class="prompt-next-link">Next: Core Work Processes →</a>',
    '<a href="#block5" class="prompt-next-link">Tālāk: Galvenie darba procesi →</a>',
  ],
  [
    '<a href="#block6" class="prompt-next-link">Next: AI Help and Optimization →</a>',
    '<a href="#block6" class="prompt-next-link">Tālāk: MI palīdzība un optimizācija →</a>',
  ],
  [
    '<a href="#block7" class="prompt-next-link">Next: Daily Prompt Library →</a>',
    '<a href="#block7" class="prompt-next-link">Tālāk: Ikdienas promptu bibliotēka →</a>',
  ],
  [
    '<a href="#block8" class="prompt-next-link">Next: Critical Situation Simulation →</a>',
    '<a href="#block8" class="prompt-next-link">Tālāk: Kritiskas situācijas simulācija →</a>',
  ],
  [
    "<a href=\"#ritual-complete\" class=\"prompt-next-link\">Finished? See what's next →</a>",
    '<a href="#ritual-complete" class="prompt-next-link">Pabeigts? Skatiet, kas tālāk →</a>',
  ],
  [
    '<h2 id="ritual-complete-title">You finished the 8 prompts</h2>',
    '<h2 id="ritual-complete-title">Jūs pabeidzāt 8 promptus</h2>',
  ],
  [
    '<p>You now have context, a role picture, processes, and a personal daily set.</p>',
    '<p>Tagad jums ir konteksts, lomas apraksts, procesi un personīgs ikdienas komplekts.</p>',
  ],
  [
    'aria-label="Learn the full system – interactive course (opens in new tab)">Learn the full system →</a>',
    'aria-label="Apgūstiet visu sistēmu – interaktīvs kurss (atveras jaunā cilnē)">Apgūstiet visu sistēmu →</a>',
  ],
  ['<h2 id="next-steps-title">Jump to a step</h2>', '<h2 id="next-steps-title">Pārejiet uz soli</h2>'],
  [
    '<p>Best in order from 1 to 8.</p>',
    '<p>Vislabāk iet secībā no 1 līdz 8.</p>',
  ],
  ['<a href="#block1">1. Context check</a>', '<a href="#block1">1. Konteksta pārbaude</a>'],
  ['<a href="#block2">2. Organization portrait</a>', '<a href="#block2">2. Organizācijas portrets</a>'],
  ['<a href="#block3">3. My role</a>', '<a href="#block3">3. Mana loma</a>'],
  ['<a href="#block4">4. Job description + KPI</a>', '<a href="#block4">4. Amata apraksts + KPI</a>'],
  ['<a href="#block5">5. Work processes</a>', '<a href="#block5">5. Darba procesi</a>'],
  ['<a href="#block6">6. AI optimization</a>', '<a href="#block6">6. MI optimizācija</a>'],
  ['<a href="#block7">7. Daily library</a>', '<a href="#block7">7. Ikdienas bibliotēka</a>'],
  ['<a href="#block8">8. Critical situation simulation</a>', '<a href="#block8">8. Kritiskas situācijas simulācija</a>'],
  [
    '<h2 id="ecosystem-title">Daily Workflow Library</h2>',
    '<h2 id="ecosystem-title">Daily Workflow Library</h2>',
  ],
  [
    '<p class="ecosystem-lead">Your AI operating system for strategy, tactics, and operations. You are in the Daily Workflow Library.</p>',
    '<p class="ecosystem-lead">Jūsu mākslīgā intelekta operētājsistēma stratēģijai, taktikai un operācijām. Jūs atrodaties Daily Workflow Library.</p>',
  ],
  [
    'alt="Diagram: promptanatomy.app at the center, connected to promptanatomy.cloud, promptanatomy.info, promptanatomy.space, promptanatomy.help, promptanatomy.blog, promptanatomy.pro, and promptanatomy.ceo"',
    'alt="Shēma: promptanatomy.app centrā, savienots ar promptanatomy.cloud, promptanatomy.info, promptanatomy.space, promptanatomy.help, promptanatomy.blog, promptanatomy.pro un promptanatomy.ceo"',
  ],
  [
    '<h2 id="community-title">Want more?<br>Join us on Telegram.</h2>',
    '<h2 id="community-title">Vēlaties vairāk?<br>Pievienojieties Telegram.</h2>',
  ],
  [
    '<p>Shared discussions, tips, and news about prompts and AI.</p>',
    '<p>Kopīgas diskusijas, padomi un jaunumi par promptiem un MI.</p>',
  ],
  [
    'aria-label="Open Prompt Anatomy Telegram channel in new tab">Join Telegram</a>',
    'aria-label="Atvērt Prompt Anatomy Telegram kanālu jaunā cilnē">Pievienojieties Telegram</a>',
  ],
  [
    'aria-label="Full Prompt Anatomy – interactive course (opens in new tab)">Prompt Anatomy →</a>',
    'aria-label="Pilnā Prompt Anatomy – interaktīvs kurss (atveras jaunā cilnē)">Prompt Anatomy →</a>',
  ],
  [
    '<h3>Good luck with your prompts <i data-lucide="rocket" aria-hidden="true"></i></h3>',
    '<h3>Veiksmi ar promptiem <i data-lucide="rocket" aria-hidden="true"></i></h3>',
  ],
  [
    '<p>If the prompt has [COMPANY] or [MY ROLE] – replace with your details. The AI role (e.g. “critical analyst”) is already set – no need to change it.</p>',
    '<p>Ja promptā ir [UZŅĒMUMS] vai [MANA LOMA] – aizstājiet ar saviem datiem. MI loma (piem. „kritisks analītiķis“) jau ir iestatīta – nav jāmaina.</p>',
  ],
  ['<span class="tag" role="listitem"><i data-lucide="bot" aria-hidden="true"></i> AI-optimized</span>', '<span class="tag" role="listitem"><i data-lucide="bot" aria-hidden="true"></i> MI optimizēts</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="book-marked" aria-hidden="true"></i> 8 prompts</span>', '<span class="tag" role="listitem"><i data-lucide="book-marked" aria-hidden="true"></i> 8 prompti</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="zap" aria-hidden="true"></i> Quick start</span>', '<span class="tag" role="listitem"><i data-lucide="zap" aria-hidden="true"></i> Ātrs sākums</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="target" aria-hidden="true"></i> Results</span>', '<span class="tag" role="listitem"><i data-lucide="target" aria-hidden="true"></i> Rezultāti</span>'],
  [
    '<a href="privacy.html" class="footer-meta-link">Privacy</a>',
    '<a href="privacy.html" class="footer-meta-link">Privātums</a>',
  ],
  [
    'Part of Prompt Anatomy · Training &amp; checkout →',
    'Prompt Anatomy ekosistēma · Apmācība un norēķins →',
  ],
  [
    '<p>&copy; 2026 Tomas Staniulis. Training material. All rights reserved.</p>',
    '<p>&copy; 2026 Tomas Staniulis. Apmācību materiāls. Visas tiesības aizsargātas.</p>',
  ],
  ['aria-label="Copy text field"', 'aria-label="Kopēšanas lauks"'],
  ['aria-label="Copy notification">', 'aria-label="Kopēšanas paziņojums">'],
  ['<span>Copied</span>', '<span>Nokopēts</span>'],
];

/** Latvian replacements for js/library.js only */
const LV_JS_PAIRS = [
  [
    "button.innerHTML = '<i data-lucide=\"check\" aria-hidden=\"true\"></i><span>Copied</span>';",
    "button.innerHTML = '<i data-lucide=\"check\" aria-hidden=\"true\"></i><span>Nokopēts</span>';",
  ],
  [
    "showError(button, 'Something went wrong. Try copying again.');",
    "showError(button, 'Kaut kas nogāja nepareizi. Mēģiniet kopēt vēlreiz.');",
  ],
  [
    "showError(button, 'Something went wrong. Try copying again. Select the text and use Ctrl+C (or Cmd+C).');",
    "showError(button, 'Kaut kas nogāja nepareizi. Mēģiniet vēlreiz. Atlasiet tekstu un izmantojiet Ctrl+C (vai Cmd+C).');",
  ],
  [
    "showError(button, 'Copy didn\\'t work. Select the text and use Ctrl+C (or Cmd+C).');",
    "showError(button, 'Kopēšana neizdevās. Atlasiet tekstu un izmantojiet Ctrl+C (vai Cmd+C).');",
  ],
  [
    "button.setAttribute('aria-label', 'Prompt copied successfully');",
    "button.setAttribute('aria-label', 'Prompt veiksmīgi nokopēts');",
  ],
  [
    "button.setAttribute('aria-label', `Copy prompt ${promptId.replace('prompt', '')} to clipboard`);",
    "button.setAttribute('aria-label', `Kopēt promptu ${promptId.replace('prompt', '')} starpliktuvē`);",
  ],
  [
    "const errorMessage = message || 'Something went wrong. Try copying again.';",
    "const errorMessage = message || 'Kaut kas nogāja nepareizi. Mēģiniet kopēt vēlreiz.';",
  ],
  [
    "if (textEl) textEl.textContent = count === 8 ? 'Great – you\\'ve used all 8.' : 'You\\'ve used ' + count + ' of 8 prompts.';",
    "if (textEl) textEl.textContent = count === 8 ? 'Lieliski – esat izmantojuši visus 8.' : 'Esat izmantojuši ' + count + ' no 8 promptiem.';",
  ],
];

/** Lithuanian replacements for js/library.js only (generated output: library.lt.js) */
const LT_JS_PAIRS = [
  [
    "button.innerHTML = '<i data-lucide=\"check\" aria-hidden=\"true\"></i><span>Copied</span>';",
    "button.innerHTML = '<i data-lucide=\"check\" aria-hidden=\"true\"></i><span>Nukopijuota</span>';",
  ],
  [
    "showError(button, 'Something went wrong. Try copying again.');",
    "showError(button, 'Kažkas nepavyko. Bandyk kopijuoti dar kartą.');",
  ],
  [
    "showError(button, 'Something went wrong. Try copying again. Select the text and use Ctrl+C (or Cmd+C).');",
    "showError(button, 'Kažkas nepavyko. Bandyk dar kartą. Pažymėk tekstą ir naudok Ctrl+C (arba Cmd+C).');",
  ],
  [
    "showError(button, 'Copy didn\\'t work. Select the text and use Ctrl+C (or Cmd+C).');",
    "showError(button, 'Kopijavimas nepavyko. Pažymėk tekstą ir naudok Ctrl+C (arba Cmd+C).');",
  ],
  [
    "button.setAttribute('aria-label', 'Prompt copied successfully');",
    "button.setAttribute('aria-label', 'Promptas sėkmingai nukopijuotas');",
  ],
  [
    "button.setAttribute('aria-label', `Copy prompt ${promptId.replace('prompt', '')} to clipboard`);",
    "button.setAttribute('aria-label', `Kopijuoti promptą ${promptId.replace('prompt', '')} į mainų atmintinę`);",
  ],
  [
    "const errorMessage = message || 'Something went wrong. Try copying again.';",
    "const errorMessage = message || 'Kažkas nepavyko. Bandyk kopijuoti dar kartą.';",
  ],
  [
    "if (textEl) textEl.textContent = count === 8 ? 'Great – you\\'ve used all 8.' : 'You\\'ve used ' + count + ' of 8 prompts.';",
    "if (textEl) textEl.textContent = count === 8 ? 'Puiku – panaudojai visus 8.' : 'Panaudojai ' + count + ' iš 8 promptų.';",
  ],
  [
    "throw new Error('execCommand copy failed');",
    "throw new Error('execCommand copy nepavyko');",
  ],
];

const libPath = path.join(root, 'js', 'library.js');
const libEn = fs
  .readFileSync(libPath, 'utf8')
  .replace(/\r\n/g, '\n')
  .replace(/\r/g, '\n');

let etHtml = replacePromptBodies(en, ET_PROMPTS);
etHtml = etHtml.replace(LANG_NAV_RE, ET_NAV.trim());
etHtml = etHtml.replace(FOOTER_LANG_NAV_RE, ET_FOOTER_NAV.trim());
etHtml = applyPairs(etHtml, ET_PAIRS);
etHtml = etHtml.replaceAll('../js/library.js', '../js/library.et.js');

let lvHtml = replacePromptBodies(en, LV_PROMPTS);
lvHtml = lvHtml.replace(LANG_NAV_RE, LV_NAV.trim());
lvHtml = lvHtml.replace(FOOTER_LANG_NAV_RE, LV_FOOTER_NAV.trim());
lvHtml = applyPairs(lvHtml, LV_PAIRS);
lvHtml = lvHtml.replaceAll('../js/library.js', '../js/library.lv.js');

let deHtml = replacePromptBodies(en, DE_PROMPTS);
deHtml = deHtml.replace(LANG_NAV_RE, DE_NAV.trim());
deHtml = deHtml.replace(FOOTER_LANG_NAV_RE, DE_FOOTER_NAV.trim());
deHtml = applyPairs(deHtml, DE_PAIRS);
deHtml = deHtml.replaceAll('../js/library.js', '../js/library.de.js');

writeUtf8Lf(path.join(root, 'et', 'index.html'), etHtml);
writeUtf8Lf(path.join(root, 'lv', 'index.html'), lvHtml);
writeUtf8Lf(path.join(root, 'de', 'index.html'), deHtml);
writeUtf8Lf(path.join(root, 'js', 'library.et.js'), applyPairs(libEn, ET_JS_PAIRS));
writeUtf8Lf(path.join(root, 'js', 'library.lv.js'), applyPairs(libEn, LV_JS_PAIRS));
writeUtf8Lf(path.join(root, 'js', 'library.de.js'), applyPairs(libEn, DE_JS_PAIRS));
writeUtf8Lf(path.join(root, 'js', 'library.lt.js'), applyPairs(libEn, LT_JS_PAIRS));
console.log('Wrote et/index.html, lv/index.html, de/index.html, js/library.et.js, js/library.lv.js, js/library.de.js, js/library.lt.js');
