# Dokumentų indeksas

**Tikslas:** Vienas lean šaltinis – kas aktyvu, kas archyve, kas atsakingas. Taisyklės agentams: [AGENTS.md](../AGENTS.md). Cursor: [.cursorrules](../.cursorrules) + [.cursor/rules/](../.cursor/rules/).

---

## 1. Aktyvūs dokumentai (3 lygiai)

### Lygis A – kasdien (agentai ir PR)

| Dokumentas | Paskirtis | Kada atnaujinti |
|------------|-----------|------------------|
| [AGENTS.md](../AGENTS.md) | EN operational SSOT: commands, file map, boundaries | Workflow / locale / release taisyklės |
| [docs/MULTILINGUAL_STRUCTURE.md](MULTILINGUAL_STRUCTURE.md) | Keliai, routing, `hreflang`, žymekliai, sinchronizacija | EN šaltinis, generatorius, nauja kalba |
| [CHANGELOG.md](../CHANGELOG.md) | Versijų istorija (Keep a Changelog, SemVer) | Kiekvienas release ir reikšmingi pakeitimai |
| [.github/PULL_REQUEST_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md) | PR checklist | Merge vartų pakeitimai |

### Lygis B – standartai (turinys, UI, QA)

| Dokumentas | Paskirtis | Kada atnaujinti |
|------------|-----------|------------------|
| [docs/design_system.md](design_system.md) | Spalvos, tokenai, komponentai, patterns (DS v2.0) | `css/tokens.css` ar matomi UI komponentai |
| [docs/BULLET_PROOF_PROMPTS.md](BULLET_PROOF_PROMPTS.md) | META / INPUT / OUTPUT promptų standartas | Promptų struktūra ar kopijavimo logika |
| [docs/QA_STANDARTAS.md](QA_STANDARTAS.md) | QA kriterijai (nuoroda į spinoff01) | CI / merge / release vartai |
| [docs/TESTAVIMAS.md](TESTAVIMAS.md) | Gyvo testavimo scenarijai po deploy | Nauji URL, locale ar user flow |
| [lessons/LESSONS.md](../lessons/LESSONS.md) | Operacinės taisyklės (CI, locale) | Kartojamos klaidos |
| [.cursorrules](../.cursorrules) | LT UI tonas, saugumo santrauka | Projektinės taisyklės |
| [.cursor/rules/](../.cursor/rules/) | Scoped Cursor taisyklės (stack, tokenai, locale) | Atitinkama sritis |

### Lygis C – apžvalga ir planavimas

| Dokumentas | Paskirtis | Kada atnaujinti |
|------------|-----------|------------------|
| [README.md](../README.md) | Naudojimas, struktūra, deploy nuorodos | Naujos funkcijos ar keliai |
| [LICENSE](../LICENSE) | CC BY 4.0 | Licencijos pasikeitimas |
| [SECURITY.md](../SECURITY.md) | Saugumo pranešimai, scope | Nauji duomenų rinkimo kanalai |
| [CONTRIBUTING.md](../CONTRIBUTING.md) | PR, locale vartai, komandos | Merge / CI taisyklės |
| [DEPLOYMENT.md](../DEPLOYMENT.md) | Vercel, post-deploy | Platforma, URL, troubleshooting |
| [MUST_TODO.md](../MUST_TODO.md) | Aktyvūs P0 / Wave checkbox'ai (dabar) | Prioritetų pasikeitimas |
| [docs/GLOBAL_EPIC.md](GLOBAL_EPIC.md) | Pasaulinė gaudyklė – kodėl, bangos, switcher kanonas | Ambicijos ar kalbų politikos keitimas |
| [docs/MVP_ROADMAP.md](MVP_ROADMAP.md) | Bangų laikas ir exit (pakeičia 2026-02 MVP) | Wave startas / exit |
| [feedback-schema.md](../feedback-schema.md) | Feedback Store schema | Metrikų / feedback modelis |

**HTML (juridinis / produktas):** `lt/privatumas.html`; `en|et|lv|ja|zh/privacy.html` – Content; sinchronas pagal MULTILINGUAL.

---

## 2. Kas nebe aktyvu (archyvas)

Visa medžiaga: [docs/archive/README.md](archive/README.md).

- Auditas ir memo (įgyvendinta arba perkelta į MULTILINGUAL / CHANGELOG)
- MVP roadmap 2026-02 (pasenęs; pakeistas [MVP_ROADMAP.md](MVP_ROADMAP.md))
- Integracijos (forma išjungta; vėlesniems etapams)

**EN mikrotekstas:** kanonas – `en/index.html` + `js/library.js`; sinchronizacija – MULTILINGUAL §4, ne atskiras audit failas.

---

## 3. Kada ką atnaujinti

- **Kodas** → susijęs Lygis A/B dokumentas tame pačiame PR (arba PR apraše – kodėl ne).
- **Release** → `CHANGELOG.md`: `[Unreleased]` → `## [X.Y.Z] - YYYY-MM-DD`.
- **EN šaltinis** → `npm run generate:et-lv`; LT/JA/ZH rankiniu; `npm test`.
- **Nauja kalba** → [MULTILINGUAL_STRUCTURE.md](MULTILINGUAL_STRUCTURE.md) §7; eilė – [GLOBAL_EPIC.md](GLOBAL_EPIC.md) / [MVP_ROADMAP.md](MVP_ROADMAP.md).

---

## 4. QA checklist – dokumentacija

- [ ] Pakeitimams atitinka Lygis A/B atnaujinimai?
- [ ] Release – CHANGELOG ir SemVer?

Žr. [AGENTS.md](../AGENTS.md) Commands, [CONTRIBUTING.md](../CONTRIBUTING.md), [docs/QA_STANDARTAS.md](QA_STANDARTAS.md).
