# Award

Canvas `5:2649`, file `1iLHv8dNR3kwSoBYNl1wgs`. Статичні лого нагород/рейтингових майданчиків — це і є "Awards"-ряд, уже задокументований у `hero.md` (Trust-блок).

## Props
```
Award({ variant: "Guru Casino"|"Gam Stop"|"Casino Near You"|"Best Support 2020 Casinomeister"|"Gam Care"|"Trustpilot"|"Askgamblers"|"Slotozilla"|"Best Support 2020 Casino org"|"Best New Casino 2019 Askgamblers"|"Great Slots Portfolio"|"Best Support 2024 Casino org"|"Best Support 2025 Casinomeister"|"Casino Innovation Awards 2025"|"Rising Star In Casino 2024"|"Best Bonus Policy 2025", size: "md"|"sm" })
```

16 варіантів логотипів (рейтингові сайти + іменні нагороди по роках), кожен доступний у 2 розмірах (md=32px висота, sm=24px висота). Кожен варіант — просто SVG-логотип фіксованої ширини (індивідуальна для кожного бренду), без іншої логіки.

## Notes
- Це саме той компонент, що вбудований у `hero.md` (Trust-блок, ряд "Awards") — не дублюй, використовуй готові варіанти.
- Список нагород регулярно поповнюється новими роками/категоріями (є записи за 2019-2025) — при додаванні нового року переконайся, що це справді новий variant, а не оновлення існуючого.
