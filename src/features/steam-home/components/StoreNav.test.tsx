import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { StoreNav } from './StoreNav';

describe('StoreNav', () => {
  const groups = [
    {
      label: '浏览',
      featured: '探索新品、热销和免费游戏',
      items: ['新品与热门商品', '排行榜']
    },
    {
      label: '推荐',
      featured: '根据你的偏好定制内容',
      items: ['由好友推荐', '最近更新']
    }
  ];

  it('opens a menu on click, switches to another menu, and closes on Escape', async () => {
    const user = userEvent.setup();

    render(
      <StoreNav groups={groups} searchPlaceholder="搜索商店" searchButtonLabel="搜索" />
    );

    const browseButton = screen.getByRole('button', { name: '浏览' });
    const recommendButton = screen.getByRole('button', { name: '推荐' });

    expect(screen.queryByRole('menu', { name: '浏览' })).not.toBeInTheDocument();

    await user.click(browseButton);
    expect(screen.getByRole('menu', { name: '浏览' })).toBeInTheDocument();
    expect(browseButton).toHaveAttribute('aria-expanded', 'true');

    await user.click(browseButton);
    expect(screen.queryByRole('menu', { name: '浏览' })).not.toBeInTheDocument();
    expect(browseButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(browseButton);
    expect(screen.getByRole('menu', { name: '浏览' })).toBeInTheDocument();

    await user.click(recommendButton);
    expect(screen.queryByRole('menu', { name: '浏览' })).not.toBeInTheDocument();
    expect(screen.getByRole('menu', { name: '推荐' })).toBeInTheDocument();
    expect(recommendButton).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menu', { name: '推荐' })).not.toBeInTheDocument();
    expect(recommendButton).toHaveAttribute('aria-expanded', 'false');
  });
});
