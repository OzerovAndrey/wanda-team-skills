# Overlay

Canvas `8:41413`, file `1iLHv8dNR3kwSoBYNl1wgs`. Базовий чорний градієнт-затемнювач (нейтральна основа card-оверлеїв).

## Props
```
Overlay({ variant: "Left"|"Right"|"Top"|"Bottom" })
```

## Anatomy
`linear-gradient(to {напрям}, --overlay/start, --overlay/end)` — простий 2-точковий (без center-stop, на відміну від card-оверлеїв). `variant=Left`→темний зліва, світлішає направо.

## Tokens
`--overlay/start`(rgba(0,0,0,.75)), `--overlay/end`(rgba(0,0,0,0)).

## Notes
- Базовий/нейтральний варіант — кольорові card-оверлеї (`--card/overlaycolor/*` тощо) це локальні перевизначення цього патерну, не окремі компоненти.
- Для 3-точкових градієнтів (як Card/Tournament) — розширюй вручну, компонент цього не дає.
