# DI Promptų Biblioteka – Verslo Mokymų Platforma

📚 **8 promptai organizacijos analizei ir optimizavimui su dirbtinio intelekto pagalba**

## Apie projektą

Šis projektas yra interaktyvi HTML platforma, skirta verslo analitikams ir vadovams, kurie nori efektyviai naudoti dirbtinį intelektą (DI) savo organizacijos analizei ir optimizavimui.

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

1. Atidarykite svetainę naršyklėje. Root (`/`) nukreips į `/lt/`, `/en/`, `/et/` arba `/lv/` pagal išsaugotą kalbą (`localStorage`) arba naršyklės kalbą; kalbą galima keisti jungikliu (Lietuvių | English | Eesti | Latviešu) viršuje.
2. Pasirinkite promptą ir spauskite ant jo – tekstas automatiškai pažymėsis
3. Spauskite mygtuką **"Kopijuoti promptą"** arba naudokite `Ctrl+C` / `Cmd+C`
4. Įklijuokite į ChatGPT, Claude ar kitą DI įrankį
5. Jei prompte yra `[ĮMONĖ]` – pakeiskite į savo arba kliento įmonę; jei yra `[MANO ROLĖ]` – pakeiskite į savo pareigas. DI rolė (pvz. „kritiškas analitikas“) jau nurodyta prompte – jos keisti nereikia

## Technologijos

- **HTML5** - Semantinė struktūra
- **CSS3** - Modernus dizainas su CSS kintamaisiais
- **Vanilla JavaScript** - Interaktyvumas be priklausomybių
- **Google Fonts** - Inter ir JetBrains Mono šriftai

## Struktūra

```
.
├── index.html          # Root: redirect į /lt/ | /en/ | /et/ | /lv/
├── lt/
│   ├── index.html      # Biblioteka (lietuvių)
│   └── privatumas.html # Privatumo politika (LT)
├── en/
│   ├── index.html      # Library (English)
│   └── privacy.html    # Privacy policy (EN)
├── et/
│   ├── index.html      # Raamatukogu (eesti)
│   └── privacy.html    # Privaatsus (ET)
├── lv/
│   ├── index.html      # Bibliotēka (latviešu)
│   └── privacy.html    # Privātums (LV)
├── js/
│   └── hreflang.js     # Absoliučios hreflang nuorodos (library / privacy)
├── scripts/
│   ├── generate-et-lv-pages.cjs   # ET/LV index iš EN (po EN pakeitimų – pergeneruoti)
│   └── prompt-bodies-et-lv.cjs    # META/INPUT/OUTPUT tekstai ET/LV
├── README.md           # Dokumentacija
├── CHANGELOG.md        # Versijų istorija (Keep a Changelog)
├── package.json        # Dev: lint, testai, a11y
├── DEPLOYMENT.md       # Deploy instrukcijos (GitHub Pages)
├── docs/
│   ├── DOCUMENTATION.md
│   ├── MULTILINGUAL_STRUCTURE.md  # Path atitikmenys LT/EN/ET/LV
│   ├── QA_STANDARTAS.md   # QA standartas (spinoff01)
│   └── TESTAVIMAS.md      # Gyvo testavimo žurnalas
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   └── PULL_REQUEST_TEMPLATE.md
└── .gitignore
```

## Privatumas

- **Minimali aplikacija:** šiuo metu **nerinkime jokių asmens duomenų**. Visas naudojimas vyksta tik tavo įrenginyje (kopijavimas, „Pažymėjau kaip atlikau“ – localStorage).
- **Privatumo politika:** LT [lt/privatumas.html](lt/privatumas.html), EN [en/privacy.html](en/privacy.html), ET [et/privacy.html](et/privacy.html), LV [lv/privacy.html](lv/privacy.html) – aprašymas, kad duomenų nerinkime; jei vėliau bus įjungta kontaktų forma, bus atnaujinta.

## Deployment ir gyvas testavimas

- **Repozitorija:** [github.com/DITreneris/automation](https://github.com/DITreneris/automation)
- **Deploy:** GitHub Pages per [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Instrukcijos: [DEPLOYMENT.md](DEPLOYMENT.md).
- **Production URL:** `https://DITreneris.github.io/automation/`
- **QA standartas:** [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01). Projektas laikosi [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md); po deploy – gyvas testavimas pagal [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md).

## Reikalavimai

- **Naudojimui:** Nėra priklausomybių – tiesiog atidarykite HTML failą naršyklėje
- **Development/CI:** `npm install` ir `npm run lint:html`, `npm run lint:js` (žr. package.json)

## Kontaktų rinkimas (vėlesniems etapams)

Dabartinė versija minimali – kontaktų formos nėra. Jei vėliau reikės rinkti atsiliepimus, integracijos instrukcijos saugomos repozitorijoje (vėlesniems etapams).

## Licencija

Šis projektas yra atviro kodo ir gali būti naudojamas laisvai.

## Autorius

Sukurta verslo analitikams ir vadovams, kurie nori efektyviai integruoti dirbtinį intelektą į savo darbo procesus.

---

**Sėkmingos analizės! 🚀**
