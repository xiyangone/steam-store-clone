import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  afterEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders the Steam store homepage shell', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: '商店' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '浏览' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '精选和推荐', level: 2 })
    ).toBeInTheDocument();
  });

  it('renders the official Steam logo and switches homepage copy to English', async () => {
    const user = userEvent.setup();

    render(<App />);

    const [headerLogo] = screen.getAllByAltText('Steam');

    expect(headerLogo).toHaveAttribute(
      'src',
      '/steam/home/logos/logo_steam.svg'
    );

    await user.click(screen.getByRole('button', { name: '语言' }));
    await user.click(screen.getByRole('button', { name: 'English' }));

    expect(screen.getByRole('link', { name: 'STORE' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Featured & Recommended', level: 2 })
    ).toBeInTheDocument();
  });

  it('renders the shared pending-link placeholder page when the pathname targets it', () => {
    window.history.pushState({}, '', '/pending-link');

    render(<App />);

    expect(screen.getByRole('heading', { name: '链接占位页', level: 1 })).toBeInTheDocument();
    expect(screen.getByText('当前首页跳转统一收口到这个固定页面。')).toBeInTheDocument();
  });

  it('routes representative homepage links to the shared pending-link page', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: '商店' })).toHaveAttribute('href', '/pending-link');
    expect(screen.getAllByRole('link', { name: 'Steam 主页链接' })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: 'Steam 主页链接' })[0]).toHaveAttribute(
      'href',
      '/pending-link'
    );
    expect(screen.getAllByRole('link', { name: '新品' })[0]).toHaveAttribute(
      'href',
      '/pending-link'
    );
    expect(screen.getByRole('link', { name: '关于 Steam' })).toHaveAttribute(
      'href',
      '/pending-link'
    );
  });
});
