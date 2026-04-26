import { useState } from 'react';
import { getPendingLinkHref } from '../../../app/navigation';
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

const STEAM_LOGO_URL = `${import.meta.env.BASE_URL}steam/home/logos/logo_steam.svg`;

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
  const pendingHref = getPendingLinkHref();

  return (
    <header className="global-header">
      <div className="global-header__inner shell">
        <div className="global-header__primary">
          <div className="global-header__brand">
            <a className="brand-link" href={pendingHref} aria-label="Steam 主页链接">
              <img className="brand-link__logo" src={STEAM_LOGO_URL} alt="Steam" />
            </a>
          </div>

          <nav aria-label="全局菜单" className="global-header__nav">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                className={index === 0 ? 'is-active' : undefined}
                href={pendingHref}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="account-links">
          <a className="install-button" href={pendingHref}>
            <img
              className="install-button__icon"
              src={`${import.meta.env.BASE_URL}steam/home/icons/install_steam_download.png`}
              alt=""
              aria-hidden="true"
            />
            <span>{installLabel}</span>
          </a>
          <a href={pendingHref}>{signInLabel}</a>
          <span className="account-links__divider">|</span>
          <div className="language-picker">
            <button
              type="button"
              className="lang-button"
              aria-label={languageLabel}
              aria-expanded={isLanguageMenuOpen}
              aria-haspopup="menu"
              onClick={() => setIsLanguageMenuOpen((value) => !value)}
            >
              <span>{languageLabel}</span>
              <img
                className="lang-button__caret"
                src={`${import.meta.env.BASE_URL}steam/home/icons/btn_arrow_down_padded.png`}
                alt=""
                aria-hidden="true"
              />
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
