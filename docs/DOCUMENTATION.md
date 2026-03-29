# Dokumentų valdymas

**Tikslas:** Dokumentų atnaujinimo, versijavimo ir archyvavimo tvarka. Taisyklės: [.cursorrules](../.cursorrules), [AGENTS.md](../AGENTS.md).

---

## 1. Dokumentų inventorius ir atsakomybės

| Dokumentas | Paskirtis | Atsakingas agentas / tipas | Kada atnaujinti |
|------------|-----------|----------------------------|------------------|
| README.md | Apžvalga, naudojimas, struktūra | Content / Orchestrator | Naujos funkcijos, deployment, struktūros pakeitimai |
| AGENTS.md | Agentų rolės, workflow, commit prefiksai | Orchestrator | Workflow / rolės pakeitimai |
| .cursorrules | Saugumas, kokybė, dokumentacijos taisyklės | QA + Orchestrator | Taisyklų pakeitimai, nauji reikalavimai |
| CHANGELOG.md | Versijų pakeitimų istorija | Kiekvienas (pagal pakeitimą) | Kiekvienas release ir reikšmingi pakeitimai |
| MUST_TODO.md | MVP kritinės užduotys | Orchestrator / Curriculum | Užduočių atnaujinimas, nauji P0 |
| TODO.md | Prioritetizuotas backlog (P1–P3), ne P0 | Orchestrator / QA | Po auditų, UX/a11y pagerinimai |
| MVP_ROADMAP.md | Roadmap, tikslai | Curriculum / Orchestrator | Etapų pasikeitimas, prioritetai |
| INTEGRACIJA.md | Google Sheets, formos | Content / QA | Integracijos žingsniai, konfigūracija |
| feedback-schema.md | Feedback Store schema | Orchestrator | Schema pakeitimai |
| lt/privatumas.html; en, et, lv/privacy.html | Privatumo politika (LT/EN/ET/LV) | Content (juridinė peržiūra atskirai) | Duomenų rinkimo pakeitimai, GDPR |
| .github/PULL_REQUEST_TEMPLATE.md | PR šablonas | Orchestrator / QA | Checklist pakeitimai |
| .github/workflows/ci.yml | CI | QA / Orchestrator | Nauji testai, lint, a11y |
| .github/workflows/deploy.yml | GitHub Pages deploy | QA / Orchestrator | Deploy žingsniai, environment |
| DEPLOYMENT.md | Deploy instrukcijos, troubleshooting | QA / Orchestrator | Platforma, URL, post-deploy |
| docs/QA_STANDARTAS.md | QA standartas (nuoroda spinoff01) | QA | Kriterijai, komandos, spinoff01 |
| docs/TESTAVIMAS.md | Gyvo testavimo scenarijai ir žurnalas | QA | Po deploy testavimas, rezultatai |
| docs/BULLET_PROOF_PROMPTS.md | Promptų kokybės standartas (bullet-proof, META/INPUT/OUTPUT) | Content / QA | Atnaujinti po turinio/struktūros pakeitimų |
| docs/MULTILINGUAL_STRUCTURE.md | Path atitikmenys ir routing LT/EN/ET/LV | Curriculum | Pakeitimai į puslapių struktūrą ar kalbas |

---

## 2. Kada ką atnaujinti

- **Kodas keičiamas** → atnaujinti susijusią dokumentaciją (README, INTEGRACIJA ir pan.). Žr. [.cursorrules](../.cursorrules) skyrių „Dokumentacijos valdymas“.
- **Release** → būtina atnaujinti CHANGELOG: sekciją „Nereleisuota“ perkelti į naują versiją `## [X.Y.Z] - YYYY-MM-DD`. Versijavimas – [Semantic Versioning](https://semver.org/).
- **PR:** prieš merge patikrinti, ar „Susiję dokumentai“ (PR šablone) atnaujinti; jei release – ar CHANGELOG ir versija nurodyta.

---

## 3. CHANGELOG ir release taisyklė

- **Formatas:** [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) – sekcijos: Prideta, Pakeista, Taisyta, Pašalinta, Deprecated, Saugumas. Datos – **YYYY-MM-DD** (ISO 8601).
- **Release** = Git tag (pvz. `v1.0.0`) + CHANGELOG atnaujinimas („Nereleisuota“ → `[X.Y.Z] - data`).
- Prieš release QA Agent tikrina: ar CHANGELOG atnaujintas ir ar versija atitinka pakeitimus (SemVer).

---

## 4. Archyvavimo politika

- **Versijavimas:** Dokumentai versijuojami per **Git** (istorija = audit trail).
- **Archyvas:** Pasirinktinai naudojamas `docs/archive/`. Ten kopijuoti tik tada, kai dokumentas **radikaliai** keičiamas ar pervadinamas (pvz. `MUST_TODO_2026-Q1.md`), o dabartinis failas lieka pagrindinis. Root dokumentai (README, AGENTS, CHANGELOG) paprastai lieka vieni.
- **Retention:** Automatinio dokumentų trynimo nenaudoti; archyve laikyti pagal poreikį (auditas, istorija).

---

## 5. QA checklist – dokumentacija

Prieš merge / release:

- [ ] Ar pakeitimams atitinka dokumentacijos atnaujinimai (pagal lentelę skyriuje 1)?
- [ ] Jei release – ar CHANGELOG.md atnaujintas ir versija nurodyta (SemVer)?

Žr. [AGENTS.md](../AGENTS.md) QA Agent aprašymui, [docs/QA_STANDARTAS.md](QA_STANDARTAS.md) (nuoroda į [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01)), [docs/TESTAVIMAS.md](TESTAVIMAS.md) gyvam testavimui.
