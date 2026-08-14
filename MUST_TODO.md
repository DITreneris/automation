# MUST TODO – aktyvūs prioritetai

**Atnaujinta:** 2026-08-14  
**Būsena:** Produkcijoje – `https://www.promptanatomy.info/` (5 kalbos, **v1.5.0**).

> Kontaktų forma ir Google Sheets – **Won't** šitam ciklui ([docs/archive/integrations/](docs/archive/integrations/)).

North star (jau shipped, neliesti): H1 = 30–50% kasdienių užduočių; lead = 8 pratimai su šablonais; 8 promptai → kasdienis rinkinys; be paskyros. Žr. [.cursor/skills/hero-copy/SKILL.md](.cursor/skills/hero-copy/SKILL.md).

---

## P0 – prieš kiekvieną merge

- [ ] `npm test` praeina
- [ ] Jei keista EN (`en/index.html`, `en/privacy.html`, `js/library.js`) – `npm run generate:et-lv`, be necommitinto diff
- [ ] Footer `.footer-contact` kanonas visose 5 kalbose (žr. [AGENTS.md](AGENTS.md) QA)

---

## MoSCoW – kas toliau

### Must

- [x] **1.5.0 release** – [CHANGELOG.md](CHANGELOG.md) `## [1.5.0] - 2026-08-14`; `package.json` 1.5.0
- [x] **Docs be „ritual“** – README, `llms.txt`, AGENTS misija. ID/UTM `#ritual-complete` lieka.
- [ ] **Hero lock** – H1 / lead / OG nekeisti be naujos tavo prizinės eilutės.

## Session – DS token ROI (~90 min)

Tikslas: tokenai pradeda valdyti tai, ką žmogus mato pirmiausia. **Ne** naujas stilius, **ne** H1 copy, **ne** visas `library.css` px purge (86 font-size / ~100 pad — kitas PR).

Skill: [.cursor/skills/design-token-guard/SKILL.md](.cursor/skills/design-token-guard/SKILL.md).

### Won't šitoje sesijoje

Dark mode, oklch paletė, `color-mix` visiems šešėliams, Figma, 1.5.0 release, prompt 7, ecosystem nuorodos, HTML copy, `generate:et-lv`.

- [x] **DS token ROI (2026-08-14)** – skalės + hero/CTA/H2 ant tokenų; žr. CHANGELOG DS 2.0.1

### A · Tokenų spragos (20 min)

`css/tokens.css` + `tokens/tokens.json` + `docs/design_system.md` §1.8–1.9. Reikšmės = **jau naudojami px**, ne nauji.

| Token | Reikšmė | Kam |
|-------|---------|-----|
| `--space-0` | `4px` | chip pad |
| `--space-1` | `8px` | badge radius/gap |
| `--space-1_5` | `12px` | header-top gap (dažnas) |
| `--font-size-xs` | `0.75rem` (12) | chevron |
| `--font-size-sm` | `0.875rem` (14) | tags, footer meta |
| `--font-size-meta` | `0.9375rem` (15) | badge, header-meta |
| `--font-size-button` | `1.0625rem` (17) | CTA |
| `--font-size-lead` | `1.25rem` (20) | hero lead |
| `--font-size-h2` | `1.375rem` (22) | sekcijų H2 |
| `--font-size-h2-lg` | `1.5rem` (24) | prompt H2 |
| `--font-size-hero` | `clamp(2rem, 5vw + 1rem, 3.25rem)` | H1 (52→fluid; 44/36 media iškrenta) |

`--font-size-body` / `--font-size-body-sm` lieka; perrašyti į `rem` (`1.125rem` / `1rem`).

Validator: jei `validate-tokens.mjs` tikrina tik hex — nauji dimension tokenai į JSON `dimension.space` / naują `font` grupę; docs lentelė atnaujinta.

### B · Pritaikyti 5 paviršiams (40 min)

Tik `css/library.css`. Keisti `px` → `var(--*)` **be vizualinio redizaino** (tos pačios reikšmės).

1. `.header h1` — `--font-size-hero` + `text-wrap: balance`; nuimti 44px/36px media, jei clamp dengia
2. `.header p` (lead) — `--font-size-lead` + `text-wrap: pretty`
3. `.header-meta`, `.badge` — `--font-size-meta`
4. `.cta-button` — `--font-size-button`, `--radius-md`, `--space-2` pad
5. Sekcijų H2 (`.objectives`, `.next-steps`, `.ritual-complete`, `.community`, `.ecosystem`, `.footer h3`) — `--font-size-h2`
6. `html` — `color-scheme: light`

`--tertiary` šituose blokuose → `--brand-teal` ten, kur liečiame. Kitų 70 font-size neliesti.

### C · Sync + vartai (20 min)

- [ ] `docs/design_system.md` — data, produkto versija 1.4.0, §1.8–1.9
- [ ] `CHANGELOG.md` `[Unreleased]` `[UI]` eilutė
- [ ] `npm run validate:tokens && npm run lint:design-tokens && npm test`
- [ ] Greita peržiūra `/en/` 375 / 768 / 1280 — H1 nelūžta, CTA 44px

### Done kai

Hero H1 fluid, lead/meta/CTA/H2 ant tokenų, skalės spragos uždarytos, testai žali, copy neliestas.

---

### Should

- [ ] **Prompt 7 takeaway** – žmogus išeina su naudojamu kasdieniu rinkiniu (kopijuoti lentelę / vienas veiksmas), be paskyros. Gilinti aštuonis, ne pridėti 9-tą.
- [ ] **Ecosystem nuorodos** – diagrama ne dekoracija: `.cloud` / `.space` / `.blog` (ir kt.) kaip tikros nuorodos. H2 lieka Daily Workflow Library, ne Hub.
- [ ] **ET/LV privatumo politika** – juridinė peržiūra (redaktoriaus kalba – 2026-08-14).

### Could

- [ ] Dinaminis progress `aria-label` (archyvuotas MICROCOPY §7.5)
- [ ] Print / vienas puslapis visiems 8 (vis dar zero-build, be paskyros)
- [ ] Kurso nuoroda ne tik `/en` – **tik jei** `.app` turės kitas kalbas. Šiandien kanonas = `COURSE_URL_EN`

### Won't (šitas ciklas)

- 9-as promptas, katalogas, rolės, antroji kelionė
- Kontaktų forma / Google Sheets / CAPTCHA
- Naujas stackas (React/Vite/bundleris)
- H1 „gerinimas“, diagnostika herojuj, „ritualas“ / „Use šaka“ / „operacinis sluoksnis“ lankytojui
- Kurso CTA herojuj; suliejimas su `.app`

---

## Padaryta (1.5.0)

- [x] Handoff po prompto 8 (`#ritual-complete` + `COURSE_RITUAL_URL`); trys `.app` URL
- [x] Entity footer → `HUB_ENTITY_URL` (QW1b)
- [x] Front page be „ritual“; H1/lead grąžinti
- [x] 5-locale language pass
- [x] ET mikrotekstas (badge `aria-label`)

---

## Nuorodos

- Keliai: [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md)
- Indeksas: [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md)
- QA: [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md)
- Istorija: [CHANGELOG.md](CHANGELOG.md)
