# Contributing

Thank you for helping improve the Prompt Anatomy prompt library.

## Quick start

```bash
git clone https://github.com/DITreneris/automation.git
cd automation
npm install
npm test
```

Local preview (required for locale paths):

```bash
npx serve . -l 3000
```

Open http://localhost:3000/en/ — **do not** use `serve -s` (SPA mode breaks `/lt/`, `/et/`, etc.).

Production site: https://www.promptanatomy.info/

## Project model

- **Zero-build static site:** HTML + CSS + vanilla JavaScript. No React, Vite, or bundlers.
- **Five locales:** `lt`, `en`, `et`, `lv`, `ja`.
- **English is canonical** for structure and shared JS: `en/index.html`, `en/privacy.html`, `js/library.js`.

## Multilingual workflow

| Locale | How to update |
|--------|----------------|
| EN | Edit `en/` and `js/library.js` directly |
| ET, LV | Run `npm run generate:et-lv` after EN changes; commit generated files |
| LT | Manual HTML: `lt/index.html`, `lt/privatumas.html`. JS: `LT_JS_PAIRS` then `generate:et-lv` (do not hand-edit `js/library.lt.js`) |
| JA | Manual: `ja/index.html`, `js/library.ja.js`, `ja/privacy.html` |

After changing EN source (`en/index.html`, `en/privacy.html`, or `js/library.js`):

```bash
npm run generate:et-lv
git diff --exit-code -- et/index.html lv/index.html js/library.et.js js/library.lv.js js/library.lt.js
```

CI fails if generated files are out of sync.

Details: [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md).

## Commit message prefixes

Use one prefix from [AGENTS.md](AGENTS.md):

`[Content]` `[Curriculum]` `[UI]` `[QA]` `[Orchestrator]`

## Pull requests

1. Fill out [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md).
2. Run `npm test` before opening the PR.
3. Update [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md) if you change merge gates or doc structure.
4. For releases, update [CHANGELOG.md](CHANGELOG.md) and `package.json` version (SemVer).

Repo skills (Cursor): `.cursor/skills/` — `locale-sync`, `release-changelog`, `design-token-guard`, `test-debug`.

## Agent contributors

Operational rules: [AGENTS.md](AGENTS.md). Design summary for tools: [llms.txt](llms.txt).

## Reproduce CI locally

GitHub Actions job `lint-and-test` in [.github/workflows/ci.yml](.github/workflows/ci.yml) runs:

```bash
npm ci
npm run generate:et-lv
git diff --exit-code -- et/index.html lv/index.html js/library.et.js js/library.lv.js js/library.lt.js
npm test
npx serve . -l 3000 &
npx wait-on -t 60000 http://127.0.0.1:3000/
PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs
```

On Windows PowerShell, start `serve` in a separate terminal instead of `&`.

`npm test` includes: structure tests, token validation, design-token lint, HTML validate (11 files), ESLint.

## Branch protection and releases

On `main`: require PR, status check `lint-and-test`, no force push (configure in GitHub Settings).

Release: bump `package.json` version, move [CHANGELOG.md](CHANGELOG.md) `[Unreleased]` to `## [X.Y.Z]`, tag `vX.Y.Z`, GitHub Release notes from CHANGELOG.

## License

By contributing, you agree that your contributions are licensed under [CC BY 4.0](LICENSE).
