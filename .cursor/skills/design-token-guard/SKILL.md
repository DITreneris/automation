---
name: design-token-guard
description: Validate Design System v2.0 tokens before CSS/UI PRs. Run validate:tokens and lint:design-tokens.
---

# Design token guard

## When to use

- Editing `css/`, colors, shadows, spacing, or `tokens/tokens.json`
- UI PR before merge

## Steps

1. Confirm changes use [css/tokens.css](css/tokens.css) semantic tokens — no inline hex on privacy pages.
2. Run validation:

```bash
npm run validate:tokens
npm run lint:design-tokens
```

3. If tokens changed, sync [docs/design_system.md](docs/design_system.md).
4. If visible UI changed, run full `npm test` (includes HTML lint + pa11y in CI).
5. Text links on light surfaces (nudge, privacy): `--brand-teal-dark` on `--white`. `--color-link` on `--color-surface-page` fails pa11y (4.27:1).
6. For color/contrast changes, consider pa11y locally:

```bash
npx serve . -l 3000
PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs
```

## May inspect

`css/tokens.css`, `tokens/tokens.json`, `docs/design_system.md`, `css/library.css`, `css/privacy.css`

## May edit

`css/`, `tokens/`, `docs/design_system.md` when tokens change

## Do not

- Add magic hex in components (hex only in `tokens.css`)
- Use deprecated `--community-cta-green` (use `--brand-teal`)

## Output format

- Validation command results (OK or errors)
- Files updated
