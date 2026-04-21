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
  return (
    <section className="store-nav">
      <div className="store-nav__inner shell">
        <div className="store-nav__menus">
          {groups.map((group) => (
            <div key={group.label} className="menu-group">
              <button type="button" className="menu-group__trigger">
                {group.label}
              </button>
              <div className="menu-group__panel" role="menu">
                <p className="menu-group__featured">{group.featured}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <form className="store-nav__search" role="search">
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
