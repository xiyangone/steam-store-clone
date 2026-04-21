import { useState } from 'react';
import type { PromoCard } from '../types';

type PromoRailSectionProps = {
  title: string;
  cards: PromoCard[];
  actionLabel?: string;
  variant?: 'sale-grid' | 'capsule-grid';
  className?: string;
};

export function PromoRailSection({
  title,
  cards,
  actionLabel,
  variant = 'sale-grid',
  className
}: PromoRailSectionProps) {
  const preferredCount = variant === 'sale-grid' ? 3 : 4;
  const visibleCount = Math.min(preferredCount, cards.length);
  const maxIndex = Math.max(0, cards.length - visibleCount);
  const dotCount = maxIndex + 1;
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = cards.slice(startIndex, startIndex + visibleCount);

  const move = (direction: number) => {
    if (maxIndex === 0) {
      return;
    }

    setStartIndex((index) => {
      if (direction > 0) {
        return index >= maxIndex ? 0 : index + 1;
      }

      return index <= 0 ? maxIndex : index - 1;
    });
  };

  return (
    <section className={`promo-section home_ctn promo-section--${variant}${className ? ` ${className}` : ''}`}>
      <div className="home_page_content">
        <div className="section-heading section-heading--spread">
          <h2 className="home_page_content_title">{title}</h2>
          {actionLabel ? <a className="section-link" href="#">{actionLabel}</a> : null}
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
              <article
                key={card.title}
                className="promo-card sale_capsule"
                role="listitem"
                tabIndex={0}
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
              </article>
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
