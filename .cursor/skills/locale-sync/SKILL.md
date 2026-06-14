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

4. **Manual LT:** update `lt/index.html`, `js/library.lt.js`, `lt/privatumas.html` if the change applies.
5. **Manual JA:** update `ja/index.html`, `js/library.ja.js`, `ja/privacy.html` if the change applies.
6. If new URLs or hreflang: check `sitemap.xml` and [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md).
7. Run `npm test`.

## May inspect

`en/`, `js/library.js`, `scripts/generate-et-lv-pages.cjs`, `docs/MULTILINGUAL_STRUCTURE.md`

## May edit

`lt/`, `ja/`, outputs after `npm run generate:et-lv`

## Do not

- Hand-edit `et/index.html` or `lv/index.html` for EN parity fixes
- Commit without passing generator diff check

## Output format

- List of files changed per locale
- Commands run and test result
