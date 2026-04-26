import { getPendingLinkHref } from '../../../app/navigation';
import type { HardwareBanner } from '../types';

type HardwareBannerSectionProps = {
  banner: HardwareBanner;
};

export function HardwareBannerSection({ banner }: HardwareBannerSectionProps) {
  const pendingHref = getPendingLinkHref();

  return (
    <section className="home_ctn hardware_banner_shell">
      <div className="home_hardware_banner home_page_content">
        <a className="hardware_steamdeck_banner ds_no_flags" href={pendingHref} aria-label={banner.title}>
          <video
            className="steamdeck_banner_desktop"
            autoPlay
            loop
            muted
            playsInline
            poster={banner.desktopPoster}
          >
            <source src={banner.desktopVideoWebm} type="video/webm" />
            <source src={banner.desktopVideoMp4} type="video/mp4" />
          </video>
          <video
            className="steamdeck_banner_mobile"
            autoPlay
            loop
            muted
            playsInline
            poster={banner.mobilePoster}
          >
            <source src={banner.mobileVideoWebm} type="video/webm" />
            <source src={banner.mobileVideoMp4} type="video/mp4" />
          </video>
        </a>
      </div>
    </section>
  );
}
