# Agentų Sistemos Modelis – Apžvalga

**Projektas:** DI Promptų Biblioteka  
**Versija:** 1.1  
**Dokumentacija ir agentų instrukcijos:** lietuvių kalba  
**Vartotojo sąsaja (biblioteka / privatumas):** lt, en, et, lv, ja (centrinė kalba – **EN**)

---

## 1. Architektūra

```
ORCHESTRATOR AGENT (koordinacija)
    ├── Content Agent      (promptai, tekstai)
    ├── Curriculum Agent   (struktūra, logika, seka)
    ├── UI/UX Agent        (dizainas, a11y, UX)
    ├── QA Agent           (kodas + turinys)
    └── Feedback Store     (duomenys, metrikos)
            │
            └── GitHub / Version Control
```

**Daugiakalbystė ir šaltinių hierarchija:** kanonas EN (`en/index.html`, `en/privacy.html`, `js/library.js`); LT rankiniu (`lt/`, `js/library.lt.js`); ET/LV po `npm run generate:et-lv`. Keliai, routing, `hreflang`, žymekliai – [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md). Dokumentų indeksas – [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md).

**Golden rule – interaktyvus kursas (Prompt Anatomy / Promptų anatomija):** badge ir community secondary – **`https://www.promptanatomy.app/en`**. Konstanta: [scripts/seo-constants.cjs](scripts/seo-constants.cjs) `COURSE_URL_EN`. Nenaudoti `promptanatomy.info/en` kursui (ten bibliotekos EN locale). Nebe `ditreneris.github.io/anatomija`.

**Bibliotekos (Spin-off) production URL:** **`https://www.promptanatomy.info/`** (locale keliai `/lt/`, `/en/`, `/et/`, `/lv/`, `/ja/`; kanonas su `www`). Vercel host: `https://automation-seven-ochre.vercel.app/`.

---

## 2. Agentų rolės

### Content Agent
- **Tikslas:** Kuria ir prižiūri teksto turinį (promptus, aprašymus)
- **Įvestis:** Specifikacija, grįžtamasis ryšys, Curriculum rekomendacijos
- **Išvestis:** Turinio redagavimai, nauji promptai
- **Daugiakalbystė:** Nuoseklumas visose penkiose bibliotekos ir privatumo versijose (LT, EN, ET, LV, JA) pagal [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md). Pakeitus EN (`en/index.html`, `en/privacy.html`) – paleisti `npm run generate:et-lv`, atnaujinti LT ir JA (`lt/`, `ja/`, `lt/privatumas.html`, `ja/privacy.html`) kur reikia; ET/LV privatumą patikslinti ranka, jei neįeina į generatorių. Juridinis LT/EN/ET/LV/JA privatumo tekstas – žr. [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) inventorių.

### Curriculum Agent
- **Tikslas:** Nustato turinio struktūrą ir mokymosi logiką
- **Įvestis:** Tikslai, auditorija, [MUST_TODO.md](MUST_TODO.md)
- **Išvestis:** Promptų seka, priklausomybių modelis
- **Daugiakalbystė:** Struktūros ir promptų sekos pakeitimai turi turėti atitikmenis visoms lokelėms ir §3b žymekliams ([docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md)). Jei keičiasi keliai, routing ar tokenų lentelė – atnaujinti tą patį dokumentą.

### UI/UX & Usability Agent
- **Tikslas:** Sąsajos kokybė, prieinamumas, vartotojo patirtis
- **Įvestis:** .cursorrules, WCAG AA, sesijų duomenys
- **Išvestis:** UI pakeitimai, CSS/HTML optimizacijos, a11y patikros
- **Daugiakalbystė:** Bendri stiliai – [css/library.css](css/library.css); lokalizuoti fragmentai (pvz. inline `:root { --codeblock-copy-hint }`) – pagal MULTILINGUAL. Kiekvienas locale puslapis – teisingas `lang`; `hreflang` ir kalbos jungiklis – kaip MULTILINGUAL §2–§3.

### QA Agent
- **Tikslas:** Tikrina kokybę – kodas ir turinys
- **Įvestis:** Pakeitimų diff, MUST_TODO.md, test scenarijai
- **Išvestis:** Klaidų ataskaitos, acceptance checklist
- **Dokumentacija:** Prieš merge tikrina, ar pakeitimams atitinka dokumentacijos atnaujinimai (žr. [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md)). Prieš release – ar CHANGELOG.md atnaujintas ir versija atitinka SemVer.
- **Footer kontaktai (kanonas):** QA Agent prižiūri ir tikrina bibliotekos puslapių `.footer-contact` bloką visose 5 kalbose: pavadinimas **Prompt Anatomy**, adresas **1311 Park St, Unit #654, Alameda, CA 94501, USA**, el. paštas **info@promptanatomy.app** (`mailto:`). Keitimas: atnaujinti `en/index.html`, `lt/index.html`, `ja/index.html` rankiniu; paleisti `npm run generate:et-lv` (et/lv); patikrinti [tests/structure.test.js](tests/structure.test.js) assertus; atnaujinti CHANGELOG `[Unreleased]`.
- **Daugiakalbystė:** Prieš merge – `npm test`. Jei pakeitimai liečia EN šaltinį ar `js/library.js` – po `npm run generate:et-lv` repo neturi turėti necommitinto diff generuojamuose failuose (kaip CI). Spot-check: `/`, `/lt/`, `/en/`, `/et/`, `/lv/`, `/ja/` ir atitinkami privatumo URL. A11y – CI arba lokaliai (žr. §6 žemiau).

