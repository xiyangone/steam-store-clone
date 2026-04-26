import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { FeaturedCarousel } from './FeaturedCarousel';

const slides = [
  {
    title: 'Portal 2',
    status: 'Steam 热门',
    price: '¥ 22',
    hero: 'portal-hero.jpg',
    screenshots: ['portal-shot-1.jpg', 'portal-shot-2.jpg'],
    tags: ['Puzzle', 'Co-op']
  },
  {
    title: 'Half-Life 2',
    status: 'Steam 热门',
    price: '¥ 18',
    hero: 'hl2-hero.jpg',
    screenshots: ['hl2-shot-1.jpg'],
    tags: ['FPS']
  }
];

describe('FeaturedCarousel', () => {
  it('renders nothing when there are no featured slides', () => {
    const { container } = render(
      <FeaturedCarousel
        slides={[]}
        title="精选和推荐"
        previousLabel="上一张精选内容"
        nextLabel="下一张精选内容"
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it('wraps between slides when navigating with arrows and dots', async () => {
    const user = userEvent.setup();

    render(
      <FeaturedCarousel
        slides={slides}
        title="精选和推荐"
        previousLabel="上一张精选内容"
        nextLabel="下一张精选内容"
      />
    );

    expect(screen.getByRole('heading', { name: 'Portal 2', level: 3 })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '上一张精选内容' }));
    expect(screen.getByRole('heading', { name: 'Half-Life 2', level: 3 })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '下一张精选内容' }));
    expect(screen.getByRole('heading', { name: 'Portal 2', level: 3 })).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Half-Life 2' }));
    expect(screen.getByRole('heading', { name: 'Half-Life 2', level: 3 })).toBeInTheDocument();
  });

  it('clamps the current index when the slide list shrinks after render', () => {
    const { rerender } = render(
      <FeaturedCarousel
        slides={slides}
        initialIndex={1}
        title="精选和推荐"
        previousLabel="上一张精选内容"
        nextLabel="下一张精选内容"
      />
    );

    expect(screen.getByRole('heading', { name: 'Half-Life 2', level: 3 })).toBeInTheDocument();

    rerender(
      <FeaturedCarousel
        slides={[slides[0]]}
        initialIndex={1}
        title="精选和推荐"
        previousLabel="上一张精选内容"
        nextLabel="下一张精选内容"
      />
    );

    expect(screen.getByRole('heading', { name: 'Portal 2', level: 3 })).toBeInTheDocument();
  });
});
