---
applyTo: "packages/cli/**"
---

# CLI package — `@kurone-kito/pwt-cli`

A boilerplate for CLI applications using TypeScript and Vite.

## Tech stack

- **Language**: TypeScript (ES2023 target)
- **Bundler**: Vite via rolldown-vite with `@kurone-kito/vite-lib-config`
- **Output**: CommonJS bundle at `dist/index.cjs` (required for CLI
  compatibility and SEA support)
- **SEA**: Single Executable Application support via `pnpm run build:sea`

## Key conventions

- Entry point is `src/index.mts` — includes a shebang line for CLI
  execution
- The binary is published as `pwt-cli` (configured in `package.json` bin
  field)
- This package depends on `@kurone-kito/pwt-lib` via `workspace:^` —
  changes to lib exports may require updates here
- Source maps are enabled (`--enable-source-maps` in Node.js options)

## Build and test

```sh
# Build (from workspace root)
pnpm -F '@kurone-kito/pwt-cli' run build

# Watch mode
pnpm -F '@kurone-kito/pwt-cli' run dev

# Build SEA binaries
pnpm run build:sea

# Run tests
pnpm -F '@kurone-kito/pwt-cli' run test:vitest
pnpm -F '@kurone-kito/pwt-cli' run test:ts
```

## Testing

- Unit tests: Vitest with `@vitest/coverage-v8`
- Test files: `src/**/*.spec.mts`
- Type checking: `tsc` via `test:ts` script