### Orchestrator Agent
- **Tikslas:** Koordinuoja agentus, prioritizuoja užduotis
- **Įvestis:** Verslo užduotys, Feedback Store metrikos
- **Išvestis:** Užduočių eilės, prioritetų planas
- **Daugiakalbystė:** Užtikrina, kad užduotys, liečiančios kelis locale ar kanoninį EN, praeitų **daugiakalbystės vartus** (žr. §3) prieš QA.

---

## 3. Workflow

1. **Vartotojas/Verslas** → Orchestrator: nauja užduotis
2. **Orchestrator** → Curriculum: struktūros rekomendacijos
3. **Curriculum** → Orchestrator: specifikacija
4. **Orchestrator** → Content: turinio kūrimas
5. **Content** → Orchestrator: turinio versija
6. **Orchestrator** → UI/UX: integracijos užduotis
7. **UI/UX** → Orchestrator: UI pakeitimai
8. **Daugiakalbystės vartai (kai reikia):** Jei keičiamas EN šaltinis (`en/index.html`, `en/privacy.html`) ir/ar kanoninis `js/library.js` – paleisti `npm run generate:et-lv`; atnaujinti LT atitikmenis (`lt/`, `js/library.lt.js`) kur reikia; patikrinti `et/privacy.html` ir `lv/privacy.html`, jei pakeitimas neper generatorių. Detalės ir checklist – [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md), [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md). Orchestrator koordinuoja, jei užduotis liečia kelis agentus.
9. **Orchestrator** → QA: validacija
10. **QA fail** → grąžinti Content/UI taisymams
11. **QA pass** → GitHub: PR sukūrimas

---

## 4. Loop logika

| Ciklas | Aprašymas |
|--------|-----------|
| Planavimo | Orchestrator → Curriculum → prioritetų sąrašas |
| Kūrimo | Content + UI/UX (lygiagrečiai, jei leidžia priklausomybės) |
| Validacijos | QA → fail = grąžinti; pass = merge |
| Įvertinimo | Release → Feedback Store → metrikos → nauji prioritetai |

---

## 5. Commit prefiksai (agentų)

- `[Content]` – turinio pakeitimai
- `[Curriculum]` – struktūros/sekos pakeitimai
- `[UI]` – dizainas, UX, a11y
- `[QA]` – testai, validacija, fix'ai
- `[Orchestrator]` – koordinacija, konfigūracija

---

## 6. Komandos (vykdomos prieš merge / lokaliai)

| Komanda | Paskirtis |
|---------|-----------|
| `npm install` | Įdiegti priklausomybes |
| `npm test` | Struktūros testai + lint (HTML, JS) |
| `npm run generate:et-lv` | Iš `en/index.html` ir [js/library.js](js/library.js) generuoja `et/`, `lv/` puslapius ir `library.et.js`, `library.lv.js`, `library.lt.js` ([scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs)); prieš commit paleisti, jei keičiate šaltinį |
| `npm run lint:html` | HTML validacija (11 puslapių, lokaliai per `html-validate` / [scripts/lint-html.mjs](scripts/lint-html.mjs)) |
| `npm run lint:js` | ESLint (flat [eslint.config.js](eslint.config.js), visi tikslinami `.js`) |
| CI (GitHub Actions) | Node **22**, lint, test, pa11y a11y – automatiškai push/PR |

Prieš PR įsitikinti, kad `npm test` praeina. A11y tikrinimas – per CI arba lokaliai: `npx serve . -l 3000` (**be** `-s`), `npx wait-on http://127.0.0.1:3000/` ir `PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs` (įskaitant root `/`).

---

## 7. Release seka

1. Orchestrator → Curriculum: release scope ([MUST_TODO.md](MUST_TODO.md)).
2. Orchestrator → Content / UI/UX: reikiai (jei yra).
3. Orchestrator → QA: release validacija.
4. QA: `npm test`, CHANGELOG atnaujintas (SemVer), rankinis QA (naršyklės, mobilus, kopijavimas, a11y).
5. QA pass → tag (pvz. `v1.x.0`), deploy. QA fail → grąžinti Content/UI.

---

## 8. Susiję dokumentai

**Aktyvūs (lean indeksas):** [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md)

| Lygis | Dokumentai |
|-------|------------|
| Kasdien | [.cursorrules](.cursorrules), [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md), [CHANGELOG.md](CHANGELOG.md) |
| Standartai | [docs/design_system.md](docs/design_system.md), [docs/BULLET_PROOF_PROMPTS.md](docs/BULLET_PROOF_PROMPTS.md), [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md), [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md), `.cursor/rules/` |
| Planavimas | [MUST_TODO.md](MUST_TODO.md), [DEPLOYMENT.md](DEPLOYMENT.md), [feedback-schema.md](feedback-schema.md) |

**Archyvas (auditai, senas roadmap, integracijos):** [docs/archive/README.md](docs/archive/README.md)

---

**Paskutinis atnaujinimas:** 2026-05-29
