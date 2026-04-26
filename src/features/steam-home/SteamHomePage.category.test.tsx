import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

describe('SteamHomePage category browser edge cases', () => {
  afterEach(() => {
    vi.resetModules();
    vi.doUnmock('../../mocks/steam-home');
  });

  it('hides category carousel controls when only one page of tiles exists', async () => {
    vi.doMock('../../mocks/steam-home', async () => {
      const actual = await vi.importActual<typeof import('../../mocks/steam-home')>(
        '../../mocks/steam-home'
      );

      return {
        ...actual,
        categoryTilesByLocale: {
          'zh-CN': actual.categoryTilesByLocale['zh-CN'].slice(0, 4),
          'en-US': actual.categoryTilesByLocale['en-US'].slice(0, 4)
        }
      };
    });

    const { SteamHomePage } = await import('./SteamHomePage');
    render(<SteamHomePage />);

    expect(screen.queryByRole('button', { name: '按类别浏览 上一页' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '按类别浏览 下一页' })).not.toBeInTheDocument();
    expect(screen.queryByRole('tablist', { name: '按类别浏览 轮播' })).not.toBeInTheDocument();
  });
});
