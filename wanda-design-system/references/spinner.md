# Spinner

Canvas `8:41422`, file `1iLHv8dNR3kwSoBYNl1wgs`. Кільцевий loading-індикатор.

## Props
```
Spinner({ variant: "Accent 1"|"Neutral", size: "xs"|"sm"|"md"|"lg" })
```

## Anatomy
2 SVG-шари: track(повне кільце) + дуга-сегмент(inset 0_0_45%_45%, чверть площі, яскравіша). Розміри: xs12/sm16/md20/lg24.

## Notes
- **Статичний SVG, БЕЗ анімації** — обов'язково додай CSS `animation: spin 1s linear infinite` в коді.
- Колір "запечений" у SVG, не CSS variable — звіряй зі скріншотом при потребі.
