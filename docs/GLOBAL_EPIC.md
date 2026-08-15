# Global Epic – Pasaulinė klientų gaudyklė

**Atnaujinta:** 2026-08-15  
**Atsakingas:** Orchestrator (strategija); bangų vykdymas – pagal [§9](#9-agentų-rolės)

| Dabar | Kada | Kodėl |
|-------|------|--------|
| [MUST_TODO.md](../MUST_TODO.md) | [MVP_ROADMAP.md](MVP_ROADMAP.md) | Šis failas |

Produktas shipped. Šis epic = **paskirstymas**: kad žmogus iš bet kurios šalies rastų biblioteką sava kalba, nusileistų ant savos versijos ir po 8 promptų nueitų į kursą.

Senas laiko planas ([archive/MVP_ROADMAP_2026-02.md](archive/MVP_ROADMAP_2026-02.md)) – forma, CAPTCHA, MVP iki production. **Pakeistas** [MVP_ROADMAP.md](MVP_ROADMAP.md).

---

## 1. Ambicija

Kanoniniai promptai ir kanoninė išvaizda jau yra. Išvaizdą tik poliruojame. Kitas žaidimas – kad SEO, AIEO ir GEO vestų skirtingomis kalbomis čia, o pirmas ekranas būtų savas.

Keturi TAIP (piltuvėlis):

1. Randa sava kalba (Google / ChatGPT / Perplexity).
2. Nusileidžia ant `/{locale}/`, ne ant EN stubo ir ne ant root vestibiulio.
3. Gauna **tuos pačius** 8 promptus ir tą pačią išvaizdą.
4. Po 8-o eina į kursą (šiandien `COURSE_URL_EN`).

```
Atranda (Google / ChatGPT / Perplexity, sava kalba)
    → /{locale}/
        → 8 promptai (kanonas)
            → #ritual-complete
                → COURSE_URL_EN
                    → Hub / checkout
```

---

## 2. North star (neliesti)

Jau shipped. Neliesti be naujos prizinės eilutės iš savininko.

- H1 = prizas: 30–50% kasdienių užduočių. Lead = 8 pratimai su šablonais.
- 8 promptai → kasdienis rinkinys; be paskyros.
- Front page niekada nesako „ritualas“. ID/UTM `#ritual-complete` gali likti.
- Zero-build: HTML + CSS + vanilla JS. Jokio React/Vite/bundlerio.
- Trys `.app` URL: `COURSE_URL_EN`, `HUB_ENTITY_URL`, `COURSE_RITUAL_URL` – [scripts/seo-constants.cjs](../scripts/seo-constants.cjs).

Kanonas: [.cursor/skills/hero-copy/SKILL.md](../.cursor/skills/hero-copy/SKILL.md).

---

## 3. Būsena vs spraga

**1.6.0** = 6 kalbos (lt / en / et / lv / ja / zh). Wave 0 discovery sluoksnis (switcher, nudge, AIEO) shipped.

| Sluoksnis | Būsena | Spraga |
|-----------|--------|--------|
| Path locale `/lt/` … `/zh/` | Yra | Nėra |
| `hreflang` + sitemap + `x-default` → `/en/` | Yra | Nėra |
| Endonimai, be vėliavų, tikri `<a href>` | Yra; triggeris Lucide `languages` + endonimas | Search tik nuo ~15 locale |
| `localStorage` po kliko | Yra | Nėra |
| Root `/` JS vestibiulis (`noindex`) | Yra | Leistinas; locale URL neliesti |
| Nudge, kai URL ≠ naršyklė | Yra ([js/locale-nudge.js](../js/locale-nudge.js)) | IP hintas – tik jei kalba neaiški; dabar išjungta |
| `llms.txt` | Yra, klientų Q&A (kas / kam / 8 žingsniai / kursas) | Nėra |
| JSON-LD | Organization + WebSite + WebPage + HowTo + ItemList | Nėra |
| Indeksas | 2 URL kalbai | Plona klasikiniam SEO – sąmoningai; neplėsti katalogu |
| Kursas po 8-o | Visada `COURSE_URL_EN` | Konversijos skylė JA/ZH (ir vėliau DE) |
| Taisyklės | Bangos + N+1 playbook | Kita kalba = kita banga, ne lubos |

Architektūra pasaulio SEO jau teisinga (atskiras URL, `hreflang`, rankinis jungiklis). Wave 0 atradimo sluoksnis shipped. Kita spraga – **kitos kalbos bangos** ir kurso locale `.app`, ne naujas dizainas.

---

## 4. Kalbų politika

Ne „kuo daugiau“, o bangos. Viena kalba = vienas release, su kokybės vartu (ne kalkė, kanoninis H1/lead, footer kanonas, `npm test`).

LT / ET / LV – namų rinka ir kokybės etalonas. **Prižiūrėti, ne plėsti.**

| Banga | Kalbos | Kaip |
|-------|--------|------|
| 0 | ZH ship (1.6.0); playbook; switcher; nudge; AIEO | Užrakinti mašiną |
| 1 | `de`, tada `es` **arba** `fr` (viena po vienos) | Lotynų generatorius (ET/LV modelis) |
| 2 | `ko` (ranka kaip JA); `pt-BR`; `it` / `pl` / `nl`; `id` | Pagal Vercel Analytics (šalis × locale × bounce) |
| 3 | `zh-Hant`; `ar` (RTL = atskiras UI); kurso locale `.app` | Tik su priežastimi |

**ZH caveat:** ChatGPT / Claude žemyne blokuojami. `/zh/` pirmiausia gaudo Singapūrą, diasporą ir vietinius modelius – ne „1.4 mlrd. ChatGPT vartotojų“.

**N+1 playbook:** [MULTILINGUAL_STRUCTURE.md](MULTILINGUAL_STRUCTURE.md) §7. Generatorius lotynų kalboms; JA / ZH / KO – ranka.

Laikas ir exit: [MVP_ROADMAP.md](MVP_ROADMAP.md). Checkbox'ai dabar: [MUST_TODO.md](../MUST_TODO.md).

---

## 5. Kalbos perjungimas (2026 kanonas)

Šablonas: **URL yra sutartis + suggest-don't-force + atpažįstamas compact switcher.**

Google (Search Central), Patrick Stox (2026-07), Crawlix (2026), Wikimedia ULS, NN/g: neredirectinti kalbų versijų; duoti tikras `<a>`; endonimai; be vėliavų. Skill: [.cursor/skills/locale-switcher/SKILL.md](../.cursor/skills/locale-switcher/SKILL.md).

### Sutartis

- `/{locale}/` visada ta kalba. Jokio 302 šalin (nei IP, nei `Accept-Language`).
- Root `/` = `noindex` vestibiulis: `localStorage` → `navigator.language` → EN. Crawlix: leistina, jei vestibiulis be `hreflang`, o locale URL crawlable per sitemap.
- `x-default` = `/en/` (turime globalų EN; ne language-picker stubas).

### Jungiklis

- Triggeris: Lucide `languages` + dabartinis endonimas + chevron. Ne vien gaublys (Wikimedia: gaublys skaitomas kaip lokacija).
- Meniu: Lietuvių, English, Eesti, Latviešu, Deutsch, 日本語, 简体中文. Ant kiekvieno `<a>`: `lang` + `hreflang` (ZH: `zh-Hans`).
- Tikri `href`, full page load. `localStorage` tik po žmogaus kliko.
- Iki ~10 kalbų – plokščias sąrašas, be paieškos. Nuo 8+ – footeris tampa **matomu** endonimų sąrašu. Paieška tik nuo ~15.

### Nudge

Kai nėra `localStorage.lang`, `navigator.language` sutampa su kita locale, ir žmogus ne ant jos – uždaroma juosta endonimu („日本語で見る“), ne „View in Japanese“.

- Klikas → `localStorage` + eiti į tą locale.
- Uždaryti → įsiminti dismiss; nepersistinti spėjimo.
- Botams juosta nekeičia indeksuojamo HTML.
- IP hintas **tik** tam pačiam nudge ir tik jei kalba neaiški. `DE|AT` → siūlyti Deutsch. `CH|BE|CA|SG` – be šalies hint.

### Ko neimti

Vėliavos; šalies + valiutos pickeris; Wikipedia paieška (300 kalbų); cookie keičia tą patį URL; i18n framework; IP → priverstinis `/de/`.

---

## 6. SEO, AIEO, GEO

Trys durys į **tuos pačius** `/{locale}/`.

**SEO.** Path + `hreflang` + lokalizuoti title/description/OG + sitemap – jau yra. 12 URL nelaimės šimtų long-tail – sąmoningai. Neplėsti puslapių „kad būtų SEO“. Root palikti `noindex`.

**AIEO.** 8 pilni promptai viename puslapyje – tai, ką modeliai cituoja. `llms.txt` turi tapti klientų klausimų žemėlapiu (kas / kam / 8 žingsniai / kursas), ne DS žinynu. HowTo + ItemList JSON-LD, `inLanguage` pagal locale. Tie patys faktai visose kalbose. `robots.txt` atviras.

**GEO** (generative) sutampa su AIEO: entity, citatyvus H1, identiški faktai. Geographic SEO atskirai nereikia – `hreflang` + kalbos keliai.

---

## 7. Piltuvėlis ir `.app`

Šitas repo: kalba + atradimas + pirmas pasitikėjimas.  
`.app`: kursas ir checkout.

Kursas vis dar tik `/en`. JA/ZH (vėliau DE) konvertuos prasčiau, kol `.app` neturės tos kalbos. Could – ne šito repo Wave 0.

Ecosystem nuorodos (Should) = entity signalas AIEO: biblioteka čia, kursas ten, Hub ten.

---

## 8. Won't

- IP-prievarta locale URL; auto-redirect tarp kalbų versijų
- Vėliavos; paieška jungiklyje šiame cikle
- 9-as promptas, katalogas, antroji kelionė
- Kontaktų forma / Google Sheets / CAPTCHA
- Naujas stackas (React / Vite / bundleris)
- H1 „gerinimas“, diagnostika herojuj, „ritualas“ fronte
- Kurso CTA herojuj; suliejimas su `.app`
- 10 kalbų viename PR

---

## 9. Agentų rolės

| Rolė | Epic darbas |
|------|-------------|
| Content | N+1 kokybė, registras (ne kalkė), promptų kūnai, privatumo ištikimybė EN |
| Curriculum | Playbook §7, `hreflang` klasteris, bangų eilė, generatoriaus poros |
| UI/UX | Switcher + nudge, tokenai, be redizaino ir be H1 keitimo |
| QA | Locale assertai, footer kanonas, pa11y naujai kalbai |
| Orchestrator | Wave exit, SemVer release, docs ryšiai (epic / roadmap / MUST_TODO) |

Operacinės komandos: [AGENTS.md](../AGENTS.md). Sinchronas: [.cursor/skills/locale-sync/SKILL.md](../.cursor/skills/locale-sync/SKILL.md).
