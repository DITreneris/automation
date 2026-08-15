---
name: locale-sync
description: Sync ET/LV/DE/LT from EN after en/index.html, en/privacy.html, or js/library.js changes. Run generate:et-lv and manual LT/JA/ZH checklist. New locale = MULTILINGUAL §7 playbook + one release, not a language ceiling.
---

# Locale sync

## When to use

- You changed `en/index.html`, `en/privacy.html`, or `js/library.js` (including switcher, JSON-LD, ecosystem HTML)
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
git diff --exit-code -- et/index.html lv/index.html de/index.html js/library.et.js js/library.lv.js js/library.de.js js/library.lt.js
```

4. **Manual LT HTML:** update `lt/index.html` and `lt/privatumas.html` if the change applies.
5. **LT JS:** edit `LT_JS_PAIRS` in [scripts/generate-et-lv-pages.cjs](scripts/generate-et-lv-pages.cjs), then re-run the generator. **Do not** hand-edit `js/library.lt.js` — CI overwrites it.
6. **ET/LV/DE wording-only:** change pair `to` values (`ET_PAIRS` / `LV_PAIRS` / `DE_PAIRS` in [scripts/de-pairs.cjs](scripts/de-pairs.cjs) / JS pairs) and/or [scripts/prompt-bodies-et-lv.cjs](scripts/prompt-bodies-et-lv.cjs) / [scripts/prompt-bodies-de.cjs](scripts/prompt-bodies-de.cjs). Privacy: `et/privacy.html`, `lv/privacy.html`, `de/privacy.html` (not generated).
7. **EN reword:** update matching pair `from` keys in the same commit, or `generate:et-lv` throws `Missing substring`.
8. **Manual JA:** update `ja/index.html`, `js/library.ja.js`, `ja/privacy.html`. If prompt bodies change, sync [scripts/prompt-bodies-ja.cjs](scripts/prompt-bodies-ja.cjs) (reference corpus only).
9. **Manual ZH:** update `zh/index.html`, `js/library.zh.js`, `zh/privacy.html`. If prompt bodies change, sync [scripts/prompt-bodies-zh.cjs](scripts/prompt-bodies-zh.cjs) (reference corpus only). `hreflang` value is `zh-Hans`, not `zh`.
10. If new URLs or hreflang: check `sitemap.xml` and [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md) §7 (N+1 playbook). Adding a language is a wave, not a sixth-locale ceiling — [GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md) §4, [MVP_ROADMAP.md](docs/MVP_ROADMAP.md).
11. Footer-entity visible text is asserted per locale (`FOOTER_ENTITY_COPY` in [tests/structure.test.js](tests/structure.test.js)) — update the assert when the product line changes.
12. **Switcher NAV templates:** `ET_NAV` / `ET_FOOTER_NAV` / `LV_NAV` / `LV_FOOTER_NAV` in the generator; `DE_NAV` / `DE_FOOTER_NAV` in [scripts/de-pairs.cjs](scripts/de-pairs.cjs) — Lucide `languages`, `lang` + `hreflang` on options (ZH: `zh-Hans`).
13. **JSON-LD HowTo / ItemList:** extend `jsonLdLibrary()` in [scripts/seo-constants.cjs](scripts/seo-constants.cjs); add ET/LV pairs for step `"name":"…"` and `en/#block` or ET/LV keep English names. `locale-nudge.js` is shared — do not generate per locale.
14. Hero H1 / lead / OG are locked in `HERO_LOCK` ([tests/structure.test.js](tests/structure.test.js)) — do not change without a new prize line.
15. Run `npm test`.

## Register (visitor vs model)

- UI: LT **Tu**; ET **Teie**; LV **Jūs**; DE **Sie**; JA です/ます; ZH **你**.
- Prompt `META` / `INPUT` address the **model** (`You are` / `Tu esi` / `Sa oled` / `Du bist` / `あなたは` / `你是`) — do not “fix” those to formal Teie/Jūs/Sie/您. ZH META `你是一名…` is correct Chinese (do not strip 一名). Before-use labels: `什么时候用` / `先替换` / `操作`.
- Lead meaning must match EN; do not add extra how-to. Canonical lines: [hero-copy](../hero-copy/SKILL.md).

## May inspect

`en/`, `js/library.js`, `js/locale-nudge.js` (shared, not generated), `scripts/generate-et-lv-pages.cjs`, `scripts/seo-constants.cjs`, `scripts/prompt-bodies-et-lv.cjs`, `scripts/prompt-bodies-zh.cjs`, `docs/MULTILINGUAL_STRUCTURE.md`, `docs/GLOBAL_EPIC.md`

## May edit

`lt/index.html`, `lt/privatumas.html`, `ja/`, `zh/`, pair tables + prompt-body modules, privacy ET/LV, outputs after `npm run generate:et-lv`

## Do not

- Hand-edit `et/index.html`, `lv/index.html`, `de/index.html`, `js/library.et.js`, `js/library.lv.js`, `js/library.de.js`, or `js/library.lt.js`
- Change EN pair-keyed strings without updating `from`
- Commit without passing generator diff check

## Output format

- List of files changed per locale
- Commands run and test result
