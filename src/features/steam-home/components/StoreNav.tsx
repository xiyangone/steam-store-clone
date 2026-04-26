import { useEffect, useMemo, useRef, useState } from 'react';
import { getPendingLinkHref } from '../../../app/navigation';
import type { StoreMenuGroup } from '../types';

type StoreNavProps = {
  groups: StoreMenuGroup[];
  searchPlaceholder: string;
  searchButtonLabel: string;
};

export function StoreNav({
  groups,
  searchPlaceholder,
  searchButtonLabel
}: StoreNavProps) {
  const pendingHref = getPendingLinkHref();
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const panelIds = useMemo(
    () =>
      Object.fromEntries(
        groups.map((group) => [group.label, `store-menu-panel-${group.label}`])
      ) as Record<string, string>,
    [groups]
  );

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenLabel(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenLabel(null);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <section className="store-nav" ref={navRef}>
      <div className="store-nav__inner shell">
        <div className="store-nav__menus">
          {groups.map((group) => (
            <div key={group.label} className="menu-group">
              <button
                type="button"
                className={openLabel === group.label ? 'menu-group__trigger is-open' : 'menu-group__trigger'}
                aria-expanded={openLabel === group.label}
                aria-haspopup="menu"
                aria-controls={panelIds[group.label]}
                onClick={() =>
                  setOpenLabel((current) => (current === group.label ? null : group.label))
                }
              >
                {group.label}
              </button>
              {openLabel === group.label ? (
                <div
                  id={panelIds[group.label]}
                  className="menu-group__panel is-open"
                  role="menu"
                  aria-label={group.label}
                >
                  <p className="menu-group__featured">{group.featured}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <a href={pendingHref}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <form className="store-nav__search" role="search" action={pendingHref}>
          <input
            aria-label={searchPlaceholder}
            placeholder={searchPlaceholder}
            type="search"
          />
          <button type="submit" className="store-nav__searchButton" aria-label={searchButtonLabel}>
            <span className="store-nav__searchButtonIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <circle cx="10" cy="10" r="5.5" />
                <path d="M14.5 14.5L20 20" />
              </svg>
            </span>
            <span className="sr-only">{searchButtonLabel}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
