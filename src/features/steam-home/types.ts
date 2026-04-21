export type Locale = 'zh-CN' | 'en-US';

export type NavItem = {
  label: string;
  href: string;
};

export type LanguageOption = {
  code: Locale;
  label: string;
};

export type StoreMenuGroup = {
  label: string;
  featured?: string;
  items: string[];
};

export type HeroSlide = {
  title: string;
  subtitle: string;
  eyebrow: string;
  href: string;
  background: string;
  accent: string;
  videoWebm: string;
  videoMp4: string;
  desktopImage: string;
  mobileImage: string;
};

export type FeaturedGame = {
  title: string;
  status: string;
  price: string;
  hero: string;
  screenshots: string[];
  tags: string[];
};

export type PromoCard = {
  title: string;
  subtitle?: string;
  image: string;
  meta?: string;
  price?: string;
  discount?: string;
};

export type CategoryTile = {
  title: string;
  accent: string;
};

export type RankingPlatform = 'windows' | 'mac' | 'linux';

export type RankingEntry = {
  title: string;
  description: string;
  price: string;
  image: string;
  releaseDate: string;
  platforms: RankingPlatform[];
  topTags: string[];
  screenshots: string[];
  reviewSummary?: string;
  reviewCount?: string;
  discountPercent?: number;
  originalPrice?: string;
};

export type RankingTab = {
  id: string;
  label: string;
  moreLabel: string;
  entries: RankingEntry[];
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export type DiscoveryQueueItem = {
  title: string;
  description: string;
  hero: string;
  screenshots: string[];
  startLabel: string;
  secondaryLabel: string;
};

export type HardwareBanner = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  desktopPoster: string;
  desktopVideoWebm: string;
  desktopVideoMp4: string;
  mobilePoster: string;
  mobileVideoWebm: string;
  mobileVideoMp4: string;
};
