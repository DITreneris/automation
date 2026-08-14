# Audit patterns

Recurring themes from repo audits and CI — operational, not historical.

## Locale drift

- **Cause:** EN changed without `npm run generate:et-lv` or without LT/JA manual sync
- **Fix:** [locale-sync skill](../.cursor/skills/locale-sync/SKILL.md)
- **Gate:** CI `git diff --exit-code` on generated files

## Agent wrong-file edits

- **Cause:** Five `library.*.js` copies; agents patch `library.lt.js` or `et/index.html` when those files are generated
- **Fix:** EN HTML/JS first; LT HTML manual; LT/ET/LV JS and ET/LV index only via pair tables + `npm run generate:et-lv` — [locale-sync](../.cursor/skills/locale-sync/SKILL.md)

## Context duplication

- **Cause:** Same rules in AGENTS, `.cursorrules`, and multiple `.mdc` files
- **Fix:** AGENTS.md = operational SSOT; scoped rules only for globs

## Structure test brittleness

- **Cause:** Large [tests/structure.test.js](../tests/structure.test.js) encodes DOM/copy details
- **Fix:** Update product HTML first; change asserts only for intentional UI changes

## Hero copy: diagnostic or ritual as sale

- **Cause:** Identity/north-star work puts prompt-1 job, “org ritual”, or “Use spoke” on the front page
- **Fix:** [hero-copy skill](../.cursor/skills/hero-copy/SKILL.md) — prize on H1, 8 exercises on the lead; never “ritual” in visible copy
- **Gate:** Do not ship H1/OG/lead that is not the canonical prize + exercises lines unless the user wrote new copy

## Pair-key break after EN reword

- **Cause:** Generator `from` is an exact EN substring; rephrasing EN without updating pairs throws `Missing substring`
- **Fix:** Same commit: new EN text + matching `from` in `ET_PAIRS` / `LV_PAIRS` / JS pairs
- **Gate:** `npm run generate:et-lv` then `git diff --exit-code` on generated files

## Locale register / calque

- **Cause:** Formal Teie/Jūs applied to prompt META, or JA/ET lead padded beyond EN meaning
- **Fix:** Visitor register on UI only; model `you` in META; canonical leads in [hero-copy](../.cursor/skills/hero-copy/SKILL.md)

## Local preview failures

- **Cause:** `serve -s` single-page mode
- **Fix:** `npx serve . -l 3000` without `-s`
