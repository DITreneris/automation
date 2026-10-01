# Design System v2.0 – DI Promptų Biblioteka

**DS versija:** 2.0.2  
**Data:** 2026-10-01  
**Produkto versija:** 1.7.0  
**Šaltinis tiesos (SSOT):** [`css/tokens.css`](../css/tokens.css)  
**Komponentai:** [`css/library.css`](../css/library.css) (importuoja tokens), [`css/privacy.css`](../css/privacy.css)  
**Mašininis eksportas:** [`tokens/tokens.json`](../tokens/tokens.json) (DTCG 2025.10)

Kanoninis dizaino sistemos dokumentas. Biblioteka naudoja tą pačią brand šeimą kaip [Prompt Anatomy](https://www.promptanatomy.app/en): gold, dark navy, bibliotekos teal.

---

## 0. Meta

| Laukas | Reikšmė |
|--------|---------|
| DS versija | 2.0.2 (nepriklausoma nuo produkto SemVer) |
| Produkto versija | 1.7.0 |
| SSOT | `css/tokens.css` |
| Validacija | `npm run validate:tokens`, `npm run lint:design-tokens`, `npm run check:contrast` |
| A11y | pa11y WCAG2AA – [`scripts/pa11y-pages.cjs`](../scripts/pa11y-pages.cjs) |

---

## 1. Foundations

### 1.1 Brand spalvos

| Rolė | Token | Hex | Naudojimas |
|------|-------|-----|------------|
| Gold accent | `--accent-gold` | `#CFA73A` | Progresas, badge, dekoratyvūs rėmeliai |
| Gold hover | `--accent-gold-hover` | `#E8B93C` | Hover būsenos |
| Dark navy | `--accent-dark` | `#0B1320` | Hero, primary CTA, antraštės |
| Bibliotekos teal | `--brand-teal` | `#008579` | Nav chip (outline), community CTA (filled), footer nuorodos, kategorijos |

**WCAG:** Tekstas `--text` ant `--bg` ≥ 4.5:1. Ant `--accent-gold` – tamsus tekstas (`--text`). Ant `--accent-dark` ir `--brand-teal` – baltas (`--white`). Šviesus focus ringas – `--color-focus-ring` (`--accent-dark`), ne auksas. `--brand-teal` ant `--bg` yra žemiau 4.5:1; nuorodos ant puslapio fono naudoja `--brand-teal-dark`.

### 1.2 Semantic layer (intent)

Naudok komponentuose ir `privacy.css`:

| Semantic token | Remiasi | Paskirtis |
|----------------|---------|-----------|
| `--color-text-primary` | `--text` | Pagrindinis tekstas |
| `--color-text-secondary` | `--text-light` | Antrinis tekstas |
| `--color-surface-page` | `--bg` | Puslapio fonas |
| `--color-surface-subtle` | `--bg-subtle` | Hover fonai, subtle paviršiai |
| `--color-action-primary-bg` | `--accent-dark` | Primary mygtukai |
| `--color-action-primary-hover` | `--accent-dark-hover` | Primary hover |
| `--color-link` | `--brand-teal` | Nuorodos |
| `--color-link-hover` | `--brand-teal-hover` | Nuorodų hover |
| `--color-focus-ring` | `--accent-dark` | Focus ring šviesiuose paviršiuose |
| `--color-feedback-success` | `--green-hover` | Užpildas, ant kurio laikosi baltas tekstas (`.btn.success`) |
| `--color-feedback-error` | `--error` | Klaidos |
| `--color-border-default` | `--border` | Rėmeliai |
| `--color-text-on-dark` | `#F5F5F5` | Tekstas ant tamsaus fono (404) |
| `--color-print-border` | `#000000` | Spausdinimo rėmelis |

**Deprecations:** `--tertiary` → preferuok `--brand-teal` naujame kode. `--blue`, `--orange` ir `--purple` pašalinti (DS 2.0.2).

### 1.3 Primitives – neutralūs ir tekstas

| Token | Hex |
|-------|-----|
| `--bg` | `#F7F8FA` |
| `--bg-subtle` | `#F0F4F8` |
| `--white` | `#FFFFFF` |
| `--text` | `#1A202C` |
| `--text-light` | `#4A5568` |
| `--border` | `#CBD5E0` |
| `--color-print-border` | `#000000` |
| `--color-text-on-dark` | `#F5F5F5` |

### 1.4 Primitives – akcentai

| Token | Hex / reikšmė |
|-------|----------------|
| `--accent-gold` | `#CFA73A` |
| `--accent-gold-hover` | `#E8B93C` |
| `--accent-gold-dark` | `#B8932E` |
| `--accent-dark` | `#0B1320` |
| `--accent-dark-hover` | `#16202F` |
| `--brand-teal` | `#008579` |
| `--brand-teal-hover` | `#006960` |
| `--brand-teal-dark` | `#0a5c54` |
| `--tertiary` | `var(--brand-teal)` |
| `--tertiary-light` | `#CCFBF1` |

### 1.5 Hero ir CTA

| Token | Reikšmė |
|-------|---------|
| `--hero-gradient-start` | `#0B1320` |
| `--hero-gradient-mid` | `#16202F` |
| `--hero-gradient-end` | `#243044` |
| `--cta-bg` | `#16202F` |
| `--cta-text` | `#FFFFFF` |
| `--cta-hover` | `var(--accent-dark-hover)` |

### 1.6 Semantiniai (paletė)

| Token | Hex |
|-------|-----|
| `--blue-light` | `#E8ECF0` |
| `--orange-light` | `#FBF6EB` |
| `--green` | `#38A169` |
| `--green-hover` | `#2F855A` |
| `--error` | `#C53030` |

### 1.7 Elevation

| Token | Reikšmė |
|-------|---------|
| `--shadow-1` | `0 4px 20px rgba(11, 19, 32, 0.08)` |
| `--shadow-2` | `0 8px 30px rgba(11, 19, 32, 0.12)` |
| `--shadow-3` | `0 20px 40px rgba(11, 19, 32, 0.18)` |
| `--shadow-accent-ring` | `0 0 0 4px rgba(207, 167, 58, 0.15)` |
| `--shadow-cta` | `0 4px 14px rgba(11, 19, 32, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08)` |
| `--shadow-cta-hover` | `0 8px 28px rgba(11, 19, 32, 0.55), 0 0 20px rgba(255, 255, 255, 0.12)` |
| `--shadow-modal` | `0 20px 60px rgba(0, 0, 0, 0.3)` |
| `--shadow-focus-navy` | `0 0 0 4px rgba(11, 19, 32, 0.12)` |
| `--shadow-focus-navy-strong` | `0 0 0 4px rgba(11, 19, 32, 0.2)` |
| `--shadow-lift-navy` | `0 6px 20px rgba(11, 19, 32, 0.4)` |
| `--shadow-lift-navy-lg` | `0 8px 20px rgba(11, 19, 32, 0.4)` |
| `--shadow-btn` | `0 4px 12px rgba(11, 19, 32, 0.35)` |
| `--shadow-number` | `0 4px 12px rgba(207, 167, 58, 0.35)` |
| `--shadow-focus-green` | `0 0 0 4px rgba(56, 161, 105, 0.2)` |
| `--shadow-btn-success` | `0 4px 12px rgba(56, 161, 105, 0.3)` |
| `--shadow-toast` | `0 12px 40px rgba(0, 0, 0, 0.15)` |
| `--shadow-soft` | `0 6px 20px rgba(0, 0, 0, 0.06)` |
| `--shadow-raised` | `0 6px 16px rgba(0, 0, 0, 0.12)` |

### 1.8 Radius ir spacing

| Token | Reikšmė |
|-------|---------|
| `--radius-sm` | `6px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `16px` |
| `--radius-xl` | `20px` |
| `--space-0` | `4px` |
| `--space-1` | `8px` |
| `--space-1_5` | `12px` |
| `--space-2` … `--space-8` | `16px` … `48px` |

### 1.9 Tipografija

| Token / taisyklė | Reikšmė |
|------------------|---------|
| `--font-family-sans` | `'Inter', system-ui, -apple-system, sans-serif` |
| `--font-family-mono` | `'JetBrains Mono', monospace` |
| `--font-size-xs` | `0.75rem` (12) |
| `--font-size-sm` | `0.875rem` (14) |
| `--font-size-meta` | `0.9375rem` (15) |
| `--font-size-body-sm` | `1rem` (16) |
| `--font-size-body` | `1.125rem` (18) |
| `--font-size-button` | `1.0625rem` (17) |
| `--font-size-lead` | `1.25rem` (20) |
| `--font-size-h2` | `1.375rem` (22) |
| `--font-size-h2-lg` | `1.5rem` (24) |
| `--font-size-hero` | `clamp(1.75rem, 2vw + 1.5rem, 3.25rem)` |
| `--line-height-body` | `1.6` |
| H2 (sekcijos) | `--font-size-h2` / 800 |
| Meta / badge | `--font-size-meta` / `--font-size-sm` |

### 1.10 Focus, motion, overlays

| Token | Reikšmė |
|-------|---------|
| `--focus-ring-width` | `3px` |
| `--focus-ring-offset` | `2px` |
| `--focus-ring-color` | `var(--color-focus-ring)` |
| `--duration-fast` | `0.2s` |
| `--ease-default` | `ease` |
| `--overlay-hero` | `rgba(0, 0, 0, 0.1)` |
| `--overlay-modal` | `rgba(0, 0, 0, 0.6)` |
| `--surface-hero-badge` | `rgba(255, 255, 255, 0.25)` |
| `--surface-hero-badge-hover` | `rgba(255, 255, 255, 0.4)` |
| `--surface-navy-06` | `rgba(11, 19, 32, 0.06)` |
| `--surface-navy-08` | `rgba(11, 19, 32, 0.08)` |
| `--surface-navy-10` | `rgba(11, 19, 32, 0.1)` |
| `--surface-white-15` | `rgba(255, 255, 255, 0.15)` |
| `--on-dark-strong` | `rgba(255, 255, 255, 0.9)` |
| `--color-text-on-dark-muted` | `rgba(255, 255, 255, 0.85)` |

### 1.11 Responsive (breakpoints)

Media queries naudoja fiksuotas reikšmes (CSS `@media` negali naudoti `var()`):

| Token (dokumentacija) | Reikšmė | Naudojimas |
|-----------------------|---------|------------|
| `--breakpoint-lg` | `1024px` | Container, hero H1 |
| `--breakpoint-md` | `768px` | Body sm, prompt padding |
| `--breakpoint-sm` | `480px` | Mobile CTA full-width |
| `--breakpoint-xs` | `375px` | Mažiausias viewport |

---

## 2. Components

### 2.1 CTA matrica

| Variantas | CSS klasė | Spalva | Kada |
|-----------|-----------|--------|------|
| Primary action | `.cta-button`, `.btn` | `--accent-dark` | Hero „Use first prompt“, „Copy prompt“ |
| Hero secondary | `.header-brand a.badge` | Semi-transparent ant hero | Kursas → `COURSE_URL_EN` |
| Nav chip | `.next-steps-links a` | `--brand-teal` outline | Vidinė navigacija 1–8 |
| Community primary | `.community-cta-primary` | `--brand-teal` filled | „Join Telegram“ |
| Community secondary | `.community-cta-secondary` | Navy outline | Kursas → `COURSE_COMMUNITY_URL` (community) arba `COURSE_RITUAL_URL` (`#ritual-complete`) |
| Success | `.btn.success` | `--color-feedback-success` (`--green-hover`) | Po kopijavimo |

**Focus:** šviesūs paviršiai – `var(--focus-ring-width) solid var(--focus-ring-color)` (navy). Hero `.cta-button` ir badge – baltas ringas (`var(--white)`). Auksas lieka progresui ir dekoratyviems rėmeliams.

### 2.2 Component states

| Component | Default | Hover | Focus | Active/Success |
|-----------|---------|-------|-------|----------------|
| `.cta-button` | `--cta-bg` + `--shadow-cta` | `--cta-hover` + `--shadow-cta-hover` | white ring | – |
| `.btn` | `--accent-dark` | `--accent-dark-hover` | `--color-focus-ring` | `.success` → `--color-feedback-success` |
| `.community-cta-primary` | `--brand-teal` filled | `--brand-teal-hover` | navy ring | – |
| `.next-steps-links a` | `--brand-teal` outline | `--tertiary-light` bg, `--brand-teal-hover` border | navy ring | – |
| `.header-brand a.badge` | `--surface-hero-badge` | `--surface-hero-badge-hover` | white ring | – |

### 2.3 Hero (`.header`)

Tamsus gradientas (`--hero-gradient-*`), overlay `--overlay-hero`, badge (kursas), kalbų dropdown, vienas `.cta-button`.

### 2.4 Prompt kortelė (`.prompt`)

Seka: header → `code-block` → `.prompt-footer` (Copy + Mark as done) → `before-use` → `info-box`.

### 2.5 Jump to a step (`.next-steps`)

Balta kortelė, `border: 3px solid var(--tertiary)`, H2 teal, chip'ai outline `--brand-teal`. Tik šuolis į 1–8, ne finish.

### 2.5b Ritual complete (`.ritual-complete`)

Ta pati kortelė kaip `.next-steps`. Po prompto 8, prieš `.next-steps`. CTA – `.community-cta-secondary` → `COURSE_RITUAL_URL` (ne hero, ne entity footer).

### 2.6 Community (`.community`)

Gradient `--blue-light` → `--orange-light`; primary filled teal CTA; antrinis navy outline.

### 2.7 Ecosystem (`.ecosystem`)

Kaip `.next-steps`; WebP + PNG; `npm run generate:ecosystem`.

`.ecosystem-links` – tikri `href` po diagrama (paveikslas nepaspaudžiamas). Ne nuogas URL sąrašas: pill chip’ai kaip `.tag` (`--bg-subtle`, `--brand-teal-dark` ant `--white`, mono hostname, be underline).

### 2.8 Footer (`.footer`)

**Light card** (ne content module): `1px solid var(--border)`, `border-radius: var(--radius-lg)`, be `box-shadow`; padding `var(--space-6) var(--space-5)`.

| Elementas | Rolė |
|-----------|------|
| `h3` | Closing žinutė (22px) |
| `p` | Instrukcija (`max-width: 760px`) |
| `.tag` | Trust chip (ne CTA) – pill, `--bg-subtle` |
| `.footer-meta` | Contact + Privacy + kalbos dropdown vienoje eilutėje |
| `.footer-entity` | Entity + hub home (`HUB_ENTITY_URL`); ne CTA, ne `COURSE_URL_EN` |
| `.footer-meta-link`, `.footer-contact a`, `.footer-entity a` | `--color-link` (`--brand-teal`) |
| `.copyright` | Tik © tekstas, `border-top: 1px` |

### 2.9 Privacy puslapiai

`tokens.css` + `privacy.css`; jokio inline hex. Back mygtukas – `--color-action-primary-bg`; nuorodos – `--color-link`.

### 2.10 Toast, lang-switcher, info-box

Žr. [`css/library.css`](../css/library.css).

---

## 3. Patterns

### 3.1 LibraryPage

```
skip-link → header (badge + lang + 1 CTA) → progress → instructions →
prompts 1–8 → ritual-complete → next-steps → community → ecosystem → footer
```

- Vienas hero primary CTA („Use first prompt“)
- Kursas: badge → `COURSE_URL_EN`; community → `COURSE_COMMUNITY_URL`; earned handoff → `COURSE_RITUAL_URL`
- Entity footer → `HUB_ENTITY_URL` (ne kursas)
- Telegram tik `.community` sekcijoje
- Šis puslapis nėra Hub

### 3.2 PromptCard

```
summary/header → code-block → prompt-footer (copy + done) → before-use → info-box
```

- Copy prieš readiness
- Prompt 1 atidarytas; 2–8 collapsible (`<details>`)

### 3.3 CTAHierarchy

Primary navy (`.cta-button`, `.btn`) → hero badge → nav chips teal outline → community teal filled → course secondary outline (community + ritual-complete).

---

## 4. Governance

### 4.1 Keitimo protokolas

| Pakeitimas | Atnaujinti |
|------------|------------|
| Naujas / pakeistas tokenas | `css/tokens.css`, šis dokumentas, `.cursor/rules/design-tokens.mdc`, `tokens/tokens.json`, `CHANGELOG.md` `[UI]` |
| Komponento stilius | `css/library.css` arba `css/privacy.css` + §2 čia |
| Matomas UI visose kalbose | 5× `*/index.html` arba `npm run generate:et-lv` jei keičiamas EN |
| Release | `CHANGELOG.md` `[Unreleased]` |

### 4.2 Deprecation

- Pažymėk `/* @deprecated use --X */` `tokens.css`
- Pašalink po vieno release ciklo
- `--tertiary` → `--brand-teal` (alias lieka)
- `--blue`, `--orange`, `--purple` pašalinti DS 2.0.2

### 4.3 Taisyklės

- Naujos spalvos tik per `tokens.css` – jokių magic numbers komponentuose
- Privacy puslapiai: `tokens.css` + `privacy.css`, be inline `<style>` su hex
- Po spalvų keitimo: `npm test` (įsk. pa11y)

### 4.4 Prieinamumas (a11y)

- Interaktyvūs elementai: min-height 44px kur įmanoma
- `focus-visible`: `var(--focus-ring-width)` outline
- `prefers-reduced-motion: reduce`: animacijos sumažintos

---

## 5. DS Changelog

| Versija | Data | Pakeitimai |
|---------|------|------------|
| DS 2.0.2 | 2026-10-01 | Šviesus focus ringas = navy; `.btn.success` = `--green-hover`; `--error` `#C53030`; pašalinti `--blue` / `--orange` / `--purple`; šešėliai iš `library.css` perkelti į tokenus; `check-contrast` |
| DS 2.0.1 | 2026-08-14 | Spacing `0`/`1`/`1_5`; type scale `rem` + fluid hero `clamp`; H1/lead/CTA/H2 ant tokenų |
| DS 2.0 | 2026-05-29 | `tokens.css` SSOT; `privacy.css`; semantic layer; governance; patterns; DTCG export; CI validation |
| DS 1.0 | 2026-05-29 | Pradinis dokumentas; `--brand-teal`; STYLEGUIDE perkeltas čia |

---

**Paskutinis atnaujinimas:** 2026-10-01
