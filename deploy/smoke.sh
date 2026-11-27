#!/usr/bin/env bash
# The image as deployed: compose.yaml without a database, then the pages that
# answer without one. ci runs it with the image loaded as ghcr.io/zyx-tw/time:ci.
set -euo pipefail
trap 'docker compose logs; docker compose down -v' EXIT
sed -e 's/^TIME_VERSION=.*/TIME_VERSION=ci/' -e 's/^TIME_BIND=.*/TIME_BIND=127.0.0.1:3999/' .env.example > .env
docker compose up -d --wait web
base=http://127.0.0.1:3999
for path in / /icon.svg /favicon.ico /apple-icon.png; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "$base$path")
  echo "$path $code"
  test "$code" = 200
done
echo smoke ok
