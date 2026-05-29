# Daugiakalbiška struktūra (LT / EN / ET / LV / JA)

**Atsakingas:** Curriculum Agent  
**Tikslas:** Path atitikmenys ir routing taisyklės – vienas šaltinis tiesiai UI/UX ir Content.

**Interaktyvus kursas (Prompt Anatomy / Promptų anatomija):** badge ir community secondary – **`https://www.promptanatomy.app/en`** (`COURSE_URL_EN` – [scripts/seo-constants.cjs](../scripts/seo-constants.cjs)). **Ne** `promptanatomy.info/en` – tai bibliotekos EN puslapis, ne kursas.

**Bibliotekos (Spin-off) production:** **`https://www.promptanatomy.info/`** (`www`; locale `/lt/`, `/en/`, …; apex `promptanatomy.info` → 307). Vercel: `https://automation-seven-ochre.vercel.app/`.

---

## 1. Puslapių atitikmenys

| Kalba | Biblioteka | Privatumas |
|--------|------------|------------|
| LT | `/lt/` (`lt/index.html`) | `/lt/privatumas.html` |
| EN | `/en/` (`en/index.html`) | `/en/privacy.html` |
| ET | `/et/` (`et/index.html`) | `/et/privacy.html` |
| LV | `/lv/` (`lv/index.html`) | `/lv/privacy.html` |
| JA | `/ja/` (`ja/index.html`) | `/ja/privacy.html` |

ET ir LV naudoja tuos pačius failų pavadinimus kaip EN (`index.html`, `privacy.html`). LT išlaiko `privatumas.html`.

---

## 2. Routing taisyklės

### Root `/`

- Vienintelis failas: `index.html` (redirect puslapis).
- Logika: nustatyti kalbą; tada `window.location.replace` į `base + '/lt/'`, `'/en/'`, `'/et/'`, `'/lv/'` arba `'/ja/'`.
- Kalbos nustatymas (prioritetas):
  1. `localStorage.getItem('lang')` – jei reikšmė `lt`, `en`, `et`, `lv` arba `ja`.
  2. `navigator.language` (žemiau): jei prasideda `lt` → `/lt/`; `et` arba `ee` → `/et/`; `lv` → `/lv/`; `ja` → `/ja/`; kitaip fallback **`/en/`** (centrinė kalba).
- **Base path:** Root deploy (Vercel) – base = `''`. Jei GitHub Pages project site (legacy), base = `/automation`. Pathname normalizavimas root redirect skripte: žr. `index.html`.
- **Rankinės nuorodos** („Lietuvių“, „English“ ir t. t.) taip pat kviečia `localStorage.setItem('lang', …)`, kad elgsena sutaptų su kalbos jungikliu viduje locale.

### Kalbos jungiklis

**Biblioteka** (`*/index.html`) – compact dropdown (hero + footer):

