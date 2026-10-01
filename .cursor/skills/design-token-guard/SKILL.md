---
name: design-token-guard
description: Validate Design System v2.0 tokens before CSS/UI PRs. Run validate:tokens, lint:design-tokens, and check:contrast.
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
npm run check:contrast
```

`npm test` already runs all three.

3. If tokens changed, sync [docs/design_system.md](docs/design_system.md) and [tokens/tokens.json](tokens/tokens.json).
4. If visible UI changed, run full `npm test`.
5. Text links on light surfaces (nudge, privacy): `--brand-teal-dark` on `--white`. `--color-link` on `--color-surface-page` fails pa11y (4.27:1).
6. For color/contrast changes, consider pa11y locally:

```bash
npx serve . -l 3000
PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs
```

## Decisions the gate enforces

- Light-surface focus ring is `--color-focus-ring` (`--accent-dark`). Hero `.cta-button`, badge, and language trigger stay `var(--white)`.
- Gold (`#CFA73A`) is progress, badge, and decorative frames. On white it is 2.27:1. Do not describe it as the focus ring in `tokens.json`.
- Copied button fill is `--color-feedback-success` (`--green-hover`, white text 4.54:1). Do not lighten `--green-hover`. Do not put button labels on `--green` (3.25:1).
- Keep `.btn.success:hover` even though the fill matches the resting state. It beats `@media (hover: hover) .btn:hover`, which would paint the copied button navy.
- `--font-family-sans` includes `system-ui` so `404.html` (no Inter stylesheet) falls back to Segoe UI on Windows.

## May inspect

`css/tokens.css`, `tokens/tokens.json`, `docs/design_system.md`, `css/library.css`, `css/privacy.css`

## May edit

`css/`, `tokens/`, `docs/design_system.md` when tokens change

## Do not

- Add magic hex in components (hex only in `tokens.css`)
- Use deprecated `--community-cta-green` (use `--brand-teal`)
- Restore gold as a light-surface focus outline
- Delete `.btn.success:hover`
- Recolor `.toast-icon` off `--green` (decorative, `aria-hidden`)

## Output format

- Validation command results (OK or errors)
- Files updated
