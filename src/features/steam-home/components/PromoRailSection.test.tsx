import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { PromoRailSection, getNextPromoStartIndex } from './PromoRailSection';

const saleCards = [
  { title: 'Portal 2', image: 'portal.jpg' },
  { title: 'Half-Life 2', image: 'hl2.jpg', subtitle: 'Valve Classic' }
];

const capsuleCards = [
  { title: 'One', image: 'one.jpg', subtitle: 'First', meta: 'A', price: '¥ 11', discount: '-50%' },
  { title: 'Two', image: 'two.jpg', meta: 'B', price: '¥ 22' },
  { title: 'Three', image: 'three.jpg', subtitle: 'Third', discount: '-30%' },
  { title: 'Four', image: 'four.jpg', price: '¥ 44' },
  { title: 'Five', image: 'five.jpg', meta: 'E', price: '¥ 55' }
];

describe('PromoRailSection', () => {
  it('calculates the next promo start index for forward, backward and single-page rails', () => {
    expect(getNextPromoStartIndex(0, 1, 0)).toBe(0);
    expect(getNextPromoStartIndex(0, 1, 1)).toBe(1);
    expect(getNextPromoStartIndex(1, 1, 1)).toBe(0);
    expect(getNextPromoStartIndex(0, -1, 2)).toBe(2);
    expect(getNextPromoStartIndex(2, -1, 3)).toBe(1);
  });

  it('renders a single-page sale rail without controls when there are not enough cards', () => {
    render(<PromoRailSection title="折扣与活动" cards={saleCards} />);

    expect(screen.getByRole('heading', { name: '折扣与活动', level: 2 })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: '浏览更多' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '折扣与活动 上一页' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '折扣与活动 下一页' })).not.toBeInTheDocument();
    expect(screen.queryByRole('tablist', { name: '折扣与活动 轮播' })).not.toBeInTheDocument();
  });

  it('cycles a multi-page capsule rail with arrows and dots', async () => {
    const user = userEvent.setup();

    render(
      <PromoRailSection
        title="Steam Deck 最热玩游戏"
        cards={capsuleCards}
        actionLabel="更多"
        variant="capsule-grid"
        className="deck-section"
      />
    );

    expect(screen.getByRole('link', { name: '更多' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'One', level: 3 })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Five', level: 3 })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Steam Deck 最热玩游戏 下一页' }));
    expect(screen.getByRole('heading', { name: 'Five', level: 3 })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Steam Deck 最热玩游戏 下一页' }));
    expect(screen.getByRole('heading', { name: 'One', level: 3 })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Steam Deck 最热玩游戏 上一页' }));
    expect(screen.getByRole('heading', { name: 'Five', level: 3 })).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Steam Deck 最热玩游戏 第 1 页' }));
    expect(screen.getByRole('heading', { name: 'One', level: 3 })).toBeInTheDocument();
  });
});
