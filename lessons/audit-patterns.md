# Audit patterns

Recurring themes from repo audits and CI — operational, not historical.

## Locale drift

- **Cause:** EN changed without `npm run generate:et-lv` or without LT/JA manual sync
- **Fix:** [locale-sync skill](../.cursor/skills/locale-sync/SKILL.md)
- **Gate:** CI `git diff --exit-code` on generated files

## Agent wrong-file edits

- **Cause:** Five `library.*.js` copies; agents patch LT when EN is canonical
- **Fix:** Edit `en/index.html` / `js/library.js` first — see [AGENTS.md](../AGENTS.md) file map

## Context duplication

- **Cause:** Same rules in AGENTS, `.cursorrules`, and multiple `.mdc` files
- **Fix:** AGENTS.md = operational SSOT; scoped rules only for globs

## Structure test brittleness

- **Cause:** Large [tests/structure.test.js](../tests/structure.test.js) encodes DOM/copy details
- **Fix:** Update product HTML first; change asserts only for intentional UI changes

## Local preview failures

- **Cause:** `serve -s` single-page mode
- **Fix:** `npx serve . -l 3000` without `-s`
