# AGENTS.md – Prompt Anatomy Library

Operational SSOT for AI coding agents. Human onboarding: [README.md](README.md). Doc index: [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md).

**LT UI copy:** address the user as **Tu**; concise, motivating tone — see [.cursorrules](.cursorrules).

---

## Mission

Free static **5-locale** prompt library (lt / en / et / lv / ja).

| Product | URL |
|---------|-----|
| **Library (this repo)** | https://www.promptanatomy.info/ |
| **Interactive course** | https://www.promptanatomy.app/en (`COURSE_URL_EN` in [scripts/seo-constants.cjs](scripts/seo-constants.cjs)) |

Never link the course to `promptanatomy.info/en` — that is the library EN page.

---

## Non-negotiable rules

- **Zero-build:** plain HTML + [css/library.css](css/library.css) + vanilla JS. No React, Vite, Tailwind, or bundlers.
- **EN is canonical:** [en/index.html](en/index.html), [en/privacy.html](en/privacy.html), [js/library.js](js/library.js).
- After EN source changes: `npm run generate:et-lv` and commit generated files (ET/LV pages + `library.{et,lv,lt}.js`).
- **LT** ([lt/](lt/), [js/library.lt.js](js/library.lt.js)) and **JA** ([ja/](ja/), [js/library.ja.js](js/library.ja.js)): update manually.
- **`npm test` must pass** before merge.
- **No secrets** in Git (API keys, `.env`, real Google Script URLs).
- **Local preview:** `npx serve . -l 3000` — **never** use `-s` (breaks locale paths).

Before locale or CI tasks, skim [lessons/LESSONS.md](lessons/LESSONS.md).

---

## Key file map

| Task | Edit first |
|------|------------|
| EN UI / copy | [en/index.html](en/index.html) |
| EN JS (copy, toast, progress) | [js/library.js](js/library.js) |
| LT copy / UI | [lt/index.html](lt/index.html), [js/library.lt.js](js/library.lt.js) |
| JA copy / UI | [ja/index.html](ja/index.html), [js/library.ja.js](js/library.ja.js) |
| ET / LV library pages | Generated — change EN, then `npm run generate:et-lv` |
| Shared styles | [css/tokens.css](css/tokens.css) (SSOT), [css/library.css](css/library.css) |
| Privacy layout | [css/privacy.css](css/privacy.css) |
| SEO / course URL | [scripts/seo-constants.cjs](scripts/seo-constants.cjs) |
| Locale paths / hreflang | [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) |
| Structure tests | [tests/structure.test.js](tests/structure.test.js) |
| Repo skills | [.cursor/skills/](.cursor/skills/) |

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
- Do not create new root-level audit or roadmap files — use CHANGELOG `[Unreleased]` or [MUST_TODO.md](MUST_TODO.md).

---

## Security limits

- Contact form and Google Sheets are **disabled**. Ask before enabling — see [docs/archive/integrations/](docs/archive/integrations/).
- Do not add new tracking without review (Vercel Web Analytics is already on all HTML pages).
- Production: no `console.log` for sensitive data.

Report issues: [SECURITY.md](SECURITY.md).

---

## Edit freely

`css/`, `en/`, `lt/`, `ja/`, `js/` (except hand-editing ET/LV when EN unchanged), `tests/`, `scripts/`, `assets/`, `lessons/`

## Edit carefully

`et/`, `lv/` (prefer generator), [tokens/tokens.json](tokens/tokens.json), [vercel.json](vercel.json), [.github/workflows/](.github/workflows/)

## Never

- Point course/badge links to `promptanatomy.info/en`
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
| Content | Prompts, microcopy, 5-locale parity |
| Curriculum | Structure, prompt sequence, MULTILINGUAL |
| UI/UX | CSS, a11y, responsive |
| QA | Tests, CHANGELOG, footer-contact kanon |
| Orchestrator | CI, docs, release coordination |

Full workflow history: [docs/archive/](docs/archive/).

---

**Last updated:** 2026-06-14
