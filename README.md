# DI Promptų Biblioteka – 8 promptai kasdieniam darbui

[![CI](https://github.com/DITreneris/automation/actions/workflows/ci.yml/badge.svg)](https://github.com/DITreneris/automation/actions/workflows/ci.yml)

## Quick start (English)

Static 5-locale 8-prompt library. Companion to the course at promptanatomy.app — not a training platform. **Production:** https://www.promptanatomy.info/

```bash
npm install
npm test
npx serve . -l 3000   # no -s flag; open http://localhost:3000/en/
```

| Resource | Link |
|----------|------|
| Contributing | [CONTRIBUTING.md](CONTRIBUTING.md) |
| Security | [SECURITY.md](SECURITY.md) |
| License (CC BY 4.0) | [LICENSE](LICENSE) |
| Agent rules | [AGENTS.md](AGENTS.md) |
| Lessons | [lessons/LESSONS.md](lessons/LESSONS.md) |

**For AI agents:** start with [AGENTS.md](AGENTS.md) and [llms.txt](llms.txt).

---

📚 **8 promptai organizacijos analizei ir optimizavimui su dirbtinio intelekto pagalba**

## Apie projektą

Šis projektas yra 8 promptai: nukopijuoji, išeini su kasdieniu rinkiniu, be paskyros. Daily Workflow Library verslo analitikams ir vadovams. Interaktyvus kursas gyvena [promptanatomy.app](https://www.promptanatomy.app/en), ne čia.

### Funkcijos

- ✅ **8 specializuoti promptai** organizacijos analizei
- 🎯 **Interaktyvus dizainas** su lengvu kopijavimu
- 📋 **Automatinis tekstų kopijavimas** į mainų atmintinę
- 📱 **Responsive dizainas** – veikia visuose įrenginiuose (Mobile UI First)
- 🎨 **Minimali aplikacija** – **nerinkime jokių vartotojų duomenų**; kontaktų forma ir Google Sheets integracija šiame etape išjungta (galima įjungti vėliau)

## Promptų sąrašas

1. **DI Konteksto Patikra** - Patikrinkite, ką ChatGPT žino apie jūsų organizaciją
2. **Organizacijos Portretas** - Sukurkite išsamų organizacijos profilį
3. **Mano Rolė Organizacijoje** - Apibrėžkite savo rolės tikslą ir atsakomybes
4. **Pareigybės Instrukcija + KPI** - Praktiškas pareigybės aprašas su KPI
5. **Pagrindiniai Darbo Procesai** - Identifikuokite pagrindinius procesus (Pareto 80/20)
6. **DI Pagalba ir Optimizavimas** - Paverskite DI realiu darbo asistentu
7. **Kasdienė Promptų Biblioteka** - Paruošti promptai kasdieniniams darbams
8. **Kritinių Situacijų Simuliacija** - Pasiruoškite spaudimui iš anksto

## Kaip naudoti

1. Atidarykite svetainę naršyklėje. Root (`/`) numatytai nukreipia į **`/en/`** (centrinė kalba); taip pat į `/lt/`, `/et/`, `/lv/` arba `/ja/` pagal `localStorage.lang` arba naršyklės kalbą. Kalbą galima keisti penkiakalbiu jungikliu viršuje (**Lietuvių | English | Eesti | Latviešu | 日本語**).
2. Pasirinkite promptą ir spauskite ant jo – tekstas automatiškai pažymėsis
3. Spauskite mygtuką **"Kopijuoti promptą"** arba naudokite `Ctrl+C` / `Cmd+C`
4. Įklijuokite į ChatGPT, Claude ar kitą DI įrankį
5. Jei prompte yra vartotojo žymekliai – pakeiskite savo duomenimis: **LT** `[ĮMONĖ]` / `[MANO ROLĖ]`; **EN** / **JA** `[COMPANY]` / `[MY ROLE]`; **ET** `[ETTEVÕTE]` / `[MINU ROLL]`; **LV** `[UZŅĒMUMS]` / `[MANA LOMA]`. DI rolė (pvz. „kritiškas analitikas“) jau nurodyta prompte – jos keisti nereikia. Lentelės stulpeliai 7-ame prompte taip pat lokalizuoti (žr. [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) §3b).

## Technologijos

- **HTML5** - Semantinė struktūra
- **CSS3** - Modernus dizainas su CSS kintamaisiais
- **Vanilla JavaScript** - Interaktyvumas be priklausomybių
- **Google Fonts** - Inter ir JetBrains Mono šriftai

## Struktūra

```
.
├── index.html          # Root: redirect į /lt/ | /en/ (default) | /et/ | /lv/ | /ja/
├── lt/
│   ├── index.html      # Biblioteka (lietuvių)
│   └── privatumas.html # Privatumo politika (LT)
├── en/
│   ├── index.html      # Library (English, kanonas)
│   └── privacy.html    # Privacy policy (EN)
├── et/
│   ├── index.html      # Raamatukogu (eesti)
│   └── privacy.html    # Privaatsus (ET)
├── lv/
│   ├── index.html      # Bibliotēka (latviešu)
│   └── privacy.html    # Privātums (LV)
├── ja/
│   ├── index.html      # ライブラリ (日本語)
│   └── privacy.html    # プライバシー (JA)
├── css/
│   ├── tokens.css      # Design tokens SSOT (DS v2.0)
│   ├── library.css     # Bibliotekos komponentai (@import tokens)
│   └── privacy.css     # Privatumo puslapių layout
├── tokens/
│   └── tokens.json     # DTCG 2025.10 eksportas (validate: npm run validate:tokens)
├── assets/
│   └── img/            # icons/ (favicon, PWA) + og/ (social preview)
├── js/
│   ├── hreflang.js     # Absoliučios hreflang nuorodos (library / privacy)
│   ├── lang-switcher.js # Kalbų dropdown (hero + footer)
│   ├── prompt-collapse.js # #blockN deep-link atidaro collapsible promptus
│   ├── library.js      # Bibliotekos logika (EN šaltinis)
│   ├── library.lt.js   # Ta pati logika LT
│   ├── library.et.js   # Generuojama: npm run generate:et-lv
│   ├── library.lv.js   # Generuojama: npm run generate:et-lv
│   └── library.ja.js   # JA (rankiniu)
├── scripts/
│   ├── generate-et-lv-pages.cjs   # ET/LV index + library.et.js / library.lv.js iš EN
│   ├── lint-html.mjs              # html-validate (11 HTML failų)
│   ├── pa11y-pages.cjs            # pa11y URL sąrašas (CI)
│   ├── pa11y.config.cjs           # pa11y Puppeteer konfigūracija
│   ├── prompt-bodies-et-lv.cjs    # META/INPUT/OUTPUT tekstai ET/LV
│   └── prompt-bodies-ja.cjs       # JA promptų korpusas (šaltinis rankiniam JA)
├── README.md           # Dokumentacija
├── LICENSE             # CC BY 4.0
├── CONTRIBUTING.md     # PR ir locale vartai
├── SECURITY.md         # Saugumo pranešimai
├── AGENTS.md           # Agentų operational SSOT (EN)
├── lessons/            # Operacinės taisyklės
├── CHANGELOG.md        # Versijų istorija (Keep a Changelog)
├── package.json        # Dev: lint, testai, a11y
├── DEPLOYMENT.md       # Deploy instrukcijos (Vercel + custom domain)
├── docs/
│   ├── DOCUMENTATION.md           # Lean dokumentų indeksas (3 lygiai)
│   ├── MULTILINGUAL_STRUCTURE.md  # Path atitikmenys LT/EN/ET/LV/JA
│   ├── design_system.md           # Design System v2.0 (tokenai, komponentai, patterns)
│   ├── BULLET_PROOF_PROMPTS.md    # Promptų META/INPUT/OUTPUT standartas
│   ├── QA_STANDARTAS.md           # QA standartas (spinoff01)
│   ├── TESTAVIMAS.md              # Gyvo testavimo žurnalas
│   └── archive/                   # Auditas, senas roadmap, integracijos (vėliau)
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   └── PULL_REQUEST_TEMPLATE.md
└── .gitignore
```

**Pilnas dokumentų indeksas:** [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md).

## Privatumas

- **Minimali aplikacija:** šiuo metu **nerinkime jokių asmens duomenų**. Visas naudojimas vyksta tik tavo įrenginyje (kopijavimas, „Pažymėjau kaip atlikau“ – localStorage).
- **Privatumo politika:** LT [lt/privatumas.html](lt/privatumas.html), EN [en/privacy.html](en/privacy.html), ET [et/privacy.html](et/privacy.html), LV [lv/privacy.html](lv/privacy.html), JA [ja/privacy.html](ja/privacy.html) – aprašymas, kad duomenų nerinkime; jei vėliau bus įjungta kontaktų forma, bus atnaujinta.

## Deployment ir gyvas testavimas

- **Repozitorija:** [github.com/DITreneris/automation](https://github.com/DITreneris/automation)
- **Deploy:** **Vercel** → production **`https://www.promptanatomy.info/`** (legacy GitHub Pages workflow – [DEPLOYMENT.md](DEPLOYMENT.md)).
- **QA standartas:** [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01). Projektas laikosi [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md); po deploy – gyvas testavimas pagal [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md).

## Reikalavimai

- **Naudojimui:** Nėra priklausomybių – kalbų perjungimui reikia HTTP serverio (ne `file://`); lokaliai: `npx serve . -l 3000` → `http://localhost:3000/en/` (**be** `-s` vėliavos)
- **Development/CI:** `npm install` ir `npm run lint:html`, `npm run lint:js` (žr. package.json)

## Kontaktų rinkimas (vėlesniems etapams)

Dabartinė versija minimali – kontaktų formos nėra. Jei vėliau reikės rinkti atsiliepimus, integracijos instrukcijos saugomos repozitorijoje (vėlesniems etapams).

## Licencija

Šis projektas platinamas pagal [Creative Commons Attribution 4.0](LICENSE) (CC BY 4.0) licenciją. Galite dalintis ir adaptuoti su tinkama nuoroda į Prompt Anatomy.

## Autorius

Sukurta verslo analitikams ir vadovams, kurie nori efektyviai integruoti dirbtinį intelektą į savo darbo procesus.

---

**Sėkmingos analizės! 🚀**
