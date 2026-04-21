import { expect, test } from '@playwright/test';

test('renders the Steam storefront hero and key sections', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: '商店' })).toBeVisible();
  await expect(page.locator('.festival-banner__video')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: '精选和推荐', level: 2 })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Steam Deck 最热玩游戏', level: 2 })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: '基于您玩的游戏推荐', level: 2 })
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: '您的探索队列', level: 2 })).toBeVisible();
  await expect(page.getByRole('heading', { name: '社区推荐', level: 2 })).toBeVisible();
  await expect(page.getByRole('heading', { name: '最近更新', level: 2 })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: '来自您了解的开发者和发行商', level: 2 })
  ).toBeVisible();
  await expect(page.locator('.home_hardware_banner')).toBeVisible();
});

test('renders a footer that matches the live Steam storefront structure', async ({
  page
}) => {
  await page.goto('/');

  await expect(page.getByText('正在寻找推荐？')).toBeVisible();
  await expect(page.getByText('登录以查看个性化推荐')).toBeVisible();
  await expect(page.getByRole('link', { name: '登录' }).last()).toBeVisible();
  await expect(page.getByText('或者注册并免费加入 Steam')).toBeVisible();
  await expect(page.locator('.footer_content .brand-link__logo')).toBeVisible();
  await expect(page.getByText('所有的价格均已包含增值税（如适用）。')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Steam 分销' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Cookie' })).toBeVisible();
  await expect(page.getByText('React 复刻练习')).toHaveCount(0);
});

