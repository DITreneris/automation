# Changelog

Visi reikšmingi projekto pakeitimai dokumentuojami šiame faile.

Formatas pagal [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), versijavimas – [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Prideta

- **[QA] GSC HTML verify:** [google7305663b2567346e.html](google7305663b2567346e.html) root – Search Console nuosavybė `https://www.promptanatomy.info/`. Sitemap pateikta (`/sitemap.xml`); pirmas nuskaitymas 2026-08-16 dar failino (failas 200 + `application/xml`, 14 URL).

### Pakeista

- **[UI] Ecosystem spoke chips:** `.ecosystem-links` – pill chip’ai kaip `.tag` (mono hostname, `--brand-teal-dark`, be underline), ne nuogas URL sąrašas po diagrama.
- **[Orchestrator] Board after 1.7.0:** [MUST_TODO.md](MUST_TODO.md) ir [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md) – Wave 0/1 baigtos; dabar atradimas (GSC, LT/EN), ne `es`/`fr`/`nl`.

### Taisyta

---

## [1.7.0] - 2026-08-16

### Prideta

- **[Curriculum] German locale:** Wave 1 `/de/` (`de/index.html`, `de/privacy.html`) per N+1 playbook. Generator model like ET/LV: [scripts/de-pairs.cjs](scripts/de-pairs.cjs), [scripts/prompt-bodies-de.cjs](scripts/prompt-bodies-de.cjs), `js/library.de.js`. UI **Sie**; META **Du bist**. H1 `Lassen Sie KI 30–50% Ihrer täglichen Aufgaben erledigen` / lead `8 Übungen mit fertigen Vorlagen – Ergebnisse in Minuten.` Endonym **Deutsch**; `html lang` / `hreflang` = `de`; `og:locale` `de_DE`. Course links stay `COURSE_URL_EN`.
- **[QA] llms.txt locale doors:** 8 promptų URL LT / DE / JA / ZH (`#block1`…`#block8`); ET/LV – bibliotekos URL. EN sąrašas lieka kanoninis.

### Pakeista

- **[Orchestrator] Agent docs after 1.6.0:** AGENTS file map (`locale-nudge.js`, `lang-switcher.js`, HowTo JSON-LD); locale-switcher / locale-sync / test-debug / hero-copy skills; LESSONS pa11y G18 contrast rule.
- **[Content] Privacy Analytics H2:** EN atskleidžia Vercel Web Analytics (kelias, šaltinis, šalis, įrenginys; be slapukų ir paskyros); sušvelninta „no sending to servers“. Sinchronas LT/ET/LV/DE/JA/ZH. Redaktoriaus juridinė peržiūra lieka atvira.
- **[Orchestrator] Hold on NL/ES/FR:** Vercel 1 m. (~300 lankytojų: LT 61%, NL 8, FR 4, DE 3, ES 0). Kita kalba tik ≥30 / 90 d. ir bounce ant `/en/`. `.app` lieka EN. [MUST_TODO.md](MUST_TODO.md), [docs/GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md), [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md).
- **[Content] DE content pass:** UI Sie / META Du bist; viena kalkė – „Krisen zu führen“ → „Krisen zu bewältigen“.

### Taisyta

- **[QA] Locale nudge contrast:** `.locale-nudge-link` uses `--brand-teal-dark` on `--white` (WCAG AA ≥4.5:1; was teal on page surface at 4.27:1).
- **[QA] JSON-LD HowTo / ItemList `@id`:** ET/LV/DE generatoriaus poros `en/#howto` → locale `#howto`, `en/#prompts` → locale `#prompts`. LT/JA/ZH jau buvo teisingi.

---

## [1.6.0] - 2026-08-15

### Prideta

- **[Orchestrator] Global acquisition planning:** [docs/GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md) (kodėl, 4 TAIP, kalbų bangos, switcher kanonas, SEO/AIEO/GEO); [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md) pakeičia archyvinį 2026-02 MVP. [MUST_TODO.md](MUST_TODO.md) = Wave 0 lenta. Agentai: AGENTS misija = banga ne lubos; [locale-switcher](.cursor/skills/locale-switcher/SKILL.md); MULTILINGUAL §7 N+1 playbook.
- **[Content] Simplified Chinese locale:** šešta kalba `/zh/` (`zh/index.html`, `zh/privacy.html`), `js/library.zh.js` (rankiniu, kaip JA), `scripts/prompt-bodies-zh.cjs` (korpusas; `ZH_PAIRS` generatoriuje nėra). `html lang` / `hreflang` = `zh-Hans` (`id="hreflang-zh"`); `og:locale` `zh_CN`; switcher **简体中文**; `localStorage` / `data-lang` = `zh`; visi `navigator.language` `zh*` → `/zh/`; `x-default` lieka `/en/`. Hero: `让 AI 完成你日常工作的 30%–50%` / `8 个带现成模板的练习，几分钟就能出结果。` CJK font stack `html[lang^="zh"]` ([css/library.css](css/library.css), [css/privacy.css](css/privacy.css)). Traditional / OpenCC / Baidu / ICP – ne šiame cikle.
- **[QA] 6-locale wiring:** [tests/structure.test.js](tests/structure.test.js) `ALL_LANGS` += `zh`, `FOOTER_ENTITY_COPY.zh`, `lang="zh-Hans"`, library `lang-link >= 10`, privacy `lang-link >= 5`; [scripts/lint-html.mjs](scripts/lint-html.mjs) 13 failų; [scripts/pa11y-pages.cjs](scripts/pa11y-pages.cjs) `/zh/`, `/zh/privacy.html`; [eslint.config.js](eslint.config.js) `library.zh.js`; CI locale index += `zh/index.html`. [sitemap.xml](sitemap.xml) `/zh/` + `/zh/privacy.html`, `hreflang="zh-Hans"` visuose klasteriuose, `<lastmod>2026-08-15</lastmod>`.
- **[UI] Switcher atpažinimas:** Lucide `languages` + endonimas + chevron; kiekvienas `.lang-link` turi `lang` ir `hreflang` (ZH: `zh-Hans`).
- **[UI] Locale nudge:** [js/locale-nudge.js](js/locale-nudge.js) – suggest-don't-force juosta, kai nėra `localStorage.lang` ir naršyklės kalba mapina į kitą locale. Jokio 302 iš `/{locale}/`.
- **[QA] AIEO:** [llms.txt](llms.txt) klientų klausimams (kas / kam / 8 žingsniai / kursas; be DS vidurių). JSON-LD `HowTo` + `ItemList` visose 6 bibliotekos locale.
- **[QA] Hero lock:** struktūriniai assertai kanoniniam H1 / lead / title / OG visoms 6 kalboms.
- **[UI] Ecosystem nuorodos:** `.cloud` / `.info` / `.space` / `.help` / `.blog` / `.pro` / `.ceo` kaip tikri `href` po diagrama. H2 lieka Daily Workflow Library.
- **[UI] 404 kalba:** pirminė CTA href pagal `localStorage` → `navigator.language` → EN; locale nuorodos rašo `localStorage.lang`. Be `location.replace`.

### Pakeista

- **[Content] ZH chrome + prompt polish:** gramatika ir registras (lankytojas **你**; META `你是一名…`; before-use `什么时候用` / `先替换` / `操作`; progress `已完成 N / 8`). 8 kūnai nebe EN kalkė: P6 paste-hook (pokalbį / įklijuotą 5 žingsnį), P5 80/20 kaip JA, P1 `澄清`, P7 lentelė `[提示词] | [使用场景] | [解决的问题]`. Privatumas ištikimas EN (`资料库`, be PIPL/ICP).
- **[Curriculum] Locale docs:** 6 kalbos – [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md), [AGENTS.md](AGENTS.md), [CONTRIBUTING.md](CONTRIBUTING.md), [README.md](README.md), [DEPLOYMENT.md](DEPLOYMENT.md), [MUST_TODO.md](MUST_TODO.md), [.cursor/skills/locale-sync/SKILL.md](.cursor/skills/locale-sync/SKILL.md), [.cursor/skills/hero-copy/SKILL.md](.cursor/skills/hero-copy/SKILL.md), [lessons/LESSONS.md](lessons/LESSONS.md) (`hreflang` = `zh-Hans`, ne `zh`).
- **[UI] Prompt 7:** nuimtas unreleased takeaway (`textarea` + „Copy table“). Kortelė vėl kaip 1–6 ir 8; rinkinys lieka modelio lentelė.

---

## [1.5.0] - 2026-08-14

### Prideta

- **[UI] Ritual complete:** `#ritual-complete` po prompto 8 (5 kalbos); `COURSE_RITUAL_URL` (`utm_medium=ritual_complete`); prompt-8 `prompt-next-link` → `#ritual-complete`. Badge ir community lieka `COURSE_URL_EN`; entity footer lieka `HUB_ENTITY_URL`.
- **[UI] Entity footer (QW1b):** `.footer-entity` 5 bibliotekos locale – EN/LT kanoninis copy, ET/LV/JA ta pati prasmė; nuoroda `HUB_ENTITY_URL` (`utm_source=info`, `utm_medium=entity_footer`, `utm_campaign=ecosystem`). Badge ir community lieka `COURSE_URL_EN`.
- **[Orchestrator] Repo hygiene:** [LICENSE](LICENSE) (CC BY 4.0), [SECURITY.md](SECURITY.md), [CONTRIBUTING.md](CONTRIBUTING.md); README EN quick start ir CI badge; `package.json` `license: CC-BY-4.0`.
- **[Orchestrator] CI docs:** CONTRIBUTING CI parity; TESTAVIMAS cross-link; CI locale `index.html` presence check.
- **[Orchestrator] Lean AGENTS.md:** English operational SSOT; slim `.cursorrules`; deduped `.cursor/rules/*.mdc`.
- **[Orchestrator] Cursor skills:** `.cursor/skills/` — locale-sync (LT/ET/LV JS tik per poras; `library.lt.js` generuojamas), release-changelog, design-token-guard, test-debug, hero-copy (H1 = prize; 5 kanoniniai lead).
- **[Orchestrator] Lessons:** [lessons/LESSONS.md](lessons/LESSONS.md), [lessons/audit-patterns.md](lessons/audit-patterns.md); 5 seed rules.
- **[Orchestrator] GitHub workflow v1.0:** issue templates, CODEOWNERS, README agent entry points.
- **[QA] Privacy a11y:** [css/privacy.css](css/privacy.css) – nuorodos `--brand-teal-dark` (WCAG AA ≥4.5:1 ant `--color-surface-page`).

### Pakeista

- **[UI] DS 2.0.1 token ROI:** `--space-0/1/1_5`; type scale `rem` + `--font-size-hero` `clamp`; hero H1/lead/meta, `.cta-button`, sekcijų H2 ant tokenų; `color-scheme: light`. Copy neliestas.
- **[Content] 5-locale language pass:** rašyba, skyryba, gramatika ir registras (LT Tu; ET Teie; LV Jūs; JA です/ます) UI, 8 promptuose ir privatume. Hero H1/lead neliesti. ET/LV/LT JS per generatoriaus poras; JA lead sutrauktas iki EN prasmės. 2 ratas: EN `your company or your client's`, Oxford kablelis, en dash; JA privacy be „外部サービス“; ET footer `kassa`; LV footer `norēķins`. `FOOTER_ENTITY_COPY` testai atnaujinti.
- **[Content] Identity (D) + copy restore:** ecosystem H2 nebėra Hub („Daily Workflow Library“); `.next-steps` – „Jump to a step“; H1 / OG – prizinė eilutė „Let AI do 30–50% of your daily tasks“; lead / meta – „8 exercises with ready-made templates – results in minutes.“ (5 kalbos). Front page be žodžio „ritual“ (ID/UTM `#ritual-complete` lieka).
- **[UI] Mobile polish:** kalbų dropdown (hero žemyn, footer į viršų); hover transform/scale tik `@media (hover: hover)`; community CTA full-width ≤480px; toast `safe-area-inset`; instrukcijų `<code>` wrap; footer contact stack ant mobile; privacy `safe-area` padding.
- **[UI] Kalbų dropdown fix:** [js/lang-switcher.js](js/lang-switcher.js) – outside click neuždaro paspaudus meniu viduje; [css/library.css](css/library.css) – `.header-top` stacking (`z-index: 10`) virš H1, meniu `z-index: 100` (be hero teksto dubliavimo ir be `overflow: visible` ant `.header`).
- **[QA] LT collapsible prompt titles:** [lt/index.html](lt/index.html) – tušti `prompt-title-2`…`8` `<h2>` (Pa11y H42.2); struktūrinis assert visoms 5 kalboms [tests/structure.test.js](tests/structure.test.js).
- **[Orchestrator] Lokalus preview:** README, AGENTS, QA – `npx serve . -l 3000` (**be** `-s`; SPA režimas luzta locale keliais).
- **[Content] Instrukcijos (5 kalbos):** 4 žingsniai → 3; mobile-first — pirma **Copy prompt**, Ctrl/Cmd+C kaip desktop pastaba.
- **[UI] DS žalios spalvos:** nav chip'ai (`.next-steps-links a`) – outline `--brand-teal`; community CTA (`.community-cta-primary`) – filled `--brand-teal`; pašalinti `--community-cta-green` tokenai (`tokens.css`, `tokens/tokens.json`).
- **[Content] Ecosystem sekcija (5 kalbos):** H2 „Welcome to the Prompt Anatomy Hub“, lead apie strategiją/taktiką/operacijas; pašalintas `<figcaption>` (dublikatas paveikslėlyje).
- **[UI] Footer micro-iteration:** light card (1px border, be shadow), mažesni `.tag` chip'ai, `.footer-meta` (contact · Privacy · kalba), copyright be Privacy linko; DS §2.8.
- **[Orchestrator] Docs be „ritual“:** README, `llms.txt`, AGENTS misija – 8 promptai / Daily Workflow Library; ID/UTM `#ritual-complete` lieka.

---

## [1.4.0] - 2026-05-29

Versija atitinka [package.json](package.json) `1.4.0`.

### Prideta

- **[Orchestrator] Pre-deploy:** [`.vercelignore`](.vercelignore) – Vercel nebedeployina `docs/`, `scripts/`, `tests/`, `*.md` ir kitų vidinių failų; struktūriniai assertai.
- **[Orchestrator] CI:** `package-lock.json` commitintas; CI/deploy – `npm ci`.
- **[UI] Lucide:** self-hosted [`assets/js/lucide.min.js`](assets/js/lucide.min.js) (v0.460.0) – nebėra unpkg CDN priklausomybės.
- **[UI] 404:** [`404.html`](404.html) – branded not-found puslapis su nuoroda į `/en/`.
- **[UI] Design System v2.0 (DS 2.0.0):** [`css/tokens.css`](css/tokens.css) – vienintelis `:root` SSOT; [`css/library.css`](css/library.css) importuoja tokens; [`css/privacy.css`](css/privacy.css) – bendras privatumo layout. Semantic sluoksnis (`--color-link`, `--color-action-primary-bg`, `--color-focus-ring` ir kt.); tipografijos, focus, motion, overlay ir breakpoint tokenai. [docs/design_system.md](docs/design_system.md) – 4 ramsčiai (Meta, Foundations, Components, Patterns, Governance); komponentų states ir 3 patterns. [`tokens/tokens.json`](tokens/tokens.json) – DTCG 2025.10 eksportas; [`llms.txt`](llms.txt) – agentų DS santrauka.
- **[QA] DS validacija:** [`scripts/validate-tokens.mjs`](scripts/validate-tokens.mjs) (CSS ↔ docs ↔ JSON); [`scripts/lint-design-tokens.mjs`](scripts/lint-design-tokens.mjs) (draudžiami off-brand hex, privacy SSOT, hex tik `tokens.css`); `npm run validate:tokens`, `npm run lint:design-tokens` įtraukti į `npm test`. Struktūriniai assertai: privacy `tokens.css`/`privacy.css`, DS focus-visible, `tokens/tokens.json` assetai.
- **[Orchestrator] Lean dokumentų sistema:** [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) – 3 lygių indeksas; pasenę auditai, roadmap, integracijos → [docs/archive/](docs/archive/); [MUST_TODO.md](MUST_TODO.md) ir [.cursorrules](.cursorrules) sutrumpinti; `.cursor/rules/docs-lean.mdc`.
- **[Orchestrator] Vercel:** [`vercel.json`](vercel.json) – statinių assetų cache, `X-Content-Type-Options` / `Referrer-Policy`; 301 redirectai iš senų root ikonų/OG kelių į `assets/`; pašalintas `trailingSlash`; [DEPLOYMENT.md](DEPLOYMENT.md) §1.
- **[Orchestrator] Vercel Web Analytics:** `/_vercel/insights/script.js` visuose 11 HTML puslapiuose.
- **[QA] SEO head:** statiniai `hreflang`, `canonical`, lokalizuoti `meta description`; lokalizuoti `og:title` / `twitter:title` pagal puslapio `<title>`; per-locale `og:locale`; JSON-LD bibliotekos puslapiuose; root `noindex,follow`; [`llms.txt`](llms.txt), [`sitemap.xml`](sitemap.xml); [`scripts/seo-constants.cjs`](scripts/seo-constants.cjs); struktūriniai assertai.
- **[QA] OG paveikslėlis:** master [`assets/img/og/01_og_image.png`](assets/img/og/01_og_image.png) → production [`assets/img/og/og-image.png`](assets/img/og/og-image.png) (`npm run generate:og-image`).
- **[UI] Kalbų dropdown:** [js/lang-switcher.js](js/lang-switcher.js) – hero + footer (`lang-switcher--dropdown`).
- **Sistemos higiena:** tokenų SSOT [`css/tokens.css`](css/tokens.css); PWA ([site.webmanifest](site.webmanifest), `npm run generate:favicons`); [robots.txt](robots.txt), [sitemap.xml](sitemap.xml); `.cursor/rules/{project-global,design-tokens,multilingual}.mdc`.
- **Footer kontaktai** (5× `index.html`): `<address class="footer-contact">` – Prompt Anatomy, Alameda, `info@promptanatomy.app`.
- **[UI] Design System v1.0:** pradinis [docs/design_system.md](docs/design_system.md); tokenai `--brand-teal`, `--bg-subtle`, `--green-hover`, `--error` (v2.0 – žr. aukščiau).
- **`assets/` katalogas:** [assets/README.md](assets/README.md) – `img/icons/` (favicon, PWA), `img/og/` (social preview).
- **[UI] Collapsible prompts 2–8:** native `<details>`/`<summary>`; prompt 1 visada atidarytas; [js/prompt-collapse.js](js/prompt-collapse.js) – `#blockN` deep-link; benefit-led antraštės (prompt-desc) 2–8 visose 5 kalbose; promptų 2–8 antraštės – `<h2 class="prompt-title">` (a11y outline).
- **[UI] Ecosystem sekcija:** `.ecosystem` tarp `.community` ir `.footer` (5 kalbos); [`assets/img/ecosystem/`](assets/img/ecosystem/) – WebP + PNG (`npm run generate:ecosystem`); [css/library.css](css/library.css), [docs/design_system.md](docs/design_system.md) §5.5.

### Pakeista

- **[Orchestrator] GitHub Pages:** [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) – tik `workflow_dispatch` (legacy atsarginis); production – Vercel.
- **[QA] Clipboard:** [js/library.js](js/library.js) – `copyPrompt` be debounce (Safari user-activation); `selectText` lieka debounced.
- **[UI] A11y:** pašalintas `role="status"` iš statinio hero meta ir instructions laiko žymės; palikta tik dinaminiams `#toast` / `#progressIndicator`.
- **[UI] Privatumo puslapiai (5 kalbos):** pašalinti inline `<style>` su Chakra mėlyna (`#2B6CB0`); bendras [`css/privacy.css`](css/privacy.css) – navy back CTA, teal nuorodos, gold focus ring; [`en/privacy.html`](en/privacy.html), [`et/privacy.html`](et/privacy.html), [`lv/privacy.html`](lv/privacy.html), [`ja/privacy.html`](ja/privacy.html), [`lt/privatumas.html`](lt/privatumas.html).
- **[UI] `library.css`:** `:root` išskirtas į [`css/tokens.css`](css/tokens.css); hero overlay, badge, CTA šešėliai ir `focus-visible` – per foundation tokenus (`--overlay-hero`, `--shadow-cta`, `--focus-ring-width` ir kt.).
- **[UI] Hero CTA hierarchija:** vienas primary „Use first prompt“ (5 kalbos); kursas kaip secondary tik per badge → `COURSE_URL_EN`; Telegram pašalintas iš hero (lieka `.community` sekcijoje); struktūriniai assertai [tests/structure.test.js](tests/structure.test.js); [docs/design_system.md](docs/design_system.md) §4–§5.1.
- **[UI] Journey fluency (Phase 1):** „Prieš naudojant“ / Before using – „below“ → „above“ (DOM: code-block viršuje); 7× `prompt-next-link` po Copy CTA (žingsniai 1–7) visose 5 kalbose; sėkmingas kopijavimas automatiškai pažymi „Mark as done“ ir atnaujina progresą ([js/library.js](js/library.js), [css/library.css](css/library.css)); struktūrinis assert 7 nuorodoms [tests/structure.test.js](tests/structure.test.js).
- **[UI] Copy prompt CTA:** `.prompt-footer` (Copy + Mark as done) perkeltas į `prompt-body` iškart po `code-block`, prieš Before using / Readiness; visos 5 kalbos; [css/library.css](css/library.css) `.prompt-body > .prompt-footer`; 40 DOM order assertų [tests/structure.test.js](tests/structure.test.js); [docs/BULLET_PROOF_PROMPTS.md](docs/BULLET_PROOF_PROMPTS.md) §1, [docs/design_system.md](docs/design_system.md) §5.2.
- **[UI] Assetai:** PNG ir `favicon.svg` iš root → `assets/img/icons/`, `assets/img/og/`; atnaujinti HTML (11), manifest, generatoriai, testai.
- **[Orchestrator] Dokumentacija:** [AGENTS.md](AGENTS.md) §8 lean indeksas; README `docs/` ir `css/` medis; PR šablonas – DS checklist; [`.cursor/rules/design-tokens.mdc`](.cursor/rules/design-tokens.mdc) – DS v2.0, `tokens.css` SSOT.
- **[QA] OG šaltinis:** pašalintas `og-image.svg`; kanoninis social preview – `assets/img/og/`.
- **[UI] Kalbų perjungiklis:** 5 inline linkai → compact dropdown (hero + footer); ET/LV per generatorių; privatumas – flat list.
- **Brand paletė:** accent `#CFA73A`, dark `#0B1320`; production URL `https://www.promptanatomy.info/`; kursas `https://www.promptanatomy.app/en` (`COURSE_URL_EN`).

### Pašalinta

- Root: `STYLEGUIDE.md` (kanonas – `docs/design_system.md` DS v2.0); PNG, `favicon.svg` (→ `assets/`).
- Privatumo puslapiuose: dubliuoti inline `<style>` blokai (→ `tokens.css` + `privacy.css`).
- `docs/` ir root: auditai, MVP roadmap, TODO, integracijos, memo → [docs/archive/](docs/archive/).
- Root `google-apps-script.js` → [docs/archive/integrations/google-apps-script.js](docs/archive/integrations/google-apps-script.js).

---

## [1.3.0] - 2026-05-29

Versija atitinka [package.json](package.json) `1.3.0`.

### Prideta

- [scripts/pa11y.config.cjs](scripts/pa11y.config.cjs) – bendra pa11y konfigūracija (Puppeteer `--no-sandbox`, CI suderinamumas su pa11y v9).
- [scripts/prompt-bodies-ja.cjs](scripts/prompt-bodies-ja.cjs) – JA promptų META/INPUT/OUTPUT korpusas (rankiniam `ja/` palaikymui).
- Struktūriniai testai: 5 kalbų `lang-switcher` (`data-lang` ir `lang-link >= 4`), root numatytas `en`.

### Pakeista

- **UX / routing:** anglų kalba (**EN**) – numatyta root redirect ir `x-default`; visuose bibliotekos ir privatumo puslapiuose penkiakalbis jungiklis (**Lietuvių | English | Eesti | Latviešu | 日本語**).
- Root `/`: `localStorage` ir `navigator.language` palaiko `lt`, `en`, `et`, `lv`, `ja`; fallback `/en/`.
- Generatorius: `ET_NAV` / `LV_NAV` atnaujinti su 5 kalbomis (įskaitant 日本語).
- JA: progreso tekstas `進捗：X / 8`; 7-o prompto lentelės tokenai – `[プロンプト] | [使用場面] | [解決する課題]`.
- Bendruomenės CTA: **Telegram** `https://t.me/prompt_anatomy` (visos bibliotekos versijos).
- Testai / QA: `lint:html` – 11 failų (su `ja/`); pa11y – `/ja/`, `/ja/privacy.html`.
- CI: `git diff --exit-code` tik ET/LV/LT generuojami failai (be rankinio JA).
- Dokumentacija: EN-centrinis 5 kalbų modelis – [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md), [AGENTS.md](AGENTS.md), [README.md](README.md), [DEPLOYMENT.md](DEPLOYMENT.md), [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md), [docs/memo_ee_lv.md](docs/memo_ee_lv.md).

### Pataisyta

- CI nebetikrina `ja/index.html` ir `js/library.ja.js` po `generate:et-lv` (JA ne generuojamas – rankinis palaikymas).

### Pašalinta

- Dubliuotas `japan/` medis (netyčinis kopijavimas, ne deploy dalis).

---

## [1.2.0] - 2026-04-14

### Prideta

- Japonų (JA, `ja`) pilotinė lokalizacija: `/ja/` (`ja/index.html`) ir `/ja/privacy.html`; `js/library.ja.js` (rankiniu). Promptų šablonai – [scripts/prompt-bodies-ja.cjs](scripts/prompt-bodies-ja.cjs).

### Pakeista

- Root redirect ir kalbų jungikliai: pridėta **日本語**, `localStorage.lang='ja'` ir `navigator.language` `ja*` nukreipimas.
- `hreflang`: pridėtas `hreflang-ja` visuose puslapiuose; `js/hreflang.js` bazės kelio regex papildytas `ja`.
- QA/CI vartai: struktūriniai testai papildyti `ja`, ESLint globalai papildyti `js/library.ja.js`.
- Dokumentacija: `docs/MULTILINGUAL_STRUCTURE.md` papildyta `ja` maršrutais ir `hreflang` taisyklėmis.
- JA UX: išjungtas `tap-to-copy` ant `.code-block` (paritetas su EN/LT/ET/LV – click/tap tik pažymi tekstą; kopijavimas per mygtuką / `Ctrl+C` / `Cmd+C`).
- JA mikrotekstas: progreso indikatorius `使用済み：X / 8` → `進捗：X / 8`.
- LT privatumas: suvienodintas apatinis grįžimo linkas „← Grįžti į biblioteką“ (`lt/privatumas.html`).

---

## [1.1.0] - 2026-03-29

Versija atitinka [package.json](package.json) `1.1.0` (minor: toolchain, daugiakalbystė, CI, turinio sinchronizacija nuo 1.0.0).

### Prideta

- Lokali HTML validacija: `html-validate` (preset `document`, [`.htmlvalidate.json`](.htmlvalidate.json)), [scripts/lint-html.mjs](scripts/lint-html.mjs); pašalintas `html-validator-cli` (W3C API / 403 rizika).
- Bendras [css/library.css](css/library.css); bibliotekos `index.html` naudoja `:root { --codeblock-copy-hint }` + `link` į `library.css`.
- Išoriniai skriptai: kanoninis [js/library.js](js/library.js) (EN); [js/library.lt.js](js/library.lt.js), [js/library.et.js](js/library.et.js), [js/library.lv.js](js/library.lv.js) generuojami per `npm run generate:et-lv` (`LT_JS_PAIRS` / `ET_JS_PAIRS` / `LV_JS_PAIRS` [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs)).
- [.github/dependabot.yml](.github/dependabot.yml) (npm + github-actions); GitHub Actions žingsniai su prisegtu commit SHA ([ci.yml](.github/workflows/ci.yml), [deploy.yml](.github/workflows/deploy.yml)).
- CI / deploy: po `generate:et-lv` – `git diff --exit-code` (`et/index.html`, `lv/index.html`, `js/library.et.js`, `js/library.lv.js`, `js/library.lt.js`); pa11y per [scripts/pa11y-pages.cjs](scripts/pa11y-pages.cjs) (įskaitant root `/`).
- [.gitattributes](.gitattributes): `eol=lf` HTML/JS/CSS ir kt.; generatorius rašo LF (`writeUtf8Lf`) – vienodas `git diff` Windows / Ubuntu CI.
- Kanoninis GitHub repozitorijas: [DITreneris/automation](https://github.com/DITreneris/automation). Production URL dokumentacijoje: `https://DITreneris.github.io/automation/` (README, DEPLOYMENT, TESTAVIMAS, MULTILINGUAL_STRUCTURE).
- Daugiakalbiška statinė biblioteka (LT / EN / ET / LV): katalogai `/lt/`, `/en/`, `/et/`, `/lv/`; LT privatumas `lt/privatumas.html`, kitos kalbos – `privacy.html`; root redirect ir `localStorage` (`lt` \| `en` \| `et` \| `lv`), naršyklės kalba (`et` / `ee` / `lv`), keturiakalbis jungiklis ir `hreflang` visuose aštuoniuose puslapiuose, `x-default` → EN. ET/LV bibliotekos HTML generuojamos iš EN (`scripts/generate-et-lv-pages.cjs`, `scripts/prompt-bodies-et-lv.cjs`); struktūriniai testai ir `lint:html` apima ET/LV. Žr. [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md), MUST_TODO.md skyrių „Multilingual“.
- Mikroteksto auditas EN UI: [docs/MICROCOPY_AUDIT_EN.md](docs/MICROCOPY_AUDIT_EN.md) (inventorius ir istorija). Vidutinės / žemos prioriteto rekomendacijos įgyvendintos – žr. toliau „Pakeista“ ir MICROCOPY 7 skyrių. EN sinchronizacija su kitomis kalbomis – [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) (turinio sinchronizacija: LT rankiniu, ET/LV per `npm run generate:et-lv`).
- Bullet-proof promptų standartas: docs/BULLET_PROOF_PROMPTS.md (META/INPUT/OUTPUT struktūra, reikalavimai, „Naudok kai“ taksonomija). Dokumentų inventoriuje – docs/DOCUMENTATION.md.
- Kiekviename prompte: META/INPUT/OUTPUT blokai, „Pakeisk prieš naudodamas:“, „Rezultatas:“, „Naudok kai:“. Pirmame prompte – „Tai nėra klausimynas. Nukopijuok šį tekstą ir įklijuok į ChatGPT arba Claude.“
- Kortelėse: „Naudok kai“ eilutė po kiekvieno prompto aprašymo (CSS .prompt-when). Gyvo testavimo checklist: „Turinio / bullet-proof“ skyrius docs/TESTAVIMAS.md.
- QA ir dokumentų valdymo procesas: CHANGELOG.md, docs/DOCUMENTATION.md, integracija su AGENTS.md ir .cursorrules.
- Deploy: GitHub Pages workflow (.github/workflows/deploy.yml), DEPLOYMENT.md.
- QA standartas: docs/QA_STANDARTAS.md su nuoroda į [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01).
- Gyvo testavimo dokumentacija: docs/TESTAVIMAS.md (scenarijai ir žurnalas).
- Ryšys su pagrindiniu produktu: badge ir nuorodos į [Prompt Anatomy](https://www.promptanatomy.app/en) (kanonas: kelias `/en`; LT etiketė „Promptų anatomija“), community ir footer. Senasis hostingas `ditreneris.github.io/anatomija` – nebenaudoti (istorija – žr. „Pakeista“).
- Favicon: favicon.svg (SVG, „P“ ant teal fono), nuorodos index.html ir privatumas.html.
- `.nojekyll` root’e – GitHub Pages naudoja statinius failus be Jekyll.
- Bendras [js/hreflang.js](js/hreflang.js): `hreflang` nuorodos užpildomos pagal `<html data-hreflang-suite="library"|"privacy">`; vienas regex bazės keliui (įskaitant `/repo/lt` be trailing slash po locale).
- Struktūriniai testai papildyti: `data-hreflang-suite`, išorinis `hreflang.js`, `lang-switcher-list`, privatumo `lang-link`, root rankinių nuorodų `localStorage`.
- CI (pa11y): papildomai ET ir LV biblioteka (`/et/`, `/lv/`) ir jų privatumo puslapiai.
- PR šablonas: sekcija „Daugiakalbystė (kai liečia EN)“ – `generate:et-lv` ir ET/LV peržiūra; papildomas punktas dėl EN inline JS / mikroteksto ir `lt/index.html` sinchronizacijos.
- Dokumentacija: [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) (3b: vartotojo žymekliai ir 7-o prompto lentelės stulpelių antraštės visoms kalboms LT / EN / ET / LV).

### Pakeista

- CI: pašalintas `dependency-review-action` job – GitHub grąžina „Dependency review is not supported“, kol repozitorijoje neįjungtas **Dependency graph** ([Security analysis](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph)). Likęs CI: `lint-and-test` (generatoriaus diff, `npm test`, pa11y).
- **ESLint** `8.x` → `10.x` su flat config ([eslint.config.js](eslint.config.js), `@eslint/js`, `globals`); pašalintas [.eslintrc.json](.eslintrc.json); `lint:js` → `eslint .`.
- **wait-on** `8.x` → `9.x` (CI `wait-on` žingsnis).
- **GitHub Actions:** `actions/checkout` v6.0.2, `actions/setup-node` v6.3.0, **Node.js 22** CI/deploy (ESLint 10 reikalavimas); `deploy-pages` v5.0.0. **`upload-pages-artifact` lieka v3.0.1** – v4 neįtraukia dotfailų (`.nojekyll`), kas sulaužytų statinį Pages; [Dependabot](.github/dependabot.yml) ignoruoja šio veiksmo major atnaujinimus.
- **pa11y** dev priklausomybė `6.x` → `9.1.1` ([migracija](https://github.com/pa11y/pa11y/blob/main/MIGRATION.md): Node.js ≥ 20, atnaujintas Puppeteer / axe). [scripts/pa11y-pages.cjs](scripts/pa11y-pages.cjs) ir CI a11y žingsnis lieka tie patys CLI argumentai (`--standard WCAG2AA`, `--ignore warning`, `--reporter cli`, `--no-sandbox`).
- Kanoninė **Prompt Anatomy** nuoroda visoje bibliotekoje ir agentų taisyklėse: **`https://www.promptanatomy.app/en`** (produkto anglų įėjimas); atnaujinta [en/index.html](en/index.html), [lt/index.html](lt/index.html), generatorius [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs), regeneruoti ET/LV; [AGENTS.md](AGENTS.md), [.cursorrules](.cursorrules), [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md).
- Estų (ET) bibliotekos UI / mikrotekstas: [scripts/prompt-bodies-et-lv.cjs](scripts/prompt-bodies-et-lv.cjs) – pataisyta klaidinga forma „tehisintelligendiga“ → „tehisintellektiga“ (8-o prompto OUTPUT); OUTPUT eilutėse nuosekliau skaitytojui („näete“, „saate“, „kasutage seda“). [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs) – `ET_PAIRS`: vieningas mandagaus („teie“) adresavimas ir daugiskaitos imperatyvai (Kasutage, kui / Valige / Kopeerige prompt / Märkige / asendage ir pan.); `ET_JS_PAIRS`: progreso tekstas suderintas su HTML („Olete kasutanud …“, užbaigimas „… kõiki kaheksat prompti“), klaidų pranešimai „Proovige“ / „Valige“. [et/privacy.html](et/privacy.html) – aiškesnis sakinys apie `localStorage`. [tests/structure.test.js](tests/structure.test.js) – ET mygtukų tekstas „Kopeerige prompt“. Po `npm run generate:et-lv` atnaujinti `et/index.html`, `js/library.et.js` (ir LV/LT generuojami failai pagal generatorių).
- Dokumentų valdymas: [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) §1 papildytas (VARIANTU_PALYGINIMAS, MICROCOPY_AUDIT_EN, STYLEGUIDE, KODO_BAZES_ANALIZE); §2 – PR dokumentacijos Definition of Done. [README.md](README.md) – `docs/` medis (BULLET_PROOF, MICROCOPY) ir nuoroda į pilną inventorių §1. [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md) §4 – `lint:html` (9 HTML), a11y lokaliai kaip [AGENTS.md](AGENTS.md) §6 / [scripts/pa11y-pages.cjs](scripts/pa11y-pages.cjs). [.cursorrules](.cursorrules) – nuoroda į DOCUMENTATION §1 kaip kanoninį indeksą.
- Dokumentacija ir agentų taisyklės suderintos su daugiakalbe statine architektūra (horizontalūs / vertikalūs vartai): [AGENTS.md](AGENTS.md) – meta (dokumentacija LT, UI lt/en/et/lv), išplėstos Content/Curriculum/UI/QA/Orchestrator rolės, **§3 workflow** – žingsnis „Daugiakalbystės vartai“, §8 – [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) po [.cursorrules](.cursorrules), §6 – komandos (`npm test`, `npm run generate:et-lv`, pa11y per `wait-on` + `PA11Y_BASE`); [.cursorrules](.cursorrules) – daugiakalbė apžvalga, LT tonas tik `lt/`, `lang` per locale, Google forma / GDPR sąlygiškai aktyviai formai, **CODE REVIEW CHECKLIST** – punktai sutampa su [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md) „Daugiakalbystė“; [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) – kryžminės nuorodos AGENTS ↔ MULTILINGUAL (operacinė seka §3).
- `npm run lint:html` → `node scripts/lint-html.mjs`. Struktūriniai testai: `library.css`, locale JS failai.
- ET / LV: vartotojo užpildomi žymekliai promptuose lokalizuoti (paritetas su LT): `scripts/prompt-bodies-et-lv.cjs` ir `scripts/generate-et-lv-pages.cjs` (instrukcijos, „Kasuta kui“ / „Lietojiet, kad“, footer); regeneruoti `et/index.html`, `lv/index.html`. ET: `[ETTEVÕTE]`, `[MINU ROLL]`, 7-ame prompte `[KÜSITIS]` \| `[MILLAL KASUTAN]` \| `[MILLISE PROBLEEMI LAHENDAB]`. LV: `[UZŅĒMUMS]`, `[MANA LOMA]`, `[PROMPTTEKSTS]` \| `[KAD LIETOJU]` \| `[KĀDU PROBLĒMU RISINA]`. EN: `[COMPANY]` / `[MY ROLE]` be pakeitimų. Žr. §3b.
- LV mikrokopija ir generatorius: [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs) – į `LV_PAIRS` pridėta antroji „What to do“ pora (trumpasis „Copy the text below…“ → „Ko darīt: Kopējiet…“), kaip jau buvo `ET_PAIRS`; po `npm run generate:et-lv` 2–8 promptuose nebelieka anglų bloko. [scripts/prompt-bodies-et-lv.cjs](scripts/prompt-bodies-et-lv.cjs) – `LV_PROMPTS`: META (prompt 1) „nepieciešama precizēšana“, META (prompt 5) „kur tiek tērēts laiks un enerģija“ (vietoj netinkamos formuluotės), INPUT (prompt 6) „saprotami lietotājam bez tehniskām zināšanām“. `LV_JS_PAIRS`: klaidos tekstas „Kaut kas nogāja nepareizi“ (vietoj „greizi“). Regeneruoti `lv/index.html`, `js/library.lv.js`.
- LT: kopijavimo `copyPrompt` / `fallbackCopy` / `showError` – tie patys vartotojiški pranešimai kaip EN (be techninių „Promptas nerastas“ ir pan.); numatytasis klaidos tekstas ir `aria-label` be „Klaida:“ prefikso.
- Keturių kalbų UI/UX paritetas (statinė biblioteka): EN + sinchronizuota LT + regeneruota ET/LV (`npm run generate:et-lv`) pagal docs/MICROCOPY_AUDIT_EN.md §7 – code-block „Select and copy“ (ET „Vali ja kopeeri“, LV „Atlasiet un kopējiet“, LT „Pažymėk ir nukopijuok“), antraštė „What you get“ / „Mida saate“ / „Ko iegūstat“ / „Ką gausite“, footer „Good luck with your prompts“ / atitikmenys, suvienodinti „Copied“ toast ir mygtuke (be šauktuko / taško). [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs): `Copied` porų tvarka – pirmiau `button.innerHTML`, tada toast `<span>Copied</span>`, kad `applyPairs` nesulaužytų JS eilutės.
- [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md): checkbox EN bibliotekos inline JS / mikrotekstui – atnaujinti LT ir paleisti `generate:et-lv`.
- Prompt Anatomy produkto URL: senasis `https://ditreneris.github.io/anatomija/` pakeistas į `https://www.promptanatomy.app/en` (ne domeno šaknis be `/en`); badge, community, footer visose kalbose; ET/LV per generatorių.
- EN mikrotekstas (aukšta prioritetas): hero „For?“ → „Who it's for:“; LT hero „Kam?“ → „Kam skirta:“ (paritetas su EN). Visos JS klaidos pakeistos vartotojui suprantamu tekstu („Something went wrong. Try copying again.“, manual copy hint kai clipboard nepavyksta); vardas vienodas – „Prompt Anatomy“ (privacy title, root redirect title, privacy „Back to library“).
- Root redirect: base path išvedamas iš `location.pathname`, kai meta `base-path` tuščias – veikia GitHub Pages project site (`https://DITreneris.github.io/automation/`). DEPLOYMENT.md – nurodytas production URL.
- README.md „Kaip naudoti“: žingsnis 5 – žymekliai visoms kalboms (LT, EN, ET, LV) ir nuoroda į §3b; footer instrukcijos – DI rolės keisti nereikia.
- Visi 8 promptai perrašyti į META/INPUT/OUTPUT struktūrą; „Rolė – X“ pakeista į „Tu esi X“ (META). DI rolė atskirta nuo vartotojo rolės [MANO ROLĖ].
- Copyable promptas: į mainų atmintinę kopijuojamas tik META+INPUT+OUTPUT. Instrukcijos (Naudok kai, Pakeisk prieš naudodamas, Ką daryti) perkeltos į atskirą bloką „Prieš naudojant“ tarp code-block ir „Kodėl tai svarbu“; „Naudok kai“ pašalintas iš prompt-header.
- Community sekcija: hierarchija ir UX – vienas pagrindinis CTA (brand green #0E7A33, be glow, subtilus shadow), antrinis outline („Promptų anatomija“). Trumpesnė antraštė dviem eilutėm, vertikalūs tarpai (16px / 24px / 16px), kortelė 1px border ir 16px radius. Emoji pašalintas iš CTA. STYLEGUIDE 4.7 atnaujintas.
- Kalbos jungiklis visuose 8 puslapiuose: semantika `<nav><ul class="lang-switcher-list"><li>…`, dabartinei kalbai `aria-current="page"` (WAI); privatumo puslapiai sutapatinti su biblioteka (`class="lang-link"`, `data-lang`, fokuso stiliai).
- Root `index.html`: rankinės nuorodos į `lt/` / `en/` / `et/` / `lv/` taip pat kviečia `localStorage.setItem('lang', …)`.
- `hreflang`: inline skriptai aštuoniuose HTML pakeisti išoriniu `../js/hreflang.js`.
- `scripts/generate-et-lv-pages.cjs`: `ET_NAV` / `LV_NAV` su nauja nav struktūra; `<html>` poros atnaujintos su `data-hreflang-suite="library"`.
- [TODO.md](TODO.md) (P1–P2 uždaryti) ir [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) suderinti su įgyvendinimu (§3 `hreflang.js`, §6 testai / CI).

### Taisyta

- [js/library.js](js/library.js) (ir per generatorių – `library.lt.js` / `library.et.js` / `library.lv.js`): `fallbackCopy` po `execCommand` vėl įdeda `hiddenTextarea` į buvusią DOM vietą (`insertBefore` / `appendChild`); kitaip pakartotinis fallback kopijavimas neberasdavo `#hiddenTextarea`. Atskiri debounce timeriai `selectText` ir `copyPrompt` (`createDebounce`).
- [css/library.css](css/library.css): prie `prefers-reduced-motion: reduce` pridėta `html { scroll-behavior: auto; }` (ne tik trumpinamos animacijos / perėjimai).
- [scripts/pa11y-pages.cjs](scripts/pa11y-pages.cjs): Windows – `npx.cmd` ir `shell: false`, kad `pa11y` gautų teisingus argumentus (anksčiau `shell: true` laužė argv).
- DEPLOYMENT.md: GitHub Pages pirmas įjungimas (šaltinis **GitHub Actions**) ir troubleshooting eilutė klaidai `Failed to create deployment (404)` / `deploy-pages` Not Found; `.github/workflows/deploy.yml` – priminimas komentare.
- Badge „Promptų anatomija“: paspaudimo zona (min-height/min-width 44px), z-index ir cursor, kad nuoroda būtų aiškiai paspaudžiama.
- A11y WCAG2AA: community skyriaus nuorodos „Promptų anatomija“ kontrastas (teksto spalva #040404).
- Hreflang skriptas (lt/en index + privatumas/privacy): null patikros prieš `getElementById(...).href`, kad nebūtų klaidos, jei elemento nėra.
- Hreflang bazės kelias: ankstesnis inline `pathname.replace(/\/(lt|en|et|lv)\/.*/, …)` neteisingas, kai po locale nėra papildomo `/` (pvz. `/repo/lt`); dabar centralizuotas skaičiavimas `js/hreflang.js`.
- Hreflang `<link>`: pradinis `href=""` pakeistas į `href="#"` – HTML validatoriumi leidžiama, skriptas vėliau nustato tikrus URL.
- package.json: „serve“ įtrauka sutvarkyta; `lint:js` – `eslint .` (vietinis ESLint iš `devDependencies`, flat config).

### Pašalinta

- CI: `dependency-review-action` job (žr. „Pakeista“ – reikalauja Dependency graph).
- [.eslintrc.json](.eslintrc.json) – pakeistas flat [eslint.config.js](eslint.config.js) (ESLint 10).
- Root `privatumas.html`: nenaudojamas (kanoniniai puslapiai – `lt/privatumas.html`, `en/privacy.html`). docs/DOCUMENTATION.md inventoriuje atnaujinta nuoroda į lt/privatumas.html ir en/privacy.html.

### Deprecated

- (tuščia)

### Saugumas

- (tuščia)

---

## [1.0.0] - 2026-02-18

### Prideta

- Pradinė DI Promptų Biblioteka: 8 promptai, interaktyvus dizainas, kopijavimo funkcija.
- Dokumentacija: README.md, INTEGRACIJA.md, AGENTS.md, .cursorrules, feedback-schema.md.
- CI: lint, testai, a11y (pa11y) per .github/workflows/ci.yml.
- PR šablonas ir agentų commit prefiksai.

### Pakeista

- (pirmas release – nėra ankstesnių pakeitimų)

### Taisyta

- (nėra)
