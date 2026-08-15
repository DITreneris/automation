# Daugiakalbiška struktūra (LT / EN / ET / LV / DE / JA / ZH)

**Atsakingas:** Curriculum Agent  
**Tikslas:** Path atitikmenys ir routing taisyklės – vienas šaltinis tiesiai UI/UX ir Content.  
**Bangos / N+1:** [GLOBAL_EPIC.md](GLOBAL_EPIC.md) §4, šio failo [§7](#7-locale-n1-playbook). Jungiklis: [.cursor/skills/locale-switcher/SKILL.md](../.cursor/skills/locale-switcher/SKILL.md).

**Trys `.app` URL** ([scripts/seo-constants.cjs](../scripts/seo-constants.cjs)):

| Constant | Kur | URL |
|----------|-----|-----|
| `COURSE_URL_EN` | Badge, community secondary | `https://www.promptanatomy.app/en` |
| `HUB_ENTITY_URL` | `.footer-entity` only | hub root + `utm_medium=entity_footer` |
| `COURSE_RITUAL_URL` | `#ritual-complete` only | course `/en` + `utm_medium=ritual_complete` |

**Ne** `promptanatomy.info/en` – tai bibliotekos EN puslapis, ne kursas. Šis domenas nėra Hub.

**Bibliotekos production:** **`https://www.promptanatomy.info/`** (`www`; locale `/lt/`, `/en/`, …; apex `promptanatomy.info` → 307). Vercel: `https://automation-seven-ochre.vercel.app/`.

---

## 1. Puslapių atitikmenys

| Kalba | Biblioteka | Privatumas |
|--------|------------|------------|
| LT | `/lt/` (`lt/index.html`) | `/lt/privatumas.html` |
| EN | `/en/` (`en/index.html`) | `/en/privacy.html` |
| ET | `/et/` (`et/index.html`) | `/et/privacy.html` |
| LV | `/lv/` (`lv/index.html`) | `/lv/privacy.html` |
| DE | `/de/` (`de/index.html`) | `/de/privacy.html` |
| JA | `/ja/` (`ja/index.html`) | `/ja/privacy.html` |
| ZH | `/zh/` (`zh/index.html`) | `/zh/privacy.html` |

ET, LV ir DE naudoja tuos pačius failų pavadinimus kaip EN (`index.html`, `privacy.html`). LT išlaiko `privatumas.html`.

---

## 2. Routing taisyklės

### Root `/`

- Vienintelis failas: `index.html` (redirect puslapis).
- Logika: nustatyti kalbą; tada `window.location.replace` į `base + '/lt/'`, `'/en/'`, `'/et/'`, `'/lv/'`, `'/de/'`, `'/ja/'` arba `'/zh/'`.
- Kalbos nustatymas (prioritetas):
  1. `localStorage.getItem('lang')` – jei reikšmė `lt`, `en`, `et`, `lv`, `de`, `ja` arba `zh`.
  2. `navigator.language` (žemiau): jei prasideda `lt` → `/lt/`; `et` arba `ee` → `/et/`; `lv` → `/lv/`; `de` → `/de/`; `ja` → `/ja/`; `zh` → `/zh/` (visi `zh*`, įskaitant zh-TW, kol nėra Traditional); kitaip fallback **`/en/`** (centrinė kalba).
- **Base path:** Root deploy (Vercel) – base = `''`. Jei GitHub Pages project site (legacy), base = `/automation`. Pathname normalizavimas root redirect skripte: žr. `index.html`.
- **Rankinės nuorodos** („Lietuvių“, „English“ ir t. t.) taip pat kviečia `localStorage.setItem('lang', …)`, kad elgsena sutaptų su kalbos jungikliu viduje locale.
- **Locale URL = sutartis:** `/{locale}/` niekada 302 šalin (nei IP, nei `Accept-Language`). Nudge – [locale-switcher](../.cursor/skills/locale-switcher/SKILL.md); kanonas – [GLOBAL_EPIC.md](GLOBAL_EPIC.md) §5.

### Kalbos jungiklis

**Biblioteka** (`*/index.html`) – compact dropdown (hero + footer):

- Hero viršuje: `<div class="header-top">` su `<div class="header-brand">` (badge'ai) ir `<nav class="lang-switcher lang-switcher--dropdown">` dešinėje.
- Trigger: Lucide `languages` + dabartinis endonimas + chevron (`<button class="lang-switcher-trigger">`); meniu `<ul class="lang-switcher-menu" hidden>`.
- Dabartinė kalba meniu: `<span class="lang-option lang-option--current" aria-current="page" lang="…">`; kitos – `<a class="lang-option lang-link" data-lang="…" lang="…" hreflang="…" href="…" onclick="…localStorage.setItem('lang',…)">`. ZH: `lang` / `hreflang` = `zh-Hans`, `data-lang` = `zh`.
- Nudge: [js/locale-nudge.js](../js/locale-nudge.js) – JS-only juosta, kai nėra `localStorage.lang` ir `navigator.language` mapina į kitą locale. Jokio 302 iš `/{locale}/`.
- Footer: antras instance `<nav class="lang-switcher lang-switcher--dropdown lang-switcher--footer">` (meniu atsidaro **į viršų**); hero – **žemyn**.
- Elgsena: [js/lang-switcher.js](../js/lang-switcher.js) (toggle, Escape, outside click – neuždaro paspaudus dropdown viduje).
- CSS ([css/library.css](../css/library.css)): `.header-top { z-index: 10 }` virš H1; meniu `z-index: 100`; `.header` lieka `overflow: hidden` (nenaudoti `overflow: visible` ant hero – dubliuojasi antraštė).
- Lokaliai: `npx serve . -l 3000` (**be** `-s` – SPA režimas luzta santykinius locale kelius).
- Etiketės gimąja kalba: **Lietuvių**, **English**, **Eesti**, **Latviešu**, **Deutsch**, **日本語**, **简体中文** (be vėliavų).

**Privatumas** – legacy flat list (nekeičiamas šiame etape):

- `<nav class="lang-switcher"><ul class="lang-switcher-list">…</ul></nav>`; inline CSS privacy puslapyje.
- **Privatumo keliai:** `lt/privatumas.html` ↔ `en|et|lv|de|ja|zh/privacy.html`.

---

## 3. SEO (`hreflang`, canonical, OG)

- Kiekvienas puslapis: `hreflang` `lt`, `en`, `et`, `lv`, `de`, `ja`, `zh-Hans` (`id="hreflang-zh"`) ir `x-default` (`<link rel="alternate" … id="hreflang-lt">` … `id="hreflang-default">`) su **absoliučiais** `https://www.promptanatomy.info/…` URL (ne `href="#"`). `html lang` ZH puslapyje = `zh-Hans`, ne `zh`.
- **`x-default`:** anglų versija (`/en/` arba `/en/privacy.html`).
- **`rel="canonical"`** ir **`meta name="description"`** – lokalizuoti per puslapį; kanoninis domenas `www.promptanatomy.info`.
- **Open Graph / Twitter:** vienas paveikslėlis [`assets/img/og/og-image.png`](../assets/img/og/og-image.png) (dizaino šaltinis [`01_og_image.png`](../assets/img/og/01_og_image.png), generavimas `npm run generate:og-image` → 1200×630); **OG/Twitter title ir description lokalizuoti** (H1 + brand / lead, kaip `<title>` ir `meta description`); `og:image:alt` – „Prompt Anatomy – AI Automation Library“; `og:url` atitinka locale canonical.
- **JSON-LD:** bibliotekos `index.html` – `Organization` + `WebSite` + `WebPage` + `HowTo` + `ItemList` (`inLanguage` pagal puslapį; ZH = `zh-Hans`). SSOT: `jsonLdLibrary()` [scripts/seo-constants.cjs](../scripts/seo-constants.cjs).
- **Root [`index.html`](../index.html):** `meta robots noindex,follow` (redirect stub).
- **Discovery:** [`robots.txt`](../robots.txt), [`sitemap.xml`](../sitemap.xml), [`llms.txt`](../llms.txt) (klientų klausimai: kas / kam / 8 žingsniai / kursas — ne DS viduriai). Konstantos: [`scripts/seo-constants.cjs`](../scripts/seo-constants.cjs).
- **[js/hreflang.js](../js/hreflang.js):** papildomai koreguoja href lokaliam / subpath preview; crawleriams pakanka statinių `<link>`.

---

## 3b. Vartotojo užpildomi žymekliai (promptuose)

Vienoda logika kaip LT: **tokenai atitinka kalbą**, EN lieka tarptautiniu šablonu `[COMPANY]` / `[MY ROLE]`.

| Kalba | Įmonė / organizacija | Rolė / pareigos | 7-o prompto lentelė (stulpelių antraštės) |
|--------|----------------------|-----------------|-------------------------------------------|
| LT | `[ĮMONĖ]` | `[MANO ROLĖ]` | `[PROMPTAS]` \| `[KADA NAUDOJU]` \| `[KOKIĄ PROBLEMĄ SPRENDŽIA]` |
| EN | `[COMPANY]` | `[MY ROLE]` | `[PROMPT]` \| `[WHEN I USE IT]` \| `[PROBLEM IT SOLVES]` |
| ET | `[ETTEVÕTE]` | `[MINU ROLL]` | `[KÜSITIS]` \| `[MILLAL KASUTAN]` \| `[MILLISE PROBLEEMI LAHENDAB]` |
| LV | `[UZŅĒMUMS]` | `[MANA LOMA]` | `[PROMPTTEKSTS]` \| `[KAD LIETOJU]` \| `[KĀDU PROBLĒMU RISINA]` |
| DE | `[UNTERNEHMEN]` | `[MEINE ROLLE]` | `[PROMPT]` \| `[WANN]` \| `[WELCHES PROBLEM]` |
| JA | `[COMPANY]` | `[MY ROLE]` | `[プロンプト]` \| `[使用場面]` \| `[解決する課題]` |
| ZH | `[公司]` | `[我的角色]` | `[提示词]` \| `[使用场景]` \| `[解决的问题]` |

ET/LV tekstai: `scripts/prompt-bodies-et-lv.cjs`; DE: `scripts/prompt-bodies-de.cjs` + `scripts/de-pairs.cjs`; JA / ZH promptų korpusas (ranka): `scripts/prompt-bodies-ja.cjs`, `scripts/prompt-bodies-zh.cjs`; po EN pakeitimų – `npm run generate:et-lv`.

---

## 4. Turinio sinchronizacija

Kai keičiami **anglų (EN)** UI arba struktūriniai tekstai (`en/index.html`, `en/privacy.html`), reikia išlyginti:

- **LT:** `lt/index.html`, `lt/privatumas.html`
- **ET / LV / DE:** regeneruoti iš EN naudojant `npm run generate:et-lv` ([scripts/generate-et-lv-pages.cjs](../scripts/generate-et-lv-pages.cjs); žr. `scripts/prompt-bodies-et-lv.cjs`, `scripts/prompt-bodies-de.cjs`, `scripts/de-pairs.cjs`) ir rankiniu būdu patikrinti / atnaujinti `et/privacy.html`, `lv/privacy.html`, `de/privacy.html`, jei privatumo tekstas keičiasi ne per generatorių.
- **JA:** `ja/index.html`, `ja/privacy.html`, `js/library.ja.js` – rankiniu (generatorius JA negeneruoja).
- **ZH:** `zh/index.html`, `zh/privacy.html`, `js/library.zh.js` – rankiniu (kaip JA; `ZH_PAIRS` generatoriuje nėra).

**Bendri ištekliai (biblioteka):** [css/library.css](../css/library.css) – vienas stilių failas visoms kalboms; lokalizuotas code-block užrašas – trumpas inline `<style>:root { --codeblock-copy-hint: '…' }</style>` prieš `link` į `library.css`. **JavaScript:** kanonas – [js/library.js](../js/library.js) (EN). `library.lt.js`, `library.et.js`, `library.lv.js`, `library.de.js` generuojami tuo pačiu `generate:et-lv` (`LT_JS_PAIRS` / `ET_JS_PAIRS` / `LV_JS_PAIRS` / `DE_JS_PAIRS`). Rankiniu būdu šių JS failų neliesti. CI tikrina, kad po `generate:et-lv` nebūtų `git diff` šiuose failuose.

- **PR:** [.github/PULL_REQUEST_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md) – checkbox „Daugiakalbystė (kai liečia EN)“.
- **Pagrindinės vietos:** hero, instrukcijos, progress, mygtukai, JS pranešimai, code-block `::before`, footer, privatumas.
- **EN kanonas:** `en/index.html`, `js/library.js` – keičiant mikrotekstą, sinchronizuokite LT rankiniu ir paleiskite `npm run generate:et-lv`. Istorinis auditas – [docs/archive/audits/MICROCOPY_AUDIT_EN_2026-03.md](archive/audits/MICROCOPY_AUDIT_EN_2026-03.md).

---

## 5. Path → counterpart (santrauka)

```
Biblioteka: /lt/ | /en/ | /et/ | /lv/ | /de/ | /ja/ | /zh/  (kiekviena su index.html)
Privatumas: /lt/privatumas.html ↔ /en/privacy.html ↔ /et/privacy.html ↔ /lv/privacy.html ↔ /de/privacy.html ↔ /ja/privacy.html ↔ /zh/privacy.html
```

Naudoti santykinius kelius (pvz. `../et/`, `../lt/privatumas.html`) arba base path pagal deploy.

---

## 6. Testai ir CI

- Struktūriniai testai: [tests/structure.test.js](../tests/structure.test.js) – `data-hreflang-suite`, `hreflang.js`, `lang-switcher-list`, privatumo `lang-link`, root `localStorage`, `library.css` / locale `library*.js`.
- GitHub Actions: [.github/workflows/ci.yml](../.github/workflows/ci.yml) – `npm install`, `npm run generate:et-lv` ir `git diff --exit-code` (`et/index.html`, `lv/index.html`, `de/index.html`, `js/library.et.js`, `js/library.lv.js`, `js/library.de.js`, `js/library.lt.js`), `npm test`, pa11y (per [scripts/pa11y-pages.cjs](../scripts/pa11y-pages.cjs), įskaitant `/de/`, `/ja/` ir `/zh/`). Actions versijos prisegtos prie commit SHA. Dependabot: [.github/dependabot.yml](../.github/dependabot.yml) (npm + GitHub Actions). (Dependency review žingsnis neįtrauktas, kol repozitorijoje neįjungtas Dependency graph.)

---

## 7. Locale N+1 playbook

Kalbos yra banga, ne lubos. Strategija ir eilė: [GLOBAL_EPIC.md](GLOBAL_EPIC.md) §4, [MVP_ROADMAP.md](MVP_ROADMAP.md). Viena kalba = vienas release. Jungiklis: [.cursor/skills/locale-switcher/SKILL.md](../.cursor/skills/locale-switcher/SKILL.md). Sinchronas po EN: [.cursor/skills/locale-sync/SKILL.md](../.cursor/skills/locale-sync/SKILL.md).

Lotynų kalbos (DE, ES, FR, …) – generatoriaus poros + `prompt-bodies-{xx}.cjs` (ET/LV modelis). JA / ZH / KO – ranka. RTL (`ar`) – atskiras UI, ne „dar viena pora“.

### Checklist (visi punktai tame pačiame PR)

1. **Puslapiai:** `{xx}/index.html`, privatumas (`{xx}/privacy.html` arba LT stiliaus vardas), `js/library.{xx}.js`.
2. **Promptų korpusas:** `scripts/prompt-bodies-{xx}.cjs` (rankinis) arba poros generatoriuje.
3. **Hreflang visur:** [scripts/seo-constants.cjs](../scripts/seo-constants.cjs) `HREFLANG_*`; kiekvieno locale `index` + privacy `<link rel="alternate">`; `id="hreflang-{xx}"`; ZH lieka `zh-Hans`.
4. **[js/hreflang.js](../js/hreflang.js):** regex ir `set('hreflang-{xx}', …)` library + privacy.
5. **Root vestibiulis:** [index.html](../index.html) – `localStorage` allowlist + `navigator.language` šaka + rankinės nuorodos.
6. **Jungiklis:** visų locale hero + footer (ir privacy sąrašas) – endonimas, `data-lang`, `lang`, `hreflang` ant `<a>`.
7. **Discovery:** [sitemap.xml](../sitemap.xml) (naujas `<url>` + `xhtml:link` visuose klasteriuose), [llms.txt](../llms.txt), [robots.txt](../robots.txt) jei reikia.
8. **OG / JSON-LD:** `OG_LOCALE`, `OG_LOCALE_ALTERNATES`, `inLanguage`; title/description = tos kalbos H1/lead.
9. **Testai:** [tests/structure.test.js](../tests/structure.test.js) `ALL_LANGS`, `FOOTER_ENTITY_COPY`, library/privacy check; [scripts/lint-html.mjs](../scripts/lint-html.mjs); [scripts/pa11y-pages.cjs](../scripts/pa11y-pages.cjs); [eslint.config.js](../eslint.config.js) jei naujas JS; CI locale index failų sąrašas.
10. **Docs:** šis failas §1–2, [AGENTS.md](../AGENTS.md), [MUST_TODO.md](../MUST_TODO.md), hero-copy kanoninės eilutės, [lessons/LESSONS.md](../lessons/LESSONS.md) jei naujas kodas (pvz. `zh-Hans`).
11. **Kokybė:** registras (ne kalkė); H1/lead = [hero-copy](../.cursor/skills/hero-copy/SKILL.md); footer kanonas; `npm test`.

**Nedaryti:** hand-edit `et/` / `lv/` / `de/` / `library.{et,lv,de,lt}.js`; 302 iš kitos locale į naująją; vėliavos; du N+1 viename PR.
