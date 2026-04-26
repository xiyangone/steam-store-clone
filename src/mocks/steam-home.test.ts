import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('steam home asset paths', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it('prefixes local storefront assets with the Vite base path for Pages deployments', async () => {
    vi.stubEnv('BASE_URL', '/steam-store-clone/');

    const { featuredGamesByLocale, underThousandCardsByLocale } = await import('./steam-home');

    expect(featuredGamesByLocale['zh-CN'][0].hero).toBe(
      '/steam-store-clone/steam/home/featured/featured-zh-shadowverse-hero.jpg'
    );
    expect(underThousandCardsByLocale['zh-CN'][0].image).toBe(
      '/steam-store-clone/steam/home/cheap-slay.jpg'
    );
  });
});
