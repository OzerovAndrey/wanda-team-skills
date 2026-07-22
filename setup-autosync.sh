#!/bin/bash
# Встановлює локальну автосинхронізацію цього клону з GitHub через launchd (macOS).
# Запускати з теки клону: ./setup-autosync.sh
set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPT_DIR="$HOME/.claude/scripts"
PLIST="$HOME/Library/LaunchAgents/local.wanda-skills-sync.plist"

mkdir -p "$SCRIPT_DIR"

cat > "$SCRIPT_DIR/wanda-skills-sync.sh" <<EOS
#!/bin/bash
set -e

REPO="$REPO_DIR"
cd "\$REPO"

echo "--- sync run: \$(date '+%Y-%m-%d %H:%M:%S') ---"

git pull --rebase --autostash

if [ -n "\$(git status --porcelain)" ]; then
  git add -A
  git commit -m "auto: update \$(date '+%Y-%m-%d %H:%M:%S')"
  git push
  echo "synced local changes"
else
  echo "nothing to sync"
fi
EOS
chmod +x "$SCRIPT_DIR/wanda-skills-sync.sh"

cat > "$PLIST" <<EOS
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>local.wanda-skills-sync</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>$SCRIPT_DIR/wanda-skills-sync.sh</string>
    </array>
    <key>StartInterval</key>
    <integer>900</integer>
    <key>StandardOutPath</key>
    <string>$HOME/Library/Logs/wanda-skills-sync.log</string>
    <key>StandardErrorPath</key>
    <string>$HOME/Library/Logs/wanda-skills-sync.log</string>
</dict>
</plist>
EOS

launchctl unload "$PLIST" 2>/dev/null || true
launchctl load -w "$PLIST"

echo "Autosync встановлено для $REPO_DIR"
echo "Інтервал: кожні 15 хв. Лог: $HOME/Library/Logs/wanda-skills-sync.log"
echo "Перевірка: launchctl kickstart -k gui/\$(id -u)/local.wanda-skills-sync"
