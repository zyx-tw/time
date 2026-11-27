# time

One Next.js app: A clock at time.zyx.tw. Read [README.md](README.md) first.

## Layout

- `app/`: the pages and routes.
- `components/`, `lib/`, `hooks/`, `styles/`, `fonts/`: the app's own code and the parts of the zyx.tw design system it uses, copied from ui.zyx.tw. Take new design-system parts from the registry (`bunx shadcn@latest add @zyx1121/<name>`).
- `lib/otel/`: traces and logs to Sensorium.

## Rules

- In Loki's environment the MacBook is for editing and git only. Run `bun install`, the checks and the build on `ssh sandbox` in a login shell (`bash -lc`).
- Repository documents and code comments are English.

## Deploy

A merge to main deploys itself: `release.yml` calls the shared `ship.yml` with `target: land`, and carrel-deployd on VM 117 runs `deploy/carrel-start.sh` against `/opt/time`. Wait for it with `golem-watch zyx-tw/time <sha>`.
