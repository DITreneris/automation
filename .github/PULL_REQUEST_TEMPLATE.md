## Pakeitimų aprašymas

<!-- Trumpai aprašykite, ką keičiate ir kodėl -->

## Agentas / Tipas

<!-- Pažymėkite, kuris agentas arba commit tipas pritaikomas -->

- [ ] `[Content]` – turinio pakeitimai
- [ ] `[Curriculum]` – struktūros/sekos pakeitimai
- [ ] `[UI]` – dizainas, UX, prieinamumas
- [ ] `[QA]` – testai, validacija, klaidų taisymas
- [ ] `[Orchestrator]` – koordinacija, konfigūracija
- [ ] `[Feature]` – nauja funkcija
- [ ] `[Fix]` – klaidos taisymas
- [ ] `[Docs]` – dokumentacijos pakeitimai
- [ ] `[Refactor]` – kodo refactoring
- [ ] `[Chore]` – build, config

## Kaip testuota

<!-- Kaip patikrinote, kad pakeitimai veikia -->

- [ ] Lokaliai paleistas ir patikrintas
- [ ] Lint/test komandos praeina (`npm test` — žr. [AGENTS.md](AGENTS.md) Commands)
- [ ] Naršyklėse patikrinta (Chrome / Firefox / Safari / Edge)
- [ ] Mobile responsive patikrintas

## Daugiakalbystė (kai liečia EN)

- [ ] Jei keičiau `en/index.html` ir/ar `en/privacy.html` (UI, struktūra ar privatumo tekstą): paleidau `npm run generate:et-lv`, peržiūrėjau ET/LV biblioteką ir, jei reikia, `et/privacy.html` / `lv/privacy.html`; rankiniu patikrinau `lt/`, `ja/` ir `zh/` atitikmenis.
- [ ] Jei keičiau EN bibliotekos JS (`js/library.js` – kopijavimas, toast, klaidos) ar mikrotekstą, kurį turi atkartoti LT: atnaujinau `lt/index.html` ir/ar `LT_JS_PAIRS` [scripts/generate-et-lv-pages.cjs](../scripts/generate-et-lv-pages.cjs), tada `npm run generate:et-lv` (rašo `library.lt.js` / `library.et.js` / `library.lv.js`).

## Susiję dokumentai

<!-- Žr. docs/DOCUMENTATION.md – lean indeksas (Lygis A/B/C) -->

- [ ] Dokumentacija atnaujinta pagal [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) (jei reikia)
- [ ] Jei release – CHANGELOG.md atnaujintas ir versija nurodyta (SemVer)
- [ ] Jei kartojama CI/locale klaida – bullet į [lessons/LESSONS.md](lessons/LESSONS.md) (žr. governance ten)

## Design System (jei liečia UI/CSS)

- [ ] Tokenai tik `css/tokens.css`; komponentai naudoja `var(--*)`
- [ ] `docs/design_system.md` sinchronizuotas
- [ ] Privacy puslapiai naudoja `tokens.css` + `privacy.css` (ne inline hex)

---

Žr. [AGENTS.md](AGENTS.md) agentų aprašymui ir [.cursorrules](.cursorrules) projekto taisyklėms.
