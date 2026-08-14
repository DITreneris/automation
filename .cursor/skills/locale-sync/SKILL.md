---
name: locale-sync
description: Sync ET/LV/LT from EN after en/index.html, en/privacy.html, or js/library.js changes. Run generate:et-lv and manual LT/JA checklist.
---

# Locale sync

## When to use

- You changed `en/index.html`, `en/privacy.html`, or `js/library.js`
- CI failed on generator diff step
- User asks to sync locales or fix ET/LV drift

## Steps

1. Confirm which EN files changed.
2. Run generator:

```bash
npm run generate:et-lv
```

3. Verify no uncommitted drift in generated files:

```bash
git diff --exit-code -- et/index.html lv/index.html js/library.et.js js/library.lv.js js/library.lt.js
```

4. **Manual LT HTML:** update `lt/index.html` and `lt/privatumas.html` if the change applies.
5. **LT JS:** edit `LT_JS_PAIRS` in [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs), then re-run the generator. **Do not** hand-edit `js/library.lt.js` — CI overwrites it.
6. **ET/LV wording-only:** change pair `to` values (`ET_PAIRS` / `LV_PAIRS` / `ET_JS_PAIRS` / `LV_JS_PAIRS`) and/or [scripts/prompt-bodies-et-lv.cjs](scripts/prompt-bodies-et-lv.cjs). Privacy: `et/privacy.html`, `lv/privacy.html` (not generated).
7. **EN reword:** update matching pair `from` keys in the same commit, or `generate:et-lv` throws `Missing substring`.
8. **Manual JA:** update `ja/index.html`, `js/library.ja.js`, `ja/privacy.html`. If prompt bodies change, sync [scripts/prompt-bodies-ja.cjs](scripts/prompt-bodies-ja.cjs) (reference corpus only).
9. If new URLs or hreflang: check `sitemap.xml` and [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md).
10. Footer-entity visible text is asserted per locale (`FOOTER_ENTITY_COPY` in [tests/structure.test.js](tests/structure.test.js)) — update the assert when the product line changes.
11. Run `npm test`.

## Register (visitor vs model)

- UI: LT **Tu**; ET **Teie**; LV **Jūs**; JA です/ます.
- Prompt `META` / `INPUT` address the **model** (`You are` / `Tu esi` / `Sa oled` / `あなたは`) — do not “fix” those to formal Teie/Jūs.
- Lead meaning must match EN; do not add extra how-to. Canonical lines: [hero-copy](../hero-copy/SKILL.md).

## May inspect

`en/`, `js/library.js`, `scripts/generate-et-lv-pages.cjs`, `scripts/prompt-bodies-et-lv.cjs`, `docs/MULTILINGUAL_STRUCTURE.md`

## May edit

`lt/index.html`, `lt/privatumas.html`, `ja/`, pair tables + prompt-body modules, privacy ET/LV, outputs after `npm run generate:et-lv`

## Do not

- Hand-edit `et/index.html`, `lv/index.html`, `js/library.et.js`, `js/library.lv.js`, or `js/library.lt.js`
- Change EN pair-keyed strings without updating `from`
- Commit without passing generator diff check

## Output format

- List of files changed per locale
- Commands run and test result
