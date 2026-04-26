import type {
  CategoryTile,
  DiscoveryQueueItem,
  FeaturedGame,
  FooterLinkGroup,
  HeroSlide,
  HardwareBanner,
  LanguageOption,
  Locale,
  NavItem,
  PromoCard,
  RankingTab,
  StoreMenuGroup
} from '../features/steam-home/types';
import { steamHomeAsset } from '../features/steam-home/assets';

const asset = (name: string) => steamHomeAsset(name);

const eaPublisherSaleZhAssets = {
  href: 'https://store.steampowered.com/sale/eapublishersale?snr=1_4_4__118',
  videoWebm: steamHomeAsset('videos/festival-bg.webm'),
  videoMp4: steamHomeAsset('videos/festival-bg.mp4'),
  desktopImage: steamHomeAsset('images/festival-bg-zh.jpg'),
  mobileImage: steamHomeAsset('images/festival-bg-zh.jpg')
} as const;

const eaPublisherSaleEnAssets = {
  href: 'https://store.steampowered.com/sale/eapublishersale?snr=1_4_4__118',
  videoWebm: steamHomeAsset('videos/festival-bg-en.webm'),
  videoMp4: steamHomeAsset('videos/festival-bg-en.mp4'),
  desktopImage: steamHomeAsset('images/festival-bg-en.jpg'),
  mobileImage: steamHomeAsset('images/festival-bg-en.jpg')
} as const;

const steamDeckBannerZhAssets = {
  desktopPoster: steamHomeAsset('images/steamdeck-banner-desktop.jpg'),
  desktopVideoWebm: steamHomeAsset('videos/steamdeck-banner-desktop.webm'),
  desktopVideoMp4: steamHomeAsset('videos/steamdeck-banner-desktop.mp4'),
  mobilePoster: steamHomeAsset('images/steamdeck-banner-mobile.jpg'),
  mobileVideoWebm: steamHomeAsset('videos/steamdeck-banner-mobile.webm'),
  mobileVideoMp4: steamHomeAsset('videos/steamdeck-banner-mobile.mp4')
} as const;

const steamDeckBannerEnAssets = {
  desktopPoster: steamHomeAsset('images/steamdeck-banner-desktop-en.jpg'),
  desktopVideoWebm: steamHomeAsset('videos/steamdeck-banner-desktop-en.webm'),
  desktopVideoMp4: steamHomeAsset('videos/steamdeck-banner-desktop-en.mp4'),
  mobilePoster: steamHomeAsset('images/steamdeck-banner-mobile-en.jpg'),
  mobileVideoWebm: steamHomeAsset('videos/steamdeck-banner-mobile-en.webm'),
  mobileVideoMp4: steamHomeAsset('videos/steamdeck-banner-mobile-en.mp4')
} as const;

export const languageOptions: LanguageOption[] = [
  { code: 'zh-CN', label: '简体中文' },
  { code: 'en-US', label: 'English' }
];

export const topNavItemsByLocale: Record<Locale, NavItem[]> = {
  'zh-CN': [
    { label: '商店', href: '#' },
    { label: '社区', href: '#' },
    { label: '关于', href: '#' },
    { label: '客服', href: '#' }
  ],
  'en-US': [
    { label: 'STORE', href: '#' },
    { label: 'COMMUNITY', href: '#' },
    { label: 'ABOUT', href: '#' },
    { label: 'SUPPORT', href: '#' }
  ]
};

export const storeMenuGroupsByLocale: Record<Locale, StoreMenuGroup[]> = {
  'zh-CN': [
    {
      label: '浏览',
      featured: '探索新品、热销和免费游戏',
      items: ['新品与热门商品', '排行榜', '类别', '积分中心']
    },
    {
      label: '推荐',
      featured: '根据你的偏好定制内容',
      items: ['由好友推荐', '最近更新', 'Discovery Queue', 'Steam Deck']
    },
    {
      label: '类别',
      featured: '按题材快速筛选',
      items: ['动作', '角色扮演', '策略', '独立', '模拟']
    },
    {
      label: '硬件',
      featured: 'Steam 生态硬件',
      items: ['Steam Deck', 'Docking Station', 'Valve Index']
    },
    {
      label: '畅玩方式',
      featured: '跨设备畅玩',
      items: ['远程畅玩', '控制器', 'VR', '家庭共享']
    },
    {
      label: '特别栏目',
      featured: '每周策展与活动专题',
      items: ['新品节', 'EA 发行商特卖', 'Electronic Arts', '演示体验']
    }
  ],
  'en-US': [
    {
      label: 'Browse',
      featured: 'Explore new releases, top sellers, and free titles',
      items: ['New & Trending', 'Charts', 'Categories', 'Points Shop']
    },
    {
      label: 'Discover',
      featured: 'Recommendations tailored to your tastes',
      items: ['From Friends', 'Recently Updated', 'Discovery Queue', 'Steam Deck']
    },
    {
      label: 'Categories',
      featured: 'Jump into genres fast',
      items: ['Action', 'RPG', 'Strategy', 'Indie', 'Simulation']
    },
    {
      label: 'Hardware',
      featured: 'Steam ecosystem hardware',
      items: ['Steam Deck', 'Docking Station', 'Valve Index']
    },
    {
      label: 'Ways to Play',
      featured: 'Play across devices',
      items: ['Remote Play', 'Controller', 'VR', 'Family Sharing']
    },
    {
      label: 'Specials',
      featured: 'Curated events and weekly showcases',
      items: ['Festivals', 'EA Publisher Sale', 'Electronic Arts', 'Demos']
    }
  ]
};

export const heroSlidesByLocale: Record<Locale, HeroSlide[]> = {
  'zh-CN': [
    {
      title: 'Electronic Arts 发行商特卖',
      subtitle: 'EA SPORTS FC™ 26、Apex Legends™ 与更多 EA 作品现已集中登场。',
      eyebrow: '发行商特卖',
      href: eaPublisherSaleZhAssets.href,
      background:
        'linear-gradient(135deg, rgba(10,16,28,0.96), rgba(35,78,126,0.9))',
      accent: '#67c1f5',
      videoWebm: eaPublisherSaleZhAssets.videoWebm,
      videoMp4: eaPublisherSaleZhAssets.videoMp4,
      desktopImage: eaPublisherSaleZhAssets.desktopImage,
      mobileImage: eaPublisherSaleZhAssets.mobileImage
    }
  ],
  'en-US': [
    {
      title: 'Electronic Arts Publisher Sale',
      subtitle: 'Jump into featured EA deals, live-service staples, and new release spotlights.',
      eyebrow: 'Publisher Sale',
      href: eaPublisherSaleEnAssets.href,
      background:
        'linear-gradient(135deg, rgba(10,16,28,0.96), rgba(35,78,126,0.9))',
      accent: '#67c1f5',
      videoWebm: eaPublisherSaleEnAssets.videoWebm,
      videoMp4: eaPublisherSaleEnAssets.videoMp4,
      desktopImage: eaPublisherSaleEnAssets.desktopImage,
      mobileImage: eaPublisherSaleEnAssets.mobileImage
    }
  ]
};

export const featuredGamesByLocale: Record<Locale, FeaturedGame[]> = {
  'zh-CN': [
    {
      title: 'Shadowverse: Worlds Beyond',
      status: '现已推出',
      price: '免费开玩',
      hero: asset('featured/featured-zh-shadowverse-hero.jpg'),
      screenshots: [
        asset('featured/featured-zh-shadowverse-1.jpg'),
        asset('featured/featured-zh-shadowverse-2.jpg'),
        asset('featured/featured-zh-shadowverse-3.jpg'),
        asset('featured/featured-zh-shadowverse-4.jpg')
      ],
      tags: ['卡牌对战', '免费开玩', '动漫风格']
    },
    {
      title: 'Resident Evil Requiem',
      status: '现已推出',
      price: '¥ 8,990',
      hero: asset('featured/featured-zh-requiem-hero.jpg'),
      screenshots: [
        asset('featured/featured-zh-requiem-1.jpg'),
        asset('featured/featured-zh-requiem-2.jpg'),
        asset('featured/featured-zh-requiem-3.jpg'),
        asset('featured/featured-zh-requiem-4.jpg')
      ],
      tags: ['生存恐怖', '剧情驱动', '单人']
    },
    {
      title: '女神异闻录３ Reload',
      status: '热销商品',
      price: '-60% ¥ 3,071',
      hero: asset('featured/featured-zh-p3r-hero.jpg'),
      screenshots: [
        asset('featured/featured-zh-p3r-1.jpg'),
        asset('featured/featured-zh-p3r-2.jpg'),
        asset('featured/featured-zh-p3r-3.jpg'),
        asset('featured/featured-zh-p3r-4.jpg')
      ],
      tags: ['角色扮演', '校园生活', '日式']
    }
  ],
  'en-US': [
    {
      title: 'Resident Evil Requiem',
      status: 'Now Available',
      price: '¥ 8,990',
      hero: asset('featured/featured-en-requiem-hero.jpg'),
      screenshots: [
        asset('featured/featured-en-requiem-1.jpg'),
        asset('featured/featured-en-requiem-2.jpg'),
        asset('featured/featured-en-requiem-3.jpg'),
        asset('featured/featured-en-requiem-4.jpg')
      ],
      tags: ['Survival Horror', 'Story Rich', 'Singleplayer']
    },
    {
      title: 'Team Fortress 2',
      status: 'Just Updated!',
      price: 'Free To Play',
      hero: asset('featured/featured-en-tf2-hero.jpg'),
      screenshots: [
        asset('featured/featured-en-tf2-1.jpg'),
        asset('featured/featured-en-tf2-2.jpg'),
        asset('featured/featured-en-tf2-3.jpg'),
        asset('featured/featured-en-tf2-4.jpg')
      ],
      tags: ['Hero Shooter', 'Free to Play', 'Multiplayer']
    },
    {
      title: 'Starward',
      status: 'Now Available',
      price: 'Free To Play',
      hero: asset('featured/featured-en-starward-hero.jpg'),
      screenshots: [
        asset('featured/featured-en-starward-1.jpg'),
        asset('featured/featured-en-starward-2.jpg'),
        asset('featured/featured-en-starward-3.jpg'),
        asset('featured/featured-en-starward-4.jpg')
      ],
      tags: ['Action RPG', 'Anime', 'Free to Play']
    }
  ]
};

export const dealCardsByLocale: Record<Locale, PromoCard[]> = {
  'zh-CN': [
    {
      title: '七大罪：Origin',
      subtitle: '热销商品',
      image: asset('deal-origin.jpg'),
      meta: '全新开放世界动作冒险',
      price: '¥ 9,680'
    },
    {
      title: 'Counter-Strike 2',
      subtitle: '持续热门',
      image: asset('deal-cs2.jpg'),
      meta: '电竞热度持续上升',
      price: '免费开玩'
    },
    {
      title: 'Hades II',
      subtitle: '人气新品',
      image: asset('deal-hades2.jpg'),
      meta: '动作 Rogue-like 口碑爆发',
      price: '¥ 108'
    },
    {
      title: '火炬之光：无限',
      subtitle: '免费开玩',
      image: asset('deal-torchlight.jpg'),
      meta: '赛季更新上线',
      price: '免费'
    }
  ],
  'en-US': [
    {
      title: 'The Seven Deadly Sins: Origin',
      subtitle: 'Top Seller',
      image: asset('deal-origin.jpg'),
      meta: 'A brand new open-world action adventure',
      price: '$69.99'
    },
    {
      title: 'Counter-Strike 2',
      subtitle: 'Always Trending',
      image: asset('deal-cs2.jpg'),
      meta: 'Still dominating competitive charts',
      price: 'Free To Play'
    },
    {
      title: 'Hades II',
      subtitle: 'Popular New Release',
      image: asset('deal-hades2.jpg'),
      meta: 'Breakout action roguelike momentum',
      price: '$29.99'
    },
    {
      title: 'Torchlight: Infinite',
      subtitle: 'Free To Play',
      image: asset('deal-torchlight.jpg'),
      meta: 'A new season is live now',
      price: 'Free'
    }
  ]
};

export const categoryTilesByLocale: Record<Locale, CategoryTile[]> = {
  'zh-CN': [
    { title: '开放世界生存制作', accent: '#3266a8' },
    { title: '城建与殖民模拟', accent: '#5d7d32' },
    { title: '即时战术与潜行', accent: '#844c31' },
    { title: '合作刷宝动作角色扮演', accent: '#6d2f66' },
    { title: '轻松解谜与治愈', accent: '#2f7f87' }
  ],
  'en-US': [
    { title: 'Open World Survival Craft', accent: '#3266a8' },
    { title: 'City Builder & Colony Sim', accent: '#5d7d32' },
    { title: 'Real-Time Tactics & Stealth', accent: '#844c31' },
    { title: 'Co-op Loot-Driven Action RPG', accent: '#6d2f66' },
    { title: 'Cozy Puzzlers & Chill Escapes', accent: '#2f7f87' }
  ]
};

