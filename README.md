# time

A clock at time.zyx.tw.

## Development

```sh
bun install
cp .env.example .env.local
bun run dev
```

## Checks

```sh
bun run typecheck && bun run lint && bun run format:check
```

## Deploy

ci builds the image in the pull request; a merge to main ships it to VM 117 through land (`.github/workflows/release.yml`). The stack lives in `/opt/time` with `compose.yaml` and `.env` (see `.env.example`).

## License

MIT
