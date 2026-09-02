# MVP Roadmap – Pasaulinė gaudyklė

**Atnaujinta:** 2026-09-02  
**Pakeičia:** [archive/MVP_ROADMAP_2026-02.md](archive/MVP_ROADMAP_2026-02.md) (forma, CAPTCHA, kelias iki production – produktas jau gyvas).

| Kodėl | Dabar |
|-------|--------|
| [GLOBAL_EPIC.md](GLOBAL_EPIC.md) | [MUST_TODO.md](../MUST_TODO.md) |

Produktas shipped (8 promptai, kanoninė išvaizda, H1 lock). Wave 0 ir Wave 1 **baigtos**. Šitas roadmap = **kada**: bangos, deliverables, exit. Checkbox'ai gyvena MUST_TODO, ne čia.

---

## Principas

Viena kalba = vienas release. `de` jau gyvas (1.7.0). Dabar – kad *esamos* kalbos (pirmiausia LT/EN) būtų randamos Google ir modeliuose. Kita kalba tik su Hold kartele. Ne 10 kalbų viename PR.

North star ir Won't: [GLOBAL_EPIC.md](GLOBAL_EPIC.md) §2 ir §8.

---

## Dabar – po FIRST IMPROVE (operatorius, ne kodo banga)

**Tikslas:** durys į Google ir modelius, ne aštunta kalba. Share `/en/` + `/lt/` DONE 2026-09-01 — nekartoti, neimti kaip PR.

**Deliverables** (checkbox'ai – [MUST_TODO.md](../MUST_TODO.md) „Dabar – operatorius“)

- GSC nuosavybė + sitemap gyvas (200, 14 URL, 2026-09-02)
- GSC „Sėkmingai“ + URL inspect – operatoriaus žvilgsnis, ne kodas
- Nauja kalba (`es` / `fr` / `nl`) – ne, kol ≥30 lankytojų / 90 d. ir bounce ant `/en/`
- Nepradėti bounce, custom events, locale, hero

**Last 30 Days (2026-09-02):** 91 lankytojai, `/lt` 49, `/en` 39, Facebook 9, `google.com` = 0, bounce 75% (copy-out).

**Exit:** GSC sitemap „Sėkmingai“; `/lt/` ir `/en/` URL inspect OK. Ne nauja kalba.

---

## Wave 0 – Mašina (baigta, 1.6.0)

**Tikslas:** šešios kalbos randamos ir perjungiamos pagal 2026 kanoną. N+1 tampa pigus.

**Rolė:** Orchestrator koordinuoja; UI – switcher/nudge; Curriculum – playbook; Content – ZH kokybė; QA – assertai.

**Deliverables**

- ZH release **1.6.0** (`package.json`, CHANGELOG)
- Locale N+1 playbook – [MULTILINGUAL_STRUCTURE.md](MULTILINGUAL_STRUCTURE.md) §7
- Switcher: Lucide `languages` + endonimas; `lang` + `hreflang` ant opcijų
- Nudge juosta (suggest-don't-force; be IP-prievartos)
- AIEO: `llms.txt` klientams; HowTo / ItemList JSON-LD
- Root `/` vestibiulis: `localStorage` → Accept-Language / `navigator.language` → EN (locale URL neliesti)
- Taisyklės = N kalbų, ne lubos „6“

**Exit:** 6 locale URL 200 + `hreflang` klasteris; jungiklis atpažįstamas be dabartinės kalbos mokėjimo; nudge neperadresuoja `/{locale}/`; `npm test` žalias.

**Checkbox'ai:** [MUST_TODO.md](../MUST_TODO.md) Must (Wave 0).

---

## Wave 1 – Europa (baigta, 1.7.0)

**Tikslas:** įrodyti N+1 playbook su pirma ne-Baltijos, ne-CJK kalba.

**Rolė:** Curriculum + Content (generatorius + `prompt-bodies-de.cjs`); QA – nauja kalba CI/pa11y.

**Deliverables**

- [x] `de` (DACH) – 1.7.0
- `es` **arba** `fr` – **nepradėta** (Vercel 1 m.: FR 4, ES 0). Hold, kol ≥30 lankytojų / 90 d. ir bounce ant `/en/`
- Lotynų kalbos per generatorių (ET/LV modelis)

**Exit:** `de` gyvas, playbook praėjęs be rankinio ET/LV stiliaus chaoso; hreflang klasteris pilnas. **Pasiekta 2026-08-16.**

**Prieš kitą kalbą:** Vercel Analytics – šalis × path × bounce; kartelė [MUST_TODO.md](../MUST_TODO.md) „Dabar – atradimas“.

---

## Wave 2 – Duomenys

**Tikslas:** plėsti ten, kur analitika rodo bounce / srautą, ne ten, kur „norisi“.

**Kandidatai (eilė neįšaldyta; `nl` parkuota – 8 lankytojai / 1 m.):** `pt-BR`, `ko` (ranka kaip JA), `it` / `pl` / `nl`, `id`.

**Exit:** kiekviena kalba – atskiras release; footeris tampa matomu endonimų sąrašu, kai aktyvių locale ≥ 8.

---

## Wave 3 – Variantai ir kursas

**Tikslas:** tik su priežastimi.

- `zh-Hant` (TW/HK) – po to, kai Hans stabilus; dabar visi `zh*` → `/zh/`
- `ar` – RTL laužo kanoninę išvaizdą; atskiras UI sprendimas
- Kurso nuoroda ne tik `/en` – **tik jei** `.app` turės tą kalbą

**Exit:** sprendimas dokumentuojamas MUST_TODO Could → Must, ne spėjimas.

---

## Won't (visos bangos)

Iš 2026-02 MVP ir dabartinio ciklo – vis dar netaikoma:

- Kontaktų forma / Google Sheets / CAPTCHA
- 9-as promptas, katalogas, antroji kelionė
- Naujas stackas
- H1 „gerinimas“, diagnostika herojuj, „ritualas“ fronte
- IP-prievarta locale URL; vėliavos; paieška jungiklyje Wave 0–1
- 10 kalbų viename PR

---

## Ryšys su senu MVP

[archive/MVP_ROADMAP_2026-02.md](archive/MVP_ROADMAP_2026-02.md) sprendė: saugumas, forma, deploy, testai. Tai padaryta arba perkelta į Won't. Neredaguoti archyvo – Git = audit trail.
