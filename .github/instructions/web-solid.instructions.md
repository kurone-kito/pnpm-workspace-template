---
applyTo: "packages/web-solid/**"
---

# Web application package — `@kurone-kito/pwt-web-solid`

A boilerplate for web applications built with SolidStart.

## Tech stack

- **Framework**: SolidStart 1.x with SolidJS
- **Styling**: Tailwind CSS 4 + DaisyUI 5
- **Build**: Vinxi (SolidStart's build tool)
- **Deployment**: Static site generation (GitHub Pages preset)

## Key conventions

- **JSX**: Uses SolidJS JSX (`jsxImportSource: "solid-js"`, `jsx:
  "preserve"`) — do not use React patterns
- **Routing**: File-based routing in `src/routes/`
- **Components**: Reusable components in `src/components/`
- **Entry points**: `src/entry-client.tsx` (client) and
  `src/entry-server.tsx` (server)
- **Styling**: Use Tailwind CSS utility classes and DaisyUI components —
  avoid inline styles
- **Environment**: `BASE_PATH` env var controls subpath deployment
  (default: `/pnpm-workspace-template`)
- This package depends on `@kurone-kito/pwt-lib` via `workspace:^`

## Build and test

```sh
# Build (from workspace root)
pnpm -F '@kurone-kito/pwt-web-solid' run build

# Dev server (localhost:3000)
pnpm -F '@kurone-kito/pwt-web-solid' run dev

# Run unit tests
pnpm -F '@kurone-kito/pwt-web-solid' run test:vitest

# Run E2E tests (requires build first)
pnpm -F '@kurone-kito/pwt-web-solid' run test:e2e

# Type checking
pnpm -F '@kurone-kito/pwt-web-solid' run test:ts
```

## Testing

- Unit tests: Vitest with `happy-dom` environment and
  `vite-plugin-solid`
- Test files: `src/**/*.spec.{ts,tsx,mts}`
- E2E tests: Playwright in `tests/` directory
- Type checking: `tsc` via `test:ts` script
