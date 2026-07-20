# Link

Canvas `8:13512`, file `1iLHv8dNR3kwSoBYNl1wgs`. Size(md/sm/xs)×Secondary(f/t)×State(Default/Hover/Active/Focus).

## Props
```
Link({ size, secondary, state, icon, component, icon1, component1, lable })
```

## Anatomy
Icon(опц.) → текст(OpenSans14/20 md) → Icon(опц.).

## Tokens
`secondary=false`: `--link/accent/color/default`(#1d70e2). `secondary=true`: `--link/secondary/color/default`(rgba(44,44,44,.7)). `--link/gapbetweeniconleft`(4), `--link/gapbetweeniconright`(2).

## Notes
- `lable`(не `label`) — третій компонент з цією помилкою (після Badge/Bookmark, Chip) — системна конвенція в ДС.
- sm/xs/Hover/Active/Focus не перевірено детально.
