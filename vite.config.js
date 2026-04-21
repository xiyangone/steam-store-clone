import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig(function () {
    var _a, _b;
    var repositoryName = (_b = (_a = process.env.GITHUB_REPOSITORY) === null || _a === void 0 ? void 0 : _a.split('/')[1]) !== null && _b !== void 0 ? _b : '';
    var base = repositoryName ? "/".concat(repositoryName, "/") : '/';
    return {
        base: base,
        plugins: [react()],
        test: {
            environment: 'jsdom',
            setupFiles: './vitest.setup.ts',
            exclude: ['tests/e2e/**', 'node_modules/**'],
            globals: true
        }
    };
});
