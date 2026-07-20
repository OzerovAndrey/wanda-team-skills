#!/bin/bash
cd ~/.claude/skills/wanda-team-skills

fswatch -o . --exclude ".git" | while read change; do
  git add .
  if ! git diff --cached --quiet; then
    git commit -m "auto: update $(date '+%Y-%m-%d %H:%M:%S')"
    git pull --rebase
    git push
    echo "✅ Synced at $(date)"
  fi
done