- Hero viršuje: `<div class="header-top">` su `<div class="header-brand">` (badge'ai) ir `<nav class="lang-switcher lang-switcher--dropdown">` dešinėje.
- Trigger: `<button class="lang-switcher-trigger" aria-expanded="false" aria-controls="…">` rodo dabartinę kalbą; meniu `<ul class="lang-switcher-menu" hidden>`.
- Dabartinė kalba meniu: `<span class="lang-option lang-option--current" aria-current="page">`; kitos – `<a class="lang-option lang-link" data-lang="…" href="…" onclick="…localStorage.setItem('lang',…)">`.
- Footer: antras instance `<nav class="lang-switcher lang-switcher--dropdown lang-switcher--footer">` (meniu atsidaro į viršų).
- Elgsena: [js/lang-switcher.js](../js/lang-switcher.js) (toggle, Escape, outside click).
- Etiketės gimąja kalba: **Lietuvių**, **English**, **Eesti**, **Latviešu**, **日本語** (be vėliavų).

**Privatumas** – legacy flat list (nekeičiamas šiame etape):

- `<nav class="lang-switcher"><ul class="lang-switcher-list">…</ul></nav>`; inline CSS privacy puslapyje.
- **Privatumo keliai:** `lt/privatumas.html` ↔ `en|et|lv|ja/privacy.html`.

---

## 3. SEO (`hreflang`, canonical, OG)

- Kiekvienas puslapis: `hreflang` `lt`, `en`, `et`, `lv`, `ja` ir `x-default` (`<link rel="alternate" … id="hreflang-lt">` … `id="hreflang-default">`) su **absoliučiais** `https://www.promptanatomy.info/…` URL (ne `href="#"`).
- **`x-default`:** anglų versija (`/en/` arba `/en/privacy.html`).
- **`rel="canonical"`** ir **`meta name="description"`** – lokalizuoti per puslapį; kanoninis domenas `www.promptanatomy.info`.
- **Open Graph / Twitter:** vienas paveikslėlis [`assets/img/og/og-image.png`](../assets/img/og/og-image.png) (dizaino šaltinis [`01_og_image.png`](../assets/img/og/01_og_image.png), generavimas `npm run generate:og-image` → 1200×630); **OG/Twitter title ir description – anglų kalba visose lokelėse**; `og:image:alt` – „Prompt Anatomy – AI Automation Library“; `og:url` atitinka locale canonical.
- **JSON-LD:** bibliotekos `index.html` – `Organization` + `WebSite` + `WebPage` (`inLanguage` pagal puslapį).
- **Root [`index.html`](../index.html):** `meta robots noindex,follow` (redirect stub).
- **Discovery:** [`robots.txt`](../robots.txt), [`sitemap.xml`](../sitemap.xml), [`llms.txt`](../llms.txt). Konstantos: [`scripts/seo-constants.cjs`](../scripts/seo-constants.cjs).
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
| JA | `[COMPANY]` | `[MY ROLE]` | `[プロンプト]` \| `[使用場面]` \| `[解決する課題]` |

ET/LV tekstai: `scripts/prompt-bodies-et-lv.cjs`; JA promptų korpusas (ranka / ateities generatoriui): `scripts/prompt-bodies-ja.cjs`; po EN pakeitimų – `npm run generate:et-lv`.

---

## 4. Turinio sinchronizacija

Kai keičiami **anglų (EN)** UI arba struktūriniai tekstai (`en/index.html`, `en/privacy.html`), reikia išlyginti:

- **LT:** `lt/index.html`, `lt/privatumas.html`
- **ET / LV:** regeneruoti iš EN naudojant `npm run generate:et-lv` ([scripts/generate-et-lv-pages.cjs](../scripts/generate-et-lv-pages.cjs); žr. `scripts/prompt-bodies-et-lv.cjs` promptų tekstams) ir rankiniu būdu patikrinti / atnaujinti `et/privacy.html`, `lv/privacy.html`, jei privatumo tekstas keičiasi ne per generatorių.
- **JA:** `ja/index.html`, `ja/privacy.html`, `js/library.ja.js` – rankiniu (generatorius JA negeneruoja).

**Bendri ištekliai (biblioteka):** [css/library.css](../css/library.css) – vienas stilių failas visoms kalboms; lokalizuotas code-block užrašas – trumpas inline `<style>:root { --codeblock-copy-hint: '…' }</style>` prieš `link` į `library.css`. **JavaScript:** kanonas – [js/library.js](../js/library.js) (EN); LT – [js/library.lt.js](../js/library.lt.js) (sinchronizuoti ranka su LT); ET/LV – [js/library.et.js](../js/library.et.js) ir [js/library.lv.js](../js/library.lv.js) generuojami tuo pačiu `generate:et-lv` (poros `ET_JS_PAIRS` / `LV_JS_PAIRS` faile generatoriaus). CI tikrina, kad po `generate:et-lv` nebūtų `git diff` šiuose failuose.

- **PR:** [.github/PULL_REQUEST_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md) – checkbox „Daugiakalbystė (kai liečia EN)“.
- **Pagrindinės vietos:** hero, instrukcijos, progress, mygtukai, JS pranešimai, code-block `::before`, footer, privatumas.
- **EN kanonas:** `en/index.html`, `js/library.js` – keičiant mikrotekstą, sinchronizuokite LT rankiniu ir paleiskite `npm run generate:et-lv`. Istorinis auditas – [docs/archive/audits/MICROCOPY_AUDIT_EN_2026-03.md](archive/audits/MICROCOPY_AUDIT_EN_2026-03.md).

---

## 5. Path → counterpart (santrauka)

```
Biblioteka: /lt/ | /en/ | /et/ | /lv/ | /ja/  (kiekviena su index.html)
Privatumas: /lt/privatumas.html ↔ /en/privacy.html ↔ /et/privacy.html ↔ /lv/privacy.html ↔ /ja/privacy.html
```

Naudoti santykinius kelius (pvz. `../et/`, `../lt/privatumas.html`) arba base path pagal deploy.

---

## 6. Testai ir CI

- Struktūriniai testai: [tests/structure.test.js](../tests/structure.test.js) – `data-hreflang-suite`, `hreflang.js`, `lang-switcher-list`, privatumo `lang-link`, root `localStorage`, `library.css` / locale `library*.js`.
- GitHub Actions: [.github/workflows/ci.yml](../.github/workflows/ci.yml) – `npm install`, `npm run generate:et-lv` ir `git diff --exit-code` (`et/index.html`, `lv/index.html`, `js/library.et.js`, `js/library.lv.js`, `js/library.lt.js`), `npm test`, pa11y (per [scripts/pa11y-pages.cjs](../scripts/pa11y-pages.cjs), įskaitant `/ja/`). Actions versijos prisegtos prie commit SHA. Dependabot: [.github/dependabot.yml](../.github/dependabot.yml) (npm + GitHub Actions). (Dependency review žingsnis neįtrauktas, kol repozitorijoje neįjungtas Dependency graph.)