export const steamDeckCardsByLocale: Record<Locale, PromoCard[]> = {
  'zh-CN': [
    {
      title: 'Hades II',
      subtitle: 'Steam Deck 最热玩',
      image: asset('deck-hades2.jpg'),
      price: '¥ 108'
    },
    {
      title: 'Balatro',
      subtitle: '掌机节奏极佳',
      image: asset('deck-balatro.jpg'),
      price: '¥ 54'
    },
    {
      title: 'Vampire Survivors',
      subtitle: '随时来一局',
      image: asset('deck-vampire.jpg'),
      price: '¥ 22'
    },
    {
      title: 'Dead Cells',
      subtitle: '手柄体验出色',
      image: asset('cheap-breach.jpg'),
      price: '¥ 80'
    },
    {
      title: 'Cult of the Lamb',
      subtitle: '掌机上手即玩',
      image: asset('cheap-hike.jpg'),
      price: '¥ 92'
    }
  ],
  'en-US': [
    {
      title: 'Hades II',
      subtitle: 'Most Played on Steam Deck',
      image: asset('deck-hades2.jpg'),
      price: '$29.99'
    },
    {
      title: 'Balatro',
      subtitle: 'Perfect for handheld sessions',
      image: asset('deck-balatro.jpg'),
      price: '$14.99'
    },
    {
      title: 'Vampire Survivors',
      subtitle: 'Ideal for quick sessions',
      image: asset('deck-vampire.jpg'),
      price: '$4.99'
    },
    {
      title: 'Dead Cells',
      subtitle: 'Excellent with a controller',
      image: asset('cheap-breach.jpg'),
      price: '$24.99'
    },
    {
      title: 'Cult of the Lamb',
      subtitle: 'Easy to pick up handheld',
      image: asset('cheap-hike.jpg'),
      price: '$24.99'
    }
  ]
};

export const hardwareBannerByLocale: Record<Locale, HardwareBanner> = {
  'zh-CN': {
    title: 'Steam Deck',
    subtitle: '掌上畅玩你的 Steam 游戏库',
    description: '使用今天官网首页的中文 Steam Deck 横幅视频与海报，保持中段硬件区块的官方节奏。',
    href: 'https://store.steampowered.com/app/1675200/Steam_Deck/?utm_source=steamhomev2&snr=1_4_4__147',
    ...steamDeckBannerZhAssets
  },
  'en-US': {
    title: 'Steam Deck',
    subtitle: 'Take your Steam library anywhere',
    description: 'Use the current English Steam Deck banner media from the live storefront.',
    href: 'https://store.steampowered.com/app/1675200/Steam_Deck/?utm_source=steamhomev2&snr=1_4_4__147',
    ...steamDeckBannerEnAssets
  }
};

export const personalizedCardsByLocale: Record<Locale, PromoCard[]> = {
  'zh-CN': [
    {
      title: 'RimWorld',
      subtitle: '因为你玩过城建与模拟',
      image: asset('deal-origin.jpg'),
      meta: '复杂系统驱动的殖民生存体验',
      price: '¥ 129'
    },
    {
      title: 'Darkest Dungeon II',
      subtitle: '因为你喜欢高压策略',
      image: asset('deal-hades2.jpg'),
      meta: '回合制冒险与资源管理的压迫感',
      price: '¥ 136'
    },
    {
      title: 'Against the Storm',
      subtitle: '因为你玩过殖民模拟',
      image: asset('deal-torchlight.jpg'),
      meta: 'Roguelite 城建循环很适合长线体验',
      price: '¥ 108'
    },
    {
      title: 'Frostpunk 2',
      subtitle: '因为你关注生存经营',
      image: asset('cheap-breach.jpg'),
      meta: '大决策与都市危机管理',
      price: '¥ 149'
    },
    {
      title: 'Deep Rock Galactic',
      subtitle: '因为你常玩合作',
      image: asset('deck-hades2.jpg'),
      meta: '合作射击与刷宝节奏稳定',
      price: '¥ 90'
    }
  ],
  'en-US': [
    {
      title: 'RimWorld',
      subtitle: 'Because you play builders & sims',
      image: asset('deal-origin.jpg'),
      meta: 'A dense colony survival sandbox',
      price: '$34.99'
    },
    {
      title: 'Darkest Dungeon II',
      subtitle: 'Because you like punishing strategy',
      image: asset('deal-hades2.jpg'),
      meta: 'High-pressure turn-based expeditions',
      price: '$39.99'
    },
    {
      title: 'Against the Storm',
      subtitle: 'Because you enjoy colony sims',
      image: asset('deal-torchlight.jpg'),
      meta: 'A roguelite city-builder loop',
      price: '$29.99'
    },
    {
      title: 'Frostpunk 2',
      subtitle: 'Because you follow survival management',
      image: asset('cheap-breach.jpg'),
      meta: 'Massive decisions for a collapsing city',
      price: '$44.99'
    },
    {
      title: 'Deep Rock Galactic',
      subtitle: 'Because co-op keeps showing up in your library',
      image: asset('deck-hades2.jpg'),
      meta: 'Reliable co-op shooter momentum',
      price: '$29.99'
    }
  ]
};

export const communityCardsByLocale: Record<Locale, PromoCard[]> = {
  'zh-CN': [
    {
      title: 'Dota 2 创意工坊周热榜',
      subtitle: '社区推荐',
      image: asset('deal-cs2.jpg'),
      meta: '本周热度最高的创意工坊内容',
      price: '查看合集'
    },
    {
      title: '城市天际线模组精选',
      subtitle: 'Steam Labs',
      image: asset('deal-origin.jpg'),
      meta: '按标签与玩法偏好定制推荐',
      price: '查看更多'
    },
    {
      title: '摄影模式截图展',
      subtitle: '社区热帖',
      image: asset('cheap-hike.jpg'),
      meta: '围绕开放世界与冒险游戏的社区作品',
      price: '进入专题'
    },
    {
      title: '生存建造讨论精选',
      subtitle: '本日推荐',
      image: asset('cheap-breach.jpg'),
      meta: '围绕多人协作与基地建设展开',
      price: '阅读讨论'
    },
    {
      title: '独立游戏发现清单',
      subtitle: '标签探索',
      image: asset('deck-balatro.jpg'),
      meta: '按社区喜好快速筛选新品',
      price: '继续浏览'
    }
  ],
  'en-US': [
    {
      title: 'Dota 2 Workshop Weekly',
      subtitle: 'Community Recommendations',
      image: asset('deal-cs2.jpg'),
      meta: 'The hottest Workshop highlights this week',
      price: 'View Collection'
    },
    {
      title: 'Cities: Skylines Mod Picks',
      subtitle: 'Steam Labs',
      image: asset('deal-origin.jpg'),
      meta: 'Tag-driven recommendations tuned by the community',
      price: 'Explore More'
    },
    {
      title: 'Photo Mode Showcase',
      subtitle: 'Community Spotlight',
      image: asset('cheap-hike.jpg'),
      meta: 'A wall of open-world and adventure captures',
      price: 'Open Hub'
    },
    {
      title: 'Survival Builder Discussions',
      subtitle: "Today's Pick",
      image: asset('cheap-breach.jpg'),
      meta: 'A curated mix of co-op and base-building threads',
      price: 'Read Threads'
    },
    {
      title: 'Indie Discovery List',
      subtitle: 'Tag Explorer',
      image: asset('deck-balatro.jpg'),
      meta: 'Quickly narrow down what the community is into',
      price: 'Keep Browsing'
    }
  ]
};

export const recentUpdateCardsByLocale: Record<Locale, PromoCard[]> = {
  'zh-CN': [
    {
      title: 'No Man’s Sky',
      subtitle: '最近更新',
      image: asset('deal-origin.jpg'),
      meta: '大型更新带来新探索循环',
      price: '查看更新'
    },
    {
      title: 'Warframe',
      subtitle: '内容扩展',
      image: asset('deal-cs2.jpg'),
      meta: '新任务线与掉落调整',
      price: '阅读公告'
    },
    {
      title: 'Project Zomboid',
      subtitle: '测试分支',
      image: asset('cheap-breach.jpg'),
      meta: 'Build 42 继续补充生存系统',
      price: '进入页面'
    },
    {
      title: 'Dave the Diver',
      subtitle: '联动活动',
      image: asset('cheap-hike.jpg'),
      meta: '限时内容与奖励回归',
      price: '了解更多'
    },
    {
      title: 'Baldur’s Gate 3',
      subtitle: '补丁说明',
      image: asset('deck-hades2.jpg'),
      meta: '修复与平衡更新继续推进',
      price: '查看补丁'
    }
  ],
  'en-US': [
    {
      title: 'No Man’s Sky',
      subtitle: 'Recently Updated',
      image: asset('deal-origin.jpg'),
      meta: 'A major patch adds a fresh exploration loop',
      price: 'Patch Notes'
    },
    {
      title: 'Warframe',
      subtitle: 'Expansion Update',
      image: asset('deal-cs2.jpg'),
      meta: 'New quest content and drop adjustments',
      price: 'Read News'
    },
    {
      title: 'Project Zomboid',
      subtitle: 'Test Branch',
      image: asset('cheap-breach.jpg'),
      meta: 'Build 42 keeps expanding survival systems',
      price: 'Open Store Page'
    },
    {
      title: 'Dave the Diver',
      subtitle: 'Crossover Event',
      image: asset('cheap-hike.jpg'),
      meta: 'Limited-time activities return',
      price: 'Learn More'
    },
    {
      title: 'Baldur’s Gate 3',
      subtitle: 'Patch Roundup',
      image: asset('deck-hades2.jpg'),
      meta: 'More fixes and balance updates roll out',
      price: 'View Patch'
    }
  ]
};

export const creatorCardsByLocale: Record<Locale, PromoCard[]> = {
  'zh-CN': [
    {
      title: 'Paradox Interactive',
      subtitle: '来自您了解的开发者和发行商',
      image: asset('ck3-hero.jpg'),
      meta: '因为你玩过大战略与中世纪题材',
      price: '查看厂商页'
    },
    {
      title: 'Supergiant Games',
      subtitle: '你可能会继续关注',
      image: asset('deal-hades2.jpg'),
      meta: '动作独立游戏口碑稳定',
      price: '浏览作品'
    },
    {
      title: 'Valve',
      subtitle: '与你的游戏记录相关',
      image: asset('vr-alyx.jpg'),
      meta: '射击、VR 与在线竞技都在继续更新',
      price: '查看合集'
    },
    {
      title: 'Motion Twin',
      subtitle: '因为你常玩 Roguelite',
      image: asset('cheap-breach.jpg'),
      meta: '快节奏动作作品高度重合',
      price: '进入厂商页'
    },
    {
      title: 'Klei',
      subtitle: '因为你玩过生存经营',
      image: asset('cheap-hike.jpg'),
      meta: '从模拟到求生都很贴近你的偏好',
      price: '发现更多'
    }
  ],
  'en-US': [
    {
      title: 'Paradox Interactive',
      subtitle: 'From developers and publishers you know',
      image: asset('ck3-hero.jpg'),
      meta: 'Because grand strategy keeps showing up in your library',
      price: 'Publisher Page'
    },
    {
      title: 'Supergiant Games',
      subtitle: 'Likely to stay on your radar',
      image: asset('deal-hades2.jpg'),
      meta: 'A reliable run of action indies',
      price: 'Browse Games'
    },
    {
      title: 'Valve',
      subtitle: 'Tied to your play history',
      image: asset('vr-alyx.jpg'),
      meta: 'VR, shooters, and online staples keep intersecting',
      price: 'View Collection'
    },
    {
      title: 'Motion Twin',
      subtitle: 'Because roguelites keep surfacing for you',
      image: asset('cheap-breach.jpg'),
      meta: 'Fast action overlaps with your library',
      price: 'Open Page'
    },
    {
      title: 'Klei',
      subtitle: 'Because survival management fits your tastes',
      image: asset('cheap-hike.jpg'),
      meta: 'A strong mix of sim and survival titles',
      price: 'Discover More'
    }
  ]
};

export const discoveryQueueByLocale: Record<Locale, DiscoveryQueueItem> = {
  'zh-CN': {
    title: '您的探索队列',
    description: '登录以查看和浏览您个性化的探索队列，或直接开始一个静态预览队列。',
    hero: asset('ow-hero.jpg'),
    screenshots: [asset('ow-1.jpg'), asset('ck3-1.jpg'), asset('cs2-1.jpg')],
    startLabel: '浏览您的队列',
    secondaryLabel: '开始另一个队列 >>'
  },
  'en-US': {
    title: 'Your Discovery Queue',
    description: 'Sign in to browse your personalized queue, or start a static preview queue right away.',
    hero: asset('ow-hero.jpg'),
    screenshots: [asset('ow-1.jpg'), asset('ck3-1.jpg'), asset('cs2-1.jpg')],
    startLabel: 'Browse Your Queue',
    secondaryLabel: 'Start Another Queue >>'
  }
};

