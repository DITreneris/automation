# Deployment – DI Promptų Biblioteka

**QA standartas:** [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01)

---

## 1. Production (Vercel + custom domain)

### URL

| Rolė | URL |
|------|-----|
| **Production (kanonas)** | `https://www.promptanatomy.info/` |
| Apex (redirect) | `https://promptanatomy.info/` → **307** → `www` |
| Vercel host | `https://automation-seven-ochre.vercel.app/` |

Locale keliai: `/`, `/lt/`, `/en/`, `/et/`, `/lv/`, `/ja/`, `/zh/` ir atitinkami privatumo puslapiai.

### Deploy

- Repozitorija prijungta prie **Vercel**; `main` push deployina automatiškai.
- Statinis deploy be build žingsnio; [`.vercelignore`](.vercelignore) – neįtraukia `docs/`, `scripts/`, `tests/`, `*.md` ir kitų vidinių failų.
- [`vercel.json`](vercel.json) – cache ant assetų, baziniai saugumo headeriai, 301 redirectai iš senų root ikonų/OG kelių. **Nėra** `trailingSlash` (kanoniniai URL su `/` – HTML `canonical`, `sitemap.xml`). Po deploy patikrinkite `/en` ir `/en/` (abu turi veikti).
- **Web Analytics:** visuose HTML puslapiuose – `/_vercel/insights/script.js` (veikia tik Vercel hoste). Įjungti Vercel dashboard → projektas **automation** → **Analytics** → **Web Analytics**.
- Custom domain: **www.promptanatomy.info** (Production); apex **promptanatomy.info** nukreipia į `www`.
- Prieš merge: `npm test` (kaip CI).

### Po deploy

- Gyvas testavimas pagal [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md) – production URL **`https://www.promptanatomy.info/`**.

---

## 2. GitHub Pages (legacy / atsarginis)

Anksčiau naudotas GitHub Pages (`https://DITreneris.github.io/automation/`). Pre-production ir production kanonas – **Vercel + www.promptanatomy.info**.

Jei reikia paleisti legacy workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml) – **Actions** → **Deploy to GitHub Pages** → **Run workflow** (`main`).

---

## 3. Lokalus tikrinimas prieš deploy

```bash
npm install
npm test
```

A11y (pasirinktinai):

```bash
npx serve . -l 3000
# Kitoje terminale:
PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs
```

---

## 4. Troubleshooting

| Problema | Sprendimas |
|----------|------------|
| **CI workflow failed** | Dažniausiai `pa11y` arba `npm test`. Lokaliai: `npm test`, tada `npx serve . -l 3000` ir `PA11Y_BASE=http://127.0.0.1:3000 node scripts/pa11y-pages.cjs`. |
| Neteisingas locale kelias | Root deploy – base path `''`. Svetainė turi `/lt/`, `/en/`, `/et/`, `/lv/`, `/ja/`, `/zh/`; root redirect numatytai į `/en/`. |
| Kalbų jungiklis neveikia lokaliai | Nenaudok `serve -s` (SPA režimas). Teisingai: `npx serve . -l 3000`; hard refresh po CSS/JS pakeitimų. |
| Apex neveikia | Tikrinti Vercel DNS: `promptanatomy.info` → 307 į `www.promptanatomy.info`. |
| Vercel rodo seną versiją | Patikrinti deploy log; hard refresh; custom domain priskirtas Production, ne Preview. |

---

## 5. Susiję dokumentai

- [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md) – QA standartas (nuoroda į spinoff01)
- [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md) – gyvo testavimo dokumentacija
- [AGENTS.md](AGENTS.md) – release ir QA procesas
