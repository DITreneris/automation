---
name: test-debug
description: Fix failing npm test or pa11y CI. Read structure.test.js asserts and pa11y-pages.cjs.
---

# Test debug

## When to use

- `npm test` fails locally or in CI
- Pa11y accessibility step fails
- Structure assert reports missing DOM/copy

## Steps

1. Re-run the failing command alone:

```bash
node tests/structure.test.js
npm run lint:html
npm run lint:js
npm run validate:tokens
npm run lint:design-tokens
```

2. For pa11y (CI parity):

```bash
npx serve . -l 3000
npx wait-on -t 60000 http://127.0.0.1:3000/
PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs
```

CI injects the locale nudge (browser language often `en` on `/lt/`). `.locale-nudge-link` must be `--brand-teal-dark` on `--white`. `--color-link` (`#008579`) on `--color-surface-page` is 4.27:1 and fails WCAG2AA G18.

3. Read the failing assert in [tests/structure.test.js](tests/structure.test.js) — fix **product** HTML/JS first.
4. Update tests only when the product change is intentional.
5. For generator CI failure:

```bash
npm run generate:et-lv
git diff -- et/index.html lv/index.html de/index.html js/library.et.js js/library.lv.js js/library.de.js js/library.lt.js
```

6. Re-run `npm test`.

## May inspect

`tests/structure.test.js`, `*/index.html`, [js/locale-nudge.js](js/locale-nudge.js), [css/library.css](css/library.css) (`.locale-nudge`), `scripts/pa11y-pages.cjs`, `scripts/pa11y.config.cjs`

## May edit

Locale HTML/JS when fixing real bugs; tests when product intentionally changed

## Do not

- Remove or weaken asserts without an intentional product change
- Skip generator step when EN source was edited

## Output format

- Root cause (one line)
- Fix applied
- Final `npm test` result