export const underThousandCardsByLocale: Record<Locale, PromoCard[]> = {
  'zh-CN': [
    { title: 'Slay the Spire', image: asset('cheap-slay.jpg'), price: '¥ 92' },
    { title: 'Mini Metro', image: asset('cheap-metro.jpg'), price: '¥ 42' },
    { title: 'A Short Hike', image: asset('cheap-hike.jpg'), price: '¥ 58' },
    { title: 'Into the Breach', image: asset('cheap-breach.jpg'), price: '¥ 88' },
    { title: 'Balatro', image: asset('deck-balatro.jpg'), price: '¥ 54' },
    { title: 'Vampire Survivors', image: asset('deck-vampire.jpg'), price: '¥ 22' }
  ],
  'en-US': [
    { title: 'Slay the Spire', image: asset('cheap-slay.jpg'), price: '$24.99' },
    { title: 'Mini Metro', image: asset('cheap-metro.jpg'), price: '$9.99' },
    { title: 'A Short Hike', image: asset('cheap-hike.jpg'), price: '$7.99' },
    { title: 'Into the Breach', image: asset('cheap-breach.jpg'), price: '$14.99' },
    { title: 'Balatro', image: asset('deck-balatro.jpg'), price: '$14.99' },
    { title: 'Vampire Survivors', image: asset('deck-vampire.jpg'), price: '$4.99' }
  ]
};

export const vrCardsByLocale: Record<Locale, PromoCard[]> = {
  'zh-CN': [
    { title: 'Half-Life: Alyx', image: asset('vr-alyx.jpg'), price: '¥ 198' },
    { title: 'Beat Saber', image: asset('vr-beat-saber.jpg'), price: '¥ 108' },
    { title: 'BONELAB', image: asset('vr-bonelab.jpg'), price: '¥ 116' },
    { title: 'Pistol Whip', image: asset('cheap-breach.jpg'), price: '¥ 90' },
    { title: 'Into the Radius', image: asset('cheap-hike.jpg'), price: '¥ 108' }
  ],
  'en-US': [
    { title: 'Half-Life: Alyx', image: asset('vr-alyx.jpg'), price: '$59.99' },
    { title: 'Beat Saber', image: asset('vr-beat-saber.jpg'), price: '$29.99' },
    { title: 'BONELAB', image: asset('vr-bonelab.jpg'), price: '$39.99' },
    { title: 'Pistol Whip', image: asset('cheap-breach.jpg'), price: '$29.99' },
    { title: 'Into the Radius', image: asset('cheap-hike.jpg'), price: '$29.99' }
  ]
};

