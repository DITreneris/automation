# Operational lessons

Short rules for agents and contributors. **Not** historical audits — see [docs/archive/](docs/archive/).

## Governance

- One bullet = one rule with file or command citation
- Max ~30 active bullets; archive stale items to [archive/](archive/)
- Archive when fixed in code+tests and not seen for 90 days
- Add via PR when fixing a **repeat** CI/locale mistake

## Active lessons

| Date | Symptom | Rule | Ref |
|------|---------|------|-----|
| 2026-06-14 | Locale paths 404 locally | `npx serve . -l 3000` — **never** `-s` (SPA mode breaks `/lt/`, `/et/`, etc.) | CHANGELOG, CONTRIBUTING |
| 2026-06-14 | Course link wrong host | Course URL: `https://www.promptanatomy.app/en` only (`COURSE_URL_EN`) | [scripts/seo-constants.cjs](../scripts/seo-constants.cjs) |
| 2026-06-14 | Library vs course confused | Library: `https://www.promptanatomy.info/` — not the course app | [AGENTS.md](../AGENTS.md) |
| 2026-06-14 | ET/LV out of sync with EN | Edit EN → `npm run generate:et-lv`; do not hand-fix `et/index.html` for parity | [docs/MULTILINGUAL_STRUCTURE.md](../docs/MULTILINGUAL_STRUCTURE.md) |
| 2026-06-14 | Footer contact CI fail | Kanon: `info@promptanatomy.app`, `1311 Park St`, Alameda CA 94501 | [tests/structure.test.js](../tests/structure.test.js) |

## Patterns

Recurring themes: [audit-patterns.md](audit-patterns.md)
