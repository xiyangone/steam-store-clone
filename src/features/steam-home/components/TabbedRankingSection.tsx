import { useEffect, useState } from 'react';
import { getPendingLinkHref } from '../../../app/navigation';
import { steamHomeAssets } from '../assets';
import type { RankingPlatform, RankingTab } from '../types';

type TabbedRankingSectionProps = {
  tabs: RankingTab[];
};

export function ensurePreviewIndex(
  current: Record<string, number>,
  activeTabId: string | undefined
) {
  if (!activeTabId) {
    return current;
  }

  return current[activeTabId] === undefined ? { ...current, [activeTabId]: 0 } : current;
}

export function setActivePreviewIndex(
  current: Record<string, number>,
  activeTabId: string | undefined,
  index: number
) {
  if (!activeTabId) {
    return current;
  }

  return current[activeTabId] === index ? current : { ...current, [activeTabId]: index };
}

export function TabbedRankingSection({ tabs }: TabbedRankingSectionProps) {
  const pendingHref = getPendingLinkHref();
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? '');
  const [previewIndexes, setPreviewIndexes] = useState<Record<string, number>>({});
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
  const activeTabKey = activeTab?.id;
  const activeTabLabel = activeTab?.label ?? '排行榜内容';
  const activeEntries = activeTab?.entries ?? [];
  const previewIndex = previewIndexes[activeTabKey ?? ''] ?? 0;
  const previewEntry = activeEntries[previewIndex] ?? activeEntries[0];

  useEffect(() => {
    setPreviewIndexes((current) => ensurePreviewIndex(current, activeTabKey));
  }, [activeTabKey]);

  const setPreviewIndex = (index: number) => {
    setPreviewIndexes((current) => setActivePreviewIndex(current, activeTabKey, index));
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
              aria-selected={activeTabKey === tab.id}
              className={activeTabKey === tab.id ? 'home_tab active' : 'home_tab'}
              onClick={() => setActiveTabId(tab.id)}
            >
              <div className="tab_content">{tab.label}</div>
            </button>
          ))}
        </div>

        <div className="rankings__panel home_tabs_content" role="tabpanel" aria-label={activeTabLabel}>
          <div className="rankings__list-column">
            <div className="rankings__list" role="list">
              {activeEntries.map((entry, index) => (
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
                <a href={pendingHref} className="rankings__footer-link">
                  {activeTab?.moreLabel ?? ''}
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
  const src =
    platform === 'windows'
      ? steamHomeAssets.icons.platformWindows
      : platform === 'mac'
        ? steamHomeAssets.icons.platformMac
        : steamHomeAssets.icons.platformLinux;

  return (
    <img className="platform-icon" src={src} alt="" loading="lazy" aria-hidden="true" />
  );
}
