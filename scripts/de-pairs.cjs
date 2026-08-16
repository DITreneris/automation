'use strict';

/** German nav + UI pairs for generate-et-lv-pages.cjs (ET/LV model). */

const DE_NAV = `                <nav class="lang-switcher lang-switcher--dropdown" aria-label="Sprache">
                    <button type="button"
                            class="lang-switcher-trigger"
                            id="lang-switcher-trigger-hero"
                            aria-expanded="false"
                            aria-controls="lang-switcher-menu-hero">
                        <i data-lucide="languages" aria-hidden="true" class="lang-switcher-icon"></i>
                        <span class="lang-switcher-trigger-text">Deutsch</span>
                        <span class="lang-switcher-chevron" aria-hidden="true">▾</span>
                    </button>
                    <ul class="lang-switcher-menu" id="lang-switcher-menu-hero" hidden>
                        <li><a href="../lt/" class="lang-option lang-link" data-lang="lt" lang="lt" hreflang="lt" onclick="try{localStorage.setItem('lang','lt')}catch(e){}">Lietuvių</a></li>
                        <li><a href="../en/" class="lang-option lang-link" data-lang="en" lang="en" hreflang="en" onclick="try{localStorage.setItem('lang','en')}catch(e){}">English</a></li>
                        <li><a href="../et/" class="lang-option lang-link" data-lang="et" lang="et" hreflang="et" onclick="try{localStorage.setItem('lang','et')}catch(e){}">Eesti</a></li>
                        <li><a href="../lv/" class="lang-option lang-link" data-lang="lv" lang="lv" hreflang="lv" onclick="try{localStorage.setItem('lang','lv')}catch(e){}">Latviešu</a></li>
                        <li><span class="lang-option lang-option--current" aria-current="page" lang="de">Deutsch</span></li>
                        <li><a href="../ja/" class="lang-option lang-link" data-lang="ja" lang="ja" hreflang="ja" onclick="try{localStorage.setItem('lang','ja')}catch(e){}">日本語</a></li>
                        <li><a href="../zh/" class="lang-option lang-link" data-lang="zh" lang="zh-Hans" hreflang="zh-Hans" onclick="try{localStorage.setItem('lang','zh')}catch(e){}">简体中文</a></li>
                    </ul>
                </nav>`;

const DE_FOOTER_NAV = `            <nav class="lang-switcher lang-switcher--dropdown lang-switcher--footer" aria-label="Sprache">
                <button type="button"
                        class="lang-switcher-trigger"
                        id="lang-switcher-trigger-footer"
                        aria-expanded="false"
                        aria-controls="lang-switcher-menu-footer">
                    <i data-lucide="languages" aria-hidden="true" class="lang-switcher-icon"></i>
                    <span class="lang-switcher-trigger-text">Deutsch</span>
                    <span class="lang-switcher-chevron" aria-hidden="true">▾</span>
                </button>
                <ul class="lang-switcher-menu" id="lang-switcher-menu-footer" hidden>
                    <li><a href="../lt/" class="lang-option lang-link" data-lang="lt" lang="lt" hreflang="lt" onclick="try{localStorage.setItem('lang','lt')}catch(e){}">Lietuvių</a></li>
                    <li><a href="../en/" class="lang-option lang-link" data-lang="en" lang="en" hreflang="en" onclick="try{localStorage.setItem('lang','en')}catch(e){}">English</a></li>
                    <li><a href="../et/" class="lang-option lang-link" data-lang="et" lang="et" hreflang="et" onclick="try{localStorage.setItem('lang','et')}catch(e){}">Eesti</a></li>
                    <li><a href="../lv/" class="lang-option lang-link" data-lang="lv" lang="lv" hreflang="lv" onclick="try{localStorage.setItem('lang','lv')}catch(e){}">Latviešu</a></li>
                    <li><span class="lang-option lang-option--current" aria-current="page" lang="de">Deutsch</span></li>
                    <li><a href="../ja/" class="lang-option lang-link" data-lang="ja" lang="ja" hreflang="ja" onclick="try{localStorage.setItem('lang','ja')}catch(e){}">日本語</a></li>
                    <li><a href="../zh/" class="lang-option lang-link" data-lang="zh" lang="zh-Hans" hreflang="zh-Hans" onclick="try{localStorage.setItem('lang','zh')}catch(e){}">简体中文</a></li>
                </ul>
            </nav>`;

