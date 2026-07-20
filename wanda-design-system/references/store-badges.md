# Store badges

Canvas `5:2647`("Apps badge"), file `1iLHv8dNR3kwSoBYNl1wgs`. Кнопки-посилання на App Store/Google Play. Той самий компонент, що вбудований у Sidebar (`sidebar.md`, "Apps" секція).

## Props
```
AppsBadge({ collapse, os: "iOS"|"Android" })
```

## Anatomy
Білий прямокутник(`--appsbadge/{bg:white,borderwidth:1,br:black,borderradius:8,paddingl:12,gap:8}`, 135×40px) з офіційним лого(Apple/Google Play, SVG-асети) + текстовим написом "Download on the App Store"/"Get it on Google Play" (запечено в SVG, не редагований текстовий проп). `Collapse=true` — квадратна версія 40×40, лише іконка без напису.

## Tokens
`--appsbadge/{bg:white,borderwidth:1,br:black,borderradius:8,paddingl:12,gap:8}`.

## Notes
- Лого й текст — це запечені SVG-зображення (офіційні бренд-асети Apple/Google), не редаговані пропси — не намагайся змінювати текст напису, підставляй лише готовий SVG за потреби локалізації.
- Той самий компонент, що вже фігурував у `sidebar.md` як "Apps badge" ×2 (iOS+Android поруч).
