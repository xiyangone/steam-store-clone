import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
  const base = repositoryName ? `/${repositoryName}/` : '/';

  return {
    base,
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: './vitest.setup.ts',
      exclude: ['tests/e2e/**', 'node_modules/**'],
      globals: true,
      coverage: {
        provider: 'v8' as const,
        reporter: ['text', 'html', 'json-summary'],
        reportsDirectory: 'coverage',
        include: ['src/**'],
        exclude: ['src/main.tsx', 'src/vite-env.d.ts', 'src/features/steam-home/types.ts', 'src/styles/**'],
        thresholds: {
          lines: 100,
          statements: 100,
          functions: 100,
          branches: 100
        }
      }
    }
  };
});
