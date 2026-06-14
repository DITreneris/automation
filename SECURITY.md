# Security Policy

## Scope

This project is a **static multilingual website** (HTML, CSS, vanilla JavaScript).
Production: https://www.promptanatomy.info/

- **No user data collection** in the current release (no contact form, no server-side storage).
- **localStorage** is used only on the client for prompt progress (`di_prompt_done_*`).
- **Vercel Web Analytics** is included via `/_vercel/insights/script.js` on library and privacy pages.

## Reporting a vulnerability

**Do not** open a public GitHub issue for undisclosed security problems.

Email: **info@promptanatomy.app**

Include: description, steps to reproduce, affected URL/locale, and impact assessment.

We will acknowledge reports within a reasonable timeframe. There is no bug bounty program.

## Secrets and repository hygiene

- Never commit API keys, passwords, `.env` files, or real Google Apps Script deployment URLs.
- Sensitive configuration belongs in `.env` (already in `.gitignore`).
- Contact form and Google Sheets integrations are **disabled**; see [docs/archive/integrations/](docs/archive/integrations/) before enabling.

## Supported versions

Security fixes apply to the latest release on the `main` branch deployed to production.
