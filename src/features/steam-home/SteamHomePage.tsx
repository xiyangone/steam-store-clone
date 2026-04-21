import { useState } from 'react';
import {
  browseLinksByLocale,
  categoryTilesByLocale,
  communityCardsByLocale,
  creatorCardsByLocale,
  dealCardsByLocale,
  discoveryQueueByLocale,
  featuredGamesByLocale,
  footerGroupsByLocale,
  hardwareBannerByLocale,
  heroSlidesByLocale,
  languageOptions,
  personalizedCardsByLocale,
  recentUpdateCardsByLocale,
  rankingTabsByLocale,
  steamDeckCardsByLocale,
  steamHomeLabels,
  storeMenuGroupsByLocale,
  topNavItemsByLocale,
  underThousandCardsByLocale,
  vrCardsByLocale
} from '../../mocks/steam-home';
import { Footer } from './components/Footer';
import { DiscoveryQueueSection } from './components/DiscoveryQueueSection';
import { GlobalHeader } from './components/GlobalHeader';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { HardwareBannerSection } from './components/HardwareBannerSection';
import { HeroFestivalBanner } from './components/HeroFestivalBanner';
import { PromoRailSection } from './components/PromoRailSection';
import { StoreNav } from './components/StoreNav';
import { TabbedRankingSection } from './components/TabbedRankingSection';

import type { Locale } from './types';

