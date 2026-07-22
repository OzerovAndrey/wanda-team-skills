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

## Автоматична синхронізація (macOS, launchd)

Замість ручних `git pull`/`push` можна поставити фоновий процес, який кожні 15 хв сам підтягує зміни з GitHub і пушить локальні правки.

1. Один раз перевірити, що push не питає логін щоразу:
   ```bash
   git config --global credential.helper osxkeychain
   cd ~/.claude/skills/wanda-team-skills   # чи де б ви не клонували
   git push   # введе токен один раз і закешує в keychain
   ```
2. Запустити встановлювач з теки клону:
   ```bash
   ./setup-autosync.sh
   ```
   Скрипт створює `~/.claude/scripts/wanda-skills-sync.sh` і launchd job `local.wanda-skills-sync` (кожні 15 хв: `git pull --rebase --autostash` → якщо є локальні зміни, `commit` + `push`).
3. Перевірка:
   ```bash
   launchctl kickstart -k gui/$(id -u)/local.wanda-skills-sync
   cat ~/Library/Logs/wanda-skills-sync.log
   ```

⚠️ Job не розрізняє, хто зробив зміну — будь-яка незакомічена правка у клоні (ваша чи Claude Code) автоматично піде в GitHub протягом 15 хв, без додаткового підтвердження.
