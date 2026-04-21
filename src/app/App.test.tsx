import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
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
      'https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016'
    );

    await user.click(screen.getByRole('button', { name: '语言' }));
    await user.click(screen.getByRole('button', { name: 'English' }));

    expect(screen.getByRole('link', { name: 'STORE' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Featured & Recommended', level: 2 })
    ).toBeInTheDocument();
  });
});
