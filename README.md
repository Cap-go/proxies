# Capgo proxies

All Capgo Cloudflare Worker proxies to third party services, one folder per proxy.
Each folder is a standalone Worker with its own `wrangler.toml`.

| Folder | Worker name | Proxies to |
|---|---|---|
| `affonso/` | `aff` (aff.capgo.app) | Affonso affiliate pixel and track API |
| `datafast/` | `datafast-proxy` | DataFast analytics |
| `posthog/` | `psthg` | PostHog EU |
| `plausible/` | `pls` | Plausible |

`affonso/`, `posthog/` and `plausible/` hold the code exactly as it runs in prod.

## Deploy

Nothing deploys on merge. Deploy one proxy at a time:

```bash
./deploy.sh affonso
# or
cd affonso && npx wrangler deploy
```
