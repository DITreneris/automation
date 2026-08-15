---
name: locale-switcher
description: >-
  Language switcher, root vestibule, and locale nudge. Use before editing
  lang-switcher markup/JS, index.html root redirect, or a “wrong locale” banner.
---

# Locale switcher (suggest-don't-force)

## When to use

- Editing `.lang-switcher`, [js/lang-switcher.js](js/lang-switcher.js), or root [index.html](index.html)
- Adding a nudge when `navigator.language` ≠ current locale
- Anyone proposes flags, IP geo-redirect, or auto-302 from `/{locale}/`

Read [docs/GLOBAL_EPIC.md](docs/GLOBAL_EPIC.md) §5 before drafting. Playbook: [docs/MULTILINGUAL_STRUCTURE.md](docs/MULTILINGUAL_STRUCTURE.md).

## Rule

**URL is the contract.** `/{locale}/` always serves that language. Never 302 away (IP or `Accept-Language`).

Root `/` is a `noindex` vestibule: `localStorage` → `navigator.language` → EN. That is not an inter-locale redirect.

**Suggest, don't force.** If there is no stored `lang` and the browser language matches another shipped locale, show a dismissible endonym banner. Do not persist a guess.

## Switcher UI

- Trigger: Lucide `languages` + current **endonym** + chevron. Not globe-only. Not flags.
- Options: native names (Lietuvių, English, Eesti, Latviešu, 日本語, 简体中文).
- Each `<a>`: real `href`, `lang`, `hreflang` (ZH: `zh-Hans`). Full page load.
- `localStorage.setItem('lang', …)` only after an explicit click.
- Flat list until ~10 locales. Visible footer list from 8+. Search only from ~15.

## Nudge

- Show when: no `localStorage.lang`, `navigator.language` maps to another locale, user is not on it.
- Label = endonym CTA (`日本語で見る`), not “View in Japanese”.
- Click → store `lang` + go. Dismiss → remember dismiss only.
- IP country hint only if language is ambiguous; never for `CH` / `BE` / `CA` / `SG`.
- Do not change indexed HTML for bots.

## Do not

- Flags, country+currency pickers, i18n frameworks
- Cookie that changes language on the same URL
- Auto-redirect `/en/` → `/de/`
- Search in the switcher this cycle

## May edit

`*/index.html` switcher markup, [js/lang-switcher.js](js/lang-switcher.js), [css/library.css](css/library.css) switcher/nudge rules, root [index.html](index.html). After EN switcher changes: [locale-sync](../locale-sync/SKILL.md).

## Output

List locales touched, confirm no 302 from locale URLs, run `npm test`.
