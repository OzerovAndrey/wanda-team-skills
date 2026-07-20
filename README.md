# wanda-team-skills

Спільні Claude Skills команди для роботи з Wanda Design System у Figma.

## Структура

```
wanda-team-skills/
└── wanda-design-system/
    ├── SKILL.md          — індексний файл (тригери, таблиця компонентів)
    ├── rules.md           — жорсткі правила збірки (breakpoints, ДС-компоненти)
    └── references/
        ├── button.md
        ├── card/
        │   ├── default.md
        │   └── ...
        └── ...
```

## Як підключити цей репозиторій у свій проєкт

### Варіант A — submodule (рекомендовано для кількох проєктів)

```bash
cd /шлях/до/вашого/проєкту
git submodule add https://github.com/ВАШ_ОРГ/wanda-team-skills.git .claude/skills/wanda-team-skills
git submodule update --init --recursive
```

Оновлення пізніше:

```bash
git submodule update --remote --merge
```

### Варіант B — простий clone у папку skills (якщо проєкту-обгортки немає)

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/ВАШ_ОРГ/wanda-team-skills.git ~/.claude/skills/wanda-team-skills
```

Оновлення пізніше:

```bash
cd ~/.claude/skills/wanda-team-skills
git pull
```

## Як вносити зміни

```bash
git add .
git commit -m "опис зміни"
git push
```

Колеги підтягують оновлення командою `git pull` (або `git submodule update --remote`, якщо підключено як submodule).
