import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import type { RankingTab } from '../types';
import {
  TabbedRankingSection,
  ensurePreviewIndex,
  setActivePreviewIndex
} from './TabbedRankingSection';

const tabs: RankingTab[] = [
  {
    id: 'top-sellers',
    label: '热销商品',
    moreLabel: '热门畅销',
    entries: [
      {
        title: 'Portal 2',
        description: 'Aperture Science',
        price: '¥ 22',
        image: 'portal.jpg',
        releaseDate: '2011',
        platforms: ['windows', 'mac', 'linux'],
        topTags: ['Puzzle', 'Co-op'],
        screenshots: ['portal-shot-1.jpg', 'portal-shot-2.jpg'],
        reviewSummary: '好评如潮',
        reviewCount: '123,456',
        discountPercent: 75,
        originalPrice: '¥ 88'
      },
      {
        title: 'Aperture Desk Job',
        description: 'Steam Deck showcase',
        price: '免费开玩',
        image: 'desk-job.jpg',
        releaseDate: '2022',
        platforms: undefined as never,
        topTags: undefined as never,
        screenshots: undefined as never,
        reviewSummary: undefined,
        reviewCount: undefined
      },
      {
        title: 'Discounted Mystery',
        description: 'Sale without an original price',
        price: '¥ 40',
        image: 'mystery.jpg',
        releaseDate: undefined as unknown as string,
        platforms: ['windows'],
        topTags: ['Mystery'],
        screenshots: ['mystery-shot.jpg'],
        reviewSummary: '特别好评',
        discountPercent: 20
      }
    ]
  },
  {
    id: 'free',
    label: '免费开玩',
    moreLabel: '查看更多免费游戏',
    entries: []
  }
];

describe('TabbedRankingSection', () => {
  it('calculates preview state updates for missing, repeated and new preview indexes', () => {
    expect(ensurePreviewIndex({}, undefined)).toEqual({});
    expect(ensurePreviewIndex({}, 'top-sellers')).toEqual({ 'top-sellers': 0 });
    expect(ensurePreviewIndex({ 'top-sellers': 0 }, 'top-sellers')).toEqual({ 'top-sellers': 0 });

    expect(setActivePreviewIndex({}, undefined, 2)).toEqual({});
    expect(setActivePreviewIndex({ 'top-sellers': 1 }, 'top-sellers', 1)).toEqual({
      'top-sellers': 1
    });
    expect(setActivePreviewIndex({ 'top-sellers': 0 }, 'top-sellers', 2)).toEqual({
      'top-sellers': 2
    });
  });

  it('updates the preview panel when entries are hovered, focused and clicked', async () => {
    const user = userEvent.setup();

    render(<TabbedRankingSection tabs={tabs} />);

    const preview = document.querySelector('.rankings__preview') as HTMLElement;
    const firstEntryButton = screen.getByRole('button', { name: 'Portal 2 详情预览' });

    expect(screen.getAllByRole('heading', { name: 'Portal 2', level: 3 }).length).toBeGreaterThanOrEqual(
      1
    );
    expect(screen.getByText('¥ 88')).toBeInTheDocument();
    expect(firstEntryButton.querySelectorAll('.platform-icon')).toHaveLength(3);

    const secondEntryButton = screen.getByRole('button', { name: 'Aperture Desk Job 详情预览' });
    fireEvent.mouseEnter(secondEntryButton);
    expect(screen.getAllByRole('heading', { name: 'Aperture Desk Job', level: 3 }).length).toBeGreaterThanOrEqual(1);

    fireEvent.focus(secondEntryButton);
    await user.click(secondEntryButton);

    expect(within(preview).queryByText('¥ 88')).not.toBeInTheDocument();
    expect(within(preview).getByText('新品上架')).toBeInTheDocument();
    expect(screen.getAllByText('免费开玩').length).toBeGreaterThanOrEqual(1);

    await user.click(screen.getByRole('button', { name: 'Discounted Mystery 详情预览' }));

    expect(within(preview).queryByText('¥ 88')).not.toBeInTheDocument();
    expect(within(preview).getByText('特别好评')).toBeInTheDocument();
  });

  it('renders a safe empty state when no tabs are available', () => {
    const { container } = render(<TabbedRankingSection tabs={[]} />);

    expect(screen.getByRole('tabpanel', { name: '排行榜内容' })).toBeInTheDocument();
    expect(screen.queryByRole('tab')).not.toBeInTheDocument();
    expect(container.querySelector('.rankings__footer-link')?.textContent).toBe('');
  });

  it('hides the preview pane when the active tab has no entries', async () => {
    const user = userEvent.setup();

    render(<TabbedRankingSection tabs={tabs} />);

    await user.click(screen.getByRole('tab', { name: '免费开玩' }));

    expect(screen.queryByRole('heading', { name: 'Portal 2', level: 3 })).not.toBeInTheDocument();
    expect(screen.queryByText('总体用户评测')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: '查看更多免费游戏' })).toBeInTheDocument();
  });
});
