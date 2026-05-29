# MUST TODO – aktyvūs prioritetai

**Atnaujinta:** 2026-05-29  
**Būsena:** Produkcijoje – `https://www.promptanatomy.info/` (5 kalbos, v1.4.0, forma išjungta).

> Kontaktų forma ir Google Sheets – **vėlesniems etapams** ([docs/archive/integrations/](docs/archive/integrations/)). Dabar privaloma tik bibliotekos kokybė ir daugiakalbystė.

---

## P0 – prieš kiekvieną merge

- [ ] `npm test` praeina
- [ ] Jei keista EN (`en/index.html`, `en/privacy.html`, `js/library.js`) – `npm run generate:et-lv`, be necommitinto diff
- [ ] Footer `.footer-contact` kanonas visose 5 kalbose (žr. [AGENTS.md](AGENTS.md) QA)

---

## P1 – artimiausi darbai

- [ ] **ET/LV privatumo politika** – juridinė / redaktoriaus peržiūra
- [ ] **ET mikrotekstas** – badge `aria-label` ir natūralumas estiškai

---

## Atidėta (ne blokuoja release)

- Google Apps Script / kontaktų forma – [docs/archive/integrations/INTEGRACIJA.md](docs/archive/integrations/INTEGRACIJA.md)
- CAPTCHA, rate limiting – kai forma įjungiama
- Dinaminis progress `aria-label` (optional, žr. archyvuotą MICROCOPY audit §7.5)

---

## Nuorodos

- Keliai ir sinchronizacija: [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md)
- Dokumentų indeksas: [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md)
- Gyvas QA: [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md)
