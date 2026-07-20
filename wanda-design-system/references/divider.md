# Divider

Canvas `8:13508`, file `1iLHv8dNR3kwSoBYNl1wgs`.

## Props
```
Divider({
  vertical, layout: "Center"|"Left"|"Right"|"🚧",  // 🚧=службовий, лише vertical=true
  strong, dashed, label=true, text,
})
```

## Anatomy
Horizontal: 2 лінії flex-1 + текст між ними (Center підтверджено, Left/Right не перевірено). Vertical(`layout="🚧"`): те саме дзеркально — **це і є вертикальний Divider з `card/tournament.md`/`card/lottery.md`** (там label=false). Текст: OpenSans14, `--divider/color`(rgba(44,44,44,.5)).

## Tokens
`--divider/gaph`(12,horizontal), `--divider/gapv`(8,vertical), `--divider/color`. Колір лінії — SVG-асет, не CSS variable.

## Notes
- `layout="🚧"` — технічний артефакт назви варіанту (не смайлик для показу), тільки для vertical.
- Left/Right не перевірено детально.
