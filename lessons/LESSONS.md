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
| 2026-08-14 | Entity footer pointed at course | `.footer-entity` → `HUB_ENTITY_URL` (hub root + UTM); badge stays bare `COURSE_URL_EN`; community → `COURSE_COMMUNITY_URL` | [scripts/seo-constants.cjs](../scripts/seo-constants.cjs) |
| 2026-08-14 | Library called itself the Hub | Ecosystem H2 is the Use spoke, not the Hub. Ritual CTA uses `COURSE_RITUAL_URL` (`utm_medium=ritual_complete`), not `HUB_ENTITY_URL` | [scripts/seo-constants.cjs](../scripts/seo-constants.cjs) |
| 2026-08-14 | Diagnostic sold as hero | H1 is prize only: `Let AI do 30–50% of your daily tasks` / `Leisk DI atlikti 30–50% tavo kasdienių užduočių`. Never “what AI knows about your org” as H1/OG. | [.cursor/skills/hero-copy/SKILL.md](../.cursor/skills/hero-copy/SKILL.md) |
| 2026-08-14 | “Ritual” on the front page | Customer copy never says ritual. Lead = `8 exercises with ready-made templates – results in minutes.` IDs/UTM (`#ritual-complete`) may stay. | [.cursor/skills/hero-copy/SKILL.md](../.cursor/skills/hero-copy/SKILL.md) |
| 2026-06-14 | Library vs course confused | Library: `https://www.promptanatomy.info/` — not the course app | [AGENTS.md](../AGENTS.md) |
| 2026-06-14 | ET/LV/DE out of sync with EN | Edit EN → `npm run generate:et-lv`; do not hand-fix `et/index.html`, `lv/index.html`, or `de/index.html` for parity | [docs/MULTILINGUAL_STRUCTURE.md](../docs/MULTILINGUAL_STRUCTURE.md) |
| 2026-08-14 | `library.lt.js` hand-edited | LT JS is generated from `LT_JS_PAIRS` in [scripts/generate-et-lv-pages.cjs](../scripts/generate-et-lv-pages.cjs). Same for `library.{et,lv,de}.js`. DE chrome/JS pairs live in [scripts/de-pairs.cjs](../scripts/de-pairs.cjs), not inline in the generator. | [locale-sync](../.cursor/skills/locale-sync/SKILL.md) |
| 2026-08-14 | Locale register mix / calque | UI: LT Tu, ET Teie, LV Jūs, DE Sie, JA です/ます, ZH 你. Prompt META speaks to the model (`Sa oled` / `Tu esi` / `Du bist` / `你是`). Lead = EN meaning only; JA must not add “proceed along”. | [hero-copy](../.cursor/skills/hero-copy/SKILL.md) |
| 2026-08-15 | ZH codes | ZH is manual like JA (`zh/`, `js/library.zh.js`). `hreflang` / `html lang` = `zh-Hans`, not `zh`. Folder and `data-lang` stay `zh`. | [docs/MULTILINGUAL_STRUCTURE.md](../docs/MULTILINGUAL_STRUCTURE.md) |
| 2026-08-15 | Geo-302 from a locale URL | Never 302 away from `/{locale}/` (IP or Accept-Language). Root `/` vestibule is OK. Suggest-don't-force nudge only ([js/locale-nudge.js](../js/locale-nudge.js)). | [locale-switcher](../.cursor/skills/locale-switcher/SKILL.md), [GLOBAL_EPIC.md](../docs/GLOBAL_EPIC.md) §5 |
| 2026-08-15 | Pa11y G18 on `.locale-nudge-link` | Teal `--color-link` on `--color-surface-page` is 4.27:1. Use `--brand-teal-dark` on `--white` (same as privacy links). | [css/library.css](../css/library.css), [test-debug](../.cursor/skills/test-debug/SKILL.md) |
| 2026-08-14 | Footer-entity CI after wording | `.footer-entity` text is `FOOTER_ENTITY_COPY` per locale in [tests/structure.test.js](../tests/structure.test.js) | structure.test.js |
| 2026-06-14 | Footer contact CI fail | Kanon: `info@promptanatomy.app`, `1311 Park St`, Alameda CA 94501 | [tests/structure.test.js](../tests/structure.test.js) |
| 2026-08-16 | Ecosystem URL cemetery | Diagram is a static PNG — keep real `.ecosystem-links` hrefs (a11y + SEO + structure tests). Do not leave raw underlined hostnames; style as `.tag` chips (`--bg-subtle`, `--brand-teal-dark`, mono, no underline). Do not delete the list to “clean” the figure. | [css/library.css](../css/library.css), [docs/design_system.md](../docs/design_system.md) §2.7 |
| 2026-09-02 | Community CTA bare or ritual UTM | `.community-cta-secondary` → `COURSE_COMMUNITY_URL` (`utm_source=info`, `utm_medium=community`). Do not reuse `ritual_complete`. Badge stays bare `COURSE_URL_EN`. | [scripts/seo-constants.cjs](../scripts/seo-constants.cjs), structure.test.js |

## Patterns

Recurring themes: [audit-patterns.md](audit-patterns.md)
