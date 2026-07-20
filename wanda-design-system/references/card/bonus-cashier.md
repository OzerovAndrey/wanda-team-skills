# Card/Bonus/Cashier

Node `25:29483` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 312×160px, градієнт `#4448cb→#222465`.

## Variants
Variant(Bonus|Default / Bonus|Advanced / Confirmation / Details) × StickyBottom(f/t):
| Node | Variant | Sticky |
|---|---|---|
| `25:29484` | Bonus\|Default | f (досліджено) |
| `25:29504` | Bonus\|Default | t |
| `848:59045` | Bonus\|Advanced | f |
| `848:59060` | Bonus\|Advanced | t |
| `25:29497` | Confirmation | f (досліджено) |
| `25:29524` | Confirmation | t |
| `25:29518` | Details | f |
| `25:29531` | Details | t (452px!) |

## Props
```
CardBonusCashier({
  variant: "Bonus | Default"|"Confirmation"|...(+Advanced,Details),
  stickyBottom,
  // Bonus|Default:
  deactivate, details, minDeposit=true, progress, timeRange, title,
  // Confirmation:
  description=true, text,
})
```

## Anatomy
Фон=градієнт `--card/bonus/bgprops/{start:#4448cb,end:#222465}` (спільний для всієї Bonus-родини). Front(тільки Default, decorative watermark opacity .15). **Bonus|Default**: Title(Bungee18) + details-рядок(Min deposit+Progress) → Btn Primary"Activate"+опц.Secondary-icon"Deactivate"+опц.Time/Base"Time left". **Confirmation**: Title(OpenSans SemiBold12, не Bungee!)+Description → Btn Secondary"Deactivate"(текстова)+Btn Primary"Cancel". Info(Btn Text, right-4 top-4 — ближче до краю, ніж інші картки).

## Tokens
`--card/bonus/bgprops/*`(спільний Bonus-градієнт). `--card/bonus/cashier/{height:160,padding:16,frontsize:120}`. `--card/bonus/front/opacity/low`(.15). `--tt/primary`(white тут). Progress: див. `progress.md`(sm, borderradius2 товщина4). `--btn/*` locally-blue rgba(79,141,255,*). Time/Base: див. `countdown.md`.

## Notes
- **Variant = різний СЕНС картки**, не стиль: Default/Advanced=промо, Confirmation=діалог, Details=розгорнуті умови — 3-4 різні картки на спільному каркасі.
- Advanced/Details не перевірено; Details+Sticky=452px (не компактна картка).
- `stickyBottom` не перевірено в жодному варіанті.
