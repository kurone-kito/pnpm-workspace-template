---
applyTo: "packages/lib/**"
---

# Library package — `@kurone-kito/pwt-lib`

A boilerplate for reusable Node.js libraries.

## Tech stack

- **Language**: TypeScript (ES2023 target)
- **Bundler**: Vite via rolldown-vite with `@kurone-kito/vite-lib-config`
- **Output**: ESM bundle (`dist/index.mjs`) with TypeScript declarations
  (`dist/index.d.mts`)

## Key conventions

- Entry point is `src/index.mts`
- This is the **foundational package** — consumed by both `pwt-cli` and
  `pwt-web-solid` via `workspace:^` references
- Keep runtime dependencies to zero when possible — this library should
  be lightweight and tree-shakeable
- All public API must be explicitly exported from the entry point
- Ensure exports are tree-shakeable (avoid side effects in module scope)

## Build and test

```sh
# Build (from workspace root)
pnpm -F '@kurone-kito/pwt-lib' run build

# Watch mode
pnpm -F '@kurone-kito/pwt-lib' run dev

# Run tests
pnpm -F '@kurone-kito/pwt-lib' run test:vitest
pnpm -F '@kurone-kito/pwt-lib' run test:ts
```

## Testing

- Unit tests: Vitest with `@vitest/coverage-v8`
- Test files: `src/**/*.spec.mts`
- Type checking: `tsc` via `test:ts` script