test('keeps the header compact and the featured carousel at a stable size', async ({
  page
}) => {
  await page.goto('/');

  const before = await page.evaluate(() => {
    const header = document.querySelector('.global-header') as HTMLElement | null;
    const logo = document.querySelector('.brand-link__logo') as HTMLElement | null;
    const nav = document.querySelector('.global-header__nav') as HTMLElement | null;
    const firstNavItem = document.querySelector('.global-header__nav a') as HTMLElement | null;
    const account = document.querySelector('.account-links') as HTMLElement | null;
    const storeNav = document.querySelector('.store-nav') as HTMLElement | null;
    const searchInput = document.querySelector('.store-nav__search input') as HTMLElement | null;
    const featured = document.querySelector('.featured-card') as HTMLElement | null;
    const heroBanner = document.querySelector('.festival-banner') as HTMLElement | null;
    const activeNav = document.querySelector('.global-header__nav a.is-active') as HTMLElement | null;
    const promoSection = document.querySelector('.promo-section .promo-rail') as HTMLElement | null;
    const categorySection = document.querySelector('.category-browser .category-browser__grid') as HTMLElement | null;
    const browseSection = document.querySelector('.browse-links .browse-links__row') as HTMLElement | null;
    const rankingsTabs = document.querySelector('.rankings .home_tabs_row') as HTMLElement | null;
    const footer = document.querySelector('.page_footer_ctn .footer_content') as HTMLElement | null;
    const mainSections = document.querySelectorAll('main > section');
    const arrowTargets = [
      '.featured-carousel .home-slider-arrow.left',
      '.featured-carousel .home-slider-arrow.right',
      '.promo-section .home-slider-arrow.left',
      '.promo-section .home-slider-arrow.right',
      '.category-browser .home-slider-arrow.left',
      '.category-browser .home-slider-arrow.right'
    ]
      .map((selector) => document.querySelector(selector) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];

    if (
      !header ||
      !logo ||
      !nav ||
      !firstNavItem ||
      !account ||
      !storeNav ||
      !searchInput ||
      !featured ||
      !heroBanner ||
      !activeNav ||
      !promoSection ||
      !categorySection ||
      !browseSection ||
      !rankingsTabs ||
      !footer ||
      arrowTargets.length < 6
    ) {
      throw new Error('Expected homepage chrome was not rendered');
    }

    const headerRect = header.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const firstNavItemRect = firstNavItem.getBoundingClientRect();
    const accountRect = account.getBoundingClientRect();
    const storeNavRect = storeNav.getBoundingClientRect();
    const searchInputRect = searchInput.getBoundingClientRect();
    const featuredRect = featured.getBoundingClientRect();
    const heroBannerRect = heroBanner.getBoundingClientRect();
    const activeNavStyles = getComputedStyle(activeNav, '::after');
    const sectionArrowMetrics = [
      ['折扣与活动', '.promo-section--sale-grid .promo-rail'],
      ['按类别浏览', '.category-browser .category-browser__grid'],
      ['Steam Deck 最热玩游戏', '.promo-section--capsule-grid .promo-rail'],
      ['低于 ¥ 1,000', '.under-thousand-section .promo-rail'],
      ['虚拟现实', '.vr-section .promo-rail']
    ].map(([title, trackSelector]) => {
      const heading = Array.from(
        document.querySelectorAll('.home_page_content_title')
      ).find((node) => node.textContent?.includes(title)) as HTMLElement | undefined;
      const section = heading?.closest('section') as HTMLElement | null;
      const leftArrow = section?.querySelector('.home-slider-arrow.left') as HTMLElement | null;
      const rightArrow = section?.querySelector('.home-slider-arrow.right') as HTMLElement | null;
      const track = section?.querySelector(trackSelector) as HTMLElement | null;

      if (!leftArrow || !rightArrow || !track) {
        throw new Error(`Expected arrows and track for ${title}`);
      }

      const leftRect = leftArrow.getBoundingClientRect();
      const rightRect = rightArrow.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();

      return {
        title,
        leftHeight: leftRect.height,
        rightHeight: rightRect.height,
        centerDelta: Math.abs(leftRect.top + leftRect.height / 2 - (trackRect.top + trackRect.height / 2)),
        sideAlignmentDelta: Math.abs(
          leftRect.top + leftRect.height / 2 - (rightRect.top + rightRect.height / 2)
        )
      };
    });

    return {
      headerHeight: headerRect.height,
      logoTopOffset: logoRect.top - headerRect.top,
      navGap: navRect.left - logoRect.right,
      navHeight: firstNavItemRect.height,
      accountTopOffset: accountRect.top - headerRect.top,
      storeNavHeight: storeNavRect.height,
      searchInputWidth: searchInputRect.width,
      searchInputHeight: searchInputRect.height,
      heroGap: heroBannerRect.top - storeNavRect.bottom,
      activeUnderlineWidth: Number.parseFloat(activeNavStyles.width),
      activeUnderlineHeight: Number.parseFloat(activeNavStyles.height),
      hasPromoHomeContent: true,
      hasCategoryHomeContent: true,
      hasBrowseHomeContent: true,
      hasRankingTabs: true,
      hasFooterContent: true,
      featuredWidth: featuredRect.width,
      featuredHeight: featuredRect.height,
      activeUnderlineBottom: Number.parseFloat(activeNavStyles.bottom),
      mainSectionCount: mainSections.length,
      sharedArrowHeight: arrowTargets[0].getBoundingClientRect().height,
      sectionArrowMetrics
    };
  });

  expect(before.headerHeight).toBeGreaterThanOrEqual(102);
  expect(before.headerHeight).toBeLessThanOrEqual(106);
  expect(before.logoTopOffset).toBeGreaterThanOrEqual(26);
  expect(before.logoTopOffset).toBeLessThanOrEqual(34);
  expect(before.navGap).toBeGreaterThanOrEqual(18);
  expect(before.navGap).toBeLessThanOrEqual(34);
  expect(before.navHeight).toBeGreaterThanOrEqual(68);
  expect(before.navHeight).toBeLessThanOrEqual(76);
  expect(before.accountTopOffset).toBeLessThanOrEqual(10);
  expect(before.storeNavHeight).toBeGreaterThanOrEqual(44);
  expect(before.storeNavHeight).toBeLessThanOrEqual(48);
  expect(before.searchInputWidth).toBeGreaterThanOrEqual(420);
  expect(before.searchInputHeight).toBeGreaterThanOrEqual(33);
  expect(before.searchInputHeight).toBeLessThanOrEqual(35);
  expect(before.heroGap).toBeGreaterThanOrEqual(-1);
  expect(before.heroGap).toBeLessThanOrEqual(2);
  expect(before.activeUnderlineWidth).toBeGreaterThanOrEqual(28);
  expect(before.activeUnderlineHeight).toBeGreaterThanOrEqual(2);
  expect(before.activeUnderlineBottom).toBeGreaterThanOrEqual(16);
  expect(before.hasPromoHomeContent).toBe(true);
  expect(before.hasCategoryHomeContent).toBe(true);
  expect(before.hasBrowseHomeContent).toBe(true);
  expect(before.hasRankingTabs).toBe(true);
  expect(before.hasFooterContent).toBe(true);
  expect(before.mainSectionCount).toBeGreaterThanOrEqual(15);
  expect(before.sharedArrowHeight).toBeGreaterThanOrEqual(106);
  expect(before.featuredWidth).toBeGreaterThanOrEqual(930);
  expect(before.featuredWidth).toBeLessThanOrEqual(950);
  expect(before.featuredHeight).toBeGreaterThanOrEqual(375);
  expect(before.featuredHeight).toBeLessThanOrEqual(385);
  for (const metric of before.sectionArrowMetrics) {
    expect(metric.leftHeight).toBeGreaterThanOrEqual(106);
    expect(metric.rightHeight).toBeGreaterThanOrEqual(106);
    expect(metric.sideAlignmentDelta).toBeLessThanOrEqual(1.5);
    expect(metric.centerDelta).toBeGreaterThanOrEqual(10);
    expect(metric.centerDelta).toBeLessThanOrEqual(18);
  }

  await page.getByRole('button', { name: '下一张精选内容' }).click();

  const after = await page.evaluate(() => {
    const featured = document.querySelector('.featured-card') as HTMLElement | null;

    if (!featured) {
      throw new Error('Expected featured carousel was not rendered');
    }

    const rect = featured.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  });

  expect(after.width).toBeCloseTo(before.featuredWidth, 0);
  expect(after.height).toBeCloseTo(before.featuredHeight, 0);
});
