import type { ReactElement } from 'react';
import { getPendingLinkHref } from '../../../app/navigation';
import type { FooterLinkGroup } from '../types';

const STEAM_LOGO_URL = `${import.meta.env.BASE_URL}steam/home/logos/logo_steam.svg`;
const VALVE_LOGO_URL = `${import.meta.env.BASE_URL}steam/home/logos/footer_logo_valve.png`;

type SocialLink = {
  label: string;
  href: string;
  Icon: () => ReactElement;
};

function YouTubeIcon() {
  return (
    <svg width="30" height="22" viewBox="0 0 30 22" fill="currentColor" aria-hidden="true">
      <path d="M11.9318 6.84835V15.7121L19.7727 11.2801L11.9318 6.84835ZM29.3731 18.5011C29.028 19.7918 28.0114 20.8083 26.7208 21.1533C24.3813 21.7803 14.9999 21.7803 14.9999 21.7803C14.9999 21.7803 5.61873 21.7803 3.27924 21.1533C1.98856 20.8083 0.971973 19.7918 0.626931 18.5011C0 16.1616 0 11.2802 0 11.2802C0 11.2802 0 6.3991 0.626931 4.05945C0.971973 2.76859 1.98843 1.7522 3.27924 1.40697C5.61873 0.780272 14.9999 0.780273 14.9999 0.780273C14.9999 0.780273 24.3813 0.780272 26.7208 1.40697C28.0114 1.7522 29.028 2.76859 29.3731 4.05945C30 6.3991 30 11.2803 30 11.2803C30 11.2803 30 16.1616 29.3731 18.5011Z" />
    </svg>
  );
}

function BlueskyIcon() {
  return (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="currentColor" aria-hidden="true">
      <path d="M5.20232 2.04977C7.95386 4.13518 10.9135 8.36354 12.0001 10.6327C13.0868 8.3637 16.0462 4.13514 18.7978 2.04977C20.7832 0.545013 24 -0.619279 24 3.08556C24 3.82547 23.5798 9.30116 23.3333 10.1901C22.4767 13.2807 19.355 14.069 16.5782 13.5919C21.432 14.4259 22.6667 17.1884 20.0001 19.9508C14.9357 25.1972 12.7211 18.6345 12.1534 16.9528C12.0494 16.6446 12.0007 16.5003 12 16.623C11.9993 16.5003 11.9506 16.6446 11.8466 16.9528C11.2791 18.6345 9.06454 25.1974 3.99987 19.9508C1.33323 17.1884 2.56794 14.4257 7.42179 13.5919C4.64492 14.069 1.5232 13.2807 0.666658 10.1901C0.420196 9.30108 0 3.82538 0 3.08556C0 -0.619279 3.21689 0.545013 5.20218 2.04977H5.20232Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
      <path d="M10.9998 0C4.92482 0 0 4.94301 0 11.0404C0 16.2179 3.55161 20.5625 8.34267 21.7558V14.4144H6.07452V11.0404H8.34267V9.58661C8.34267 5.82889 10.0371 4.08716 13.7128 4.08716C14.4097 4.08716 15.6122 4.2245 16.1041 4.3614V7.4196C15.8445 7.39221 15.3935 7.37853 14.8334 7.37853C13.0299 7.37853 12.333 8.06435 12.333 9.84716V11.0404H15.9259L15.3086 14.4144H12.333V22C17.7796 21.3398 22 16.6851 22 11.0404C21.9996 4.94301 17.0747 0 10.9998 0Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden="true">
      <path d="M11.9027 9.45261L19.3482 0.560547H17.5838L11.119 8.2814L5.95547 0.560547H0L7.8082 12.2358L0 21.5605H1.76443L8.59152 13.4071L14.0445 21.5605H20L11.9023 9.45261H11.9027ZM9.48608 12.3387L8.69495 11.1761L2.40018 1.92521H5.11025L10.1902 9.39099L10.9813 10.5536L17.5847 20.2579H14.8746L9.48608 12.3392V12.3387Z" />
    </svg>
  );
}

const socialLinks: SocialLink[] = [
  { label: 'YouTube', href: 'https://www.youtube.com/@Steam', Icon: YouTubeIcon },
  { label: 'Bluesky', href: 'https://bsky.app/profile/steampowered.com', Icon: BlueskyIcon },
  { label: 'Facebook', href: 'https://facebook.com/steam', Icon: FacebookIcon },
  { label: 'X', href: 'https://twitter.com/steam', Icon: XIcon }
];

type FooterProps = {
  groups: FooterLinkGroup[];
  lead: string[];
};

export function Footer({ groups, lead }: FooterProps) {
  const pendingHref = getPendingLinkHref();

  return (
    <footer className="page-footer page_footer_ctn">
      <div className="page_content">
        <div className="footer_content">
          <div className="page-footer__main">
            <div className="page-footer__lead">
              <div className="page-footer__brandRow">
                <a
                  className="page-footer__brand"
                  href={pendingHref}
                  aria-label="Steam 主页链接"
                >
                  <img className="brand-link__logo" src={STEAM_LOGO_URL} alt="Steam" />
                </a>
                <a
                  className="page-footer__valve"
                  href={pendingHref}
                  aria-label="Valve 主页链接"
                >
                  <img src={VALVE_LOGO_URL} alt="Valve" />
                </a>
              </div>

              <div className="page-footer__leadText">
                {lead.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="page-footer__socials" aria-label="Steam 社交图标">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    className="page-footer__socialLink"
                    href={pendingHref}
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="page-footer__grid">
              {groups.map((group) => (
                <section key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a href={pendingHref}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
