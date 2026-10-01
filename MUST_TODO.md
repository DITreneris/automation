# MUST TODO – aktyvūs prioritetai

**Atnaujinta:** 2026-10-01  
**Būsena:** Produkcijoje – `https://www.promptanatomy.info/` (7 kalbos, **v1.7.1**). FIRST IMPROVE share DONE (`/en/` + `/lt/`, 2026-09-01). GSC 2026-10-01: **0** clicks, **138** impressions (30 Jun–27 Sep). `/en/` ir `/de/` indexed. `/zh/` unknown.  
**Dabar:** Freeze kodo – ne nauja kalba, ne bounce, ne events, ne mass Request Indexing, ne title/H1. `/zh/` indeksavimo užklausa pateikta 2026-10-01 (eilėje, dar ne indexed). Bangos: [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md)

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

## Dabar – operatorius (ne kodo banga)

FIRST IMPROVE share DONE 2026-09-01 (`/en/` + `/lt/`). Posted share ≠ PR. Nepradėti bounce, custom events, naujos kalbos, hero, suliejimo su `.app`.

**Last 30 Days** (Vercel MCP, Production `automation` / `prj_RKGLsCfZdpm2krXSSadbFpyY2CAH`, 2026-08-31→09-30): **79** lankytojai / **111** views (plokštuma vs prior 30 d. 77/115; ne −27% vs liepa). Keliai: `/en` 38, `/lt` 33, `/zh` 3, `/lv` 1, `/et` 1. Facebook 12+6; LinkedIn 4; `google.com` = 0; `gemini.google.com` = 1; events 0. US 28 / LT 27 / CN 4. Desktop 61, mobile 14. NL 1 — vis dar Hold. Hub `utm_source=info` = 1 (buvo 2).

- [x] **1.7.0** – DE + `llms.txt` locale URL + privacy Analytics + JSON-LD `#howto` ant locale. Tag [v1.7.0](https://github.com/DITreneris/automation/releases/tag/v1.7.0)
- [x] **GSC verify** – [google7305663b2567346e.html](google7305663b2567346e.html) root; nuosavybė `https://www.promptanatomy.info/`
- [x] **Sitemap pateikta** – `https://www.promptanatomy.info/sitemap.xml` (2026-08-16). Failas gyvas 2026-09-02: 200, `application/xml`, 14 URL. 2026-10-01 API: ta pati URL **Pending** abiejose nuosavybėse (`sc-domain:promptanatomy.info` ir `https://www.promptanatomy.info/`), pateikta 2026-09-03, 0 klaidų, 0 įspėjimų, contents tušti. Nėra fetch/parse defekto repozitorijoje. `lastmod` 2026-08-15 neliečiamas.
- [x] **FIRST IMPROVE** – `/en/` ir `/lt/` papostinti 2026-09-01. Nekartoti.
- [x] **Community UTM** – `COURSE_COMMUNITY_URL` (`utm_source=info`, `utm_medium=community`). Ritualas ir entity footer nekeisti. Badge lieka plikas `COURSE_URL_EN`.
- [x] **GSC peek** – 2026-09-11 (Tomas paste + `docs/GSC/*.csv`). Tada: indexed **5**; `/de/` `/zh/` dar ne; **0** clicks, **92** impressions. Pakeista 2026-10-01 eilute žemiau.
- [x] **GSC baseline** – 2026-10-01, `sc-domain:promptanatomy.info`, web, stabilus langas 30 Jun–27 Sep 2026. **0** clicks, **138** impressions (ankstesni 90 d. ir YoY 90 d. = 0). URL Inspection: `/en/` ir `/de/` submitted and indexed (crawl 25 Sep ir 24 Sep); `/zh/` „URL is unknown to Google“. Įvardytos užklausos tik prekės ženklas (`prompt anatomy` 21 @ 8.7 ant `/en/`). Search appearance tuščia. Ne title, ne H1, ne naujas puslapis. Kitas matavimas: vienas stabilus 28 d. langas po `/zh/` Request Indexing, ne kopijos perrašymas.
- [x] **Request Indexing tik `/zh/`** – 2026-10-01 Tomas, `https://www.promptanatomy.info/zh/`. GSC: „Indeksavimo užklausa pateikta“, URL prioritetinėje tikrinimo eilėje. Tuo pačiu metu ekrane vis dar „URL nėra Google“ — užklausa ≠ indexed. Ne mass. Ne Sutvarkėte. Kitas skaitymas: vienas stabilus 28 d. langas po šios datos.
- [ ] **Parkuota:** `nl` / `es` / `fr` – kartelė ≥30 lankytojų / 90 d. iš tos šalies **ir** bounce ant `/en/`. Hold.

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
- Bounce „fix“, custom events, mobile redesign iš 30 d. lango
- Pakartoti FIRST IMPROVE share kaip ticketą

---

## MoSCoW – Wave 1 (baigta, 1.7.0)

### Must

- [x] **DE locale** – `/de/` + `de/privacy.html`. UI **Sie**; META **Du bist**. H1/lead užrakinti
- [x] **1.7.0 release** – CHANGELOG `## [1.7.0] - 2026-08-16`; tag `v1.7.0`

---

## Padaryta (1.5.0)

- [x] Handoff po prompto 8 (`#ritual-complete` + `COURSE_RITUAL_URL`); keturi `.app` URL (`COURSE_COMMUNITY_URL` community)
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
