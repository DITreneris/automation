# AGENTS.md – Prompt Anatomy Library

Operational SSOT for AI coding agents. Human onboarding: [README.md](README.md). Doc index: [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md).

**LT UI copy:** address the user as **Tu**; concise, motivating tone — see [.cursorrules](.cursorrules).

---

## Mission

Free static 8-prompt Daily Workflow Library. Locales are a **wave, not a ceiling** (now: lt / en / et / lv / ja / zh). EN is canonical. A new locale = [MULTILINGUAL playbook](docs/MULTILINGUAL_STRUCTURE.md) §7 + one release. Strategy: [docs/GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md). Waves: [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md). Now: [MUST_TODO.md](MUST_TODO.md).

| Product | URL | Constant |
|---------|-----|----------|
| **Library (this repo)** | https://www.promptanatomy.info/ | `SITE_ORIGIN` |
| **Interactive course** | https://www.promptanatomy.app/en | `COURSE_URL_EN` (badge, community) |
| **Hub (entity / checkout)** | https://www.promptanatomy.app/ + UTM | `HUB_ENTITY_URL` (`.footer-entity` only) |
| **Handoff after prompt 8** | `COURSE_URL_EN` + `utm_medium=ritual_complete` | `COURSE_RITUAL_URL` (`#ritual-complete` only) |

Never link the course to `promptanatomy.info/en` — that is the library EN page. Do not call this site the Hub. Do not point `.footer-entity` at the course.

---

## Non-negotiable rules

- **Zero-build:** plain HTML + [css/library.css](css/library.css) + vanilla JS. No React, Vite, Tailwind, or bundlers.
- **EN is canonical:** [en/index.html](en/index.html), [en/privacy.html](en/privacy.html), [js/library.js](js/library.js).
- After EN source changes: `npm run generate:et-lv` and commit generated files (ET/LV pages + `library.{et,lv,lt}.js`).
- **LT HTML** ([lt/](lt/)), **JA** ([ja/](ja/), [js/library.ja.js](js/library.ja.js)), and **ZH** ([zh/](zh/), [js/library.zh.js](js/library.zh.js)): update manually. **LT JS** is generated (`LT_JS_PAIRS` in [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs)) — do not hand-edit `js/library.lt.js`.
- **`npm test` must pass** before merge.
- **No secrets** in Git (API keys, `.env`, real Google Script URLs).
- **Local preview:** `npx serve . -l 3000` — **never** use `-s` (breaks locale paths).
- **Locale URL is the contract:** `/{locale}/` always serves that language. Never 302 away from a locale URL (IP or `Accept-Language`). Root `/` is a `noindex` vestibule (`localStorage` → `navigator.language` → EN). Suggest-don't-force: nudge banner, not an inter-locale redirect. Course stays `COURSE_URL_EN` until `.app` has that locale.

Before locale or CI tasks, skim [lessons/LESSONS.md](lessons/LESSONS.md). Switcher / root / nudge: [.cursor/skills/locale-switcher/SKILL.md](.cursor/skills/locale-switcher/SKILL.md).

---

## Key file map

| Task | Edit first |
|------|------------|
| EN UI / copy | [en/index.html](en/index.html) |
| EN JS (copy, toast, progress) | [js/library.js](js/library.js) |
| LT copy / UI | [lt/index.html](lt/index.html); JS via `LT_JS_PAIRS` then `generate:et-lv` |
| JA copy / UI | [ja/index.html](ja/index.html), [js/library.ja.js](js/library.ja.js) |
| ZH copy / UI | [zh/index.html](zh/index.html), [js/library.zh.js](js/library.zh.js) |
| ET / LV library pages | Generated — EN and/or pair `to` in [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs), then `npm run generate:et-lv` |
| Shared styles | [css/tokens.css](css/tokens.css) (SSOT), [css/library.css](css/library.css) |
| Privacy layout | [css/privacy.css](css/privacy.css) |
| SEO / course / hub / ritual URLs | [scripts/seo-constants.cjs](scripts/seo-constants.cjs) |
| Locale paths / hreflang / N+1 | [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) |
| Global acquisition (why) | [docs/GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md) |
| Waves (when) | [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md) |
| Current checkboxes | [MUST_TODO.md](MUST_TODO.md) |
| Structure tests | [tests/structure.test.js](tests/structure.test.js) |
| Repo skills | [.cursor/skills/](.cursor/skills/) (hero-copy before H1/OG; locale-switcher before lang-switcher / root / nudge) |

