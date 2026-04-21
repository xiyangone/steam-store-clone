import type { HeroSlide } from '../types';

type HeroFestivalBannerProps = {
  slide: HeroSlide;
  primaryActionLabel: string;
  secondaryActionLabel: string;
};

export function HeroFestivalBanner({
  slide,
  primaryActionLabel: _primaryActionLabel,
  secondaryActionLabel: _secondaryActionLabel
}: HeroFestivalBannerProps) {
  return (
    <section
      className="festival-banner shell"
      style={
        {
          '--festival-background': slide.background,
          '--festival-accent': slide.accent
        } as React.CSSProperties
      }
    >
      <div className="festival-banner__takeover">
        <div className="festival-banner__media" aria-hidden="true">
          <div
            className="festival-banner__backdrop festival-banner__backdrop--desktop"
            style={{ backgroundImage: `url(${slide.desktopImage})` }}
          />
          <div
            className="festival-banner__backdrop festival-banner__backdrop--mobile"
            style={{ backgroundImage: `url(${slide.mobileImage})` }}
          />
          <video
            className="festival-banner__video"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={slide.desktopImage}
          >
            <source src={slide.videoWebm} type="video/webm" />
            <source src={slide.videoMp4} type="video/mp4" />
          </video>
          <div className="festival-banner__overlay">
            <div className="festival-banner__gradient festival-banner__gradient--left" />
            <div className="festival-banner__gradient festival-banner__gradient--right" />
          </div>
        </div>

        <a
          className="festival-banner__frame"
          href={slide.href}
          aria-label={slide.title}
        />
      </div>
    </section>
  );
}