const DE_PAIRS = [
  ['<html lang="en" data-hreflang-suite="library">', '<html lang="de" data-hreflang-suite="library">'],
  [
    '<meta name="description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta name="description" content="8 Übungen mit fertigen Vorlagen – Ergebnisse in Minuten.">',
  ],
  [
    '<link rel="canonical" href="https://www.promptanatomy.info/en/">',
    '<link rel="canonical" href="https://www.promptanatomy.info/de/">',
  ],
  [
    '<meta property="og:url" content="https://www.promptanatomy.info/en/">',
    '<meta property="og:url" content="https://www.promptanatomy.info/de/">',
  ],
  [
    '<meta property="og:locale" content="en_US">',
    '<meta property="og:locale" content="de_DE">',
  ],
  [
    '<meta property="og:locale:alternate" content="de_DE">',
    '<meta property="og:locale:alternate" content="en_US">',
  ],
  [
    '<meta property="og:title" content="Let AI do 30–50% of your daily tasks – Prompt Anatomy">',
    '<meta property="og:title" content="Lassen Sie KI 30–50% Ihrer täglichen Aufgaben erledigen – Prompt Anatomy">',
  ],
  [
    '<meta property="og:description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta property="og:description" content="8 Übungen mit fertigen Vorlagen – Ergebnisse in Minuten.">',
  ],
  [
    '<meta name="twitter:title" content="Let AI do 30–50% of your daily tasks – Prompt Anatomy">',
    '<meta name="twitter:title" content="Lassen Sie KI 30–50% Ihrer täglichen Aufgaben erledigen – Prompt Anatomy">',
  ],
  [
    '<meta name="twitter:description" content="8 exercises with ready-made templates – results in minutes.">',
    '<meta name="twitter:description" content="8 Übungen mit fertigen Vorlagen – Ergebnisse in Minuten.">',
  ],
  [
    '"@id":"https://www.promptanatomy.info/en/#webpage"',
    '"@id":"https://www.promptanatomy.info/de/#webpage"',
  ],
  [
    '"@id":"https://www.promptanatomy.info/en/#howto"',
    '"@id":"https://www.promptanatomy.info/de/#howto"',
  ],
  [
    '"@id":"https://www.promptanatomy.info/en/#prompts"',
    '"@id":"https://www.promptanatomy.info/de/#prompts"',
  ],
  [
    '"url":"https://www.promptanatomy.info/en/"',
    '"url":"https://www.promptanatomy.info/de/"',
  ],
  ['"inLanguage":"en"', '"inLanguage":"de"'],
  [
    '"name":"Let AI do 30–50% of your daily tasks – Prompt Anatomy"',
    '"name":"Lassen Sie KI 30–50% Ihrer täglichen Aufgaben erledigen – Prompt Anatomy"',
  ],
  [
    '"description":"8 exercises with ready-made templates – results in minutes."',
    '"description":"8 Übungen mit fertigen Vorlagen – Ergebnisse in Minuten."',
  ],
  ['https://www.promptanatomy.info/en/#block', 'https://www.promptanatomy.info/de/#block'],
  ['"name":"AI Context Check"', '"name":"KI-Kontextprüfung"'],
  ['"name":"Organization Portrait"', '"name":"Organisationsporträt"'],
  ['"name":"My Role in the Organization"', '"name":"Meine Rolle in der Organisation"'],
  ['"name":"Job Description + KPI"', '"name":"Stellenbeschreibung + KPI"'],
  ['"name":"Core Work Processes"', '"name":"Kernarbeitsprozesse"'],
  ['"name":"AI Help and Optimization"', '"name":"KI-Hilfe und Optimierung"'],
  ['"name":"Daily Prompt Library"', '"name":"Tägliche Prompt-Sammlung"'],
  ['"name":"Critical Situation Simulation"', '"name":"Simulation kritischer Situationen"'],
  [
    '<title>Let AI do 30–50% of your daily tasks – Prompt Anatomy</title>',
    '<title>Lassen Sie KI 30–50% Ihrer täglichen Aufgaben erledigen – Prompt Anatomy</title>',
  ],
  [
    "<style>:root { --codeblock-copy-hint: 'Select and copy'; }</style>",
    "<style>:root { --codeblock-copy-hint: 'Markieren und kopieren'; }</style>",
  ],
  [
    '<a href="#main-content" class="skip-link">Skip to content</a>',
    '<a href="#main-content" class="skip-link">Zum Inhalt</a>',
  ],
  [
    'aria-label="Full Prompt Anatomy – interactive course (opens in new tab)">Prompt Anatomy</a>',
    'aria-label="Vollständiger Prompt-Anatomy-Kurs – interaktiv (öffnet in neuem Tab)">Prompt Anatomy</a>',
  ],
  ['<h1>Let AI do 30–50% of your daily tasks</h1>', '<h1>Lassen Sie KI 30–50% Ihrer täglichen Aufgaben erledigen</h1>'],
  ['<p>8 exercises with ready-made templates – results in minutes.</p>', '<p>8 Übungen mit fertigen Vorlagen – Ergebnisse in Minuten.</p>'],
  [
    'aria-label="Who it\'s for">Who it\'s for: Managers, specialists, consultants, freelancers.</p>',
    'aria-label="Für wen">Für: Führungskräfte, Fachleute, Beraterinnen und Berater, Freiberuflerinnen und Freiberufler.</p>',
  ],
  [
    'aria-label="Use first prompt – go to prompt 1">Use first prompt</a>',
    'aria-label="Ersten Prompt nutzen – zu Prompt 1">Ersten Prompt nutzen</a>',
  ],
  [
    '<h2 id="objectives-title"><i data-lucide="target" aria-hidden="true"></i> What you get</h2>',
    '<h2 id="objectives-title"><i data-lucide="target" aria-hidden="true"></i> Was Sie bekommen</h2>',
  ],
  [
    `<p class="objectives-intro">In 30 minutes you'll have a basic AI workflow:</p>`,
    '<p class="objectives-intro">In 30 Minuten haben Sie einen grundlegenden KI-Arbeitsablauf:</p>',
  ],
  ['<li><i data-lucide="check" aria-hidden="true"></i> 3–5 hours saved per week</li>', '<li><i data-lucide="check" aria-hidden="true"></i> 3–5 Stunden pro Woche gespart</li>'],
  ['<li><i data-lucide="check" aria-hidden="true"></i> Up to 6× lower error risk</li>', '<li><i data-lucide="check" aria-hidden="true"></i> Bis zu 6× geringeres Fehlerrisiko</li>'],
  ['<li><i data-lucide="check" aria-hidden="true"></i> 8 standardized templates</li>', '<li><i data-lucide="check" aria-hidden="true"></i> 8 standardisierte Vorlagen</li>'],
  [
    '<li><i data-lucide="check" aria-hidden="true"></i> Clear automation logic instead of chaotic prompts</li>',
    '<li><i data-lucide="check" aria-hidden="true"></i> Klare Automatisierungslogik statt chaotischer Prompts</li>',
  ],
  [
    '<span>How to use this library</span>',
    '<span>So nutzen Sie diese Bibliothek</span>',
  ],
  [
    'aria-label="Approx. time: 3–5 min per step">~3–5 min per step</span>',
    'aria-label="Ungefähre Zeit: 3–5 Min. pro Schritt">ca. 3–5 Min. pro Schritt</span>',
  ],
  [
    '<li>Choose a prompt and tap <strong>“Copy prompt”</strong> below the text – everything is copied in one step. On a computer, you can also select the text and use <code>Ctrl+C</code> / <code>Cmd+C</code>.</li>',
    '<li>Wählen Sie einen Prompt und tippen Sie unter dem Text auf <strong>„Prompt kopieren“</strong> – alles wird in einem Schritt kopiert. Am Computer können Sie den Text auch markieren und <code>Ctrl+C</code> / <code>Cmd+C</code> nutzen.</li>',
  ],
  [
    '<li>Paste into ChatGPT, Claude, or another AI tool</li>',
    '<li>Fügen Sie ihn in ChatGPT, Claude oder ein anderes KI-Werkzeug ein</li>',
  ],
  [
    `<li>If the prompt has <code>[COMPANY]</code> – replace with your company or your client's; if <code>[MY ROLE]</code> – replace with your role. The AI role (e.g. “critical analyst”) is already in the prompt – no need to change it.</li>`,
    '<li>Steht im Prompt <code>[UNTERNEHMEN]</code> – ersetzen Sie es durch Ihr Unternehmen oder das Ihrer Kundin bzw. Ihres Kunden; steht <code>[MEINE ROLLE]</code> – ersetzen Sie es durch Ihre Rolle. Die KI-Rolle (z. B. „kritischer Analyst“) steht schon im Prompt – Sie müssen sie nicht ändern.</li>',
  ],
  [
    `<p id="progressText">You've used 0 of 8 prompts.</p>`,
    '<p id="progressText">Sie haben 0 von 8 Prompts genutzt.</p>',
  ],
  ['aria-label="Progress">', 'aria-label="Fortschritt">'],
  ['<div class="category">Foundation</div>', '<div class="category">Grundlage</div>'],
  ['<h2 class="prompt-title">AI Context Check</h2>', '<h2 class="prompt-title">KI-Kontextprüfung</h2>'],
  [
    '<p class="prompt-desc">Check what ChatGPT knows about your organization and where it might go wrong</p>',
    '<p class="prompt-desc">Prüfen Sie, was ChatGPT über Ihre Organisation weiß und wo es irren kann</p>',
  ],
  ['aria-label="Select and copy prompt 1"', 'aria-label="Prompt 1 markieren und kopieren"'],
  ['<h3 class="before-use-title" id="before-use-title-1">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-1">Vor der Nutzung</h3>'],
  [
    `<p><strong>Use when:</strong> you start analyzing an organization; you want to check what the AI knows about the company; you're preparing to use AI with context.</p>`,
    '<p><strong>Nutzen, wenn:</strong> Sie eine Organisation analysieren; prüfen wollen, was die KI über das Unternehmen weiß; sich darauf vorbereiten, KI mit Kontext zu nutzen.</p>',
  ],
  ['<p><strong>Replace before using:</strong></p>', '<p><strong>Vor der Nutzung ersetzen:</strong></p>'],
  [
    `<li>[COMPANY] → your company or your client's (e.g. Acme Inc).</li>`,
    '<li>[UNTERNEHMEN] → Ihr Unternehmen oder das Ihrer Kundin bzw. Ihres Kunden (z. B. Acme Inc).</li>',
  ],
  [
    '<p><strong>What to do:</strong> This is not a questionnaire. Copy the text above and paste it into ChatGPT or Claude.</p>',
    '<p><strong>Was tun:</strong> Das ist kein Fragebogen. Kopieren Sie den Text oben und fügen Sie ihn in ChatGPT oder Claude ein.</p>',
  ],
  [
    '<p><strong>What to do:</strong> Copy the text above and paste it into ChatGPT or Claude.</p>',
    '<p><strong>Was tun:</strong> Kopieren Sie den Text oben und fügen Sie ihn in ChatGPT oder Claude ein.</p>',
  ],
  ['aria-label="Information about this prompt">', 'aria-label="Hinweise zu diesem Prompt">'],
  ['<strong>Why it matters</strong>', '<strong>Warum das zählt</strong>'],
  [
    '<p>Reduces AI “hallucinations” and wrong decisions – you see what the AI knows about your context.</p>',
    '<p>Verringert KI-„Halluzinationen“ und falsche Entscheidungen – Sie sehen, was die KI über Ihren Kontext weiß.</p>',
  ],
  ['aria-label="Copy prompt 1 to clipboard"', 'aria-label="Prompt 1 in die Zwischenablage kopieren"'],
  ['<span>Copy prompt</span>', '<span>Prompt kopieren</span>'],
  ['aria-label="Mark this step as done"', 'aria-label="Diesen Schritt als erledigt markieren"'],
  ['<span>Mark as done</span>', '<span>Als erledigt markieren</span>'],
  ['<div class="category">Analysis</div>', '<div class="category">Analyse</div>'],
  ['<h2 class="prompt-title" id="prompt-title-2">Organization Portrait</h2>', '<h2 class="prompt-title" id="prompt-title-2">Organisationsporträt</h2>'],
  ['<p class="prompt-desc">Open for the prompt – get a structured company profile in ~5 min</p>', '<p class="prompt-desc">Öffnen für den Prompt – in ca. 5 Min. ein strukturiertes Unternehmensprofil</p>'],
  ['aria-label="Select and copy prompt 2"', 'aria-label="Prompt 2 markieren und kopieren"'],
  ['<h3 class="before-use-title" id="before-use-title-2">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-2">Vor der Nutzung</h3>'],
  [
    `<p><strong>Use when:</strong> you want a clear organization profile; you're preparing context for other prompts; you're analyzing a client or partner.</p>`,
    '<p><strong>Nutzen, wenn:</strong> Sie ein klares Organisationsprofil wollen; Kontext für andere Prompts vorbereiten; eine Kundin, einen Kunden oder Partner analysieren.</p>',
  ],
  ['<strong>Application</strong>', '<strong>Anwendung</strong>'],
  [
    '<p>This prompt creates organization context for all other prompts.</p>',
    '<p>Dieser Prompt erzeugt den Organisationskontext für alle anderen Prompts.</p>',
  ],
  ['aria-label="Copy prompt 2 to clipboard"', 'aria-label="Prompt 2 in die Zwischenablage kopieren"'],
  ['aria-label="Select and copy prompt 3"', 'aria-label="Prompt 3 markieren und kopieren"'],
  ['<div class="category">Role</div>', '<div class="category">Rolle</div>'],
  ['<h2 class="prompt-title" id="prompt-title-3">My Role in the Organization</h2>', '<h2 class="prompt-title" id="prompt-title-3">Meine Rolle in der Organisation</h2>'],
  [
    `<p class="prompt-desc">Clarify your role's purpose and impact before AI fills the gaps</p>`,
    '<p class="prompt-desc">Klären Sie Zweck und Wirkung Ihrer Rolle, bevor die KI Lücken füllt</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-3">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-3">Vor der Nutzung</h3>'],
  [
    `<p><strong>Use when:</strong> you want to clarify your role; you're starting with a new company; you need a reference for your position.</p>`,
    '<p><strong>Nutzen, wenn:</strong> Sie Ihre Rolle klären wollen; in einem neuen Unternehmen starten; eine Referenz für Ihre Position brauchen.</p>',
  ],
  [
    `<li>[COMPANY] → your company or your client's (e.g. Acme Inc);</li>`,
    '<li>[UNTERNEHMEN] → Ihr Unternehmen oder das Ihrer Kundin bzw. Ihres Kunden (z. B. Acme Inc);</li>',
  ],
  [
    '<li>[MY ROLE] → your job title (e.g. Sales Manager).</li>',
    '<li>[MEINE ROLLE] → Ihre Stellenbezeichnung (z. B. Vertriebsleitung).</li>',
  ],
  ['<strong>Result</strong>', '<strong>Ergebnis</strong>'],
  [
    '<p>You get a clear role description – use it as a reference for the next steps.</p>',
    '<p>Sie erhalten eine klare Rollenbeschreibung – nutzen Sie sie für die nächsten Schritte.</p>',
  ],
  ['aria-label="Copy prompt 3 to clipboard"', 'aria-label="Prompt 3 in die Zwischenablage kopieren"'],
  ['aria-label="Select and copy prompt 4"', 'aria-label="Prompt 4 markieren und kopieren"'],
  ['<div class="category">Document</div>', '<div class="category">Dokument</div>'],
  ['<h2 class="prompt-title" id="prompt-title-4">Job Description + KPI</h2>', '<h2 class="prompt-title" id="prompt-title-4">Stellenbeschreibung + KPI</h2>'],
  ['<p class="prompt-desc">Open → practical job description with measurable KPIs</p>', '<p class="prompt-desc">Öffnen → praktische Stellenbeschreibung mit messbaren KPIs</p>'],
  ['<h3 class="before-use-title" id="before-use-title-4">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-4">Vor der Nutzung</h3>'],
  [
    `<p><strong>Use when:</strong> you need a job description; you're preparing for review or onboarding; you want measurable KPIs.</p>`,
    '<p><strong>Nutzen, wenn:</strong> Sie eine Stellenbeschreibung brauchen; sich auf ein Gespräch oder die Einarbeitung vorbereiten; messbare KPIs wollen.</p>',
  ],
  ['<strong>Practical value</strong>', '<strong>Praktischer Nutzen</strong>'],
  [
    '<p>This document can be used for self-assessment or onboarding new employees.</p>',
    '<p>Dieses Dokument eignet sich für die Selbstbewertung oder die Einarbeitung neuer Mitarbeitender.</p>',
  ],
  ['aria-label="Copy prompt 4 to clipboard"', 'aria-label="Prompt 4 in die Zwischenablage kopieren"'],
  ['aria-label="Select and copy prompt 5"', 'aria-label="Prompt 5 markieren und kopieren"'],
  ['<div class="category">Processes</div>', '<div class="category">Prozesse</div>'],
  ['<h2 class="prompt-title" id="prompt-title-5">Core Work Processes</h2>', '<h2 class="prompt-title" id="prompt-title-5">Kernarbeitsprozesse</h2>'],
  [
    '<p class="prompt-desc">See where 80% of your time goes – input for the AI optimization step</p>',
    '<p class="prompt-desc">Sehen Sie, wohin 80 % Ihrer Zeit gehen – Input für den KI-Optimierungsschritt</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-5">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-5">Vor der Nutzung</h3>'],
  [
    '<p><strong>Use when:</strong> you want to see where time goes; optimize your workday; prepare for AI integration.</p>',
    '<p><strong>Nutzen, wenn:</strong> Sie sehen wollen, wohin Zeit geht; Ihren Arbeitstag optimieren; die Einbindung von KI vorbereiten.</p>',
  ],
  ['<strong>Optimization</strong>', '<strong>Optimierung</strong>'],
  [
    '<p>Once you understand the processes, you can see where AI will have the biggest impact.</p>',
    '<p>Sind die Prozesse klar, sehen Sie, wo die KI den größten Hebel hat.</p>',
  ],
  ['aria-label="Copy prompt 5 to clipboard"', 'aria-label="Prompt 5 in die Zwischenablage kopieren"'],
  ['aria-label="Select and copy prompt 6"', 'aria-label="Prompt 6 markieren und kopieren"'],
  ['<div class="category">AI Integration</div>', '<div class="category">KI-Einsatz</div>'],
  ['<h2 class="prompt-title" id="prompt-title-6">AI Help and Optimization</h2>', '<h2 class="prompt-title" id="prompt-title-6">KI-Hilfe und Optimierung</h2>'],
  [
    '<p class="prompt-desc">Turn your process map into concrete AI shortcuts that save hours</p>',
    '<p class="prompt-desc">Machen Sie aus Ihrer Prozesskarte konkrete KI-Abkürzungen, die Stunden sparen</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-6">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-6">Vor der Nutzung</h3>'],
  [
    '<p><strong>Use when:</strong> you already have process descriptions (step 5); you want concrete ways to use AI; you want to save time.</p>',
    '<p><strong>Nutzen, wenn:</strong> Sie schon Prozessbeschreibungen haben (Schritt 5); konkrete Wege für KI wollen; Zeit sparen wollen.</p>',
  ],
  ['<strong>Real impact</strong>', '<strong>Echter Nutzen</strong>'],
  [
    '<p>This prompt helps identify specific places where AI can save hours per week.</p>',
    '<p>Dieser Prompt hilft, konkrete Stellen zu finden, an denen die KI pro Woche Stunden sparen kann.</p>',
  ],
  ['aria-label="Copy prompt 6 to clipboard"', 'aria-label="Prompt 6 in die Zwischenablage kopieren"'],
  ['aria-label="Select and copy prompt 7"', 'aria-label="Prompt 7 markieren und kopieren"'],
  ['<div class="category">Library</div>', '<div class="category">Sammlung</div>'],
  ['<h2 class="prompt-title" id="prompt-title-7">Daily Prompt Library</h2>', '<h2 class="prompt-title" id="prompt-title-7">Tägliche Prompt-Sammlung</h2>'],
  [
    '<p class="prompt-desc">Open → a personal table of prompts for everyday work</p>',
    '<p class="prompt-desc">Öffnen → eine persönliche Prompt-Tabelle für den Alltag</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-7">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-7">Vor der Nutzung</h3>'],
  [
    '<p><strong>Use when:</strong> you want personal prompts for daily work and quick decisions; you want a [prompt | when | problem] table.</p>',
    '<p><strong>Nutzen, wenn:</strong> Sie persönliche Prompts für den Alltag und schnelle Entscheidungen wollen; eine Tabelle <code>[PROMPT]</code> | <code>[WANN]</code> | <code>[WELCHES PROBLEM]</code> wollen.</p>',
  ],
  ['<strong>Daily improvement</strong>', '<strong>Täglicher Fortschritt</strong>'],
  [
    '<p>You get a personal prompt collection – use it every day without extra thinking.</p>',
    '<p>Sie erhalten eine persönliche Prompt-Sammlung – nutzen Sie sie jeden Tag ohne extra Nachdenken.</p>',
  ],
  ['aria-label="Copy prompt 7 to clipboard"', 'aria-label="Prompt 7 in die Zwischenablage kopieren"'],
  ['aria-label="Select and copy prompt 8"', 'aria-label="Prompt 8 markieren und kopieren"'],
  ['<div class="category">Simulation</div>', '<div class="category">Simulation</div>'],
  ['<h2 class="prompt-title" id="prompt-title-8">Critical Situation Simulation</h2>', '<h2 class="prompt-title" id="prompt-title-8">Simulation kritischer Situationen</h2>'],
  [
    '<p class="prompt-desc">Rehearse high-pressure decisions with AI before they happen</p>',
    '<p class="prompt-desc">Üben Sie Entscheidungen unter Druck mit der KI, bevor sie eintreten</p>',
  ],
  ['<h3 class="before-use-title" id="before-use-title-8">Before using</h3>', '<h3 class="before-use-title" id="before-use-title-8">Vor der Nutzung</h3>'],
  [
    '<p><strong>Use when:</strong> you want to prepare for crises; plan a response to pressure; train decisions with AI.</p>',
    '<p><strong>Nutzen, wenn:</strong> Sie sich auf Krisen vorbereiten; eine Reaktion auf Druck planen; Entscheidungen mit der KI üben wollen.</p>',
  ],
  ['<strong>Readiness</strong>', '<strong>Bereitschaft</strong>'],
  [
    '<p>Simulations help you learn to manage crises before they happen. Better to practice with AI than in a real situation.</p>',
    '<p>Simulationen helfen, Krisen zu bewältigen, bevor sie eintreten. Besser mit der KI üben als in der echten Lage.</p>',
  ],
  ['aria-label="Copy prompt 8 to clipboard"', 'aria-label="Prompt 8 in die Zwischenablage kopieren"'],
  [
    '<a href="#block2" class="prompt-next-link">Next: Organization Portrait →</a>',
    '<a href="#block2" class="prompt-next-link">Weiter: Organisationsporträt →</a>',
  ],
  [
    '<a href="#block3" class="prompt-next-link">Next: My Role in the Organization →</a>',
    '<a href="#block3" class="prompt-next-link">Weiter: Meine Rolle in der Organisation →</a>',
  ],
  [
    '<a href="#block4" class="prompt-next-link">Next: Job Description + KPI →</a>',
    '<a href="#block4" class="prompt-next-link">Weiter: Stellenbeschreibung + KPI →</a>',
  ],
  [
    '<a href="#block5" class="prompt-next-link">Next: Core Work Processes →</a>',
    '<a href="#block5" class="prompt-next-link">Weiter: Kernarbeitsprozesse →</a>',
  ],
  [
    '<a href="#block6" class="prompt-next-link">Next: AI Help and Optimization →</a>',
    '<a href="#block6" class="prompt-next-link">Weiter: KI-Hilfe und Optimierung →</a>',
  ],
  [
    '<a href="#block7" class="prompt-next-link">Next: Daily Prompt Library →</a>',
    '<a href="#block7" class="prompt-next-link">Weiter: Tägliche Prompt-Sammlung →</a>',
  ],
  [
    '<a href="#block8" class="prompt-next-link">Next: Critical Situation Simulation →</a>',
    '<a href="#block8" class="prompt-next-link">Weiter: Simulation kritischer Situationen →</a>',
  ],
  [
    "<a href=\"#ritual-complete\" class=\"prompt-next-link\">Finished? See what's next →</a>",
    '<a href="#ritual-complete" class="prompt-next-link">Fertig? Sehen Sie, was folgt →</a>',
  ],
  [
    '<h2 id="ritual-complete-title">You finished the 8 prompts</h2>',
    '<h2 id="ritual-complete-title">Sie haben die 8 Prompts abgeschlossen</h2>',
  ],
  [
    '<p>You now have context, a role picture, processes, and a personal daily set.</p>',
    '<p>Sie haben jetzt Kontext, ein Rollenbild, Prozesse und ein persönliches Alltagspaket.</p>',
  ],
  [
    'aria-label="Learn the full system – interactive course (opens in new tab)">Learn the full system →</a>',
    'aria-label="Das ganze System lernen – interaktiver Kurs (öffnet in neuem Tab)">Das ganze System lernen →</a>',
  ],
  ['<h2 id="next-steps-title">Jump to a step</h2>', '<h2 id="next-steps-title">Zu einem Schritt springen</h2>'],
  [
    '<p>Best in order from 1 to 8.</p>',
    '<p>Am besten der Reihe nach von 1 bis 8.</p>',
  ],
  ['<a href="#block1">1. Context check</a>', '<a href="#block1">1. Kontextprüfung</a>'],
  ['<a href="#block2">2. Organization portrait</a>', '<a href="#block2">2. Organisationsporträt</a>'],
  ['<a href="#block3">3. My role</a>', '<a href="#block3">3. Meine Rolle</a>'],
  ['<a href="#block4">4. Job description + KPI</a>', '<a href="#block4">4. Stellenbeschreibung + KPI</a>'],
  ['<a href="#block5">5. Work processes</a>', '<a href="#block5">5. Arbeitsprozesse</a>'],
  ['<a href="#block6">6. AI optimization</a>', '<a href="#block6">6. KI-Optimierung</a>'],
  ['<a href="#block7">7. Daily library</a>', '<a href="#block7">7. Tägliche Sammlung</a>'],
  ['<a href="#block8">8. Critical situation simulation</a>', '<a href="#block8">8. Simulation kritischer Situationen</a>'],
  [
    '<h2 id="ecosystem-title">Daily Workflow Library</h2>',
    '<h2 id="ecosystem-title">Daily Workflow Library</h2>',
  ],
  [
    '<p class="ecosystem-lead">Your AI operating system for strategy, tactics, and operations. You are in the Daily Workflow Library.</p>',
    '<p class="ecosystem-lead">Ihr KI-Betriebssystem für Strategie, Taktik und Betrieb. Sie sind in der Daily Workflow Library.</p>',
  ],
  [
    'alt="Diagram: promptanatomy.app at the center, connected to promptanatomy.cloud, promptanatomy.info, promptanatomy.space, promptanatomy.help, promptanatomy.blog, promptanatomy.pro, and promptanatomy.ceo"',
    'alt="Diagramm: promptanatomy.app in der Mitte, verbunden mit promptanatomy.cloud, promptanatomy.info, promptanatomy.space, promptanatomy.help, promptanatomy.blog, promptanatomy.pro und promptanatomy.ceo"',
  ],
  [
    '<h2 id="community-title">Want more?<br>Join us on Telegram.</h2>',
    '<h2 id="community-title">Mehr?<br>Kommen Sie zu uns auf Telegram.</h2>',
  ],
  [
    '<p>Shared discussions, tips, and news about prompts and AI.</p>',
    '<p>Gemeinsame Gespräche, Tipps und Neuigkeiten zu Prompts und KI.</p>',
  ],
  [
    'aria-label="Open Prompt Anatomy Telegram channel in new tab">Join Telegram</a>',
    'aria-label="Prompt-Anatomy-Telegramkanal in neuem Tab öffnen">Zu Telegram</a>',
  ],
  [
    'aria-label="Full Prompt Anatomy – interactive course (opens in new tab)">Prompt Anatomy →</a>',
    'aria-label="Vollständiger Prompt-Anatomy-Kurs – interaktiv (öffnet in neuem Tab)">Prompt Anatomy →</a>',
  ],
  [
    '<h3>Good luck with your prompts <i data-lucide="rocket" aria-hidden="true"></i></h3>',
    '<h3>Viel Erfolg mit Ihren Prompts <i data-lucide="rocket" aria-hidden="true"></i></h3>',
  ],
  [
    '<p>If the prompt has [COMPANY] or [MY ROLE] – replace with your details. The AI role (e.g. “critical analyst”) is already set – no need to change it.</p>',
    '<p>Steht im Prompt [UNTERNEHMEN] oder [MEINE ROLLE] – ersetzen Sie es durch Ihre Angaben. Die KI-Rolle (z. B. „kritischer Analyst“) ist schon gesetzt – Sie müssen sie nicht ändern.</p>',
  ],
  ['<span class="tag" role="listitem"><i data-lucide="bot" aria-hidden="true"></i> AI-optimized</span>', '<span class="tag" role="listitem"><i data-lucide="bot" aria-hidden="true"></i> Für KI optimiert</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="book-marked" aria-hidden="true"></i> 8 prompts</span>', '<span class="tag" role="listitem"><i data-lucide="book-marked" aria-hidden="true"></i> 8 Prompts</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="zap" aria-hidden="true"></i> Quick start</span>', '<span class="tag" role="listitem"><i data-lucide="zap" aria-hidden="true"></i> Schnellstart</span>'],
  ['<span class="tag" role="listitem"><i data-lucide="target" aria-hidden="true"></i> Results</span>', '<span class="tag" role="listitem"><i data-lucide="target" aria-hidden="true"></i> Ergebnisse</span>'],
  [
    '<a href="privacy.html" class="footer-meta-link">Privacy</a>',
    '<a href="privacy.html" class="footer-meta-link">Datenschutz</a>',
  ],
  [
    'Part of Prompt Anatomy · Training &amp; checkout →',
    'Teil von Prompt Anatomy · Training und Checkout →',
  ],
  [
    '<p>&copy; 2026 Tomas Staniulis. Training material. All rights reserved.</p>',
    '<p>&copy; 2026 Tomas Staniulis. Schulungsmaterial. Alle Rechte vorbehalten.</p>',
  ],
  ['aria-label="Copy text field"', 'aria-label="Kopierfeld"'],
  ['aria-label="Copy notification">', 'aria-label="Kopierhinweis">'],
  ['<span>Copied</span>', '<span>Kopiert</span>'],
];

