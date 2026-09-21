# Wanda DS — live component docs (source)

Published automatically to GitHub Pages by `.github/workflows/docs.yml`
on every push to `main` that touches `site/**` or the token source
(`wanda-design-system/references/tokens/**`).

| File | Role |
|---|---|
| `resolve.py` | Token Studio JSON → resolved values (aliases, math, modify) |
| `gen_css.py` | resolved values → `tokens.css` + `catalog.json` |
| `build.py` | concatenates tokens + `src/*` into one `index.html` |
| `src/engine.js` | router, playground, property panel, token panel |
| `src/i18n.js` | ENG / UKR switcher: `t(s)` looks the English string up in the dictionary |
| `i18n/uk.json` | Ukrainian dictionary, **keyed by the exact English string** from the source |
| `src/c1…c9-*.js` | components — one `reg({...})` per component |

Token changes flow into the site automatically. New or changed **component
anatomy** needs an edit in the matching `src/c*.js` module.

Local build:
```bash
cd site && python3 resolve.py dark && python3 resolve.py light && python3 gen_css.py && OUT=../docs python3 build.py
```

## Languages (ENG / UKR)

The switcher in the header stores the choice in `localStorage` (`wds-lang`); first visit follows the browser language.
English text stays in the source as-is; Ukrainian lives in `i18n/uk.json` (`"English string": "Український текст"`).
- Changed or added a description / note / prop description in `src/c*.js`? Add or update the same English string as a key in `i18n/uk.json`. A missing key falls back to English, so nothing breaks.
- UI-chrome strings go through `t('…')` in `engine.js`; static header/footer text uses `data-i18n` in `build.py`.
- Component names, prop names, token names and sample product copy (button labels etc.) intentionally stay in English.
