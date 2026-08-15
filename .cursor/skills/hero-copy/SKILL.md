---
name: hero-copy
description: >-
  Library hero H1, OG title, sales lead, and front-page identity copy.
  Use before proposing or editing H1, lead, objectives, finish block, or OG.
---

# Hero copy (prize vs diagnostic)

## When to use

- Changing `<h1>`, `<title>`, `og:title`, `twitter:title`, JSON-LD `name`, or the hero lead
- Objectives H2, finish-block H2, ecosystem lead on `*/index.html`
- Anyone suggests replacing the 30–50% prize line or putting “ritual” on the page

Read this **before** drafting. Do not invent a cleverer H1 or lead.

## Rule

**H1 = prize only.** What they get in their week.

**Lead = how.** 8 exercises with templates. Not a ritual.

Identity (not Hub, 8 prompts) never steals the H1. Consultant words never appear in customer-facing copy.

## Canonical (do not “improve”)

| Locale | H1 | Lead |
|--------|-----|------|
| EN | Let AI do 30–50% of your daily tasks | 8 exercises with ready-made templates – results in minutes. |
| LT | Leisk DI atlikti 30–50% tavo kasdienių užduočių | 8 pratimai su paruoštais šablonais – rezultatai per kelias minutes. |
| ET | Laske tehisintellektil teha 30–50% teie igapäevastest ülesannetest | 8 harjutust valmis mallidega – tulemused minutitega. |
| LV | Ļaujiet MI veikt 30–50% no jūsu ikdienas uzdevumiem | 8 vingrinājumi ar gatavām veidnēm – rezultāti dažu minūšu laikā. |
| DE | Lassen Sie KI 30–50% Ihrer täglichen Aufgaben erledigen | 8 Übungen mit fertigen Vorlagen – Ergebnisse in Minuten. |
| JA | AIに日々の作業の30〜50%を任せる | 定型テンプレート付きの演習8本。数分で結果が出ます。 |
| ZH | 让 AI 完成你日常工作的 30%–50% | 8 个带现成模板的练习，几分钟就能出结果。 |

Title / OG / JSON-LD `name` (WebPage + HowTo) = H1 + brand suffix. Description = lead. Same meaning in all locales — do not lengthen JA/ET/LV/DE/ZH. Locked in `HERO_LOCK` ([tests/structure.test.js](tests/structure.test.js)).

Objectives H2: **What you get** / **Ką gausi**. Finish H2: **You finished the 8 prompts** / **Tu baigei 8 promptus**.

## Banned on the front page (visible text)

Do not propose, restore, or “A/B” these as H1, lead, OG, objectives, finish title, or ecosystem lead:

- Know what AI knows about your org / Sužinok, ką DI žino apie tavo organizaciją
- Any prompt-1 diagnostic as the sale
- **ritual / rituaal / rituāls / 儀式 / 仪式** — in any customer-facing sentence
- “Org ritual”, “8-step ritual”, “Use spoke”, “operating layer”
- Get 30–50% of your week back / Susigrąžink 30–50% savo savaitės (pathos)
- Compound H1: prize + mechanism in one line

`#ritual-complete`, `.ritual-complete`, and `utm_medium=ritual_complete` are **internal**. They may stay. The human must not read the word.

Prompt 1 may keep its diagnostic as **its own title**. Not the page hero.

## Why the ban exists

A 2026-08-14 identity pass put prompt 1 on the H1 and “ritual” on the lead, objectives, finish, and ecosystem. That is not a sale. Managers buy less work and a daily prompt kit — not a fact about the model and not a consultant word. Prize stays on the H1 even if `.app` uses a similar line.

## Do not

- Trade punch for internal vocabulary
- Offer three “better” H1s when the canonical line already sells
- Put ritual / spoke / operating layer anywhere a visitor can read

## May edit

`en/index.html` first; then locale-sync. `scripts/seo-constants.cjs` `OG_LIBRARY_TITLE` / `OG_LIBRARY_DESCRIPTION`. If the prize line changes, update `HERO_LOCK` in [tests/structure.test.js](tests/structure.test.js).

## Output

Keep the canonical H1 and lead unless the user **explicitly** writes a new prize or how line. Do not substitute a diagnostic or a ritual.
