import { useEffect, useState } from 'react';
import type { FeaturedGame } from '../types';

type FeaturedCarouselProps = {
  slides: FeaturedGame[];
  initialIndex?: number;
  title: string;
  previousLabel: string;
  nextLabel: string;
};

export function FeaturedCarousel({
  slides,
  initialIndex = 0,
  title,
  previousLabel,
  nextLabel
}: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  useEffect(() => {
    setCurrentIndex((index) => {
      if (slides.length === 0) {
        return 0;
      }

      return Math.min(index, slides.length - 1);
    });
  }, [slides.length]);

  if (slides.length === 0) {
    return null;
  }

  const safeCurrentIndex = Math.min(currentIndex, slides.length - 1);
  const activeSlide = slides[safeCurrentIndex];

  const move = (direction: number) => {
    setCurrentIndex((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <section className="featured-carousel home_cluster_ctn home_ctn">
      <div className="home_page_content">
        <div className="section-heading">
          <h2 className="home_page_content_title">{title}</h2>
        </div>

        <div className="featured-card carousel_container maincap">
          <button
            type="button"
            className="carousel-arrow arrow home-slider-arrow left"
            aria-label={previousLabel}
            onClick={() => move(-1)}
          />

          <article className="store_main_capsule responsive_scroll_snap_start">
            <div
              className="capsule main_capsule"
              style={{ backgroundImage: `url(${activeSlide.hero})` }}
              aria-hidden="true"
            >
              {activeSlide.screenshots.map((shot, index) => (
                <div
                  key={shot}
                  className={index === 0 ? 'screenshot is-visible' : 'screenshot'}
                  style={{ backgroundImage: `url(${shot})` }}
                />
              ))}
            </div>

            <div className="featured-carousel__content app_details">
              <h3>{activeSlide.title}</h3>
              <p className="featured-carousel__status">{activeSlide.status}</p>
              <div className="featured-carousel__thumbs" aria-hidden="true">
                {activeSlide.screenshots.map((shot) => (
                  <div
                    key={shot}
                    className="featured-carousel__thumb"
                    style={{ backgroundImage: `url(${shot})` }}
                  />
                ))}
              </div>
              <div className="featured-carousel__meta">
                <div className="tag-row">
                  {activeSlide.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <strong>{activeSlide.price}</strong>
              </div>
            </div>
          </article>

          <button
            type="button"
            className="carousel-arrow arrow home-slider-arrow right"
            aria-label={nextLabel}
            onClick={() => move(1)}
          />
        </div>

        <div className="slider_ctn" role="tablist" aria-label="精选轮播">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              role="tab"
              aria-selected={index === safeCurrentIndex}
              className={index === safeCurrentIndex ? 'slider__dot is-active' : 'slider__dot'}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
