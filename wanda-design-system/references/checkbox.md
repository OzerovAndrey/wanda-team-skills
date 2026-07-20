# Checkbox

Node `8:23423`, file `1iLHv8dNR3kwSoBYNl1wgs`.

## Props
```
Checkbox({
  layout: "Left"|"Right"|"🚧",  // 🚧=compact без блоку
  checked, indeterminate, block, error, description1,
  state: "Default"|"Hover"|"Active"|"Focus"|"Disabled",
})
```

## Tokens
`--checkbox/gap`(12), `--checkbox/borderradius`(4), `--checkbox/default/bg/default`(rgba(29,111,226,.32)), `--checkbox/br/default`, `--checkbox/label/default`(rgba(44,44,44,.9)), `--checkbox/description/default`(rgba(44,44,44,.7)).

## Notes
- **checked=true = готовий SVG-асет** (не fill+border+icon окремо) — клонуй реальний instance (`mainComponent.createInstance()`), не малюй вручну, інакше piксель-в-піксель не збіжиться.
