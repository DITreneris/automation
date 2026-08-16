# MUST TODO – aktyvūs prioritetai

**Atnaujinta:** 2026-08-16  
**Būsena:** Produkcijoje – `https://www.promptanatomy.info/` (7 kalbos, **v1.7.0**).  
**Banga:** Hold – [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md)

| Strategija | Bangos |
|------------|--------|
| [docs/GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md) | [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md) |

> Kontaktų forma ir Google Sheets – **Won't** šitam ciklui ([docs/archive/integrations/](docs/archive/integrations/)).  
> `.app` kursas lieka `COURSE_URL_EN` – neperdarome.

North star (jau shipped, neliesti): H1 = 30–50% kasdienių užduočių; lead = 8 pratimai su šablonais; 8 promptai → kasdienis rinkinys; be paskyros. Žr. [.cursor/skills/hero-copy/SKILL.md](.cursor/skills/hero-copy/SKILL.md).

---

## P0 – prieš kiekvieną merge

- [ ] `npm test` praeina
- [ ] Jei keista EN (`en/index.html`, `en/privacy.html`, `js/library.js`) – `npm run generate:et-lv`, be necommitinto diff
- [ ] Footer `.footer-contact` kanonas visose aktyviose locale (žr. [AGENTS.md](AGENTS.md) QA)

---

## Hold – kita kalba tik su srautu

Vercel Analytics (1 m., projektas `automation`, 2026-08-16): ~300 lankytojų. LT 61% (193), US 19%, IE 7% (EN). NL 8, FR 4, DE 3, ES 0.

Kartelė N+1: ≥30 lankytojų / 90 d. iš tos šalies **ir** bounce ant `/en/`. Iki tol:

- [ ] **Parkuota:** `nl` / `es` / `fr` (ir kita Wave 2 kalba)
- [ ] Žmogaus GSC: ar `/lt/` ir `/en/` indeksuoti; sitemap resubmit jei reikia

---

## MoSCoW – Wave 0

### Must

- [x] **1.5.0 release** – [CHANGELOG.md](CHANGELOG.md) `## [1.5.0] - 2026-08-14`; `package.json` 1.5.0
- [x] **Docs be „ritual“** – README, `llms.txt`, AGENTS misija. ID/UTM `#ritual-complete` lieka.
- [x] **DS token ROI** – skalės + hero/CTA/H2 ant tokenų; CHANGELOG DS 2.0.1
- [x] **Hero lock** – H1 / lead / OG nekeisti be naujos tavo prizinės eilutės (assertai [tests/structure.test.js](tests/structure.test.js)).
- [x] **ZH release 1.6.0** – `package.json` + CHANGELOG `## [1.6.0] - 2026-08-15`; šešta kalba produkcijoje.
- [x] **Locale N+1 playbook** – [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) §7 (failai, hreflang, testai, pa11y).
- [x] **Switcher atpažinimas** – Lucide `languages` + endonimas; `lang` + `hreflang` ant opcijų. Skill: [.cursor/skills/locale-switcher/SKILL.md](.cursor/skills/locale-switcher/SKILL.md).
- [x] **Nudge juosta** – kai URL ≠ `navigator.language` ir nėra `localStorage.lang`; suggest-don't-force; locale URL be 302.
- [x] **AIEO paketas** – `llms.txt` klientų klausimams (ne DS viduriai); HowTo / ItemList JSON-LD.
- [x] **Taisyklės = N kalbų** – AGENTS / multilingual.mdc / DOCUMENTATION: „6“ nėra lubos.

### Should

- [x] **Ecosystem nuorodos** – diagrama ne dekoracija: `.cloud` / `.space` / `.blog` (ir kt.) kaip tikros nuorodos. H2 lieka Daily Workflow Library, ne Hub.
- [x] **EN privacy Analytics** – Vercel Web Analytics atskleista EN ir sinchronizuota visose locale (2026-08-16).
- [ ] **ET/LV/ZH privatumo politika** – juridinė / redaktoriaus kalbos peržiūra (EN šaltinis jau atnaujintas).
- [x] **404 kalbos logika** – ta pati kaip root vestibiulis, arba nuorodos į visas locale (dabar visada EN → `/en/`).

### Could

- [ ] Dinaminis progress `aria-label` (archyvuotas MICROCOPY §7.5)
- [ ] Print / vienas puslapis visiems 8 (vis dar zero-build, be paskyros)
- [ ] Kurso nuoroda ne tik `/en` – **tik jei** `.app` turės kitas kalbas. Šiandien kanonas = `COURSE_URL_EN` (`.app` lieka EN)
- [ ] Footerio matomas endonimų sąrašas – kai aktyvių locale ≥ 8

### Won't (šitas ciklas)

- Prompt 7 paste-well / takeaway UI (rinkinys = ChatGPT lentelė, ne ketvirtas blokas)
- 9-as promptas, katalogas, rolės, antroji kelionė
- Kontaktų forma / Google Sheets / CAPTCHA
- Naujas stackas (React/Vite/bundleris)
- H1 „gerinimas“, diagnostika herojuj, „ritualas“ / „Use šaka“ / „operacinis sluoksnis“ lankytojui
- Kurso CTA herojuj; suliejimas su `.app`
- IP-prievarta locale URL; auto-redirect tarp kalbų versijų
- Vėliavos kalbos jungiklyje; paieška jungiklyje
- 10 kalbų viename PR
- `nl` / `es` / `fr` be Hold kartelės

---

## MoSCoW – Wave 1

### Must

- [x] **DE locale** – `/de/` + `de/privacy.html` (ET/LV generatoriaus modelis: [scripts/de-pairs.cjs](scripts/de-pairs.cjs), [scripts/prompt-bodies-de.cjs](scripts/prompt-bodies-de.cjs)). UI **Sie**; META **Du bist**. H1/lead užrakinti.
- [x] **1.7.0 release** – [CHANGELOG.md](CHANGELOG.md) `## [1.7.0] - 2026-08-16`; `package.json` 1.7.0; tag `v1.7.0`.

---

## Padaryta (1.5.0)

- [x] Handoff po prompto 8 (`#ritual-complete` + `COURSE_RITUAL_URL`); trys `.app` URL
- [x] Entity footer → `HUB_ENTITY_URL` (QW1b)
- [x] Front page be „ritual“; H1/lead grąžinti
- [x] 5-locale language pass
- [x] ET mikrotekstas (badge `aria-label`)

---

## Nuorodos

- Strategija: [docs/GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md)
- Bangos: [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md)
- Keliai: [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md)
- Indeksas: [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md)
- QA: [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md)
- Istorija: [CHANGELOG.md](CHANGELOG.md)
