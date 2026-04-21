import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SteamHomePage } from './SteamHomePage';

describe('SteamHomePage', () => {
  it('switches featured slide content when navigating the carousel', async () => {
    const user = userEvent.setup();

    render(<SteamHomePage />);

    expect(
      screen.getByRole('heading', { name: '《守望先锋®》', level: 3 })
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '下一张精选内容' }));

    expect(
      screen.getByRole('heading', { name: 'Crusader Kings III', level: 3 })
    ).toBeInTheDocument();
  });

  it('switches ranking tabs when another tab is selected', async () => {
    const user = userEvent.setup();

    render(<SteamHomePage />);

    const topSellerTab = screen.getByRole('tab', { name: '热销商品' });
    await user.click(topSellerTab);

    expect(topSellerTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('红色沙漠')).toBeInTheDocument();
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
      'https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016'
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
});