export const rankingTabsByLocale: Record<Locale, RankingTab[]> = {
  'zh-CN': [
    {
      id: 'trending',
      label: '人气蹿升的新品',
      moreLabel: '新品',
      entries: [
        {
          title: '自动售货机模拟器',
          description: '工作模拟、治愈系、模拟、休闲',
          price: '¥1,020',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3622640/52faee467d692ff5ff54ad4e23df68e9002f7156/capsule_184x69_alt_assets_0_schinese.jpg?t=1777139070',
          releaseDate: '2026 年 4 月 25 日',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['工作模拟', '治愈系', '模拟', '休闲'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3622640/81178328e0140e5d404f3c3a5fb493e9f9cb28c9/ss_81178328e0140e5d404f3c3a5fb493e9f9cb28c9.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3622640/f05c02e45ccab460ff4ff2a24c6f578b6158ca80/ss_f05c02e45ccab460ff4ff2a24c6f578b6158ca80.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3622640/11e54368c38c950d9c402105715fd47e8802f77c/ss_11e54368c38c950d9c402105715fd47e8802f77c.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3622640/0371d810a604e62a3e95ef450ce1d74f6ab461b9/ss_0371d810a604e62a3e95ef450ce1d74f6ab461b9.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '66',
          discountPercent: 40,
          originalPrice: '¥1,700'
        },
        {
          title: '城堡放置',
          description: '挂机游戏、点击游戏、塔防、休闲',
          price: '¥405',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4082900/4bc12f181f72225be3d1133b5aea5384f7d1e158/capsule_184x69_schinese.jpg?t=1777055259',
          releaseDate: '2026 年 4 月 25 日',
          platforms: ['windows', 'mac'],
          topTags: ['挂机游戏', '点击游戏', '塔防', '休闲'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4082900/26fe1e09e1f4cdc83c344ba74d27de296bdae12e/ss_26fe1e09e1f4cdc83c344ba74d27de296bdae12e.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4082900/89467a100b9be19f6c016d4f2bad9a5c64ad90b7/ss_89467a100b9be19f6c016d4f2bad9a5c64ad90b7.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4082900/13b04b3f130794e95d7e05627792b413eac3a1e9/ss_13b04b3f130794e95d7e05627792b413eac3a1e9.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4082900/0bdadaf49f635cd72cb99fcf39d4b3415acc573a/ss_0bdadaf49f635cd72cb99fcf39d4b3415acc573a.600x338.jpg'
          ],
          reviewSummary: '好评',
          reviewCount: '35',
          discountPercent: 10,
          originalPrice: '¥450'
        },
        {
          title: 'Neon Village',
          description: '牌组构建式类 Rogue、牌组构建、类 Rogue、策略',
          price: '¥960',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2916670/4ece06b4ef99b21be9b2cf7cf6a873e7c34837d4/capsule_184x69.jpg?t=1777016485',
          releaseDate: '2026 年 4 月 24 日',
          platforms: ['windows'],
          topTags: ['牌组构建式类 Rogue', '牌组构建', '类 Rogue', '策略'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2916670/ss_1576815c38cd3dfc24f01246a72cd882124385d2.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2916670/1771084c4ec3b5411b470abdb8248186d9901ab0/ss_1771084c4ec3b5411b470abdb8248186d9901ab0.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2916670/eba4cd8f84b77e96b7b2e3e08dc35a4f5ef78a2e/ss_eba4cd8f84b77e96b7b2e3e08dc35a4f5ef78a2e.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2916670/81047d5e7abcc16474fff912437e58d609aab006/ss_81047d5e7abcc16474fff912437e58d609aab006.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '124',
          discountPercent: 20,
          originalPrice: '¥1,200'
        },
        {
          title: 'Dread Trials',
          description: '冒险、角色扮演、动作、日系角色扮演',
          price: '¥1,620',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/854080/fe255646d83e7130990aea6a19d0cd486aab61fd/capsule_184x69.jpg?t=1777006836',
          releaseDate: '2026 年 4 月 24 日',
          platforms: ['windows'],
          topTags: ['冒险', '角色扮演', '动作', '日系角色扮演'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/854080/a006b35367ab74b1397f52951a65d3a231e8b750/ss_a006b35367ab74b1397f52951a65d3a231e8b750.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/854080/2d1f610af37be2f782b96be338c5c6371bf685f2/ss_2d1f610af37be2f782b96be338c5c6371bf685f2.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/854080/ce6dd5578d54db644f28b48c37e68690be1bae6d/ss_ce6dd5578d54db644f28b48c37e68690be1bae6d.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/854080/d11d89d24da5667e190ce7c5ce31002c5182ea1d/ss_d11d89d24da5667e190ce7c5ce31002c5182ea1d.600x338.jpg'
          ],
          reviewSummary: '好评',
          reviewCount: '37',
          discountPercent: 10,
          originalPrice: '¥1,800'
        },
        {
          title: '晕晕电波症候群',
          description: '节奏、心理恐怖、冒险、动漫',
          price: '¥1,971',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/49fc1d453e7ac6debbde3d276b158b820e5569a4/capsule_184x69_schinese.jpg?t=1777123556',
          releaseDate: '2026 年 4 月 24 日',
          platforms: ['windows'],
          topTags: ['节奏', '心理恐怖', '冒险', '动漫'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/9111298a8e027b996f0d245a53fd9a61d05c758a/ss_9111298a8e027b996f0d245a53fd9a61d05c758a.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/67743fd141f4ba3d68fc9587fe2975853198acac/ss_67743fd141f4ba3d68fc9587fe2975853198acac.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/ec0f5c8899355a2d6bec1699760539e16d1694f4/ss_ec0f5c8899355a2d6bec1699760539e16d1694f4.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/b72b692c16b3788e2b58fdeeb0f8dc0467de7d65/ss_b72b692c16b3788e2b58fdeeb0f8dc0467de7d65.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '977',
          discountPercent: 10,
          originalPrice: '¥2,190'
        },
        {
          title: '王牌战略：机甲新星',
          description: '牌组构建、机甲、类 Rogue、卡牌游戏',
          price: '¥1,634',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3127770/7552e200be2f9f2585ed27c00d7850f11caa1f0c/capsule_184x69_schinese.jpg?t=1777103152',
          releaseDate: '2026 年 4 月 24 日',
          platforms: ['windows'],
          topTags: ['牌组构建', '机甲', '类 Rogue', '卡牌游戏'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3127770/a8f21833f4a6ff50a5367740f3f343a08b47d841/ss_a8f21833f4a6ff50a5367740f3f343a08b47d841.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3127770/589d0a1a7c47734b7cfec88ed1eb9e12c29ecbd2/ss_589d0a1a7c47734b7cfec88ed1eb9e12c29ecbd2.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3127770/5f1f8e0a10e60746a85fb766533668aa32b0d6bb/ss_5f1f8e0a10e60746a85fb766533668aa32b0d6bb.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3127770/f0bb8e442a96b96aa31404e891a48022659223e0/ss_f0bb8e442a96b96aa31404e891a48022659223e0.600x338.jpg'
          ],
          reviewSummary: '好评',
          reviewCount: '38',
          discountPercent: 14,
          originalPrice: '¥1,900'
        },
        {
          title: '异形工厂2',
          description: '管理、自动化、策略、未来',
          price: '¥2,240',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2162800/5ec2bda421bfa327f6cf5fec640d302de89bb3f2/capsule_184x69_alt_assets_7_schinese.jpg?t=1776956035',
          releaseDate: '2026 年 4 月 23 日',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['管理', '自动化', '策略', '未来'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2162800/16462abda91738df594156d4b2f0a3869bb03d49/ss_16462abda91738df594156d4b2f0a3869bb03d49.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2162800/0aa87879900b062d7cdda1594d58ecb1cdb4a389/ss_0aa87879900b062d7cdda1594d58ecb1cdb4a389.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2162800/59577f5efa6411e1acc46a045d9d0108e95aae06/ss_59577f5efa6411e1acc46a045d9d0108e95aae06.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2162800/ec7e9bd126c7c18cb01226c1ef9d9adaa0e20a9b/ss_ec7e9bd126c7c18cb01226c1ef9d9adaa0e20a9b.600x338.jpg'
          ],
          reviewSummary: '好评如潮',
          reviewCount: '1,209',
          discountPercent: 20,
          originalPrice: '¥2,800'
        },
        {
          title: 'Forefront',
          description: '第一人称射击、玩家对战、虚拟现实、射击',
          price: '¥4,400',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2981220/56debeb3451e74dddd84fd9d8a44f34b3bae0e66/capsule_184x69.jpg?t=1776937719',
          releaseDate: '2026 年 4 月 23 日',
          platforms: ['windows'],
          topTags: ['第一人称射击', '玩家对战', '虚拟现实', '射击'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2981220/e44e94eec6c549a479935d47d3125f16ade8cba3/ss_e44e94eec6c549a479935d47d3125f16ade8cba3.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2981220/10d8b55c10183767d12fa399655633a95e7852bd/ss_10d8b55c10183767d12fa399655633a95e7852bd.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2981220/c123cc84a8fc8ad615b4aacc23b0dda1f9f2c8ea/ss_c123cc84a8fc8ad615b4aacc23b0dda1f9f2c8ea.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2981220/01caac5b55e5976db10072cb384a13e8bee64e61/ss_01caac5b55e5976db10072cb384a13e8bee64e61.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '1,471'
        },
        {
          title: '明日潮汐 Tides of Tomorrow 🌊',
          description: '选择取向、剧情丰富、冒险、第一人称',
          price: '¥3,511',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2678080/22ae2ba090288aaa7a5944d5679d23d3a134f29b/capsule_184x69_schinese.jpg?t=1776956314',
          releaseDate: '2026 年 4 月 22 日',
          platforms: ['windows'],
          topTags: ['选择取向', '剧情丰富', '冒险', '第一人称'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2678080/4fa64bdd01c9acb9def8fb33f127610e8a2e041b/ss_4fa64bdd01c9acb9def8fb33f127610e8a2e041b.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2678080/52aaab12cfcc14aace46ddde6aa3f8fe95529cbb/ss_52aaab12cfcc14aace46ddde6aa3f8fe95529cbb.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2678080/d92d4eb5ae07ebb714370437bf384903d62ee9bf/ss_d92d4eb5ae07ebb714370437bf384903d62ee9bf.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2678080/32828fbf2f65901da1d3437aa60ddb0134aa820c/ss_32828fbf2f65901da1d3437aa60ddb0134aa820c.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '155',
          discountPercent: 20,
          originalPrice: '¥4,389'
        },
        {
          title: '同行：月球逃脱',
          description: '解谜、在线合作、合作战役、密室逃脱',
          price: '¥1,080',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3744430/02d9ed13624e8ac3ac4806c7ae8c909a49632580/capsule_184x69_schinese.jpg?t=1776855018',
          releaseDate: '2026 年 4 月 21 日',
          platforms: ['windows'],
          topTags: ['解谜', '在线合作', '合作战役', '密室逃脱'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3744430/ab91cc38bd2c70c4ec4dc53508fcf5bb46905c41/ss_ab91cc38bd2c70c4ec4dc53508fcf5bb46905c41.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3744430/823b3e5dff99d20460daadfbc2c868f3f2ca1849/ss_823b3e5dff99d20460daadfbc2c868f3f2ca1849.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3744430/8e034bb1834e863546316fc43027d837f91bbb88/ss_8e034bb1834e863546316fc43027d837f91bbb88.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3744430/0b139182a90ef2aecd1e41a5cf783a9440837f09/ss_0b139182a90ef2aecd1e41a5cf783a9440837f09.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '110',
          discountPercent: 10,
          originalPrice: '¥1,200'
        }
      ]
    },
    {
      id: 'top-sellers',
      label: '热销商品',
      moreLabel: '热销商品',
      entries: [
        {
          title: 'Counter-Strike 2',
          description: '第一人称射击、射击、多人、竞技',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_184x69_schinese.jpg?t=1749053861',
          releaseDate: '',
          platforms: ['windows', 'linux'],
          topTags: ['第一人称射击', '射击', '多人', '竞技'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_13bb35638c0267759276f511ee97064773b37a51.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_d830cfd0550fbb64d80e803e93c929c3abb02056.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_0f8cf82d019c614760fd20801f2bb4001da7ea77.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_796601d9d67faf53486eeb26d0724347cea67ddc.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '1,381,896'
        },
        {
          title: 'PRAGMATA',
          description: '可爱、科幻、动作、第三人称射击',
          price: '¥7,990',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/3e7cf55cf72a980ac94cf45d4212e8f0cb566f7f/capsule_184x69.jpg?t=1777005719',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['可爱', '科幻', '动作', '第三人称射击'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/8913ab7128c72ddd1b407c274e9615b2f6e658a2/ss_8913ab7128c72ddd1b407c274e9615b2f6e658a2.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/9699288b90d0aad320e998f107b59edd27e9ea61/ss_9699288b90d0aad320e998f107b59edd27e9ea61.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/26773713a2435c8edc2eac5e7eb234324b3b002f/ss_26773713a2435c8edc2eac5e7eb234324b3b002f.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/62486c0475c7bf1a14889d61a51ad24f09e5f044/ss_62486c0475c7bf1a14889d61a51ad24f09e5f044.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '3,195'
        },
        {
          title: 'Windrose: 风启之旅',
          description: '抢先体验、海盗、在线合作、开放世界生存制作',
          price: '¥3,400',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3041230/cd75685a04b997e230b141fcc4a6ed5c1770b453/capsule_184x69_schinese.jpg?t=1776704774',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['抢先体验', '海盗', '在线合作', '开放世界生存制作'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3041230/65dfc1db4ae81fd96d496c0e3bb9640281eafe0c/ss_65dfc1db4ae81fd96d496c0e3bb9640281eafe0c.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3041230/9d7ee982069054a1ba23dc881f26f1f83f356daa/ss_9d7ee982069054a1ba23dc881f26f1f83f356daa.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3041230/f83b7aa29874e6e57fd20ab0642269536723ac1a/ss_f83b7aa29874e6e57fd20ab0642269536723ac1a.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3041230/464db0a63a2d03bb8e75ecf04e24f8949b03d500/ss_464db0a63a2d03bb8e75ecf04e24f8949b03d500.600x338.jpg'
          ],
          reviewSummary: '褒贬不一',
          reviewCount: '1,029'
        },
        {
          title: '七大罪：Origin',
          description: '开放世界、免费开玩、动漫、多人',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/f7ce109f339c8ad6c1f8839313c64806a9edc203/capsule_184x69.jpg?t=1777011324',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['开放世界', '免费开玩', '动漫', '多人'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/33059da9c5bc2e3a9b4335700d7453970cba7700/ss_33059da9c5bc2e3a9b4335700d7453970cba7700.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/53373b98ce2cec50ffdf76f7cd072aa8f6eda7d2/ss_53373b98ce2cec50ffdf76f7cd072aa8f6eda7d2.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/ec066430e514ec4ac7a6c7c92e4c7dc932be6cdb/ss_ec066430e514ec4ac7a6c7c92e4c7dc932be6cdb.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/58fc82c529edeaa16fbdf16b6bdd329cae8b80d7/ss_58fc82c529edeaa16fbdf16b6bdd329cae8b80d7.600x338.jpg'
          ],
          reviewSummary: '多半差评',
          reviewCount: '589'
        },
        {
          title: 'Apex Legends™',
          description: '免费开玩、大逃杀、多人、第一人称射击',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/b2163cc2e8d366e26d8d463d178d86690d9a402e/capsule_184x69.jpg?t=1770753360',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['免费开玩', '大逃杀', '多人', '第一人称射击'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/d86d5fe798addd4ff7219938f891268affb1ea2d/ss_d86d5fe798addd4ff7219938f891268affb1ea2d.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/c1f5eb613c365fc96f5d59dd69bd852793929f69/ss_c1f5eb613c365fc96f5d59dd69bd852793929f69.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/f786d0d1e567be0e5a801a62855970f9b6bae6fd/ss_f786d0d1e567be0e5a801a62855970f9b6bae6fd.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/3424111e83c2adfc7e6c056573d5089c27fdc711/ss_3424111e83c2adfc7e6c056573d5089c27fdc711.600x338.jpg'
          ],
          reviewSummary: '褒贬不一',
          reviewCount: '261,723'
        },
        {
          title: 'Slay the Spire 2',
          description: '类 Rogue、策略、卡牌游戏、牌组构建',
          price: '¥2,800',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/fb0ad136e9eaa4297a1ab3440d88ecb7209f44a2/capsule_184x69.jpg?t=1776735385',
          releaseDate: '',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['类 Rogue', '策略', '卡牌游戏', '牌组构建'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/c3db69efd984ef012ae85c5b426663720152f0a4/ss_c3db69efd984ef012ae85c5b426663720152f0a4.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/0fdb2940c0d367a40b2be6433daf12e3634089cf/ss_0fdb2940c0d367a40b2be6433daf12e3634089cf.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/f3af7cb9693b9c4b6a7555227db3fef943db3992/ss_f3af7cb9693b9c4b6a7555227db3fef943db3992.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/1a373a95229aab0cfd97f553ecbe86092364bb9c/ss_1a373a95229aab0cfd97f553ecbe86092364bb9c.600x338.jpg'
          ],
          reviewSummary: '多半差评',
          reviewCount: '71,722'
        },
        {
          title: 'Street Fighter 6',
          description: '2D 格斗、格斗、街机、角色自定义',
          price: '¥2,495',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/7f4bcdebc8dc0d9c1e77d70fe2c6ed13a3ab2381/capsule_184x69_alt_assets_18.jpg?t=1776917924',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['2D 格斗', '格斗', '街机', '角色自定义'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_f62ce93269a6d8e0027853358af4d6368e2c4b93.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_d186566a92ada8cdb08b04769a8c95cd1e380006.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_387137f8cccb048c35a8685634372e97785d40aa.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_a381f1b3b450c18900d47b991ce8e7456e9cdba5.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '11,421',
          discountPercent: 50,
          originalPrice: '¥4,990'
        },
        {
          title: '晕晕电波症候群',
          description: '节奏、心理恐怖、冒险、动漫',
          price: '¥1,971',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/49fc1d453e7ac6debbde3d276b158b820e5569a4/capsule_184x69_schinese.jpg?t=1777123556',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['节奏', '心理恐怖', '冒险', '动漫'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/9111298a8e027b996f0d245a53fd9a61d05c758a/ss_9111298a8e027b996f0d245a53fd9a61d05c758a.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/ec0f5c8899355a2d6bec1699760539e16d1694f4/ss_ec0f5c8899355a2d6bec1699760539e16d1694f4.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/b72b692c16b3788e2b58fdeeb0f8dc0467de7d65/ss_b72b692c16b3788e2b58fdeeb0f8dc0467de7d65.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2914150/67743fd141f4ba3d68fc9587fe2975853198acac/ss_67743fd141f4ba3d68fc9587fe2975853198acac.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '977',
          discountPercent: 10,
          originalPrice: '¥2,190'
        },
        {
          title: '《守望先锋®》',
          description: '免费开玩、英雄射击、第一人称射击、多人',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/f40730cf4defbd8f90d0f0662d7b263dd2915fe1/capsule_184x69_alt_assets_20.jpg?t=1776189843',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['免费开玩', '英雄射击', '第一人称射击', '多人'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/b17b61def60cb8b3f693cb3a6b80152f7963b04e/ss_b17b61def60cb8b3f693cb3a6b80152f7963b04e.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/ec6de0364a1014e97ab05a7cad9f187be0bd494e/ss_ec6de0364a1014e97ab05a7cad9f187be0bd494e.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/2830b5babd473e7e76fa522d4c1858386d3acfb1/ss_2830b5babd473e7e76fa522d4c1858386d3acfb1.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/78e99c6da684734a84fcd69aff1baa7b5fe996f6/ss_78e99c6da684734a84fcd69aff1baa7b5fe996f6.600x338.jpg'
          ],
          reviewSummary: '差评如潮',
          reviewCount: '145,201'
        },
        {
          title: 'Team Fortress 2',
          description: '免费开玩、英雄射击、多人、第一人称射击',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/capsule_184x69.jpg?t=1757348372',
          releaseDate: '',
          platforms: ['windows', 'linux'],
          topTags: ['免费开玩', '英雄射击', '多人', '第一人称射击'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_ea21f7bbf4f79bada4554df5108d04b6889d3453.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_ee24a769dc1d81dcbd7b250d16530394adee4264.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_e3aedb2ab36bba8cfe611b1e0eaa807e4bb2d742.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_9faaa506d91bf19dbb398e0c06a684b337f85f91.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '19,244'
        }
      ]
    },
    {
      id: 'upcoming',
      label: '热门即将推出',
      moreLabel: '即将推出',
      entries: [
        {
          title: '失控车手',
          description: '竞速、战斗竞速、驾驶、街机',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3756020/1bc53644e249cb08868e719cf3062ddd73fbe431/capsule_184x69.jpg?t=1776145140',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['竞速', '战斗竞速', '驾驶', '街机'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3756020/510d73fb2aebe11822b42e0291779c05cb7caa0a/ss_510d73fb2aebe11822b42e0291779c05cb7caa0a.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3756020/dbe8f27ac71b4148e8f9e7289deae6537327e341/ss_dbe8f27ac71b4148e8f9e7289deae6537327e341.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3756020/bfa8038bc352eedbbd0cd72306ced9173a48f6ef/ss_bfa8038bc352eedbbd0cd72306ced9173a48f6ef.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3756020/eb739abf89e59e1424d7951a98b1e982cd350b7d/ss_eb739abf89e59e1424d7951a98b1e982cd350b7d.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: 'Global Rescue',
          description: '模拟、策略、沙盒、管理',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2873660/13720cae0c86f02d41b86c4f4240ffad06ee43c7/capsule_184x69_schinese.jpg?t=1777116781',
          releaseDate: '',
          platforms: ['windows', 'mac'],
          topTags: ['模拟', '策略', '沙盒', '管理'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2873660/3efc6fc61cb08c94193f5dba862ad6b178befc63/ss_3efc6fc61cb08c94193f5dba862ad6b178befc63.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2873660/9552474506348b9496c2cbfe5000bd222ac03501/ss_9552474506348b9496c2cbfe5000bd222ac03501.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2873660/877606d27318a2193e1fb9baa05985b6087f6ea1/ss_877606d27318a2193e1fb9baa05985b6087f6ea1.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2873660/a53dbb6d7f946ab1c84b38dfb7ea038e67f1ff4d/ss_a53dbb6d7f946ab1c84b38dfb7ea038e67f1ff4d.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: '这是谐音梗',
          description: '休闲、文字游戏、欢乐、解谜',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4164310/fc3a9a75aa2b120dfbef19a70d5ea53e6c13343c/capsule_184x69.jpg?t=1777044835',
          releaseDate: '',
          platforms: ['windows', 'mac'],
          topTags: ['休闲', '文字游戏', '欢乐', '解谜'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4164310/f1775124ee0904217196b4e4ac9d4cba9d14ffaf/ss_f1775124ee0904217196b4e4ac9d4cba9d14ffaf.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4164310/f2e17615d2dd53e227492d895311366713a65fff/ss_f2e17615d2dd53e227492d895311366713a65fff.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4164310/1841dc166abb6e4c436c5e3e7a01881fbfaef414/ss_1841dc166abb6e4c436c5e3e7a01881fbfaef414.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4164310/2dccf7b409ddc6e3ca61eb6e5aaee40fa2654c0c/ss_2dccf7b409ddc6e3ca61eb6e5aaee40fa2654c0c.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: '无名者',
          description: '女性主角、视觉小说、反乌托邦、手绘',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1960880/5ae7fcce2af10a6005aaa79a21696be4ea0db021/capsule_184x69_schinese.jpg?t=1776692996',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['女性主角', '视觉小说', '反乌托邦', '手绘'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1960880/ss_f006d5504dc7d91b77f025d8604770b53b884bbb.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1960880/ss_24fa880deb694a4e4eb119bcf2e5f774b52bd6d3.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1960880/ss_082df62fea2d7867ea132fef53086c8d526023d6.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1960880/ss_189f595d0edd8e1c65d00250e0200d5eac6e0e30.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: '菜园无双',
          description: '点击游戏、挂机游戏、轻度 Rogue、策略',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4045540/6f333b262e90299c5e8ab3506875f5da30013fc2/capsule_184x69_schinese.jpg?t=1777011280',
          releaseDate: '',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['点击游戏', '挂机游戏', '轻度 Rogue', '策略'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4045540/e50627e64b8362da28844a37f298c09b97c47158/ss_e50627e64b8362da28844a37f298c09b97c47158.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4045540/2ca57c01b8f1f0cd890e27e7139d23f2eed8cc72/ss_2ca57c01b8f1f0cd890e27e7139d23f2eed8cc72.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4045540/e696dcaa7b2ac0be71ae8fba97f83ca0db8e5467/ss_e696dcaa7b2ac0be71ae8fba97f83ca0db8e5467.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4045540/27bce00494c5791146d08c413dadf7e9e6e22679/ss_27bce00494c5791146d08c413dadf7e9e6e22679.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: 'Toll Booth Simulator | 收费站模拟器',
          description: '工作模拟、模拟、动作、生活模拟',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3896300/aa78a2426bd4383309c3457166e3861df7d42b97/capsule_184x69.jpg?t=1777109940',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['工作模拟', '模拟', '动作', '生活模拟'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3896300/a440e113a5093b4ef98cca54eed748958dea3f88/ss_a440e113a5093b4ef98cca54eed748958dea3f88.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3896300/907adea0778651e1821945010740e03f9bb90476/ss_907adea0778651e1821945010740e03f9bb90476.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3896300/19b75eecd3c656b0d2b92bb7c844e5a54dd648c4/ss_19b75eecd3c656b0d2b92bb7c844e5a54dd648c4.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3896300/17a3c9f49d3227be505be046018a98d74d272dfa/ss_17a3c9f49d3227be505be046018a98d74d272dfa.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: '团本自走棋',
          description: '自走棋、轻度 Rogue、动作角色扮演、团队角色扮演',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4283360/22aecedf9e4263378fa19a3d442fdeefa8d6b63b/capsule_184x69_schinese.jpg?t=1777032043',
          releaseDate: '',
          platforms: ['windows', 'linux'],
          topTags: ['自走棋', '轻度 Rogue', '动作角色扮演', '团队角色扮演'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4283360/69e90d82ec6eac15466322b4aea2a59e8af98b71/ss_69e90d82ec6eac15466322b4aea2a59e8af98b71.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4283360/b70048d826364267782b7843ab1c9d8f4aaedb88/ss_b70048d826364267782b7843ab1c9d8f4aaedb88.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4283360/63f0820cb47a413997adff27363c4222c96e8aca/ss_63f0820cb47a413997adff27363c4222c96e8aca.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4283360/359901706e637f08467ea58b1ddffe8f5ccc7a4b/ss_359901706e637f08467ea58b1ddffe8f5ccc7a4b.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: '狂野都市 Wild City',
          description: '牌组构建式类 Rogue、策略、轻度 Rogue、牌组构建',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2436970/3438dc18b0c217072b185d5c4573920c34b97aa1/capsule_184x69.jpg?t=1776954273',
          releaseDate: '',
          platforms: ['windows', 'mac'],
          topTags: ['牌组构建式类 Rogue', '策略', '轻度 Rogue', '牌组构建'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2436970/fc911fb44e5d99e3d9fbf0c3f45f345001399404/ss_fc911fb44e5d99e3d9fbf0c3f45f345001399404.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2436970/7d92ee7d0912c1a6cd348f2f1117bec22cbb5d6f/ss_7d92ee7d0912c1a6cd348f2f1117bec22cbb5d6f.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2436970/c31992ec6adb9287a11622eb2051c656024719c0/ss_c31992ec6adb9287a11622eb2051c656024719c0.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2436970/99ee4c94bf02a42610eb8c0d18d20afdafb4facb/ss_99ee4c94bf02a42610eb8c0d18d20afdafb4facb.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: 'CD-ROM',
          description: '解谜、悬疑、复古、90 年代',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3968100/9497a51e00e61ef210a292c7fe61b9e922cb8cc2/capsule_184x69.jpg?t=1776251430',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['解谜', '悬疑', '复古', '90 年代'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3968100/7c8c6b836ae769c514726075a9a246b0aa65fcf3/ss_7c8c6b836ae769c514726075a9a246b0aa65fcf3.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3968100/0745975529c4502dc325e7a06e38d01c533f69d7/ss_0745975529c4502dc325e7a06e38d01c533f69d7.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3968100/c08bd233d121ab89dedb74508166d83cf777a906/ss_c08bd233d121ab89dedb74508166d83cf777a906.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3968100/761216f8bec0cba9526dcd3b14002ad88c9bc0a5/ss_761216f8bec0cba9526dcd3b14002ad88c9bc0a5.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: '姆明：暖心冬日',
          description: '冒险、阖家、温馨惬意、休闲',
          price: '',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3256150/908e4ab74a25b78963c780011a84652ffba06e96/capsule_184x69_schinese.jpg?t=1774798147',
          releaseDate: '',
          platforms: ['windows', 'mac'],
          topTags: ['冒险', '阖家', '温馨惬意', '休闲'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3256150/f17685012ab6062858ed94e2f5338e08256d7e61/ss_f17685012ab6062858ed94e2f5338e08256d7e61.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3256150/9a38008832971572e52f5082bb27d2ca98216cd8/ss_9a38008832971572e52f5082bb27d2ca98216cd8.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3256150/0fe2ca9da370060bd7e3fe553bbf7dc544fff7a2/ss_0fe2ca9da370060bd7e3fe553bbf7dc544fff7a2.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3256150/21265497594e8e2ec1435ab38fed1d59812e3fcf/ss_21265497594e8e2ec1435ab38fed1d59812e3fcf.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        }
      ]
    },
    {
      id: 'discounts',
      label: '优惠',
      moreLabel: '优惠',
      entries: [
        {
          title: '女神异闻录5皇家版',
          description: '日系角色扮演、剧情丰富、回合制战斗、动漫',
          price: '¥1,535',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/9ac9b8764a208f40d271a9e7317f9ab2bf49acf2/capsule_184x69_schinese.jpg?t=1763530018',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['日系角色扮演', '剧情丰富', '回合制战斗', '动漫'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_ddcc016b8e5c434ccbd1a89c0157ce73acf905ae.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_a3258aba84ae2f2ff13a02a160f7495bfc152adb.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_663171dc3afce8fe987e57e8659f91b69faa39bc.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/ss_63d2164bf39a43905e9602381f43a9ad4ab46dea.600x338.jpg'
          ],
          reviewSummary: '好评如潮',
          reviewCount: '32,430',
          discountPercent: 80,
          originalPrice: '¥7,678'
        },
        {
          title: '赛博朋克 2077',
          description: '赛博朋克、开放世界、裸露、角色扮演',
          price: '¥3,072',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/47c51dbc7cbec037001f1a23e1289d475be8fd5e/capsule_184x69_schinese.jpg?t=1769690377',
          releaseDate: '',
          platforms: ['windows', 'mac'],
          topTags: ['赛博朋克', '开放世界', '裸露', '角色扮演'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_af2804aa4bf35d4251043744412ce3b359a125ef.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_b529b0abc43f55fc23fe8058eddb6e37c9629a6a.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_0e64170751e1ae20ff8fdb7001a8892fd48260e7.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_2f649b68d579bf87011487d29bc4ccbfdd97d34f.600x338.jpg'
          ],
          reviewSummary: '多半好评',
          reviewCount: '*',
          discountPercent: 65,
          originalPrice: '¥8,778'
        },
        {
          title: '光与影：33号远征队',
          description: '回合制战斗、剧情丰富、奇幻、好评原声音轨',
          price: '¥5,984',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1903340/b165109579fe05a63afd279cc4421edfc28d25bd/capsule_184x69_schinese.jpg?t=1773676780',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['回合制战斗', '剧情丰富', '奇幻', '好评原声音轨'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1903340/ss_9e050e6a61a4d9f4fe54bc62c8c73da38e9a63b0.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1903340/ss_b8089016095e6a16e324a59c45b2f24a439bd0b3.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1903340/ss_e49800e906e8a0f00707458c836567c933603bac.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1903340/ss_483a27df5072beb3a4650634a764bda750fbcb82.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '22,366',
          discountPercent: 20,
          originalPrice: '¥7,480'
        },
        {
          title: 'Street Fighter 6',
          description: '2D 格斗、格斗、街机、角色自定义',
          price: '¥2,495',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/7f4bcdebc8dc0d9c1e77d70fe2c6ed13a3ab2381/capsule_184x69_alt_assets_18.jpg?t=1776917924',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['2D 格斗', '格斗', '街机', '角色自定义'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_d186566a92ada8cdb08b04769a8c95cd1e380006.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_387137f8cccb048c35a8685634372e97785d40aa.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_f62ce93269a6d8e0027853358af4d6368e2c4b93.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_a381f1b3b450c18900d47b991ce8e7456e9cdba5.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '11,421',
          discountPercent: 50,
          originalPrice: '¥4,990'
        },
        {
          title: 'Grand Theft Auto V 增强版',
          description: '开放世界、动作、色情内容、多人',
          price: '¥2,851',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/a318bd9affe8eee32984b18794b273c256e9b2d6/capsule_184x69.jpg?t=1765479644',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['开放世界', '动作', '色情内容', '多人'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/60690d0fdbd022ab1527ba6d080d42c1812a0f39/ss_60690d0fdbd022ab1527ba6d080d42c1812a0f39.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/808b550269f898e227dae2c64b5e026f90da85f9/ss_808b550269f898e227dae2c64b5e026f90da85f9.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/6959cc5d64cce82cb68a27457cfa46fb4d50f897/ss_6959cc5d64cce82cb68a27457cfa46fb4d50f897.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/d61184a98c1cf2db2b08b2999c04b0519e3615bb/ss_d61184a98c1cf2db2b08b2999c04b0519e3615bb.600x338.jpg'
          ],
          reviewSummary: '多半好评',
          reviewCount: '43,167',
          discountPercent: 56,
          originalPrice: '¥6,480'
        },
        {
          title: 'DARK SOULS™: REMASTERED',
          description: '类魂系列、黑暗奇幻、角色扮演、困难',
          price: '¥2,365',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/capsule_184x69.jpg?t=1764975651',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['类魂系列', '黑暗奇幻', '角色扮演', '困难'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_92b2ba470cbfdb8839b649b3f478e5531dd81a17.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_626cc310dc9ac7fb146011582c864a35e5f3e381.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_f60f54e58b13d0744853672ccd35810397e3fa26.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '9,059',
          discountPercent: 50,
          originalPrice: '¥4,730'
        },
        {
          title: '女神异闻录３ Reload',
          description: '日系角色扮演、角色扮演、动漫、团队角色扮演',
          price: '¥3,071',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/capsule_184x69.jpg?t=1764776430',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['日系角色扮演', '角色扮演', '动漫', '团队角色扮演'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_7017244fb8319ba927a0ef414959b95a6164356f.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_6488b6bb530620d125dc90c0b11a69028cd97e00.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_d2719b4a5240d4cdd58883e0cd42f0c4d885c178.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/ss_b60f1f21f4794f0ba90bbc55c41aab4637b4103a.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '6,925',
          discountPercent: 60,
          originalPrice: '¥7,678'
        },
        {
          title: '仁王３',
          description: '动作、动作角色扮演、角色扮演、类魂系列',
          price: '¥7,744',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3681010/19b0758706fefb5c06a6183365fd62dafe2bf914/capsule_184x69.jpg?t=1772090941',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['动作', '动作角色扮演', '角色扮演', '类魂系列'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3681010/5d02a1bcff9cc74ef4551c9afce91c78881539a1/ss_5d02a1bcff9cc74ef4551c9afce91c78881539a1.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3681010/8c9333bf3f28194cb8113af455ecaf1aa45a0050/ss_8c9333bf3f28194cb8113af455ecaf1aa45a0050.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3681010/c65877619b70c51d6be030c20b5c37bcfaf2e248/ss_c65877619b70c51d6be030c20b5c37bcfaf2e248.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3681010/fe1a9485c46e95c8a899e8cfc645136f303b4fda/ss_fe1a9485c46e95c8a899e8cfc645136f303b4fda.600x338.jpg'
          ],
          reviewSummary: '多半好评',
          reviewCount: '3,669',
          discountPercent: 20,
          originalPrice: '¥9,680'
        },
        {
          title: '雾锁王国 (Enshrouded)',
          description: '开放世界、生存、基地建设、多人',
          price: '¥2,720',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1203620/84d7ce762d0e0ad6a2dfdced85ea713d33b70e18/capsule_184x69_alt_assets_0.jpg?t=1776758849',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['开放世界', '生存', '基地建设', '多人'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1203620/09a1e99c47ba7ffb2413c4708a9f5fbef1397652/ss_09a1e99c47ba7ffb2413c4708a9f5fbef1397652.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1203620/9c2db32975d266f1051f77e46d347a118c824c57/ss_9c2db32975d266f1051f77e46d347a118c824c57.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1203620/50ce17d5a264d10c9e4f65a3cbf3fba9d07bf8d6/ss_50ce17d5a264d10c9e4f65a3cbf3fba9d07bf8d6.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1203620/4cc606e46868db2159ced08f6fe585a03d7e360f/ss_4cc606e46868db2159ced08f6fe585a03d7e360f.600x338.jpg'
          ],
          reviewSummary: '褒贬不一',
          reviewCount: '6,543',
          discountPercent: 20,
          originalPrice: '¥3,400'
        },
        {
          title: 'EA SPORTS FC™ 26',
          description: '足球、多人、体育、模拟',
          price: '¥2,940',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3405690/abca0fd9695521a046d407327d82f808162315f7/capsule_184x69.jpg?t=1775577454',
          releaseDate: '',
          platforms: ['windows'],
          topTags: ['足球', '多人', '体育', '模拟'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3405690/b2bcda2e36966161937db451509f9922901b6145/ss_b2bcda2e36966161937db451509f9922901b6145.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3405690/2048e95987d01af065fdcb67c380e7a0e53df069/ss_2048e95987d01af065fdcb67c380e7a0e53df069.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3405690/bcf8cde56e46d969dfaff90c8a9d85a22b6342fc/ss_bcf8cde56e46d969dfaff90c8a9d85a22b6342fc.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3405690/d01fbbd32769bd7cd70215dedd22e4ffb7bc42bc/ss_d01fbbd32769bd7cd70215dedd22e4ffb7bc42bc.600x338.jpg'
          ],
          reviewSummary: '多半差评',
          reviewCount: '4,011',
          discountPercent: 70,
          originalPrice: '¥9,800'
        }
      ]
    },
    {
      id: 'free',
      label: '人气蹿升的免费游戏',
      moreLabel: '免费游戏',
      entries: [
        {
          title: 'Police Chief Simulator: Prologue - Early Days',
          description: '动作、休闲、策略、模拟',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4224800/fb575d8ea4f0c438b4ed485b320f66654ee304d1/capsule_184x69.jpg?t=1776706028',
          releaseDate: '2026 年 4 月 20 日',
          platforms: ['windows'],
          topTags: ['动作', '休闲', '策略', '模拟'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4224800/810cbb59cf6015a698057bbb17db032da068fe3a/ss_810cbb59cf6015a698057bbb17db032da068fe3a.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4224800/9d68edf46d049ddf41ca2afcf469e8f96e45cca7/ss_9d68edf46d049ddf41ca2afcf469e8f96e45cca7.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4224800/4acb32ef4e65861077fe9715e6bec9059a725dce/ss_4acb32ef4e65861077fe9715e6bec9059a725dce.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4224800/e194475636a2c6dfaa3d75c594ec0531681d6891/ss_e194475636a2c6dfaa3d75c594ec0531681d6891.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '185'
        },
        {
          title: 'Drawquarium Demo',
          description: '模拟、休闲、沙盒、设计与插画',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4331760/0718ea0357551a9ec9ac74e6e9dc52cfb34e2778/capsule_184x69.jpg?t=1776498541',
          releaseDate: '2026 年 4 月 18 日',
          platforms: ['windows'],
          topTags: ['模拟', '休闲', '沙盒', '设计与插画'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4331760/082f5e5dd9c9a1212536952698d34a8af02b45f7/ss_082f5e5dd9c9a1212536952698d34a8af02b45f7.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4331760/40f03ed5f72f1820563db9386403e2e860343768/ss_40f03ed5f72f1820563db9386403e2e860343768.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4331760/1a5a68debaa2dfa42bfb0632a3fb5a49b495af0d/ss_1a5a68debaa2dfa42bfb0632a3fb5a49b495af0d.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4331760/1f10084a1c50228422bd8c62ecaa3083251652cd/ss_1f10084a1c50228422bd8c62ecaa3083251652cd.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: '帝国神话：王权',
          description: '动作、策略、沙盒、战争游戏',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4510830/5145d493ed7bd516a9bb95a63300c4b371d6849e/capsule_184x69_schinese.jpg?t=1776345556',
          releaseDate: '2026 年 4 月 16 日',
          platforms: ['windows'],
          topTags: ['动作', '策略', '沙盒', '战争游戏'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4510830/4c9e60921eac250d4fe8813b3fd126f1d4b2053c/ss_4c9e60921eac250d4fe8813b3fd126f1d4b2053c.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4510830/dd54222f90b4ddc762c62d347889b04259a8e7c9/ss_dd54222f90b4ddc762c62d347889b04259a8e7c9.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4510830/4b1b582df0af286b6d82d31228d45c1b309bd02d/ss_4b1b582df0af286b6d82d31228d45c1b309bd02d.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4510830/283dc18a04e9be8f61d55fa6a27f237146a7a8d5/ss_283dc18a04e9be8f61d55fa6a27f237146a7a8d5.600x338.jpg'
          ],
          reviewSummary: '褒贬不一',
          reviewCount: '383'
        },
        {
          title: 'Idle Iktah',
          description: '角色扮演、挂机游戏、休闲、老式',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3298520/0562ac1ffdc2c8eb27a01b5f7666082306463eb7/capsule_184x69.jpg?t=1776291517',
          releaseDate: '2026 年 4 月 15 日',
          platforms: ['windows', 'mac'],
          topTags: ['角色扮演', '挂机游戏', '休闲', '老式'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3298520/778d9b0ad0d768e9d6032cea3baa5aab378a3cb9/ss_778d9b0ad0d768e9d6032cea3baa5aab378a3cb9.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3298520/c3f4ee204e935d272671a283f8309897ff26a7cc/ss_c3f4ee204e935d272671a283f8309897ff26a7cc.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3298520/580173c735cd795309fa6eb7d6c4ba1ad189af0f/ss_580173c735cd795309fa6eb7d6c4ba1ad189af0f.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3298520/dcd9aeb1538f2a5e8b74954486fe9c81ae11c26b/ss_dcd9aeb1538f2a5e8b74954486fe9c81ae11c26b.600x338.jpg'
          ],
          reviewSummary: '褒贬不一',
          reviewCount: '66'
        },
        {
          title: '暗影地牢 Demo',
          description: '',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4563350/dfea40a3ab2db3f1d4d486b592e13d5d731667a4/capsule_184x69.jpg?t=1776426134',
          releaseDate: '2026 年 4 月 14 日',
          platforms: ['windows'],
          topTags: [],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4423580/436412078310e79bcb815f384202bba07f284375/ss_436412078310e79bcb815f384202bba07f284375.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4423580/44495832de0e607670cdac5c622f1a786644c8a5/ss_44495832de0e607670cdac5c622f1a786644c8a5.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4423580/1f320cbe63e2b1f1fa6b4a08b6a6a749b72d29e4/ss_1f320cbe63e2b1f1fa6b4a08b6a6a749b72d29e4.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4423580/5780dacde1c280e2ca22d05dc2b83fa5b2b39234/ss_5780dacde1c280e2ca22d05dc2b83fa5b2b39234.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: 'Legend of YMIR',
          description: '大型多人在线角色扮演、神话、自选历险体验、动作',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4172530/588e500d194d9eaff0ec3efe4c9866c0f18283a4/capsule_184x69.jpg?t=1776829876',
          releaseDate: '2026 年 4 月 5 日',
          platforms: ['windows'],
          topTags: ['大型多人在线角色扮演', '神话', '自选历险体验', '动作'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4172530/0f6a0bb76e8b7aebe6e0ff2196921752e70e6c89/ss_0f6a0bb76e8b7aebe6e0ff2196921752e70e6c89.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4172530/12cdde21b92599439b2267e1fb5e5de55ac08144/ss_12cdde21b92599439b2267e1fb5e5de55ac08144.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4172530/3525f7e8d86a7175c84adc8feb3f1897f1ccdfaa/ss_3525f7e8d86a7175c84adc8feb3f1897f1ccdfaa.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4172530/1085803032fbab80b089729bac27959cf17ca788/ss_1085803032fbab80b089729bac27959cf17ca788.600x338.jpg'
          ],
          reviewSummary: '多半差评',
          reviewCount: '939'
        },
        {
          title: 'Car Mechanic Simulator 2026 - Single Player Demo',
          description: '',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4307740/0cf118b8780dd9eb60d4d909188f25fd8c87df50/capsule_184x69.jpg?t=1777037939',
          releaseDate: '2026 年 3 月 30 日',
          platforms: ['windows'],
          topTags: [],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2692660/d3a3406a82b4a2751ecdcbeceb95d7a4ff643c84/ss_d3a3406a82b4a2751ecdcbeceb95d7a4ff643c84.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2692660/341e0ade2d71d82c12dd788a233a06b725319e7f/ss_341e0ade2d71d82c12dd788a233a06b725319e7f.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2692660/7e3689d6e37e737baed2c19abfe3973b9fe7e6d7/ss_7e3689d6e37e737baed2c19abfe3973b9fe7e6d7.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2692660/8d2305f7b706fd840a3eecf162835ba67fe92bc3/ss_8d2305f7b706fd840a3eecf162835ba67fe92bc3.600x338.jpg'
          ],
          reviewSummary: '无用户评测',
          reviewCount: '无用户评测'
        },
        {
          title: '婆罗洲的红珍珠',
          description: '冒险、解谜、推理、互动小说',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4488860/8c4d7f338b9d259f042034bd41ae14210ea1b7e9/capsule_184x69.jpg?t=1776612035',
          releaseDate: '2026 年 3 月 27 日',
          platforms: ['windows', 'mac'],
          topTags: ['冒险', '解谜', '推理', '互动小说'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4488860/53345bb6208a523a0bafcf66571b8454cedf9211/ss_53345bb6208a523a0bafcf66571b8454cedf9211.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4488860/9edb6fffbdcabfdfd167e7bd748d1e1a6198c815/ss_9edb6fffbdcabfdfd167e7bd748d1e1a6198c815.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4488860/45285b873e0bd24da31c994b07ff6865aa6f8817/ss_45285b873e0bd24da31c994b07ff6865aa6f8817.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4488860/46af8e4f30697b6b67e9f7a47dbec39d044f3d1b/ss_46af8e4f30697b6b67e9f7a47dbec39d044f3d1b.600x338.jpg'
          ],
          reviewSummary: '好评如潮',
          reviewCount: '593'
        },
        {
          title: '七大罪：Origin',
          description: '开放世界、免费开玩、动漫、多人',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/f7ce109f339c8ad6c1f8839313c64806a9edc203/capsule_184x69.jpg?t=1777011324',
          releaseDate: '2026 年 3 月 17 日',
          platforms: ['windows'],
          topTags: ['开放世界', '免费开玩', '动漫', '多人'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/ec066430e514ec4ac7a6c7c92e4c7dc932be6cdb/ss_ec066430e514ec4ac7a6c7c92e4c7dc932be6cdb.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/53373b98ce2cec50ffdf76f7cd072aa8f6eda7d2/ss_53373b98ce2cec50ffdf76f7cd072aa8f6eda7d2.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/33059da9c5bc2e3a9b4335700d7453970cba7700/ss_33059da9c5bc2e3a9b4335700d7453970cba7700.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3679080/58fc82c529edeaa16fbdf16b6bdd329cae8b80d7/ss_58fc82c529edeaa16fbdf16b6bdd329cae8b80d7.600x338.jpg'
          ],
          reviewSummary: '多半差评',
          reviewCount: '589'
        },
        {
          title: 'VRCVideoCacher',
          description: '实用工具、免费开玩、虚拟现实、软件',
          price: '免费',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4296960/d2560e537f1b45569de820726d7b25b0140684b1/capsule_184x69.jpg?t=1773027424',
          releaseDate: '2026 年 3 月 8 日',
          platforms: ['windows', 'linux'],
          topTags: ['实用工具', '免费开玩', '虚拟现实', '软件'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4296960/648bc3aee5e19b0fb58b463a454b6ce0ccdf4df7/ss_648bc3aee5e19b0fb58b463a454b6ce0ccdf4df7.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4296960/4d55a91f3822eafce4f75835eb7f52566fe4137a/ss_4d55a91f3822eafce4f75835eb7f52566fe4137a.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4296960/3a2dcdd5e84785da50a6cc2155eac3629d716863/ss_3a2dcdd5e84785da50a6cc2155eac3629d716863.600x338.jpg',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4296960/29092ab94aa6a2a1827bf04820edcafb9dedb896/ss_29092ab94aa6a2a1827bf04820edcafb9dedb896.600x338.jpg'
          ],
          reviewSummary: '特别好评',
          reviewCount: '121'
        }
      ]
    }
  ],
  'en-US': [
    {
      id: 'trending',
      label: 'Trending New Releases',
      moreLabel: 'New Releases',
      entries: [
        {
          title: 'Treasure Architect',
          description: 'Strategy, puzzle platforming, deckbuilding, match-3',
          price: '$13.80',
          image: asset('deal-origin.jpg'),
          releaseDate: 'Apr 20, 2026',
          platforms: ['windows'],
          topTags: ['Strategy', 'Puzzle Platformer', 'Deckbuilding', 'Match 3'],
          screenshots: [asset('ow-1.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg'), asset('ow-4.jpg')],
          reviewSummary: 'Positive',
          reviewCount: '12',
          discountPercent: 40,
          originalPrice: '$23.00'
        },
        {
          title: 'Chipmatic',
          description: 'Mining, automation, underground factory building',
          price: '$31.50',
          image: asset('deck-hades2.jpg'),
          releaseDate: 'Apr 20, 2026',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['Mining', 'Automation', 'Simulation', 'Building'],
          screenshots: [asset('ck3-1.jpg'), asset('ck3-2.jpg'), asset('ck3-3.jpg'), asset('ck3-4.jpg')],
          reviewSummary: 'Mostly Positive',
          reviewCount: '9',
          discountPercent: 10,
          originalPrice: '$35.00'
        },
        {
          title: 'MMO98',
          description: 'Idle sim about building an MMO studio empire',
          price: '$26.10',
          image: asset('cheap-metro.jpg'),
          releaseDate: 'Apr 20, 2026',
          platforms: ['windows', 'mac'],
          topTags: ['Idle', 'Simulation', 'Tycoon', 'Strategy'],
          screenshots: [asset('cheap-slay.jpg'), asset('cheap-hike.jpg'), asset('cheap-breach.jpg'), asset('cheap-metro.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '132',
          discountPercent: 10,
          originalPrice: '$29.00'
        },
        {
          title: 'Moonlighter 2: The Endless Vault',
          description: 'Action RPG, shopkeeping, dungeon runs, loot',
          price: '$29.99',
          image: asset('deck-vampire.jpg'),
          releaseDate: 'Apr 18, 2026',
          platforms: ['windows'],
          topTags: ['Action RPG', 'Shopkeeper', 'Dungeon Crawler', 'Loot'],
          screenshots: [asset('ck3-1.jpg'), asset('ow-2.jpg'), asset('cheap-breach.jpg'), asset('cheap-metro.jpg')],
          reviewSummary: 'Positive',
          reviewCount: '74'
        },
        {
          title: 'Into the Grid',
          description: 'Cyberpunk tactics, deckbuilding, short runs',
          price: '$19.99',
          image: asset('deal-origin.jpg'),
          releaseDate: 'Apr 17, 2026',
          platforms: ['windows', 'mac'],
          topTags: ['Deckbuilding', 'Cyberpunk', 'Tactics', 'Roguelite'],
          screenshots: [asset('ow-1.jpg'), asset('cs2-2.jpg'), asset('cheap-slay.jpg'), asset('cheap-hike.jpg')],
          reviewSummary: 'Mostly Positive',
          reviewCount: '218'
        },
        {
          title: 'Schedule I',
          description: 'Co-op crime sim that exploded across streaming and wishlists.',
          price: '$19.99',
          image: asset('cheap-breach.jpg'),
          releaseDate: 'Apr 18, 2026',
          platforms: ['windows'],
          topTags: ['Co-op', 'Crime', 'Simulation', 'Comedy'],
          screenshots: [asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg'), asset('cheap-slay.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '58,932'
        },
        {
          title: 'R.E.P.O.',
          description: 'Co-op horror with physics chaos and huge launch momentum.',
          price: '$11.99',
          image: asset('vr-bonelab.jpg'),
          releaseDate: 'Apr 17, 2026',
          platforms: ['windows'],
          topTags: ['Co-op Horror', 'Physics', 'Extraction', 'Funny'],
          screenshots: [asset('ow-3.jpg'), asset('cs2-3.jpg'), asset('ck3-3.jpg'), asset('cheap-hike.jpg')],
          reviewSummary: 'Overwhelmingly Positive',
          reviewCount: '41,287'
        }
      ]
    },
    {
      id: 'top-sellers',
      label: 'Top Sellers',
      moreLabel: 'Top Sellers',
      entries: [
        {
          title: 'PRAGMATA',
          description: 'Sci-fi action adventure with dual-character combat',
          price: '$59.99',
          image: asset('deal-origin.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Sci-Fi', 'Action', 'Adventure', 'Third-Person Shooter'],
          screenshots: [asset('ow-1.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg'), asset('ow-4.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '11,482'
        },
        {
          title: 'Counter-Strike 2',
          description: 'Still dominating the competitive charts.',
          price: 'Free To Play',
          image: asset('deal-cs2.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['FPS', 'Competitive', 'Multiplayer', 'Free to Play'],
          screenshots: [asset('cs2-1.jpg'), asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('cs2-4.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '828,223'
        },
        {
          title: 'Crusader Kings III',
          description: 'Grand strategy sales stay strong.',
          price: '$29.99',
          image: asset('ck3-hero.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['Grand Strategy', 'Medieval', 'RPG', 'Simulation'],
          screenshots: [asset('ck3-1.jpg'), asset('ck3-2.jpg'), asset('ck3-3.jpg'), asset('ck3-4.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '165,421'
        },
        {
          title: 'Schedule I',
          description: 'Crime sim, co-op chaos, and viral momentum.',
          price: '$19.99',
          image: asset('cheap-breach.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Co-op', 'Simulation', 'Crime', 'Comedy'],
          screenshots: [asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg'), asset('cheap-slay.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '58,932'
        },
        {
          title: 'Hades II',
          description: 'Early access powerhouse with relentless repeat sales.',
          price: '$29.99',
          image: asset('deal-hades2.jpg'),
          releaseDate: 'Early Access',
          platforms: ['windows'],
          topTags: ['Action Roguelike', 'Mythology', 'Fast-Paced', 'Indie'],
          screenshots: [asset('deck-hades2.jpg'), asset('ow-2.jpg'), asset('cs2-2.jpg'), asset('ck3-2.jpg')],
          reviewSummary: 'Overwhelmingly Positive',
          reviewCount: '67,321'
        },
        {
          title: 'Schedule I',
          description: 'Co-op crime sim chaos with massive streaming momentum.',
          price: '$19.99',
          image: asset('cheap-breach.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Co-op', 'Crime', 'Simulation', 'Comedy'],
          screenshots: [asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg'), asset('cheap-slay.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '58,932'
        },
        {
          title: 'R.E.P.O.',
          description: 'Physics-driven co-op horror that keeps selling out weekends.',
          price: '$11.99',
          image: asset('vr-bonelab.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Co-op Horror', 'Physics', 'Extraction', 'Funny'],
          screenshots: [asset('ow-3.jpg'), asset('cs2-3.jpg'), asset('ck3-3.jpg'), asset('cheap-hike.jpg')],
          reviewSummary: 'Overwhelmingly Positive',
          reviewCount: '41,287'
        }
      ]
    },
    {
      id: 'upcoming',
      label: 'Popular Upcoming',
      moreLabel: 'Upcoming',
      entries: [
        {
          title: 'SILENT HILL f',
          description: 'Psychological horror and exploration.',
          price: 'Coming Soon',
          image: asset('cheap-hike.jpg'),
          releaseDate: 'TBA',
          platforms: ['windows'],
          topTags: ['Horror', 'Survival', 'Exploration', 'Mystery'],
          screenshots: [asset('ow-1.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg'), asset('ow-4.jpg')],
          reviewSummary: 'Coming Soon'
        },
        {
          title: 'ARC Raiders',
          description: 'Extraction shooter with co-op tension.',
          price: 'Coming Soon',
          image: asset('deal-cs2.jpg'),
          releaseDate: '2026',
          platforms: ['windows'],
          topTags: ['Extraction', 'Co-op', 'Shooter', 'Sci-Fi'],
          screenshots: [asset('cs2-1.jpg'), asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('cs2-4.jpg')],
          reviewSummary: 'Coming Soon'
        },
        {
          title: 'Subnautica 2',
          description: 'Co-op survival beneath an unfamiliar ocean.',
          price: 'Coming Soon',
          image: asset('deal-origin.jpg'),
          releaseDate: '2026',
          platforms: ['windows'],
          topTags: ['Survival', 'Open World', 'Co-op', 'Exploration'],
          screenshots: [asset('ck3-1.jpg'), asset('ck3-2.jpg'), asset('ck3-3.jpg'), asset('ck3-4.jpg')],
          reviewSummary: 'Coming Soon'
        },
        {
          title: 'Judas',
          description: 'Narrative-driven sci-fi shooter from Ghost Story Games.',
          price: 'Coming Soon',
          image: asset('deal-hades2.jpg'),
          releaseDate: 'TBA',
          platforms: ['windows'],
          topTags: ['Story Rich', 'Sci-Fi', 'Shooter', 'Immersive Sim'],
          screenshots: [asset('ow-2.jpg'), asset('cs2-2.jpg'), asset('ow-3.jpg'), asset('ck3-2.jpg')],
          reviewSummary: 'Coming Soon'
        },
        {
          title: 'Fable',
          description: 'Fantasy action RPG reboot with British charm.',
          price: 'Coming Soon',
          image: asset('deck-vampire.jpg'),
          releaseDate: '2026',
          platforms: ['windows'],
          topTags: ['RPG', 'Fantasy', 'Adventure', 'Open World'],
          screenshots: [asset('cheap-hike.jpg'), asset('ow-1.jpg'), asset('cheap-breach.jpg'), asset('cheap-slay.jpg')],
          reviewSummary: 'Coming Soon'
        },
        {
          title: 'WUCHANG: Fallen Feathers',
          description: 'Soulslike action RPG rooted in late Ming myth.',
          price: 'Coming Soon',
          image: asset('deal-origin.jpg'),
          releaseDate: '2026',
          platforms: ['windows'],
          topTags: ['Soulslike', 'Action RPG', 'Dark Fantasy', 'Chinese Myth'],
          screenshots: [asset('ck3-1.jpg'), asset('ow-2.jpg'), asset('cs2-2.jpg'), asset('ow-3.jpg')],
          reviewSummary: 'Coming Soon'
        },
        {
          title: 'The Seven Deadly Sins: Origin',
          description: 'Anime open-world action RPG with party swapping.',
          price: 'Coming Soon',
          image: asset('deal-origin.jpg'),
          releaseDate: 'Coming Soon',
          platforms: ['windows'],
          topTags: ['Open World', 'Anime', 'Action RPG', 'Adventure'],
          screenshots: [asset('ow-1.jpg'), asset('ck3-1.jpg'), asset('cs2-1.jpg'), asset('ow-3.jpg')],
          reviewSummary: 'Coming Soon'
        }
      ]
    },
    {
      id: 'discounts',
      label: 'Special Offers',
      moreLabel: 'Specials',
      entries: [
        {
          title: 'Cyberpunk 2077',
          description: 'Night City is back on a major sale.',
          price: '$29.99',
          image: asset('deal-origin.jpg'),
          releaseDate: 'On Sale Now',
          platforms: ['windows'],
          topTags: ['Open World', 'Story Rich', 'RPG', 'Sci-Fi'],
          screenshots: [asset('ow-1.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg'), asset('ow-4.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '864,894',
          discountPercent: 55,
          originalPrice: '$59.99'
        },
        {
          title: 'Dave the Diver',
          description: 'Management and adventure at a great price.',
          price: '$13.99',
          image: asset('deck-vampire.jpg'),
          releaseDate: 'On Sale Now',
          platforms: ['windows'],
          topTags: ['Management', 'Adventure', 'Pixel', 'Exploration'],
          screenshots: [asset('ow-2.jpg'), asset('cs2-2.jpg'), asset('ck3-2.jpg'), asset('cheap-hike.jpg')],
          reviewSummary: 'Overwhelmingly Positive',
          reviewCount: '98,650',
          discountPercent: 30,
          originalPrice: '$19.99'
        },
        {
          title: 'DREDGE',
          description: 'Fishing horror with a moody atmosphere and a sharp cut.',
          price: '$14.99',
          image: asset('cheap-hike.jpg'),
          releaseDate: 'On Sale Now',
          platforms: ['windows', 'mac'],
          topTags: ['Fishing', 'Horror', 'Indie', 'Exploration'],
          screenshots: [asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg'), asset('cheap-slay.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '31,210',
          discountPercent: 40,
          originalPrice: '$24.99'
        },
        {
          title: 'Balatro',
          description: 'The card roguelike sensation keeps showing up in every sale.',
          price: '$11.99',
          image: asset('deck-balatro.jpg'),
          releaseDate: 'On Sale Now',
          platforms: ['windows', 'mac'],
          topTags: ['Deckbuilding', 'Roguelike', 'Strategy', 'Indie'],
          screenshots: [asset('cheap-breach.jpg'), asset('cheap-slay.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg')],
          reviewSummary: 'Overwhelmingly Positive',
          reviewCount: '83,412',
          discountPercent: 20,
          originalPrice: '$14.99'
        },
        {
          title: 'Baba Is You',
          description: 'Brilliant rule-bending puzzles at a tiny price.',
          price: '$10.49',
          image: asset('cheap-slay.jpg'),
          releaseDate: 'On Sale Now',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['Puzzle', 'Logic', 'Indie', 'Creative'],
          screenshots: [asset('cheap-slay.jpg'), asset('cheap-metro.jpg'), asset('cheap-hike.jpg'), asset('cheap-breach.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '18,225',
          discountPercent: 30,
          originalPrice: '$14.99'
        },
        {
          title: 'Vampire Survivors',
          description: 'Still the easiest recommendation in any deep-discount row.',
          price: '$3.99',
          image: asset('deck-vampire.jpg'),
          releaseDate: 'On Sale Now',
          platforms: ['windows', 'mac'],
          topTags: ['Roguelite', 'Bullet Heaven', 'Pixel Graphics', 'Indie'],
          screenshots: [asset('cheap-slay.jpg'), asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg')],
          reviewSummary: 'Overwhelmingly Positive',
          reviewCount: '234,511',
          discountPercent: 20,
          originalPrice: '$4.99'
        },
        {
          title: 'Hollow Knight',
          description: 'Metroidvania masterpiece with one of the cleanest sale hooks on Steam.',
          price: '$11.99',
          image: asset('deal-hades2.jpg'),
          releaseDate: 'On Sale Now',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['Metroidvania', 'Exploration', 'Action', 'Difficult'],
          screenshots: [asset('ow-1.jpg'), asset('ow-3.jpg'), asset('ck3-2.jpg'), asset('cheap-hike.jpg')],
          reviewSummary: 'Overwhelmingly Positive',
          reviewCount: '329,004',
          discountPercent: 20,
          originalPrice: '$14.99'
        }
      ]
    },
    {
      id: 'free',
      label: 'Trending Free Games',
      moreLabel: 'Free Games',
      entries: [
        {
          title: 'Counter-Strike 2',
          description: 'Competitive FPS that never leaves the charts.',
          price: 'Free To Play',
          image: asset('deal-cs2.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['FPS', 'Competitive', 'Multiplayer', 'Free to Play'],
          screenshots: [asset('cs2-1.jpg'), asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('cs2-4.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '828,223'
        },
        {
          title: 'Warframe',
          description: 'Long-running sci-fi action looter.',
          price: 'Free To Play',
          image: asset('vr-bonelab.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Sci-Fi', 'Action', 'Loot', 'Free to Play'],
          screenshots: [asset('ck3-1.jpg'), asset('ck3-2.jpg'), asset('ck3-3.jpg'), asset('ck3-4.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '620,114'
        },
        {
          title: 'Apex Legends',
          description: 'Hero battle royale with slide-heavy gunfights.',
          price: 'Free To Play',
          image: asset('vr-alyx.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Battle Royale', 'Hero Shooter', 'FPS', 'Free to Play'],
          screenshots: [asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '783,118'
        },
        {
          title: 'THE FINALS',
          description: 'Destruction-first arena shooter that keeps climbing back up.',
          price: 'Free To Play',
          image: asset('deal-cs2.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Arena Shooter', 'Destruction', 'Team-Based', 'Free to Play'],
          screenshots: [asset('ow-2.jpg'), asset('cs2-3.jpg'), asset('ow-3.jpg'), asset('cs2-4.jpg')],
          reviewSummary: 'Mostly Positive',
          reviewCount: '178,440'
        },
        {
          title: 'Yu-Gi-Oh! Master Duel',
          description: 'Card duels, ranked ladders, and constant events.',
          price: 'Free To Play',
          image: asset('cheap-metro.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Card Game', 'Strategy', 'Online PvP', 'Free to Play'],
          screenshots: [asset('cheap-slay.jpg'), asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '72,885'
        },
        {
          title: 'Apex Legends',
          description: 'Slide-heavy hero battle royale that keeps bouncing back.',
          price: 'Free To Play',
          image: asset('vr-alyx.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Battle Royale', 'Hero Shooter', 'FPS', 'Free to Play'],
          screenshots: [asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg')],
          reviewSummary: 'Very Positive',
          reviewCount: '783,118'
        },
        {
          title: 'PUBG: BATTLEGROUNDS',
          description: 'The long-running battle royale still fills every free chart.',
          price: 'Free To Play',
          image: asset('deal-cs2.jpg'),
          releaseDate: 'Now Available',
          platforms: ['windows'],
          topTags: ['Battle Royale', 'Realistic Shooter', 'Multiplayer', 'Free to Play'],
          screenshots: [asset('ow-4.jpg'), asset('cs2-1.jpg'), asset('cs2-4.jpg'), asset('ow-1.jpg')],
          reviewSummary: 'Mostly Positive',
          reviewCount: '1,528,110'
        }
      ]
    }
  ]
};

export const browseLinksByLocale: Record<Locale, NavItem[]> = {
  'zh-CN': [
    { label: '新品', href: '#' },
    { label: '优惠', href: '#' },
    { label: '免费游戏', href: '#' },
    { label: '按用户标签', href: '#' }
  ],
  'en-US': [
    { label: 'New Releases', href: '#' },
    { label: 'Specials', href: '#' },
    { label: 'Free Games', href: '#' },
    { label: 'Browse by Tag', href: '#' }
  ]
};

export const footerGroupsByLocale: Record<Locale, FooterLinkGroup[]> = {
  'zh-CN': [
    {
      title: 'STEAM',
      links: [
        { label: '关于 Steam', href: 'https://store.steampowered.com/about/' },
        { label: 'Steam 订户协议', href: 'https://store.steampowered.com/subscriber_agreement/' },
        { label: 'Steamworks', href: 'https://partner.steamgames.com/' },
        { label: 'Steam 分销', href: 'https://partner.steamgames.com/steamdirect' },
        { label: '礼物卡', href: 'https://store.steampowered.com/digitalgiftcards/' }
      ]
    },
    {
      title: 'VALVE',
      links: [
        { label: '关于 Valve', href: 'https://www.valvesoftware.com/' },
        { label: '工作机会', href: 'https://www.valvesoftware.com/zh-cn/' },
        { label: '硬件', href: 'https://store.steampowered.com/hardware/' },
        { label: '回收', href: 'https://store.steampowered.com/recycling/' }
      ]
    },
    {
      title: '法律信息',
      links: [
        { label: '隐私', href: 'https://store.steampowered.com/privacy_agreement/' },
        { label: '无障碍', href: 'https://help.steampowered.com/faqs/view/10BB-D27A-6378-4436' },
        { label: '通知与政策', href: 'https://store.steampowered.com/legal/' },
        { label: 'Cookie', href: 'https://store.steampowered.com/account/cookiepreferences/' },
        { label: '退款', href: 'https://store.steampowered.com/steam_refunds/' }
      ]
    },
    {
      title: '更多',
      links: [
        { label: '下载 Steam', href: 'https://store.steampowered.com/about/' },
        { label: '下载手机应用', href: 'https://store.steampowered.com/mobile' },
        { label: '联系客服', href: 'https://help.steampowered.com/zh-cn/' },
        { label: '我的帐户', href: 'https://store.steampowered.com/account/' }
      ]
    }
  ],
  'en-US': [
    {
      title: 'STEAM',
      links: [
        { label: 'About Steam', href: 'https://store.steampowered.com/about/' },
        { label: 'Subscriber Agreement', href: 'https://store.steampowered.com/subscriber_agreement/' },
        { label: 'Steamworks', href: 'https://partner.steamgames.com/' },
        { label: 'Steam Distribution', href: 'https://partner.steamgames.com/steamdirect' },
        { label: 'Gift Cards', href: 'https://store.steampowered.com/digitalgiftcards/' }
      ]
    },
    {
      title: 'VALVE',
      links: [
        { label: 'About Valve', href: 'https://www.valvesoftware.com/' },
        { label: 'Jobs', href: 'https://www.valvesoftware.com/en/' },
        { label: 'Hardware', href: 'https://store.steampowered.com/hardware/' },
        { label: 'Recycling', href: 'https://store.steampowered.com/recycling/' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: 'https://store.steampowered.com/privacy_agreement/' },
        { label: 'Accessibility', href: 'https://help.steampowered.com/faqs/view/10BB-D27A-6378-4436' },
        { label: 'Legal Info', href: 'https://store.steampowered.com/legal/' },
        { label: 'Cookie', href: 'https://store.steampowered.com/account/cookiepreferences/' },
        { label: 'Refunds', href: 'https://store.steampowered.com/steam_refunds/' }
      ]
    },
    {
      title: 'More',
      links: [
        { label: 'Install Steam', href: 'https://store.steampowered.com/about/' },
        { label: 'Mobile App', href: 'https://store.steampowered.com/mobile' },
        { label: 'Support', href: 'https://help.steampowered.com/en/' },
        { label: 'My Account', href: 'https://store.steampowered.com/account/' }
      ]
    }
  ]
};

export const steamHomeLabels: Record<
  Locale,
  {
    installLabel: string;
    signInLabel: string;
    languageButtonLabel: string;
    searchPlaceholder: string;
    searchButtonLabel: string;
    featuredTitle: string;
    previousFeatureLabel: string;
    nextFeatureLabel: string;
    festivalPrimaryAction: string;
    festivalSecondaryAction: string;
    dealsTitle: string;
    dealsActionLabel: string;
    categoryTitle: string;
    deckTitle: string;
    personalizedTitle: string;
    personalizedActionLabel: string;
    discoveryQueueTitle: string;
    discoveryQueueActionLabel: string;
    browseTitle: string;
    communityTitle: string;
    communityActionLabel: string;
    recentUpdatesTitle: string;
    recentUpdatesActionLabel: string;
    creatorsTitle: string;
    underThousandTitle: string;
    vrTitle: string;
    vrActionLabel: string;
    preFooterPrompt: string;
    preFooterTitle: string;
    preFooterLoginLabel: string;
    preFooterRegisterPrefix: string;
    preFooterRegisterLabel: string;
    footerLead: string[];
  }
> = {
  'zh-CN': {
    installLabel: '安装 Steam',
    signInLabel: '登录',
    languageButtonLabel: '语言',
    searchPlaceholder: '搜索商店',
    searchButtonLabel: '搜索',
    featuredTitle: '精选和推荐',
    previousFeatureLabel: '上一张精选内容',
    nextFeatureLabel: '下一张精选内容',
    festivalPrimaryAction: '进入专题',
    festivalSecondaryAction: '查看日程',
    dealsTitle: '折扣与活动',
    dealsActionLabel: '浏览更多',
    categoryTitle: '按类别浏览',
    deckTitle: 'Steam Deck 最热玩游戏',
    personalizedTitle: '基于您玩的游戏推荐',
    personalizedActionLabel: '更多',
    discoveryQueueTitle: '您的探索队列',
    discoveryQueueActionLabel: '了解更多',
    browseTitle: '浏览 Steam',
    communityTitle: '社区推荐',
    communityActionLabel: '按标签和更多方式进行自定义和探索',
    recentUpdatesTitle: '最近更新',
    recentUpdatesActionLabel: '浏览所有',
    creatorsTitle: '来自您了解的开发者和发行商',
    underThousandTitle: '低于 ¥ 1,000',
    vrTitle: '虚拟现实',
    vrActionLabel: '浏览所有',
    preFooterPrompt: '正在寻找推荐？',
    preFooterTitle: '登录以查看个性化推荐',
    preFooterLoginLabel: '登录',
    preFooterRegisterPrefix: '或者',
    preFooterRegisterLabel: '注册并免费加入 Steam',
    footerLead: [
      '© 2026 Valve Corporation。保留所有权利。所有商标均为其在美国及其他国家/地区的各自持有者所有。',
      '所有的价格均已包含增值税（如适用）。'
    ]
  },
  'en-US': {
    installLabel: 'Install Steam',
    signInLabel: 'login',
    languageButtonLabel: 'Language',
    searchPlaceholder: 'search the store',
    searchButtonLabel: 'search',
    featuredTitle: 'Featured & Recommended',
    previousFeatureLabel: 'Previous featured item',
    nextFeatureLabel: 'Next featured item',
    festivalPrimaryAction: 'Enter Event Hub',
    festivalSecondaryAction: 'View Schedule',
    dealsTitle: 'Deals & Events',
    dealsActionLabel: 'Browse More',
    categoryTitle: 'Browse by Category',
    deckTitle: 'Top Played on Steam Deck',
    personalizedTitle: 'Recommended Based on the Games You Play',
    personalizedActionLabel: 'More',
    discoveryQueueTitle: 'Your Discovery Queue',
    discoveryQueueActionLabel: 'Learn More',
    browseTitle: 'Browse Steam',
    communityTitle: 'Community Recommendations',
    communityActionLabel: 'Customize & Explore by Tag',
    recentUpdatesTitle: 'Recently Updated',
    recentUpdatesActionLabel: 'Browse All',
    creatorsTitle: 'From Developers and Publishers You Know',
    underThousandTitle: 'Under $10',
    vrTitle: 'Virtual Reality',
    vrActionLabel: 'Browse All',
    preFooterPrompt: 'Looking for recommendations?',
    preFooterTitle: 'Sign in to view personalized recommendations',
    preFooterLoginLabel: 'Sign In',
    preFooterRegisterPrefix: 'or',
    preFooterRegisterLabel: 'sign up and join Steam for free',
    footerLead: [
      '© 2026 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.',
      'All prices include VAT (where applicable).'
    ]
  }
};
