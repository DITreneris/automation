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
- [ ] Lint/test komandos praeina
- [ ] Naršyklėse patikrinta (Chrome / Firefox / Safari / Edge)
- [ ] Mobile responsive patikrintas

## Daugiakalbystė (kai liečia EN)

- [ ] Jei keičiau `en/index.html` ir/ar `en/privacy.html` (UI, struktūra ar privatumo tekstą): paleidau `npm run generate:et-lv`, peržiūrėjau ET/LV biblioteką ir, jei reikia, `et/privacy.html` / `lv/privacy.html`.
- [ ] Jei keičiau EN bibliotekos inline JS (kopijavimas, toast, klaidos) ar mikrotekstą, kurį turi atkartoti LT: atnaujinau `lt/index.html` ir paleidau `npm run generate:et-lv`.

## Susiję dokumentai

<!-- Jei reikia atnaujinti README, INTEGRACIJA, AGENTS.md ir pan. – žr. docs/DOCUMENTATION.md -->

- [ ] Dokumentacija (README, INTEGRACIJA ir kt.) atnaujinta pagal pakeitimus
- [ ] Jei release – CHANGELOG.md atnaujintas ir versija nurodyta (SemVer)

---

Žr. [AGENTS.md](AGENTS.md) agentų aprašymui ir [.cursorrules](.cursorrules) projekto taisyklėms.
