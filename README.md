# Prompt Anatomy – Daily Workflow Library

[![CI](https://github.com/DITreneris/automation/actions/workflows/ci.yml/badge.svg)](https://github.com/DITreneris/automation/actions/workflows/ci.yml)

Free static library: **8 copy-paste prompts**, no account. Companion to the interactive course at [promptanatomy.app](https://www.promptanatomy.app/en) — not a training platform and **not the Hub**.

**Let AI do 30–50% of your daily tasks.** 8 exercises with ready-made templates – results in minutes.

**Production:** https://www.promptanatomy.info/

| | URL |
|--|-----|
| Library (this repo) | https://www.promptanatomy.info/ |
| Interactive course | https://www.promptanatomy.app/en |
| Hub (entity / checkout) | https://www.promptanatomy.app/ |

Never link the course to `promptanatomy.info/en` — that is the English library page.

**For AI agents:** start with [AGENTS.md](AGENTS.md) and [llms.txt](llms.txt).

---

## Quick start

```bash
npm install
npm test
npx serve . -l 3000   # never use -s; it breaks locale paths
```

Open http://localhost:3000/en/

| Resource | Link |
|----------|------|
| Contributing | [CONTRIBUTING.md](CONTRIBUTING.md) |
| Security | [SECURITY.md](SECURITY.md) |
| License (CC BY 4.0) | [LICENSE](LICENSE) |
| Agent rules | [AGENTS.md](AGENTS.md) |
| Doc index | [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) |
| Lessons | [lessons/LESSONS.md](lessons/LESSONS.md) |

---

## What it is

A Daily Workflow Library for managers, specialists, consultants, and freelancers. You copy a prompt, paste it into ChatGPT / Claude / another AI tool, and leave with a daily kit.

- 8 specialized prompts (META / INPUT / OUTPUT)
- One-tap copy to the clipboard
- Progress stored only in `localStorage` on your device
- Responsive, zero-build: HTML + CSS + vanilla JavaScript
- No user accounts. Contact form and Google Sheets are **disabled**

This site is the **Use** spoke. The interactive course lives on `.app`. Do not call this site the Hub.

---

## Locales

Locales are a **wave, not a ceiling**. Current tree: `lt` / `en` / `et` / `lv` / `de` / `ja` / `zh`.

English is canonical (`en/index.html`, `en/privacy.html`, `js/library.js`). After EN source changes, run `npm run generate:et-lv` and commit generated ET / LV / DE pages plus `js/library.{et,lv,de,lt}.js`. LT HTML, JA, and ZH are updated by hand.

Last tagged release is **1.7.0** (seven locales in production: lt / en / et / lv / de / ja / zh).

| Locale | Library | Privacy | How it is maintained |
|--------|---------|---------|----------------------|
| English | [/en/](https://www.promptanatomy.info/en/) | [privacy.html](https://www.promptanatomy.info/en/privacy.html) | Canonical — edit directly |
| Lietuvių | [/lt/](https://www.promptanatomy.info/lt/) | [privatumas.html](https://www.promptanatomy.info/lt/privatumas.html) | Manual HTML; JS via `LT_JS_PAIRS` |
| Eesti | [/et/](https://www.promptanatomy.info/et/) | [privacy.html](https://www.promptanatomy.info/et/privacy.html) | Generated |
| Latviešu | [/lv/](https://www.promptanatomy.info/lv/) | [privacy.html](https://www.promptanatomy.info/lv/privacy.html) | Generated |
| Deutsch | [/de/](https://www.promptanatomy.info/de/) | [privacy.html](https://www.promptanatomy.info/de/privacy.html) | Generated |
| 日本語 | [/ja/](https://www.promptanatomy.info/ja/) | [privacy.html](https://www.promptanatomy.info/ja/privacy.html) | Manual |
| 简体中文 | [/zh/](https://www.promptanatomy.info/zh/) | [privacy.html](https://www.promptanatomy.info/zh/privacy.html) | Manual (`hreflang` = `zh-Hans`) |

Root `/` is a `noindex` vestibule: `localStorage.lang` → `navigator.language` → English. A locale URL (`/{locale}/`) always serves that language — never 302 away by IP or `Accept-Language`. The switcher uses endonyms (no flags). If the browser language does not match the URL, a dismissible nudge may suggest the matching locale.

Playbook for a new language: [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) §7.

---

## The 8 prompts

1. [AI Context Check](https://www.promptanatomy.info/en/#block1) — what the model already knows about your organization
2. [Organization Portrait](https://www.promptanatomy.info/en/#block2) — a usable org profile
3. [My Role in the Organization](https://www.promptanatomy.info/en/#block3) — purpose and responsibilities
4. [Job Description + KPI](https://www.promptanatomy.info/en/#block4) — a practical role description
5. [Core Work Processes](https://www.promptanatomy.info/en/#block5) — the 80/20 processes
6. [AI Help and Optimization](https://www.promptanatomy.info/en/#block6) — turn AI into a daily assistant
7. [Daily Prompt Library](https://www.promptanatomy.info/en/#block7) — a reusable prompt table
8. [Critical Situation Simulation](https://www.promptanatomy.info/en/#block8) — rehearse pressure before it arrives

After prompt 8, the page hands off to the course (`COURSE_URL_EN`). Course links stay on `/en` until `.app` has that locale.

---

## How to use

1. Open a locale URL (or `/`, which routes to a locale). Switch language from the header or footer if needed.
2. Choose a prompt and tap **Copy prompt**. On a computer you can also select the text and use `Ctrl+C` / `Cmd+C`.
3. Paste into ChatGPT, Claude, or another AI tool.
4. Replace user tokens with your data. The AI role (for example “critical analyst”) is already in the prompt — do not change it.

| Locale | Company | Role | Prompt 7 table headers |
|--------|---------|------|------------------------|
| EN | `[COMPANY]` | `[MY ROLE]` | `[PROMPT]` \| `[WHEN I USE IT]` \| `[PROBLEM IT SOLVES]` |
| LT | `[ĮMONĖ]` | `[MANO ROLĖ]` | `[PROMPTAS]` \| `[KADA NAUDOJU]` \| `[KOKIĄ PROBLEMĄ SPRENDŽIA]` |
| ET | `[ETTEVÕTE]` | `[MINU ROLL]` | `[KÜSITIS]` \| `[MILLAL KASUTAN]` \| `[MILLISE PROBLEEMI LAHENDAB]` |
| LV | `[UZŅĒMUMS]` | `[MANA LOMA]` | `[PROMPTTEKSTS]` \| `[KAD LIETOJU]` \| `[KĀDU PROBLĒMU RISINA]` |
| DE | `[UNTERNEHMEN]` | `[MEINE ROLLE]` | `[PROMPT]` \| `[WANN]` \| `[WELCHES PROBLEM]` |
| JA | `[COMPANY]` | `[MY ROLE]` | `[プロンプト]` \| `[使用場面]` \| `[解決する課題]` |
| ZH | `[公司]` | `[我的角色]` | `[提示词]` \| `[使用场景]` \| `[解决的问题]` |

Details: [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) §3b. Prompt standard: [docs/BULLET_PROOF_PROMPTS.md](docs/BULLET_PROOF_PROMPTS.md).

---

## Stack

Zero-build static site. **No** React, Vite, Tailwind, or bundlers.

- HTML5, CSS custom properties ([css/tokens.css](css/tokens.css) is the design-token SSOT)
- Vanilla JavaScript (`'use strict'`; `textContent` for user data)
- Inter + JetBrains Mono (Google Fonts)
- Local preview: `npx serve . -l 3000` — **never** `-s`

---

## Repository map

```
.
├── index.html                 # Root vestibule (noindex) → /{locale}/
├── 404.html                   # Same locale map as root; no inter-locale 302
├── lt/                        # Library + privatumas.html (manual HTML)
├── en/                        # Canonical library + privacy.html
├── et/  lv/  de/              # Generated library pages (privacy is manual)
├── ja/  zh/                   # Manual library + privacy
├── css/
│   ├── tokens.css             # Design tokens SSOT (DS v2.0)
│   ├── library.css            # Library components
│   └── privacy.css            # Privacy layout
├── tokens/tokens.json         # DTCG export — npm run validate:tokens
├── js/
│   ├── library.js             # EN source (copy, toast, progress)
│   ├── library.{et,lv,de,lt}.js  # Generated — do not hand-edit
│   ├── library.ja.js / library.zh.js
│   ├── lang-switcher.js
│   ├── locale-nudge.js        # Suggest-don't-force banner (shared)
│   ├── hreflang.js
│   └── prompt-collapse.js
├── scripts/
│   ├── generate-et-lv-pages.cjs
│   ├── de-pairs.cjs / prompt-bodies-de.cjs
│   ├── prompt-bodies-et-lv.cjs
│   ├── prompt-bodies-ja.cjs / prompt-bodies-zh.cjs
│   ├── seo-constants.cjs      # Course / hub / handoff URLs + JSON-LD
│   ├── lint-html.mjs          # html-validate (15 HTML files)
│   └── pa11y-pages.cjs
├── tests/structure.test.js
├── sitemap.xml  robots.txt  llms.txt
├── AGENTS.md                  # Operational SSOT for agents
├── MUST_TODO.md               # Current wave checkboxes
└── docs/
    ├── DOCUMENTATION.md       # Doc index
    ├── MULTILINGUAL_STRUCTURE.md
    ├── GLOBAL_EPIC.md         # Why (acquisition)
    └── MVP_ROADMAP.md         # When (waves)
```

Full index: [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md).

---

## Privacy

No personal data is collected in the current release. Copy and “mark as done” stay on the device (`localStorage`). Vercel Web Analytics is loaded on HTML pages (`/_vercel/insights/script.js`).

Privacy pages: [en](en/privacy.html), [lt](lt/privatumas.html), [et](et/privacy.html), [lv](lv/privacy.html), [de](de/privacy.html), [ja](ja/privacy.html), [zh](zh/privacy.html). If a contact form is enabled later, those pages must be updated first — see [docs/archive/integrations/](docs/archive/integrations/) and [SECURITY.md](SECURITY.md).

---

## Development and CI

```bash
npm install
npm test
npm run generate:et-lv
npx serve . -l 3000
PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs
```

`npm test` runs structure tests, token validation, design-token lint, HTML validate (15 files), and ESLint.

After EN edits, generated files must have no uncommitted diff (`et/`, `lv/`, `de/index.html`, `js/library.{et,lv,de,lt}.js`). CI fails otherwise.

Reproduce CI locally: [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Deployment

- **Repo:** [github.com/DITreneris/automation](https://github.com/DITreneris/automation)
- **Host:** Vercel → production `https://www.promptanatomy.info/` (apex `promptanatomy.info` 307 → `www`)
- **Legacy:** GitHub Pages workflow — [DEPLOYMENT.md](DEPLOYMENT.md)
- **Live QA after deploy:** [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md) against the QA standard in [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md)

---

## License

[Creative Commons Attribution 4.0](LICENSE) (CC BY 4.0). Share and adapt with attribution to Prompt Anatomy.
