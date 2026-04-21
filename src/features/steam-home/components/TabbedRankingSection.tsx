import { useEffect, useState } from 'react';
import type { RankingPlatform, RankingTab } from '../types';

type TabbedRankingSectionProps = {
  tabs: RankingTab[];
};

export function TabbedRankingSection({ tabs }: TabbedRankingSectionProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? '');
  const [previewIndexes, setPreviewIndexes] = useState<Record<string, number>>({});
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
  const previewIndex = previewIndexes[activeTab?.id ?? ''] ?? 0;
  const previewEntry = activeTab?.entries[previewIndex] ?? activeTab?.entries[0];

  useEffect(() => {
    if (!activeTab) {
      return;
    }

    setPreviewIndexes((current) =>
      current[activeTab.id] === undefined ? { ...current, [activeTab.id]: 0 } : current
    );
  }, [activeTab]);

  const setPreviewIndex = (index: number) => {
    if (!activeTab) {
      return;
    }

    setPreviewIndexes((current) =>
      current[activeTab.id] === index ? current : { ...current, [activeTab.id]: index }
    );
  };

  const normalizeArray = <T,>(value: T[] | undefined) => (Array.isArray(value) ? value : []);

  return (
    <section className="rankings home_ctn">
      <div className="home_page_content">
        <div className="home_tabs_row store_horizontal_minislider" role="tablist" aria-label="排行榜切换">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab.id === tab.id}
              className={activeTab.id === tab.id ? 'home_tab active' : 'home_tab'}
              onClick={() => setActiveTabId(tab.id)}
            >
              <div className="tab_content">{tab.label}</div>
            </button>
          ))}
        </div>

        <div className="rankings__panel home_tabs_content" role="tabpanel" aria-label={activeTab.label}>
          <div className="rankings__list-column">
            <div className="rankings__list" role="list">
              {activeTab.entries.map((entry, index) => (
                <article
                  key={entry.title}
                  className={previewEntry?.title === entry.title ? 'ranking-row tab_item is-current' : 'ranking-row tab_item'}
                  role="listitem"
                >
                  <button
                    type="button"
                    className="ranking-row__button"
                    onClick={() => setPreviewIndex(index)}
                    onMouseEnter={() => setPreviewIndex(index)}
                    onFocus={() => setPreviewIndex(index)}
                    aria-label={`${entry.title} 详情预览`}
                  >
                    <img className="ranking-row__image tab_item_cap" src={entry.image} alt={entry.title} />
                    <div className="ranking-row__content tab_item_content">
                      <h3 className="tab_item_name">{entry.title}</h3>
                      <div className="ranking-row__meta tab_item_details">
                        <div className="ranking-row__platforms" aria-hidden="true">
                          {normalizeArray(entry.platforms).map((platform) => (
                            <PlatformIcon key={platform} platform={platform} />
                          ))}
                        </div>
                        <p>{entry.description}</p>
                      </div>
                      <div className="ranking-row__release release_date">{entry.releaseDate ?? ''}</div>
                    </div>
                    <div className="ranking-row__pricing tab_item_discount" aria-label={`价格 ${entry.price}`}>
                      {entry.discountPercent ? (
                        <>
                          <div className="ranking-row__discount-badge discount_pct">-{entry.discountPercent}%</div>
                          <div className="ranking-row__discount-prices discount_prices">
                            {entry.originalPrice ? (
                              <span className="ranking-row__original-price discount_original_price">
                                {entry.originalPrice}
                              </span>
                            ) : null}
                            <span className="ranking-row__final-price discount_final_price">{entry.price}</span>
                          </div>
                        </>
                      ) : (
                        <span className="ranking-row__final-price ranking-row__final-price--plain">
                          {entry.price}
                        </span>
                      )}
                    </div>
                  </button>
                </article>
              ))}
            </div>

            <div className="rankings__footer">
              <span>查看更多：</span>
              <a href="#" className="rankings__footer-link">
                {activeTab.moreLabel}
              </a>
            </div>
          </div>

          {previewEntry ? (
            <aside className="rankings__preview">
              <h3 className="rankings__preview-title">{previewEntry.title}</h3>
              <div className="rankings__preview-review">
                <span className="rankings__preview-review-label">总体用户评测</span>
                <strong>{previewEntry.reviewSummary ?? '新品上架'}</strong>
                {previewEntry.reviewCount ? <span>({previewEntry.reviewCount})</span> : null}
              </div>
              <div className="rankings__preview-tags tab_item_top_tags" role="list" aria-label={`${previewEntry.title} 标签`}>
                {normalizeArray(previewEntry.topTags).map((tag) => (
                  <span key={tag} className="rankings__preview-tag top_tag" role="listitem">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="rankings__preview-screens" role="list" aria-label={`${previewEntry.title} 预览图`}>
                {normalizeArray(previewEntry.screenshots).map((screen) => (
                  <img key={screen} src={screen} alt="" className="rankings__preview-screen" role="listitem" />
                ))}
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function PlatformIcon({ platform }: { platform: RankingPlatform }) {
  if (platform === 'windows') {
    return (
      <svg viewBox="0 0 16 16" className="platform-icon" focusable="false" aria-hidden="true">
        <path d="M1 2.2 7 1v6H1zm7 0L15 1v6H8zM1 8h6v6L1 13zm7 0h7v5l-7 1z" fill="currentColor" />
      </svg>
    );
  }

  if (platform === 'mac') {
    return (
      <svg viewBox="0 0 16 16" className="platform-icon" focusable="false" aria-hidden="true">
        <path
          d="M10.2 3.2c.7-.8 1.1-1.8 1-2.7-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.8-1.6ZM12.8 8.5c0-2 1.7-3 1.8-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.6-.8-1.3 0-2.6.8-3.2 1.9-1.4 2.5-.4 6.1 1 8 .7 1 1.5 2.2 2.6 2.2s1.5-.7 2.8-.7c1.2 0 1.6.7 2.8.7 1.1 0 1.9-1 2.6-2 .8-1.1 1.2-2.2 1.2-2.3-.1 0-2.9-1.1-2.9-4.1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" className="platform-icon" focusable="false" aria-hidden="true">
      <path
        d="M8.2 2.1c1.3 0 2.3.6 3.1 1.5.8.8 1.3 2 1.3 3.3 0 1.3-.4 2.5-1.2 3.4l1.6 1.6-.9.9-1.6-1.6c-.9.7-2 .9-3.2.9-1.3 0-2.5-.4-3.4-1.3C2.9 9.9 2.4 8.8 2.4 7.5c0-1.3.5-2.5 1.4-3.4.9-1.3 2.5-2 4.4-2Zm0 1.4c-1.4 0-2.5.5-3.3 1.4-.7.7-1.1 1.6-1.1 2.7 0 1 .4 1.9 1 2.6.8.8 1.9 1.2 3 1.2 1.1 0 2.1-.3 2.8-1l-1.2-1.2.9-.9 1.2 1.2c.5-.7.8-1.5.8-2.5 0-1-.4-2-1-2.7-.8-.6-1.7-.8-2.7-.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