---

## Commands

```bash
npm install
npm test
npm run generate:et-lv
npx serve . -l 3000          # no -s
PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs
npm run validate:tokens
npm run lint:design-tokens
npm run lint:html
npm run lint:js
```

CI parity: [CONTRIBUTING.md](CONTRIBUTING.md) §Reproduce CI locally.

---

## Coding standards

- `'use strict'` in JS; `textContent` for user data (not `innerHTML`).
- Semantic HTML, WCAG AA, `prefers-reduced-motion`.
- Colors: [css/tokens.css](css/tokens.css) only; semantic tokens (`--color-link`, `--color-action-primary-bg`).
- Privacy pages: [css/tokens.css](css/tokens.css) + [css/privacy.css](css/privacy.css) — no inline hex.

Details: [docs/design_system.md](docs/design_system.md), [docs/BULLET_PROOF_PROMPTS.md](docs/BULLET_PROOF_PROMPTS.md).

---

## Testing rules

- Merge gate: `npm test` (structure + tokens + HTML + ESLint).
- DOM or copy changes in locales: update [tests/structure.test.js](tests/structure.test.js) when asserts are intentional product requirements.
- Release: update [CHANGELOG.md](CHANGELOG.md) and [package.json](package.json) version (SemVer).

---

## Documentation rules

- Index: [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) — update Level A/B when merge gates change.
- EN changes: `npm run generate:et-lv`; no uncommitted diff in generated ET/LV/LT JS.
- Planning SSOT: [docs/GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md) (why) + [docs/MVP_ROADMAP.md](docs/MVP_ROADMAP.md) (when). Execution board: [MUST_TODO.md](MUST_TODO.md). Do not create new **root-level** audit or roadmap files.

---

## Security limits

- Contact form and Google Sheets are **disabled**. Ask before enabling — see [docs/archive/integrations/](docs/archive/integrations/).
- Do not add new tracking without review (Vercel Web Analytics is already on all HTML pages).
- Production: no `console.log` for sensitive data.

Report issues: [SECURITY.md](SECURITY.md).

---

## Edit freely

`css/`, `en/`, `lt/` (HTML/privacy), `ja/`, `zh/`, `js/library.js`, `js/library.ja.js`, `js/library.zh.js`, `tests/`, `scripts/`, `assets/`, `lessons/`

## Edit carefully

`et/`, `lv/` (prefer generator), `js/library.{et,lv,lt}.js` (generated), [tokens/tokens.json](tokens/tokens.json), [vercel.json](vercel.json), [.github/workflows/](.github/workflows/)

## Never

- Point course/badge links to `promptanatomy.info/en`
- Call this site the Hub, or point `.footer-entity` at `COURSE_URL_EN` / `COURSE_RITUAL_URL`
- Put a diagnostic or “what AI knows about your org” on the library H1 — prize only; never put “ritual” in customer-facing front-page copy; see [.cursor/skills/hero-copy/SKILL.md](.cursor/skills/hero-copy/SKILL.md)
- 302 from `/{locale}/` based on IP or `Accept-Language`; auto-redirect between language versions
- Treat “6 locales” as a product ceiling — add languages via the playbook, one release at a time
- Use `serve -s` for local preview
- Leave uncommitted generator diff after EN edits
- Commit secrets or real integration URLs
- Amend pushed commits without explicit user request

---

## How to report changes

**Commit prefixes:** `[Content]` `[Curriculum]` `[UI]` `[QA]` `[Orchestrator]`

**PR:** fill [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md).

**Summary:** locales touched, commands run, test result.

---

## Agent roles (abbreviated)

| Role | Focus |
|------|--------|
| Content | Prompts, microcopy, N+1 quality (register, not calque) |
| Curriculum | Prompt sequence, MULTILINGUAL playbook, hreflang cluster, wave order |
| UI/UX | CSS, a11y, switcher + nudge (no redesign, no H1 change) |
| QA | Tests, CHANGELOG, footer-contact kanon, pa11y on a new locale |
| Orchestrator | CI, wave exit, release, epic / roadmap / MUST_TODO links |

Full workflow history: [docs/archive/](docs/archive/).

---

**Last updated:** 2026-08-15
