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
| `src/c1…c9-*.js` | components — one `reg({...})` per component |

Token changes flow into the site automatically. New or changed **component
anatomy** needs an edit in the matching `src/c*.js` module.

Local build:
```bash
cd site && python3 resolve.py dark && python3 resolve.py light && python3 gen_css.py && OUT=../docs python3 build.py
```
