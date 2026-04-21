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
      globals: true
    }
  };
});
