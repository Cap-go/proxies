#!/usr/bin/env bash
# Usage: ./deploy.sh <folder>   e.g. ./deploy.sh affonso
set -euo pipefail
dir="${1:?usage: ./deploy.sh <affonso|datafast|posthog|plausible>}"
cd "$(dirname "$0")/$dir"
npx wrangler deploy
