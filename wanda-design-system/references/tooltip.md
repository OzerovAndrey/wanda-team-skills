# Tooltip

Canvas `8:41429`, file `1iLHv8dNR3kwSoBYNl1wgs`. Position(Top/Bottom×Left/Center/Right, Left/Right×Top/Center/Bottom = 12)×Type(лише Inline намальовано).

## Props
```
Tooltip({ position: "Top — Left"|"Top — Center"|...(12), type: "Inline", popup=true, message=true, text="Text", customUi, component })
```

## Anatomy
Wrapper(absolute, позиціонується відносно anchor-елемента 40×40, `drop-shadow` `--tooltip/boxshadowcolor`rgba(0,0,0,.15) offset 4/16) → Container(white bg, radius8, paddingh16/paddingv8, max-width320): Message(OpenSans12/16 `--tooltip/color`rgba(44,44,44,.9)) + опц.CustomUi(слот, дефолт-плейсхолдер фіолетовий dashed). Arrow(SVG, вказує в бік anchor — ширина/форма різна для Left vs Center позицій).

## Tokens
`--tooltip/{bg:white,color,borderradius:8,paddingh:16,paddingv:8,gap:4,boxshadowcolor}`.

## Notes
- 12 позицій покривають усі краї+кути навколо anchor-елемента.
- CustomUi-слот дозволяє вставити довільний контент замість тексту (не тільки message).
- Arrow — окремий SVG-асет, форма залежить від Left/Center/Right субпозиції.