export function SteamHomePage() {
  const [locale, setLocale] = useState<Locale>('zh-CN');
  const [categoryStartIndex, setCategoryStartIndex] = useState(0);
  const labels = steamHomeLabels[locale];
  const topNavItems = topNavItemsByLocale[locale];
  const storeMenuGroups = storeMenuGroupsByLocale[locale];
  const heroSlides = heroSlidesByLocale[locale];
  const featuredGames = featuredGamesByLocale[locale];
  const dealCards = dealCardsByLocale[locale];
  const categoryTiles = categoryTilesByLocale[locale];
  const steamDeckCards = steamDeckCardsByLocale[locale];
  const hardwareBanner = hardwareBannerByLocale[locale];
  const personalizedCards = personalizedCardsByLocale[locale];
  const discoveryQueue = discoveryQueueByLocale[locale];
  const browseLinks = browseLinksByLocale[locale];
  const communityCards = communityCardsByLocale[locale];
  const recentUpdateCards = recentUpdateCardsByLocale[locale];
  const creatorCards = creatorCardsByLocale[locale];
  const underThousandCards = underThousandCardsByLocale[locale];
  const rankingTabs = rankingTabsByLocale[locale];
  const vrCards = vrCardsByLocale[locale];
  const footerGroups = footerGroupsByLocale[locale];
  const visibleCategoryCount = 4;
  const categoryMaxIndex = Math.max(0, categoryTiles.length - visibleCategoryCount);
  const visibleCategoryTiles = categoryTiles.slice(
    categoryStartIndex,
    categoryStartIndex + visibleCategoryCount
  );

  const moveCategory = (direction: number) => {
    if (categoryMaxIndex === 0) {
      return;
    }

    setCategoryStartIndex((index) => {
      if (direction > 0) {
        return index >= categoryMaxIndex ? 0 : index + 1;
      }

      return index <= 0 ? categoryMaxIndex : index - 1;
    });
  };

  return (
    <div className="steam-page">
      <GlobalHeader
        navItems={topNavItems}
        installLabel={labels.installLabel}
        signInLabel={labels.signInLabel}
        languageLabel={labels.languageButtonLabel}
        localeLabel={labels.languageButtonLabel}
        languageOptions={languageOptions}
        currentLocale={locale}
        onLocaleChange={setLocale}
      />
      <StoreNav
        groups={storeMenuGroups}
        searchPlaceholder={labels.searchPlaceholder}
        searchButtonLabel={labels.searchButtonLabel}
      />

      <main className="home_page_col_wrapper">
        <HeroFestivalBanner
          slide={heroSlides[0]}
          primaryActionLabel={labels.festivalPrimaryAction}
          secondaryActionLabel={labels.festivalSecondaryAction}
        />
        <FeaturedCarousel
          slides={featuredGames}
          initialIndex={0}
          title={labels.featuredTitle}
          previousLabel={labels.previousFeatureLabel}
          nextLabel={labels.nextFeatureLabel}
        />
        <PromoRailSection
          title={labels.dealsTitle}
          cards={dealCards}
          actionLabel={labels.dealsActionLabel}
          variant="sale-grid"
          className="deals-section"
        />

        <section className="category-browser home_ctn">
          <div className="home_page_content">
            <div className="section-heading">
              <h2 className="home_page_content_title">{labels.categoryTitle}</h2>
            </div>
            <div className="category-browser__stage">
              {categoryMaxIndex > 0 ? (
                <button
                  type="button"
                  className="promo-rail__arrow home-slider-arrow left promo-rail__arrow--prev"
                  aria-label={`${labels.categoryTitle} 上一页`}
                  onClick={() => moveCategory(-1)}
                />
              ) : null}
              <div className="category-browser__grid">
                {visibleCategoryTiles.map((tile) => (
                  <a
                    key={tile.title}
                    href="#"
                    className="category-tile"
                    style={{ '--tile-accent': tile.accent } as React.CSSProperties}
                  >
                    <span>{tile.title}</span>
                  </a>
                ))}
              </div>
              {categoryMaxIndex > 0 ? (
                <button
                  type="button"
                  className="promo-rail__arrow home-slider-arrow right promo-rail__arrow--next"
                  aria-label={`${labels.categoryTitle} 下一页`}
                  onClick={() => moveCategory(1)}
                />
              ) : null}
            </div>
            {categoryMaxIndex > 0 ? (
              <div className="slider_ctn category-browser__dots" role="tablist" aria-label={`${labels.categoryTitle} 轮播`}>
                {Array.from({ length: categoryMaxIndex + 1 }, (_, index) => (
                  <button
                    key={`${labels.categoryTitle}-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={index === categoryStartIndex}
                    className={index === categoryStartIndex ? 'slider__dot is-active' : 'slider__dot'}
                    onClick={() => setCategoryStartIndex(index)}
                  >
                    <span className="sr-only">
                      {labels.categoryTitle} 第 {index + 1} 页
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <PromoRailSection
          title={labels.deckTitle}
          cards={steamDeckCards}
          variant="capsule-grid"
          className="deck-section"
        />
        <HardwareBannerSection banner={hardwareBanner} />
        <PromoRailSection
          title={labels.personalizedTitle}
          cards={personalizedCards}
          actionLabel={labels.personalizedActionLabel}
          variant="sale-grid"
          className="recommended_by_steam_labs_ctn ir_ctn"
        />
        <DiscoveryQueueSection
          title={labels.discoveryQueueTitle}
          actionLabel={labels.discoveryQueueActionLabel}
          item={discoveryQueue}
        />

        <section className="browse-links home_ctn">
          <div className="home_page_content">
            <div className="section-heading">
              <h2 className="home_page_content_title">{labels.browseTitle}</h2>
            </div>
            <div className="button_container browse-links__row">
              {browseLinks.map((link) => (
                <a key={link.label} href={link.href} className="big_button">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <PromoRailSection
          title={labels.communityTitle}
          cards={communityCards}
          actionLabel={labels.communityActionLabel}
          variant="sale-grid"
          className="community_recommendations_by_steam_labs_ctn"
        />
        <PromoRailSection
          title={labels.recentUpdatesTitle}
          cards={recentUpdateCards}
          actionLabel={labels.recentUpdatesActionLabel}
          variant="sale-grid"
          className="recently_updated_block"
        />
        <PromoRailSection
          title={labels.creatorsTitle}
          cards={creatorCards}
          variant="sale-grid"
          className="recommended_creators_ctn"
        />
        <PromoRailSection
          title={labels.underThousandTitle}
          cards={underThousandCards}
          variant="capsule-grid"
          actionLabel={labels.underThousandTitle}
          className="under-thousand-section specials_under10_content"
        />
        <TabbedRankingSection tabs={rankingTabs} />
        <PromoRailSection
          title={labels.vrTitle}
          cards={vrCards}
          actionLabel={labels.vrActionLabel}
          variant="capsule-grid"
          className="vr-section best_selling_vr_ctn"
        />
      </main>

      <section className="home_ctn home_page_sign_in_ctn">
        <div className="home_page_content home_page_sign_in_ctn__inner">
          <p className="home_page_sign_in_ctn__prompt">{labels.preFooterPrompt}</p>
          <h2 className="home_page_sign_in_ctn__title">{labels.preFooterTitle}</h2>
          <a className="home_page_sign_in_ctn__button" href="#">
            {labels.preFooterLoginLabel}
          </a>
          <div className="home_page_sign_in_ctn__register" role="note" aria-label="注册提示">
            <span>{labels.preFooterRegisterPrefix}</span>
            <a href="#">注册</a>
            <span>并免费加入 Steam</span>
          </div>
        </div>
      </section>

      <Footer groups={footerGroups} lead={labels.footerLead} />
    </div>
  );
}
