# Changelog

Visi reikšmingi projekto pakeitimai dokumentuojami šiame faile.

Formatas pagal [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), versijavimas – [Semantic Versioning](https://semver.org/).

## [Nereleisuota]

### Prideta

- Kanoninis GitHub repozitorijas: [DITreneris/automation](https://github.com/DITreneris/automation). Production URL dokumentacijoje: `https://DITreneris.github.io/automation/` (README, DEPLOYMENT, TESTAVIMAS, MULTILINGUAL_STRUCTURE).
- Keturių kalbų palaikymas (LT / EN / ET / LV): katalogai `et/` ir `lv/` (`index.html`, `privacy.html`), root redirect ir `localStorage` reikšmės `et`/`lv`, naršyklės kalba `et`/`ee`/`lv`, keturiakalbis jungiklis ir `hreflang` visuose aštuoniuose puslapiuose, `x-default` → EN. Estų ir latvių biblioteka generuojama iš EN per `scripts/generate-et-lv-pages.cjs` ir `scripts/prompt-bodies-et-lv.cjs`. Struktūriniai testai ir `lint:html` papildyti ET/LV. Žr. docs/MULTILINGUAL_STRUCTURE.md.
- Mikroteksto auditas EN UI: docs/MICROCOPY_AUDIT_EN.md (inventorius, rekomendacijos). §7 pakeitimai įgyvendinti žr. `[Nereleisuota] / Pakeista`. EN stringų sinchronizacija – docs/MULTILINGUAL_STRUCTURE.md §4 (LT rankiniu, ET/LV per `npm run generate:et-lv`).
- Daugiakalbiška architektūra (LT/EN): folder-based URL (`/lt/`, `/en/`), kalbos jungiklis (Lietuvių | English) visuose puslapiuose, root redirect pagal `navigator.language` arba localStorage, hreflang ir `x-default` SEO. EN turinys: en/index.html (library), en/privacy.html. Žr. docs/MULTILINGUAL_STRUCTURE.md, MUST_TODO.md skyrių „Multilingual“.
- Bullet-proof promptų standartas: docs/BULLET_PROOF_PROMPTS.md (META/INPUT/OUTPUT struktūra, reikalavimai, „Naudok kai“ taksonomija). Dokumentų inventoriuje – docs/DOCUMENTATION.md.
- Kiekviename prompte: META/INPUT/OUTPUT blokai, „Pakeisk prieš naudodamas:“, „Rezultatas:“, „Naudok kai:“. Pirmame prompte – „Tai nėra klausimynas. Nukopijuok šį tekstą ir įklijuok į ChatGPT arba Claude.“
- Kortelėse: „Naudok kai“ eilutė po kiekvieno prompto aprašymo (CSS .prompt-when). Gyvo testavimo checklist: „Turinio / bullet-proof“ skyrius docs/TESTAVIMAS.md.
- QA ir dokumentų valdymo procesas: CHANGELOG.md, docs/DOCUMENTATION.md, integracija su AGENTS.md ir .cursorrules.
- Deploy: GitHub Pages workflow (.github/workflows/deploy.yml), DEPLOYMENT.md.
- QA standartas: docs/QA_STANDARTAS.md su nuoroda į [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01).
- Gyvo testavimo dokumentacija: docs/TESTAVIMAS.md (scenarijai ir žurnalas).
- Ryšys su pagrindiniu produktu: badge „Promptų anatomija“ → https://ditreneris.github.io/anatomija/, nuorodos footer ir community skyriuje.
- Favicon: favicon.svg (SVG, „P“ ant teal fono), nuorodos index.html ir privatumas.html.
- `.nojekyll` root’e – GitHub Pages naudoja statinius failus be Jekyll.
- Bendras [js/hreflang.js](js/hreflang.js): `hreflang` nuorodos užpildomos pagal `<html data-hreflang-suite="library"|"privacy">`; vienas regex bazės keliui (įskaitant `/repo/lt` be trailing slash po locale).
- Struktūriniai testai papildyti: `data-hreflang-suite`, išorinis `hreflang.js`, `lang-switcher-list`, privatumo `lang-link`, root rankinių nuorodų `localStorage`.
- CI (pa11y): papildomai ET ir LV biblioteka (`/et/`, `/lv/`) ir jų privatumo puslapiai.
- PR šablonas: sekcija „Daugiakalbystė (kai liečia EN)“ – `generate:et-lv` ir ET/LV peržiūra; papildomas punktas dėl EN inline JS / mikroteksto ir `lt/index.html` sinchronizacijos.

### Pakeista

- LT: kopijavimo `copyPrompt` / `fallbackCopy` / `showError` – tie patys vartotojiški pranešimai kaip EN (be techninių „Promptas nerastas“ ir pan.); numatytasis klaidos tekstas ir `aria-label` be „Klaida:“ prefikso.
- Keturių kalbų UI/UX paritetas (statinė biblioteka): EN + sinchronizuota LT + regeneruota ET/LV (`npm run generate:et-lv`) pagal docs/MICROCOPY_AUDIT_EN.md §7 – code-block „Select and copy“ (ET „Vali ja kopeeri“, LV „Atlasiet un kopējiet“, LT „Pažymėk ir nukopijuok“), antraštė „What you get“ / „Mida saate“ / „Ko iegūstat“ / „Ką gausite“, footer „Good luck with your prompts“ / atitikmenys, suvienodinti „Copied“ toast ir mygtuke (be šauktuko / taško). [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs): `Copied` porų tvarka – pirmiau `button.innerHTML`, tada toast `<span>Copied</span>`, kad `applyPairs` nesulaužytų JS eilutės.
- [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md): checkbox EN bibliotekos inline JS / mikrotekstui – atnaujinti LT ir paleisti `generate:et-lv`.
- Prompt Anatomy nuorodos (badge, community, footer) LT ir EN: `https://ditreneris.github.io/anatomija/` → `https://www.promptanatomy.app/`.
- EN mikrotekstas (aukšta prioritetas): hero „For?“ → „Who it's for:“; visos JS klaidos pakeistos vartotojui suprantamu tekstu („Something went wrong. Try copying again.“, manual copy hint kai clipboard nepavyksta); vardas vienodas – „Prompt Anatomy“ (privacy title, root redirect title, privacy „Back to library“).
- Root redirect: base path išvedamas iš `location.pathname`, kai meta `base-path` tuščias – veikia GitHub Pages project site (`https://DITreneris.github.io/automation/`). DEPLOYMENT.md – nurodytas production URL.
- Instrukcijos „Kaip naudoti“ ir footer: aiškinama, kad [ĮMONĖ]/[MANO ROLĖ] keičiami savo duomenimis; DI rolė (pvz. „kritiškas analitikas“) jau nurodyta prompte – jos keisti nereikia. README.md „Kaip naudoti“ atnaujintas atitinkamai.
- Visi 8 promptai perrašyti į META/INPUT/OUTPUT struktūrą; „Rolė – X“ pakeista į „Tu esi X“ (META). DI rolė atskirta nuo vartotojo rolės [MANO ROLĖ].
- Copyable promptas: į mainų atmintinę kopijuojamas tik META+INPUT+OUTPUT. Instrukcijos (Naudok kai, Pakeisk prieš naudodamas, Ką daryti) perkeltos į atskirą bloką „Prieš naudojant“ tarp code-block ir „Kodėl tai svarbu“; „Naudok kai“ pašalintas iš prompt-header.
- Community sekcija: hierarchija ir UX – vienas pagrindinis CTA (brand green #0E7A33, be glow, subtilus shadow), antrinis outline („Promptų anatomija“). Trumpesnė antraštė dviem eilutėm, vertikalūs tarpai (16px / 24px / 16px), kortelė 1px border ir 16px radius. Emoji pašalintas iš CTA. STYLEGUIDE 4.7 atnaujintas.
- Kalbos jungiklis visuose 8 puslapiuose: semantika `<nav><ul class="lang-switcher-list"><li>…`, dabartinei kalbai `aria-current="page"` (WAI); privatumo puslapiai sutapatinti su biblioteka (`class="lang-link"`, `data-lang`, fokuso stiliai).
- Root `index.html`: rankinės nuorodos į `lt/` / `en/` / `et/` / `lv/` taip pat kviečia `localStorage.setItem('lang', …)`.
- `hreflang`: inline skriptai aštuoniuose HTML pakeisti išoriniu `../js/hreflang.js`.
- `scripts/generate-et-lv-pages.cjs`: `ET_NAV` / `LV_NAV` su nauja nav struktūra; `<html>` poros atnaujintos su `data-hreflang-suite="library"`.
- [TODO.md](TODO.md) (P1–P2 uždaryti) ir [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) suderinti su įgyvendinimu (§3 `hreflang.js`, §6 testai / CI).

### Taisyta

- Badge „Promptų anatomija“: paspaudimo zona (min-height/min-width 44px), z-index ir cursor, kad nuoroda būtų aiškiai paspaudžiama.
- A11y WCAG2AA: community skyriaus nuorodos „Promptų anatomija“ kontrastas (teksto spalva #040404).
- Hreflang skriptas (lt/en index + privatumas/privacy): null patikros prieš `getElementById(...).href`, kad nebūtų klaidos, jei elemento nėra.
- Hreflang bazės kelias: ankstesnis inline `pathname.replace(/\/(lt|en|et|lv)\/.*/, …)` neteisingas, kai po locale nėra papildomo `/` (pvz. `/repo/lt`); dabar centralizuotas skaičiavimas `js/hreflang.js`.
- Hreflang `<link>`: pradinis `href=""` pakeistas į `href="#"` – HTML validatoriumi leidžiama, skriptas vėliau nustato tikrus URL.
- package.json: „serve“ įtrauka sutvarkyta; lint:js naudoja `npx eslint` (veikia be globalaus eslint).

### Pašalinta

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