const DE_JS_PAIRS = [
  [
    "button.innerHTML = '<i data-lucide=\"check\" aria-hidden=\"true\"></i><span>Copied</span>';",
    "button.innerHTML = '<i data-lucide=\"check\" aria-hidden=\"true\"></i><span>Kopiert</span>';",
  ],
  [
    "showError(button, 'Something went wrong. Try copying again.');",
    "showError(button, 'Etwas ist schiefgegangen. Versuchen Sie erneut zu kopieren.');",
  ],
  [
    "showError(button, 'Something went wrong. Try copying again. Select the text and use Ctrl+C (or Cmd+C).');",
    "showError(button, 'Etwas ist schiefgegangen. Versuchen Sie es erneut. Markieren Sie den Text und nutzen Sie Ctrl+C (oder Cmd+C).');",
  ],
  [
    "showError(button, 'Copy didn\\'t work. Select the text and use Ctrl+C (or Cmd+C).');",
    "showError(button, 'Das Kopieren hat nicht geklappt. Markieren Sie den Text und nutzen Sie Ctrl+C (oder Cmd+C).');",
  ],
  [
    "button.setAttribute('aria-label', 'Prompt copied successfully');",
    "button.setAttribute('aria-label', 'Prompt wurde kopiert');",
  ],
  [
    "button.setAttribute('aria-label', `Copy prompt ${promptId.replace('prompt', '')} to clipboard`);",
    "button.setAttribute('aria-label', `Prompt ${promptId.replace('prompt', '')} in die Zwischenablage kopieren`);",
  ],
  [
    "const errorMessage = message || 'Something went wrong. Try copying again.';",
    "const errorMessage = message || 'Etwas ist schiefgegangen. Versuchen Sie erneut zu kopieren.';",
  ],
  [
    "if (textEl) textEl.textContent = count === 8 ? 'Great – you\\'ve used all 8.' : 'You\\'ve used ' + count + ' of 8 prompts.';",
    "if (textEl) textEl.textContent = count === 8 ? 'Sehr gut – Sie haben alle 8 genutzt.' : 'Sie haben ' + count + ' von 8 Prompts genutzt.';",
  ],
];

module.exports = { DE_NAV, DE_FOOTER_NAV, DE_PAIRS, DE_JS_PAIRS };
