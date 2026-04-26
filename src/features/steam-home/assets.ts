export function steamHomeAsset(path: string) {
  return `${import.meta.env.BASE_URL}steam/home/${path}`;
}

export const steamHomeAssets = {
  logos: {
    steam: steamHomeAsset('logos/logo_steam.svg'),
    valve: steamHomeAsset('logos/footer_logo_valve.png'),
    favicon: steamHomeAsset('logos/favicon.ico')
  },
  icons: {
    install: steamHomeAsset('icons/install_steam_download.png'),
    arrowDown: steamHomeAsset('icons/btn_arrow_down_padded.png'),
    platformWindows: steamHomeAsset('icons/icon_platform_win.svg'),
    platformMac: steamHomeAsset('icons/icon_platform_mac.svg'),
    platformLinux: steamHomeAsset('icons/icon_platform_steamos.svg'),
    arrowLeft: steamHomeAsset('icons/arrow_left.svg'),
    arrowRight: steamHomeAsset('icons/arrow_right.svg')
  },
  fonts: {
    regular: steamHomeAsset('fonts/MotivaSans-Regular.ttf'),
    medium: steamHomeAsset('fonts/MotivaSans-Medium.ttf'),
    bold: steamHomeAsset('fonts/MotivaSans-Bold.ttf'),
    light: steamHomeAsset('fonts/MotivaSans-Light.ttf'),
    italic: steamHomeAsset('fonts/MotivaSans-RegularItalic.ttf'),
    thin: steamHomeAsset('fonts/MotivaSans-Thin.ttf'),
    black: steamHomeAsset('fonts/MotivaSans-Black.ttf')
  },
  backgrounds: {
    bodyTop: steamHomeAsset('backgrounds/colored_body_top.png'),
    cluster: steamHomeAsset('backgrounds/cluster_bg.png'),
    categoryExploration: steamHomeAsset('backgrounds/category-exploration.jpg'),
    categoryCities: steamHomeAsset('backgrounds/category-cities.jpg'),
    categoryStrategy: steamHomeAsset('backgrounds/category-strategy.jpg'),
    categoryRpg: steamHomeAsset('backgrounds/category-rpg.jpg'),
    categoryPuzzle: steamHomeAsset('backgrounds/category-puzzle.jpg')
  }
} as const;

export function applySteamHomeDocumentStyles(targetDocument: Document | undefined) {
  if (!targetDocument) {
    return;
  }

  if (targetDocument.getElementById('steam-home-fonts')) {
    return;
  }

  const style = targetDocument.createElement('style');
  style.id = 'steam-home-fonts';
  style.textContent = `
    @font-face {
      font-family: "Motiva Sans";
      src: url("${steamHomeAssets.fonts.regular}") format("truetype");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "Motiva Sans";
      src: url("${steamHomeAssets.fonts.medium}") format("truetype");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "Motiva Sans";
      src: url("${steamHomeAssets.fonts.bold}") format("truetype");
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "Motiva Sans";
      src: url("${steamHomeAssets.fonts.light}") format("truetype");
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "Motiva Sans";
      src: url("${steamHomeAssets.fonts.italic}") format("truetype");
      font-weight: 400;
      font-style: italic;
      font-display: swap;
    }
    @font-face {
      font-family: "Motiva Sans";
      src: url("${steamHomeAssets.fonts.thin}") format("truetype");
      font-weight: 200;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "Motiva Sans";
      src: url("${steamHomeAssets.fonts.black}") format("truetype");
      font-weight: 800;
      font-style: normal;
      font-display: swap;
    }
  `;

  targetDocument.head.appendChild(style);
  const root = targetDocument.documentElement;
  root.style.setProperty('--steam-home-body-top', `url("${steamHomeAssets.backgrounds.bodyTop}")`);
  root.style.setProperty('--steam-home-cluster-bg', `url("${steamHomeAssets.backgrounds.cluster}")`);
  root.style.setProperty(
    '--steam-home-category-exploration',
    `url("${steamHomeAssets.backgrounds.categoryExploration}")`
  );
  root.style.setProperty(
    '--steam-home-category-cities',
    `url("${steamHomeAssets.backgrounds.categoryCities}")`
  );
  root.style.setProperty(
    '--steam-home-category-strategy',
    `url("${steamHomeAssets.backgrounds.categoryStrategy}")`
  );
  root.style.setProperty('--steam-home-category-rpg', `url("${steamHomeAssets.backgrounds.categoryRpg}")`);
  root.style.setProperty(
    '--steam-home-category-puzzle',
    `url("${steamHomeAssets.backgrounds.categoryPuzzle}")`
  );
}

export function injectSteamHomeDocumentStyles() {
  applySteamHomeDocumentStyles(globalThis.document);
}
