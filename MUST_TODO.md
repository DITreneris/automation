# MUST TODO – aktyvūs prioritetai

**Atnaujinta:** 2026-08-16  
**Būsena:** Produkcijoje – `https://www.promptanatomy.info/` (7 kalbos, **v1.7.0**, tagas gyvas).  
**Dabar:** Atradimas (GSC + LT/EN) – ne nauja kalba. Bangos: [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md)

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

## Dabar – atradimas (Google ir modeliai)

Srautas ankstyvas (~1 mėn. gyvo piko). 90 d. keliai (Vercel, 2026-08-16): `/lt/` 206, `/en/` 115, `/ja/` 12, `/et/` 3, `/lv/` 3. Google referrer – 6. 1 m. šalys: LT 61%, US 19%, IE 7% (EN), NL 8, FR 4, DE 3, ES 0.

- [x] **1.7.0** – DE + `llms.txt` locale URL + privacy Analytics + JSON-LD `#howto` ant locale. Tag [v1.7.0](https://github.com/DITreneris/automation/releases/tag/v1.7.0)
- [x] **GSC verify** – [google7305663b2567346e.html](google7305663b2567346e.html) root; nuosavybė `https://www.promptanatomy.info/`
- [x] **Sitemap pateikta** – `https://www.promptanatomy.info/sitemap.xml` (2026-08-16). Failas gyvas: 200, `application/xml`, 14 URL. Pirmas GSC nuskaitymas – „Nepavyko nuskaityti“ (pirmos dienos crawleris, ne blogas XML)
- [ ] **GSC sėkmė** – sitemap statusas „Sėkmingai“; URL inspect `/lt/`, `/en/`, `llms.txt`; resubmit jei vis dar raudona po 24 val.
- [ ] **Parkuota:** `nl` / `es` / `fr` – kartelė ≥30 lankytojų / 90 d. iš tos šalies **ir** bounce ant `/en/`

---

## MoSCoW – Wave 0 (baigta, 1.6.0)

### Must

- [x] **1.5.0 release** – [CHANGELOG.md](CHANGELOG.md) `## [1.5.0] - 2026-08-14`
- [x] **Docs be „ritual“** – README, `llms.txt`, AGENTS misija. ID/UTM `#ritual-complete` lieka.
- [x] **DS token ROI** – skalės + hero/CTA/H2 ant tokenų; CHANGELOG DS 2.0.1
- [x] **Hero lock** – H1 / lead / OG nekeisti be naujos tavo prizinės eilutės (assertai [tests/structure.test.js](tests/structure.test.js)).
- [x] **ZH release 1.6.0** – šešta kalba produkcijoje.
- [x] **Locale N+1 playbook** – [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) §7
- [x] **Switcher atpažinimas** – Lucide `languages` + endonimas; `lang` + `hreflang` ant opcijų
- [x] **Nudge juosta** – suggest-don't-force; locale URL be 302
- [x] **AIEO paketas** – `llms.txt` klientų klausimams; HowTo / ItemList JSON-LD
- [x] **Taisyklės = N kalbų** – „6“ nėra lubos

### Should

- [x] **Ecosystem nuorodos** – tikri `href` po diagrama. H2 = Daily Workflow Library
- [x] **EN privacy Analytics** – Vercel Web Analytics atskleista visose locale (2026-08-16)
- [ ] **ET/LV/ZH privatumo politika** – juridinė / redaktoriaus kalbos peržiūra (EN šaltinis jau atnaujintas)
- [x] **404 kalbos logika** – kaip root vestibiulis

### Could

- [ ] Dinaminis progress `aria-label` (archyvuotas MICROCOPY §7.5)
- [ ] Print / vienas puslapis visiems 8 (zero-build, be paskyros)
- [ ] Kurso nuoroda ne tik `/en` – **tik jei** `.app` turės kitas kalbas. Kanonas = `COURSE_URL_EN`
- [ ] Footerio matomas endonimų sąrašas – kai aktyvių locale ≥ 8

### Won't (šitas ciklas)

- Prompt 7 paste-well / takeaway UI
- 9-as promptas, katalogas, rolės, antroji kelionė
- Kontaktų forma / Google Sheets / CAPTCHA
- Naujas stackas (React/Vite/bundleris)
- H1 „gerinimas“, diagnostika herojuj, „ritualas“ fronte
- Kurso CTA herojuj; suliejimas su `.app`
- IP-prievarta locale URL; auto-redirect tarp kalbų
- Vėliavos / paieška jungiklyje
- 10 kalbų viename PR
- `nl` / `es` / `fr` be atradimo kartelės

---

## MoSCoW – Wave 1 (baigta, 1.7.0)

### Must

- [x] **DE locale** – `/de/` + `de/privacy.html`. UI **Sie**; META **Du bist**. H1/lead užrakinti
- [x] **1.7.0 release** – CHANGELOG `## [1.7.0] - 2026-08-16`; tag `v1.7.0`

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
