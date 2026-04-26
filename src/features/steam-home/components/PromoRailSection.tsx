import { useState } from 'react';
import { getPendingLinkHref } from '../../../app/navigation';
import type { PromoCard } from '../types';

type PromoRailSectionProps = {
  title: string;
  cards: PromoCard[];
  actionLabel?: string;
  variant?: 'sale-grid' | 'capsule-grid';
  className?: string;
};

export function getNextPromoStartIndex(currentIndex: number, direction: number, maxIndex: number) {
  if (maxIndex === 0) {
    return 0;
  }

  if (direction > 0) {
    return currentIndex >= maxIndex ? 0 : currentIndex + 1;
  }

  return currentIndex <= 0 ? maxIndex : currentIndex - 1;
}

export function PromoRailSection({
  title,
  cards,
  actionLabel,
  variant = 'sale-grid',
  className
}: PromoRailSectionProps) {
  const pendingHref = getPendingLinkHref();
  const preferredCount = variant === 'sale-grid' ? 3 : 4;
  const visibleCount = Math.min(preferredCount, cards.length);
  const maxIndex = Math.max(0, cards.length - visibleCount);
  const dotCount = maxIndex + 1;
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = cards.slice(startIndex, startIndex + visibleCount);

  const move = (direction: number) => {
    setStartIndex((index) => getNextPromoStartIndex(index, direction, maxIndex));
  };

  return (
    <section className={`promo-section home_ctn promo-section--${variant}${className ? ` ${className}` : ''}`}>
      <div className="home_page_content">
        <div className="section-heading section-heading--spread">
          <h2 className="home_page_content_title">{title}</h2>
          {actionLabel ? <a className="section-link" href={pendingHref}>{actionLabel}</a> : null}
        </div>
        <div className="promo-rail__stage">
          {maxIndex > 0 ? (
            <button
              type="button"
              className="promo-rail__arrow home-slider-arrow left promo-rail__arrow--prev"
              aria-label={`${title} 上一页`}
              onClick={() => move(-1)}
            />
          ) : null}
          <div className="promo-rail" role="list">
            {visibleCards.map((card) => (
              <a
                key={card.title}
                className="promo-card sale_capsule"
                role="listitem"
                href={pendingHref}
              >
                <div className="promo-card__imageWrap">
                  <img src={card.image} alt={card.title} loading="lazy" />
                </div>
                <div className="promo-card__body">
                  {card.subtitle ? <p className="promo-card__subtitle">{card.subtitle}</p> : null}
                  <h3>{card.title}</h3>
                  {card.meta ? <p className="promo-card__meta">{card.meta}</p> : null}
                  <div className="promo-card__price">
                    {card.discount ? <span className="discount-badge">{card.discount}</span> : null}
                    {card.price ? <span>{card.price}</span> : null}
                  </div>
                </div>
              </a>
            ))}
          </div>
          {maxIndex > 0 ? (
            <button
              type="button"
              className="promo-rail__arrow home-slider-arrow right promo-rail__arrow--next"
              aria-label={`${title} 下一页`}
              onClick={() => move(1)}
            />
          ) : null}
        </div>
        {dotCount > 1 ? (
          <div className="slider_ctn promo-rail__dots" role="tablist" aria-label={`${title} 轮播`}>
            {Array.from({ length: dotCount }, (_, index) => (
              <button
                key={`${title}-${index}`}
                type="button"
                role="tab"
                aria-selected={index === startIndex}
                className={index === startIndex ? 'slider__dot is-active' : 'slider__dot'}
                onClick={() => setStartIndex(index)}
              >
                <span className="sr-only">
                  {title} 第 {index + 1} 页
                </span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
