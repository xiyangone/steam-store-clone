import { useState } from 'react';
import type { LanguageOption, Locale, NavItem } from '../types';

type GlobalHeaderProps = {
  navItems: NavItem[];
  installLabel: string;
  signInLabel: string;
  languageLabel: string;
  localeLabel: string;
  languageOptions: LanguageOption[];
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

const STEAM_LOGO_URL =
  'https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016';

export function GlobalHeader({
  navItems,
  installLabel,
  signInLabel,
  languageLabel,
  localeLabel,
  languageOptions,
  currentLocale,
  onLocaleChange
}: GlobalHeaderProps) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <header className="global-header">
      <div className="global-header__inner shell">
        <div className="global-header__primary">
          <div className="global-header__brand">
            <a className="brand-link" href="#" aria-label="Steam 主页链接">
              <img className="brand-link__logo" src={STEAM_LOGO_URL} alt="Steam" />
            </a>
          </div>

          <nav aria-label="全局菜单" className="global-header__nav">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                className={index === 0 ? 'is-active' : undefined}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="account-links">
          <a className="install-button" href="#">
            <span className="install-button__icon" aria-hidden="true">
              ↓
            </span>
            <span>{installLabel}</span>
          </a>
          <a href="#">{signInLabel}</a>
          <span className="account-links__divider">|</span>
          <div className="language-picker">
            <button
              type="button"
              className="lang-button"
              aria-label={languageLabel}
              aria-expanded={isLanguageMenuOpen}
              onClick={() => setIsLanguageMenuOpen((value) => !value)}
            >
              <span>{languageLabel}</span>
              <span className="lang-button__caret" aria-hidden="true">
                ▾
              </span>
            </button>

            {isLanguageMenuOpen ? (
              <div className="language-picker__menu" role="menu">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    title={option.code === currentLocale ? localeLabel : option.label}
                    className={
                      option.code === currentLocale
                        ? 'language-picker__option is-active'
                        : 'language-picker__option'
                    }
                    onClick={() => {
                      onLocaleChange(option.code);
                      setIsLanguageMenuOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
