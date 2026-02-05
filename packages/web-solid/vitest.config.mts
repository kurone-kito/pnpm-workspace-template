import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [solidPlugin()],
  ssr: { noExternal: [/@solidjs\//, 'solid-js'] },
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.spec.{ts,tsx,mts}'],
    server: { deps: { inline: [/@solidjs\/start/] } },
  },
});
