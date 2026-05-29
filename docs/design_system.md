# Design System v2.0 – DI Promptų Biblioteka (Spin-off)

**DS versija:** 2.0.0  
**Data:** 2026-05-29  
**Produkto versija:** 1.3.0  
**Šaltinis tiesos (SSOT):** [`css/tokens.css`](../css/tokens.css)  
**Komponentai:** [`css/library.css`](../css/library.css) (importuoja tokens), [`css/privacy.css`](../css/privacy.css)  
**Mašininis eksportas:** [`tokens/tokens.json`](../tokens/tokens.json) (DTCG 2025.10)

Kanoninis dizaino sistemos dokumentas. Spin-off biblioteka naudoja tą pačią brand šeimą kaip [Prompt Anatomy](https://www.promptanatomy.info/en): gold, dark navy, bibliotekos teal.

---

## 0. Meta

| Laukas | Reikšmė |
|--------|---------|
| DS versija | 2.0.0 (nepriklausoma nuo produkto SemVer) |
| Produkto versija | 1.3.0 |
| SSOT | `css/tokens.css` |
| Validacija | `npm run validate:tokens`, `npm run lint:design-tokens` |
| A11y | pa11y WCAG2AA – [`scripts/pa11y-pages.cjs`](../scripts/pa11y-pages.cjs) |

---

## 1. Foundations

### 1.1 Brand spalvos

| Rolė | Token | Hex | Naudojimas |
|------|-------|-----|------------|
| Gold accent | `--accent-gold` | `#CFA73A` | Progresas, badge, focus ring |
| Gold hover | `--accent-gold-hover` | `#E8B93C` | Hover būsenos |
| Dark navy | `--accent-dark` | `#0B1320` | Hero, primary CTA, antraštės |
| Bibliotekos teal | `--brand-teal` | `#008579` | Nav chip, footer nuorodos, kategorijos |
| Community green | `--community-cta-green` | `#0E7A33` | „Join Telegram“ |

**WCAG:** Tekstas `--text` ant `--bg` ≥ 4.5:1. Ant `--accent-gold` – tamsus tekstas (`--text`). Ant `--accent-dark` ir `--brand-teal` – baltas (`--white`).

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
| `--color-focus-ring` | `--accent-gold` | Focus ring |
| `--color-feedback-success` | `--green` | Sėkmė (toast, .btn.success) |
| `--color-feedback-error` | `--error` | Klaidos |
| `--color-border-default` | `--border` | Rėmeliai |

**Deprecations:** `--blue` → naudok `--accent-dark`; `--tertiary` → preferuok `--brand-teal` naujame kode.

### 1.3 Primitives – neutralūs ir tekstas

| Token | Hex |
|-------|-----|
| `--bg` | `#F7F8FA` |
| `--bg-subtle` | `#F0F4F8` |
| `--white` | `#FFFFFF` |
| `--text` | `#1A202C` |
| `--text-light` | `#4A5568` |
| `--border` | `#CBD5E0` |

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
| `--blue` | `#0B1320` |
| `--blue-light` | `#E8ECF0` |
| `--orange` | `#B8932E` |
| `--orange-light` | `#FBF6EB` |
| `--green` | `#38A169` |
| `--green-hover` | `#2F855A` |
| `--purple` | `#6B5B95` |
| `--error` | `#E53E3E` |
| `--community-cta-green` | `#0E7A33` |
| `--community-cta-green-hover` | `#0B6B2D` |

### 1.7 Elevation

| Token | Reikšmė |
|-------|---------|
| `--shadow-1` | `0 4px 20px rgba(11, 19, 32, 0.08)` |
| `--shadow-2` | `0 8px 30px rgba(11, 19, 32, 0.12)` |
| `--shadow-3` | `0 20px 40px rgba(11, 19, 32, 0.18)` |
| `--shadow-accent-ring` | `0 0 0 4px rgba(207, 167, 58, 0.15)` |
| `--shadow-cta` | `0 4px 14px rgba(11, 19, 32, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08)` |
| `--shadow-cta-hover` | `0 8px 28px rgba(11, 19, 32, 0.55), 0 0 20px rgba(255, 255, 255, 0.12)` |

### 1.8 Radius ir spacing

| Token | Reikšmė |
|-------|---------|
| `--radius-sm` | `6px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `16px` |
| `--radius-xl` | `20px` |
| `--space-2` … `--space-8` | `16px` … `48px` |

### 1.9 Tipografija

| Token / taisyklė | Reikšmė |
|------------------|---------|
| `--font-family-sans` | `'Inter', -apple-system, sans-serif` |
| `--font-family-mono` | `'JetBrains Mono', monospace` |
| `--font-size-body` | `18px` |
| `--font-size-body-sm` | `16px` |
| `--font-size-hero` | `52px` |
| `--line-height-body` | `1.6` |
| H2 (sekcijos) | 22–32px / 800 |
| Meta / badge | 13–15px / 600–700 |

### 1.10 Focus, motion, overlays

| Token | Reikšmė |
|-------|---------|
| `--focus-ring-width` | `3px` |
| `--focus-ring-offset` | `2px` |
| `--focus-ring-color` | `var(--color-focus-ring)` |
| `--duration-fast` | `0.2s` |
| `--ease-default` | `ease` |
| `--overlay-hero` | `rgba(0, 0, 0, 0.1)` |
| `--surface-hero-badge` | `rgba(255, 255, 255, 0.25)` |
| `--surface-hero-badge-hover` | `rgba(255, 255, 255, 0.4)` |

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
| Nav chip | `.next-steps-links a` | `--brand-teal` | Vidinė navigacija 1–8 |
| Community primary | `.community-cta-primary` | `--community-cta-green` | „Join Telegram“ |
| Community secondary | `.community-cta-secondary` | Navy outline | Kursas → `https://www.promptanatomy.app/en` |
| Success | `.btn.success` | `--green` | Po kopijavimo |

**Focus:** dažniausiai `var(--focus-ring-width) solid var(--accent-gold)`; hero `.cta-button` – baltas ringas (`var(--white)`).

### 2.2 Component states

| Component | Default | Hover | Focus | Active/Success |
|-----------|---------|-------|-------|----------------|
| `.cta-button` | `--cta-bg` + `--shadow-cta` | `--cta-hover` + `--shadow-cta-hover` | white ring | – |
| `.btn` | `--accent-dark` | `--accent-dark-hover` | `--accent-gold` ring | `.success` → `--green` |
| `.community-cta-primary` | `--community-cta-green` | `--community-cta-green-hover` | gold ring | – |
| `.next-steps-links a` | `--brand-teal` outline | `--brand-teal-hover` | gold ring | – |
| `.header-brand a.badge` | `--surface-hero-badge` | `--surface-hero-badge-hover` | white ring | – |

### 2.3 Hero (`.header`)

Tamsus gradientas (`--hero-gradient-*`), overlay `--overlay-hero`, badge (kursas), kalbų dropdown, vienas `.cta-button`.

### 2.4 Prompt kortelė (`.prompt`)

Seka: header → `code-block` → `.prompt-footer` (Copy + Mark as done) → `before-use` → `info-box`.

### 2.5 What's next (`.next-steps`)

Balta kortelė, `border: 3px solid var(--tertiary)`, H2 teal, chip'ai `--brand-teal`.

### 2.6 Community (`.community`)

Gradient `--blue-light` → `--orange-light`; primary green CTA; antrinis navy outline.

### 2.7 Ecosystem (`.ecosystem`)

Kaip `.next-steps`; WebP + PNG; `npm run generate:ecosystem`.

### 2.8 Footer (`.footer`)

Balta kortelė, `--border`, produkto nuoroda `--brand-teal`.

### 2.9 Privacy puslapiai

`tokens.css` + `privacy.css`; jokio inline hex. Back mygtukas – `--color-action-primary-bg`; nuorodos – `--color-link`.

### 2.10 Toast, lang-switcher, info-box

Žr. [`css/library.css`](../css/library.css).

---

## 3. Patterns

### 3.1 LibraryPage

```
skip-link → header (badge + lang + 1 CTA) → progress → instructions →
prompts 1–8 → next-steps → community → ecosystem → footer
```

- Vienas hero primary CTA
- Kursas tik per badge → `COURSE_URL_EN`
- Telegram tik `.community` sekcijoje

### 3.2 PromptCard

```
summary/header → code-block → prompt-footer (copy + done) → before-use → info-box
```

- Copy prieš readiness
- Prompt 1 atidarytas; 2–8 collapsible (`<details>`)

### 3.3 CTAHierarchy

Primary navy (`.cta-button`, `.btn`) → hero badge → nav chips teal → community green → course secondary outline.

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
- `--blue` → `--accent-dark`; `--tertiary` → `--brand-teal`

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
| DS 2.0 | 2026-05-29 | `tokens.css` SSOT; `privacy.css`; semantic layer; governance; patterns; DTCG export; CI validation |
| DS 1.0 | 2026-05-29 | Pradinis dokumentas; `--brand-teal`; STYLEGUIDE perkeltas čia |

---

**Paskutinis atnaujinimas:** 2026-05-29
