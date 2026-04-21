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

const asset = (name: string) => `/steam/home/${name}`;

const medievalFestivalAssets = {
  href: 'https://store.steampowered.com/category/medieval?l=schinese',
  videoWebm:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/frontpage/1f5bf11f60ba74359c5c42a9/3984fe0ba11cede732b28ad46023d408104ddaa2/webm_page_bg_schinese.webm?t=1776282445',
  videoMp4:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/frontpage/1f5bf11f60ba74359c5c42a9/a52ddc578059614fbb54cc921ddb4b83854fc3cb/mp4_page_bg_schinese.mp4?t=1776282445',
  desktopImage:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/frontpage/1f5bf11f60ba74359c5c42a9/3ed450c173ca391bd1236da4b670b6bda779c286/page_bg_schinese.jpg?t=1776282445',
  mobileImage:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/frontpage/1f5bf11f60ba74359c5c42a9/e2340faee4b2dddfacaf45406f7dbac695fd0d12/page_bg_mobile_schinese.jpg?t=1776282445'
} as const;

const steamDeckBannerAssets = {
  desktopPoster:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_animated_static_schinese.jpg?t=1773681984',
  desktopVideoWebm:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_animated_webm_schinese.webm?t=1773681984',
  desktopVideoMp4:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_animated_mp4_schinese.mp4?t=1773681984',
  mobilePoster:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_animated_static_mobile_schinese.jpg?t=1773681984',
  mobileVideoWebm:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_animated_webm_mobile_schinese.webm?t=1773681984',
  mobileVideoMp4:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_animated_mp4_mobile_schinese.mp4?t=1773681984'
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
      items: ['新品节', '发行商特卖', '中世纪游戏节', '演示体验']
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
      items: ['Festivals', 'Publisher Sales', 'Medieval Fest', 'Demos']
    }
  ]
};

export const heroSlidesByLocale: Record<Locale, HeroSlide[]> = {
  'zh-CN': [
    {
      title: '2026 年 Steam 中世纪游戏节',
      subtitle: '限时专题活动，精选动作、策略与王国经营游戏。',
      eyebrow: '专题活动',
      href: medievalFestivalAssets.href,
      background:
        'linear-gradient(135deg, rgba(226,210,169,0.95), rgba(122,83,46,0.94))',
      accent: '#d9b36b',
      videoWebm: medievalFestivalAssets.videoWebm,
      videoMp4: medievalFestivalAssets.videoMp4,
      desktopImage: medievalFestivalAssets.desktopImage,
      mobileImage: medievalFestivalAssets.mobileImage
    }
  ],
  'en-US': [
    {
      title: 'Steam Medieval Fest 2026',
      subtitle:
        'A limited-time event spotlighting action, strategy, and kingdom builders.',
      eyebrow: 'Special Event',
      href: medievalFestivalAssets.href,
      background:
        'linear-gradient(135deg, rgba(226,210,169,0.95), rgba(122,83,46,0.94))',
      accent: '#d9b36b',
      videoWebm: medievalFestivalAssets.videoWebm,
      videoMp4: medievalFestivalAssets.videoMp4,
      desktopImage: medievalFestivalAssets.desktopImage,
      mobileImage: medievalFestivalAssets.mobileImage
    }
  ]
};

