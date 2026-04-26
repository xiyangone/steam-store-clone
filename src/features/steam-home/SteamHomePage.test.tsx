import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SteamHomePage, getNextCategoryStartIndex } from './SteamHomePage';

describe('SteamHomePage', () => {
  it('calculates the next category page index for wraparound and single-page cases', () => {
    expect(getNextCategoryStartIndex(0, 1, 0)).toBe(0);
    expect(getNextCategoryStartIndex(0, 1, 1)).toBe(1);
    expect(getNextCategoryStartIndex(1, 1, 1)).toBe(0);
    expect(getNextCategoryStartIndex(0, -1, 1)).toBe(1);
  });

  it('switches featured slide content when navigating the carousel', async () => {
    const user = userEvent.setup();

    render(<SteamHomePage />);

    expect(
      screen.getByRole('heading', { name: 'Shadowverse: Worlds Beyond', level: 3 })
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '下一张精选内容' }));

    expect(
      screen.getByRole('heading', { name: 'Resident Evil Requiem', level: 3 })
    ).toBeInTheDocument();
  });

  it('switches ranking tabs when another tab is selected', async () => {
    const user = userEvent.setup();
    const { container } = render(<SteamHomePage />);

    const expectations = [
      { tab: '人气蹿升的新品', firstTitle: '自动售货机模拟器' },
      { tab: '热销商品', firstTitle: 'Counter-Strike 2' },
      { tab: '热门即将推出', firstTitle: '失控车手' },
      { tab: '优惠', firstTitle: '女神异闻录5皇家版' },
      { tab: '人气蹿升的免费游戏', firstTitle: 'Police Chief Simulator: Prologue - Early Days' }
    ];

    for (const expectation of expectations) {
      const tab = screen.getByRole('tab', { name: expectation.tab });
      await user.click(tab);

      expect(tab).toHaveAttribute('aria-selected', 'true');
      expect(container.querySelectorAll('.ranking-row')).toHaveLength(10);
      expect(screen.getAllByText(expectation.firstTitle).length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders featured artwork from local assets so the hero is always visible', () => {
    const { container } = render(<SteamHomePage />);
    const capsule = container.querySelector('.featured-carousel .capsule.main_capsule') as
      | HTMLElement
      | null;

    expect(capsule).not.toBeNull();
    expect(capsule?.style.backgroundImage).toContain('/steam/home/');
  });

  it('renders the top chrome with the recreated Steam header structure', () => {
    const { container } = render(<SteamHomePage />);
    const [headerLogo] = screen.getAllByAltText('Steam');

    expect(headerLogo).toHaveAttribute(
      'src',
      '/steam/home/logos/logo_steam.svg'
    );
    expect(screen.getByRole('navigation', { name: '全局菜单' })).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(screen.getByRole('searchbox', { name: '搜索商店' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '搜索' })).toBeInTheDocument();
    expect(container.querySelector('.global-header__brand')).not.toBeNull();
    expect(container.querySelector('.store-nav__searchButtonIcon')).not.toBeNull();
    expect(container.querySelector('.global-header__nav a.is-active')).not.toBeNull();
    expect(container.querySelector('.featured-carousel .capsule.main_capsule')).not.toBeNull();
    expect(container.querySelector('.featured-carousel .capsule.main_capsule .screenshot')).not.toBeNull();
    expect(container.querySelector('.featured-carousel .slider_ctn .slider__dot')).not.toBeNull();
    expect(container.querySelector('.promo-section .home_page_content')).not.toBeNull();
    expect(container.querySelector('.category-browser .home_page_content')).not.toBeNull();
    expect(container.querySelector('.browse-links .home_page_content')).not.toBeNull();
    expect(container.querySelector('.rankings .home_tabs_row')).not.toBeNull();
    expect(container.querySelector('.page_footer_ctn .footer_content')).not.toBeNull();
  });

  it('renders the expanded mid-page sections that mirror the live Steam storefront cadence', () => {
    const { container } = render(<SteamHomePage />);

    expect(
      screen.getByRole('heading', { name: '基于您玩的游戏推荐', level: 2 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '您的探索队列', level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '社区推荐', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '最近更新', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '来自您了解的开发者和发行商', level: 2 })
    ).toBeInTheDocument();
    expect(container.querySelector('.home_hardware_banner')).not.toBeNull();
    expect(container.querySelector('.discovery_queue_ctn')).not.toBeNull();
    expect(container.querySelectorAll('main > section')).toHaveLength(15);
  });

  it('uses the shared Steam-style slider arrows across featured and mid-page carousels', () => {
    const { container } = render(<SteamHomePage />);
    const arrows = container.querySelectorAll('.home-slider-arrow');

    expect(arrows.length).toBeGreaterThanOrEqual(10);
    expect(container.querySelector('.featured-carousel .home-slider-arrow')).not.toBeNull();
    expect(container.querySelector('.promo-section .home-slider-arrow')).not.toBeNull();
    expect(container.querySelector('.category-browser .home-slider-arrow')).not.toBeNull();
  });

  it('cycles category tiles with arrows and page dots', async () => {
    const user = userEvent.setup();

    render(<SteamHomePage />);

    expect(screen.getByText('开放世界生存制作')).toBeInTheDocument();
    expect(screen.queryByText('轻松解谜与治愈')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '按类别浏览 下一页' }));
    expect(screen.getByText('轻松解谜与治愈')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '按类别浏览 上一页' }));
    expect(screen.getByText('开放世界生存制作')).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: '按类别浏览 第 2 页' }));
    expect(screen.getByText('轻松解谜与治愈')).toBeInTheDocument();
  });
});
