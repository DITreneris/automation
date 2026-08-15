# MVP Roadmap – Pasaulinė gaudyklė

**Atnaujinta:** 2026-08-15  
**Pakeičia:** [archive/MVP_ROADMAP_2026-02.md](archive/MVP_ROADMAP_2026-02.md) (forma, CAPTCHA, kelias iki production – produktas jau gyvas).

| Kodėl | Dabar |
|-------|--------|
| [GLOBAL_EPIC.md](GLOBAL_EPIC.md) | [MUST_TODO.md](../MUST_TODO.md) |

Produktas shipped (8 promptai, kanoninė išvaizda, H1 lock). Šitas roadmap = **kada**: bangos, deliverables, exit. Checkbox'ai gyvena MUST_TODO, ne čia.

---

## Principas

Viena kalba = vienas release. Pirma padaryti, kad *esamos* kalbos būtų randamos ir teisingai pasitiktų. Tada `de`. Ne 10 kalbų viename PR.

North star ir Won't: [GLOBAL_EPIC.md](GLOBAL_EPIC.md) §2 ir §8.

---

## Wave 0 – Mašina (dabar – ~2 sav.)

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

## Wave 1 – Europa (~1–3 mėn.)

**Tikslas:** įrodyti N+1 playbook su pirma ne-Baltijos, ne-CJK kalba.

**Rolė:** Curriculum + Content (generatorius + `prompt-bodies-de.cjs`); QA – nauja kalba CI/pa11y.

**Deliverables**

- `de` (DACH) – vienas release
- Tada `es` **arba** `fr` – ne abi vienu metu
- Lotynų kalbos per generatorių (ET/LV modelis)

**Exit:** `de` gyvas, playbook praėjęs be rankinio ET/LV stiliaus chaoso; hreflang klasteris pilnas.

**Prieš startą:** Wave 0 exit; Vercel Analytics – iš kurių šalių ateina į EN.

---

## Wave 2 – Duomenys

**Tikslas:** plėsti ten, kur analitika rodo bounce / srautą, ne ten, kur „norisi“.

**Kandidatai (eilė neįšaldyta):** `pt-BR`, `ko` (ranka kaip JA), `it` / `pl` / `nl`, `id`.

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