export const featuredGamesByLocale: Record<Locale, FeaturedGame[]> = {
  'zh-CN': [
    {
      title: '《守望先锋®》',
      status: '现已推出',
      price: '免费开玩',
      hero: asset('ow-hero.jpg'),
      screenshots: [
        asset('ow-1.jpg'),
        asset('ow-2.jpg'),
        asset('ow-3.jpg'),
        asset('ow-4.jpg')
      ],
      tags: ['团队射击', '免费开玩', '多人合作']
    },
    {
      title: 'Crusader Kings III',
      status: '现已推出',
      price: '¥ 2,097',
      hero: asset('ck3-hero.jpg'),
      screenshots: [
        asset('ck3-1.jpg'),
        asset('ck3-2.jpg'),
        asset('ck3-3.jpg'),
        asset('ck3-4.jpg')
      ],
      tags: ['大战略', '中世纪', '角色扮演']
    },
    {
      title: 'Counter-Strike 2',
      status: '热销商品',
      price: '免费开玩',
      hero: asset('cs2-hero.jpg'),
      screenshots: [
        asset('cs2-1.jpg'),
        asset('cs2-2.jpg'),
        asset('cs2-3.jpg'),
        asset('cs2-4.jpg')
      ],
      tags: ['FPS', '竞技', '饰品市场']
    }
  ],
  'en-US': [
    {
      title: 'Overwatch® 2',
      status: 'Now Available',
      price: 'Free To Play',
      hero: asset('ow-hero.jpg'),
      screenshots: [
        asset('ow-1.jpg'),
        asset('ow-2.jpg'),
        asset('ow-3.jpg'),
        asset('ow-4.jpg')
      ],
      tags: ['Hero Shooter', 'Free to Play', 'Co-op']
    },
    {
      title: 'Crusader Kings III',
      status: 'Now Available',
      price: '$29.99',
      hero: asset('ck3-hero.jpg'),
      screenshots: [
        asset('ck3-1.jpg'),
        asset('ck3-2.jpg'),
        asset('ck3-3.jpg'),
        asset('ck3-4.jpg')
      ],
      tags: ['Grand Strategy', 'Medieval', 'RPG']
    },
    {
      title: 'Counter-Strike 2',
      status: 'Top Seller',
      price: 'Free To Play',
      hero: asset('cs2-hero.jpg'),
      screenshots: [
        asset('cs2-1.jpg'),
        asset('cs2-2.jpg'),
        asset('cs2-3.jpg'),
        asset('cs2-4.jpg')
      ],
      tags: ['FPS', 'Competitive', 'Marketplace']
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
    subtitle: '随处畅玩你的 Steam 游戏库',
    description: '掌机、扩展坞与客厅场景无缝衔接，延续官网中段硬件横幅的视觉节奏。',
    href: 'https://store.steampowered.com/app/1675200/Steam_Deck/?utm_source=steamhomev2&snr=1_4_4__147',
    ...steamDeckBannerAssets
  },
  'en-US': {
    title: 'Steam Deck',
    subtitle: 'Take your Steam library anywhere',
    description: 'A mid-page hardware banner inspired by the live storefront cadence.',
    href: 'https://store.steampowered.com/app/1675200/Steam_Deck/?utm_source=steamhomev2&snr=1_4_4__147',
    ...steamDeckBannerAssets
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
          title: '夺宝砖家',
          description: '策略、平台解谜、牌组构建、三消',
          price: '¥ 13.80',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3020550/730d6602c8ce3b9a2867a59d8d0c8d214d7e7627/capsule_231x87_schinese.jpg?t=1776736400',
          releaseDate: '2026 年 4 月 20 日',
          platforms: ['windows'],
          topTags: ['策略', '平台解谜', '牌组构建', '三消', '解谜'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3020550/6bb655f8a8f9cbb0aca98870ab2f2b4045e85b3a/ss_6bb655f8a8f9cbb0aca98870ab2f2b4045e85b3a.600x338.jpg?t=1776736400',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3020550/0a49a29825cb015028ce4be032797ea8cb6d133c/ss_0a49a29825cb015028ce4be032797ea8cb6d133c.600x338.jpg?t=1776736400',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3020550/f9ad566dbe67dd8ad736e22fbc0297b9b28809a7/ss_f9ad566dbe67dd8ad736e22fbc0297b9b28809a7.600x338.jpg?t=1776736400',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3020550/0de2c8688448f3b91216a52e3eaf19129ae4c07a/ss_0de2c8688448f3b91216a52e3eaf19129ae4c07a.600x338.jpg?t=1776736400'
          ],
          reviewSummary: '好评',
          reviewCount: '12',
          discountPercent: 40,
          originalPrice: '¥ 23.00'
        },
        {
          title: '地心工业线 Chipmatic',
          description: '采矿、模拟、自动化、地下',
          price: '¥ 31.50',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3780950/298ed34d47837ab65e6bbee198a053937d472a82/capsule_231x87_schinese.jpg?t=1776689981',
          releaseDate: '2026 年 4 月 20 日',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['采矿', '模拟', '自动化', '地下', '建造'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3780950/2533c7b5fc69bbac9acd9f751861c49356f9b9b1/ss_2533c7b5fc69bbac9acd9f751861c49356f9b9b1.600x338.jpg?t=1776689981',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3780950/c76e179c79ad33e38949468d5cbcabc8304a6fc4/ss_c76e179c79ad33e38949468d5cbcabc8304a6fc4.600x338.jpg?t=1776689981',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3780950/e7a590c58f224b477dc5c2dfe3ca5ec361842cde/ss_e7a590c58f224b477dc5c2dfe3ca5ec361842cde.600x338.jpg?t=1776689981',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3780950/f59bc7be91d397927f22f0e60b54ae145b3c1497/ss_f59bc7be91d397927f22f0e60b54ae145b3c1497.600x338.jpg?t=1776689981'
          ],
          reviewSummary: '新品好评',
          reviewCount: '9',
          discountPercent: 10,
          originalPrice: '¥ 35.00'
        },
        {
          title: 'MMO98',
          description: '策略、模拟、点击游戏、挂机游戏',
          price: '¥ 26.10',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3907940/7be1eb54c0a8fad89de920a974810a5b3f7d58fb/capsule_231x87.jpg?t=1776692207',
          releaseDate: '2026 年 4 月 20 日',
          platforms: ['windows', 'mac'],
          topTags: ['策略', '模拟', '点击游戏', '挂机游戏'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3907940/e87838e1aecdc87d14d8233711adf68690efcee7/ss_e87838e1aecdc87d14d8233711adf68690efcee7.600x338.jpg?t=1776692207',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3907940/5b1b712c357af067dfa8bfec8b056b8fd5dd1308/ss_5b1b712c357af067dfa8bfec8b056b8fd5dd1308.600x338.jpg?t=1776692207',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3907940/99950c98ebd1f0549122a6fc8f5fe943ce3241ab/ss_99950c98ebd1f0549122a6fc8f5fe943ce3241ab.600x338.jpg?t=1776692207',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3907940/7920ddfe3d2e2dfa6f08e718b2b8c05c9ef29149/ss_7920ddfe3d2e2dfa6f08e718b2b8c05c9ef29149.600x338.jpg?t=1776692207'
          ],
          reviewSummary: '特别好评',
          reviewCount: '132',
          discountPercent: 10,
          originalPrice: '¥ 29.00'
        },
        {
          title: 'All Hail the Orb',
          description: '探索、点击游戏、挂机游戏、模拟',
          price: '¥ 19.80',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4262310/123a4725143e6acf9e95111cefa07e485df8ebd6/capsule_231x87.jpg?t=1776685057',
          releaseDate: '2026 年 4 月 20 日',
          platforms: ['windows'],
          topTags: ['探索', '点击游戏', '挂机游戏', '模拟'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4262310/ce9822547e9966e06e6ae01035eb62ac6c35ab3a/ss_ce9822547e9966e06e6ae01035eb62ac6c35ab3a.600x338.jpg?t=1776685057',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4262310/9e42a6119e730311bf6ef9cf637549d997864722/ss_9e42a6119e730311bf6ef9cf637549d997864722.600x338.jpg?t=1776685057',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4262310/349fd102092a0f8378e220b84719ef6382cce479/ss_349fd102092a0f8378e220b84719ef6382cce479.600x338.jpg?t=1776685057',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4262310/db7e0b44943e35375ced072adfb6288e08ead1f4/ss_db7e0b44943e35375ced072adfb6288e08ead1f4.600x338.jpg?t=1776685057'
          ],
          reviewSummary: '新品上架',
          reviewCount: '0',
          discountPercent: 10,
          originalPrice: '¥ 22.00'
        },
        {
          title: '掘地求狗',
          description: '多人、在线合作、物理、类 Rogue',
          price: '¥ 26.40',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4244510/ae3ac3509f66fe004a9a49c555f2a95c817b0ed8/capsule_231x87_schinese.jpg?t=1776707033',
          releaseDate: '2026 年 4 月 20 日',
          platforms: ['windows'],
          topTags: ['多人', '在线合作', '物理', '类 Rogue'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4244510/7466683155c61bda5940c6a80a646e5f01615a48/ss_7466683155c61bda5940c6a80a646e5f01615a48.600x338.jpg?t=1776707033',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4244510/e9182c0f15ad51b2ddd4627c4d262a916ae3b9cf/ss_e9182c0f15ad51b2ddd4627c4d262a916ae3b9cf.600x338.jpg?t=1776707033',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4244510/92a6e925f8780a482cd0cf5a4036d6dab4565afe/ss_92a6e925f8780a482cd0cf5a4036d6dab4565afe.600x338.jpg?t=1776707033',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4244510/cb998d2a8a9d8176c183edc2f1856ea1637c7aa7/ss_cb998d2a8a9d8176c183edc2f1856ea1637c7aa7.600x338.jpg?t=1776707033'
          ],
          reviewSummary: '新品上架',
          reviewCount: '0',
          discountPercent: 20,
          originalPrice: '¥ 33.00'
        },
        {
          title: '我家有矿',
          description: '休闲、挂机游戏、资源管理、管理',
          price: '¥ 18.85',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3946110/1db9fb9a87a83781d5244dfa2078a1cd235af5ef/capsule_231x87_schinese.jpg?t=1776670424',
          releaseDate: '2026 年 4 月 20 日',
          platforms: ['windows'],
          topTags: ['休闲', '挂机游戏', '资源管理', '管理'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3946110/41d5743fa275d6fbd4e9f759631cf38246b179fd/ss_41d5743fa275d6fbd4e9f759631cf38246b179fd.600x338.jpg?t=1776670424',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3946110/bc8adb336bac9eb0d69387f4f9eb61184eb967c7/ss_bc8adb336bac9eb0d69387f4f9eb61184eb967c7.600x338.jpg?t=1776670424',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3946110/5d3b034b31d6316546d8e8d87f143b8dc10ba275/ss_5d3b034b31d6316546d8e8d87f143b8dc10ba275.600x338.jpg?t=1776670424',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3946110/3b1ad78c54a746dcba6beaec1015a50a94284afc/ss_3b1ad78c54a746dcba6beaec1015a50a94284afc.600x338.jpg?t=1776670424'
          ],
          reviewSummary: '好评',
          reviewCount: '103',
          discountPercent: 35,
          originalPrice: '¥ 29.00'
        },
        {
          title: '指尖农场',
          description: '休闲、模拟、软件、农场模拟',
          price: '¥ 17.99',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4216670/d2fac71e18c141e85ddd282858e8d2f4fbd8004e/capsule_231x87_schinese.jpg?t=1776654464',
          releaseDate: '2026 年 4 月 19 日',
          platforms: ['windows'],
          topTags: ['休闲', '模拟', '软件', '农场模拟'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4216670/356a34e0720d1583fc11804d17fd995fb10adacd/ss_356a34e0720d1583fc11804d17fd995fb10adacd.600x338.jpg?t=1776654464',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4216670/44df18ccea854bf42e6dd1df0ca09c1f79dbef1d/ss_44df18ccea854bf42e6dd1df0ca09c1f79dbef1d.600x338.jpg?t=1776654464',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4216670/922f571e2ad1c204a0b5d3361d68e9e88ad4a3fb/ss_922f571e2ad1c204a0b5d3361d68e9e88ad4a3fb.600x338.jpg?t=1776654464',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4216670/3ed16c8533722b8fedd626759932394947af0cf8/ss_3ed16c8533722b8fedd626759932394947af0cf8.600x338.jpg?t=1776654464'
          ],
          reviewSummary: '新品上架',
          reviewCount: '0',
          discountPercent: 10,
          originalPrice: '¥ 19.99'
        },
        {
          title: '余火守护者 The Ember Guardian',
          description: '塔防、极简主义、建造、双摇杆射击',
          price: '¥ 69.30',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3570060/26e6bf1d7ae7fc67e020a819c58971f6e47a47c1/capsule_231x87.jpg?t=1776533389',
          releaseDate: '2026 年 4 月 17 日',
          platforms: ['windows'],
          topTags: ['塔防', '极简主义', '建造', '双摇杆射击'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3570060/7df4dcd69300c5b788b0169e6e8ccb8517fda717/ss_7df4dcd69300c5b788b0169e6e8ccb8517fda717.600x338.jpg?t=1776533389',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3570060/671922dba7765c15604d83a3f039c695a37bcc1c/ss_671922dba7765c15604d83a3f039c695a37bcc1c.600x338.jpg?t=1776533389',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3570060/d99863cb38698f56ca4d2730263c5ebb04b8ec71/ss_d99863cb38698f56ca4d2730263c5ebb04b8ec71.600x338.jpg?t=1776533389',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3570060/83137ccb7f176775825c29ec5f7173f31e730b22/ss_83137ccb7f176775825c29ec5f7173f31e730b22.600x338.jpg?t=1776533389'
          ],
          reviewSummary: '新品上架',
          reviewCount: '0',
          discountPercent: 10,
          originalPrice: '¥ 77.00'
        },
        {
          title: '空中帝国 Airborne Empire',
          description: '城市营造、开放世界、角色扮演、探索',
          price: '¥ 54.00',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2438680/afe9dea609182d0d9b45d957509fe86cec13eca3/capsule_231x87_alt_assets_0_schinese.jpg?t=1776438327',
          releaseDate: '2026 年 4 月 17 日',
          platforms: ['windows', 'mac'],
          topTags: ['城市营造', '开放世界', '角色扮演', '探索'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2438680/6b727a22e2d58319b3a6f8bcced68a1eea8bbf21/ss_6b727a22e2d58319b3a6f8bcced68a1eea8bbf21.600x338.jpg?t=1776438327',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2438680/ss_83b5bfadc91a0287f242506e79d92c86c561cd66.600x338.jpg?t=1776438327',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2438680/8fb021bdf9a3e12ebf8eac385d1da69922f0ec00/ss_8fb021bdf9a3e12ebf8eac385d1da69922f0ec00.600x338.jpg?t=1776438327',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2438680/ss_030e3d60ce1d399be0cb5b520aef3fedcd43ee8a.600x338.jpg?t=1776438327'
          ],
          reviewSummary: '好评',
          reviewCount: '681',
          discountPercent: 50,
          originalPrice: '¥ 108.00'
        },
        {
          title: 'PRAGMATA',
          description: '可爱、科幻、动作、第三人称射击',
          price: '¥ 268.00',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/3e7cf55cf72a980ac94cf45d4212e8f0cb566f7f/capsule_231x87.jpg?t=1776398844',
          releaseDate: '2026 年 4 月 16 日',
          platforms: ['windows'],
          topTags: ['动作', '科幻', '冒险', '第三人称射击'],
          screenshots: [
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/9699288b90d0aad320e998f107b59edd27e9ea61/ss_9699288b90d0aad320e998f107b59edd27e9ea61.600x338.jpg?t=1776398844',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/62486c0475c7bf1a14889d61a51ad24f09e5f044/ss_62486c0475c7bf1a14889d61a51ad24f09e5f044.600x338.jpg?t=1776398844',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/26773713a2435c8edc2eac5e7eb234324b3b002f/ss_26773713a2435c8edc2eac5e7eb234324b3b002f.600x338.jpg?t=1776398844',
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/8913ab7128c72ddd1b407c274e9615b2f6e658a2/ss_8913ab7128c72ddd1b407c274e9615b2f6e658a2.600x338.jpg?t=1776398844'
          ],
          reviewSummary: '特别好评',
          reviewCount: '11,482'
        }
      ]
    },
    {
      id: 'top-sellers',
      label: '热销商品',
      moreLabel: '热销',
      entries: [
        {
          title: 'PRAGMATA',
          description: '科幻动作冒险、第三人称射击、剧情驱动',
          price: '¥ 268.00',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/3e7cf55cf72a980ac94cf45d4212e8f0cb566f7f/capsule_231x87.jpg?t=1776398844',
          releaseDate: '2026 年 4 月 16 日',
          platforms: ['windows'],
          topTags: ['动作', '科幻', '冒险', '第三人称射击'],
          screenshots: [asset('ow-1.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg'), asset('ow-4.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '11,482'
        },
        {
          title: 'Counter-Strike 2',
          description: '竞技、第一人称射击、免费开玩、饰品市场',
          price: '免费开玩',
          image: asset('deal-cs2.jpg'),
          releaseDate: '现已推出',
          platforms: ['windows'],
          topTags: ['FPS', '竞技', '免费开玩', '多人'],
          screenshots: [asset('cs2-1.jpg'), asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('cs2-4.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '8,28,223'
        },
        {
          title: 'Crusader Kings III',
          description: '大战略、角色扮演、中世纪、模拟',
          price: '¥ 2,097',
          image: asset('ck3-hero.jpg'),
          releaseDate: '现已推出',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['大战略', '中世纪', '角色扮演', '模拟'],
          screenshots: [asset('ck3-1.jpg'), asset('ck3-2.jpg'), asset('ck3-3.jpg'), asset('ck3-4.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '165,421'
        },
        {
          title: '我家有矿',
          description: '休闲、挂机游戏、资源管理、管理',
          price: '¥ 18.85',
          image:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3946110/1db9fb9a87a83781d5244dfa2078a1cd235af5ef/capsule_231x87_schinese.jpg?t=1776670424',
          releaseDate: '2026 年 4 月 20 日',
          platforms: ['windows'],
          topTags: ['休闲', '挂机游戏', '资源管理', '管理'],
          screenshots: [asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg'), asset('cheap-slay.jpg')],
          reviewSummary: '好评',
          reviewCount: '103',
          discountPercent: 35,
          originalPrice: '¥ 29.00'
        },
        {
          title: 'Hades II',
          description: '动作 Rogue-like、神话、快节奏战斗',
          price: '¥ 108',
          image: asset('deal-hades2.jpg'),
          releaseDate: '抢先体验',
          platforms: ['windows'],
          topTags: ['动作 Rogue-like', '神话', '快节奏', '独立'],
          screenshots: [asset('deck-hades2.jpg'), asset('ow-2.jpg'), asset('cs2-2.jpg'), asset('ck3-2.jpg')],
          reviewSummary: '好评如潮',
          reviewCount: '67,321'
        }
      ]
    },
    {
      id: 'upcoming',
      label: '热门即将推出',
      moreLabel: '即将推出',
      entries: [
        {
          title: 'SILENT HILL f',
          description: '心理恐怖、生存、日式悬疑、探索',
          price: '即将推出',
          image: asset('cheap-hike.jpg'),
          releaseDate: '即将宣布',
          platforms: ['windows'],
          topTags: ['心理恐怖', '生存', '悬疑', '探索'],
          screenshots: [asset('ow-1.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg'), asset('ow-4.jpg')],
          reviewSummary: '即将推出'
        },
        {
          title: 'ARC Raiders',
          description: '合作射击、科幻、撤离、生存',
          price: '即将推出',
          image: asset('deal-cs2.jpg'),
          releaseDate: '2026',
          platforms: ['windows'],
          topTags: ['合作射击', '科幻', '撤离', '生存'],
          screenshots: [asset('cs2-1.jpg'), asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('cs2-4.jpg')],
          reviewSummary: '即将推出'
        },
        {
          title: 'Subnautica 2',
          description: '海洋生存、开放世界、合作、探索',
          price: '即将推出',
          image: asset('deal-origin.jpg'),
          releaseDate: '2026',
          platforms: ['windows'],
          topTags: ['海洋生存', '开放世界', '合作', '探索'],
          screenshots: [asset('ck3-1.jpg'), asset('ck3-2.jpg'), asset('ck3-3.jpg'), asset('ck3-4.jpg')],
          reviewSummary: '即将推出'
        },
        {
          title: 'The Seven Deadly Sins: Origin',
          description: '开放世界、动作冒险、动漫、角色扮演',
          price: '即将推出',
          image: asset('deal-origin.jpg'),
          releaseDate: '即将推出',
          platforms: ['windows'],
          topTags: ['开放世界', '动作冒险', '动漫', '角色扮演'],
          screenshots: [asset('ow-1.jpg'), asset('ck3-1.jpg'), asset('cs2-1.jpg'), asset('ow-3.jpg')],
          reviewSummary: '即将推出'
        }
      ]
    },
    {
      id: 'discounts',
      label: '优惠',
      moreLabel: '优惠',
      entries: [
        {
          title: 'Cyberpunk 2077',
          description: '开放世界、剧情丰富、角色扮演、科幻',
          price: '¥ 132.00',
          image: asset('deal-origin.jpg'),
          releaseDate: '特惠进行中',
          platforms: ['windows'],
          topTags: ['开放世界', '剧情丰富', '角色扮演', '科幻'],
          screenshots: [asset('ow-1.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg'), asset('ow-4.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '864,894',
          discountPercent: 55,
          originalPrice: '¥ 268.00'
        },
        {
          title: 'DREDGE',
          description: '海钓悬疑、独立、恐怖、探索',
          price: '¥ 74.00',
          image: asset('cheap-hike.jpg'),
          releaseDate: '特惠进行中',
          platforms: ['windows', 'mac'],
          topTags: ['海钓悬疑', '独立', '恐怖', '探索'],
          screenshots: [asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg'), asset('cheap-slay.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '31,210',
          discountPercent: 40,
          originalPrice: '¥ 123.00'
        },
        {
          title: 'Dave the Diver',
          description: '经营、冒险、像素、海底探索',
          price: '¥ 54.60',
          image: asset('deck-vampire.jpg'),
          releaseDate: '特惠进行中',
          platforms: ['windows'],
          topTags: ['经营', '冒险', '像素', '海底探索'],
          screenshots: [asset('ow-2.jpg'), asset('cs2-2.jpg'), asset('ck3-2.jpg'), asset('cheap-hike.jpg')],
          reviewSummary: '好评如潮',
          reviewCount: '98,650',
          discountPercent: 30,
          originalPrice: '¥ 78.00'
        },
        {
          title: 'Baba Is You',
          description: '解谜、逻辑、独立、创意规则',
          price: '¥ 10.64',
          image: asset('cheap-slay.jpg'),
          releaseDate: '特惠进行中',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['解谜', '逻辑', '独立', '创意规则'],
          screenshots: [asset('cheap-slay.jpg'), asset('cheap-metro.jpg'), asset('cheap-hike.jpg'), asset('cheap-breach.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '18,225',
          discountPercent: 30,
          originalPrice: '¥ 15.20'
        }
      ]
    },
    {
      id: 'free',
      label: '人气蹿升的免费游戏',
      moreLabel: '免费游戏',
      entries: [
        {
          title: 'Counter-Strike 2',
          description: '第一人称射击、竞技、多人、免费开玩',
          price: '免费开玩',
          image: asset('deal-cs2.jpg'),
          releaseDate: '现已推出',
          platforms: ['windows'],
          topTags: ['FPS', '竞技', '多人', '免费开玩'],
          screenshots: [asset('cs2-1.jpg'), asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('cs2-4.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '8,28,223'
        },
        {
          title: 'Dota 2',
          description: 'MOBA、多人、竞技、免费开玩',
          price: '免费开玩',
          image: asset('deal-origin.jpg'),
          releaseDate: '现已推出',
          platforms: ['windows', 'mac', 'linux'],
          topTags: ['MOBA', '多人', '竞技', '免费开玩'],
          screenshots: [asset('ow-1.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg'), asset('ow-4.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '2,269,582'
        },
        {
          title: 'Warframe',
          description: '科幻动作、刷宝、合作、免费开玩',
          price: '免费开玩',
          image: asset('vr-bonelab.jpg'),
          releaseDate: '现已推出',
          platforms: ['windows'],
          topTags: ['科幻动作', '刷宝', '合作', '免费开玩'],
          screenshots: [asset('ck3-1.jpg'), asset('ck3-2.jpg'), asset('ck3-3.jpg'), asset('ck3-4.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '620,114'
        },
        {
          title: 'The Finals',
          description: '高破坏竞技射击、队伍合作、免费开玩',
          price: '免费开玩',
          image: asset('vr-alyx.jpg'),
          releaseDate: '现已推出',
          platforms: ['windows'],
          topTags: ['竞技射击', '高破坏', '合作', '免费开玩'],
          screenshots: [asset('cs2-2.jpg'), asset('cs2-3.jpg'), asset('ow-2.jpg'), asset('ow-3.jpg')],
          reviewSummary: '多半好评',
          reviewCount: '178,440'
        },
        {
          title: 'Yu-Gi-Oh! Master Duel',
          description: '卡牌竞技、策略、在线对战、免费开玩',
          price: '免费开玩',
          image: asset('cheap-metro.jpg'),
          releaseDate: '现已推出',
          platforms: ['windows'],
          topTags: ['卡牌竞技', '策略', '在线对战', '免费开玩'],
          screenshots: [asset('cheap-slay.jpg'), asset('cheap-breach.jpg'), asset('cheap-hike.jpg'), asset('cheap-metro.jpg')],
          reviewSummary: '特别好评',
          reviewCount: '72,885'
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
