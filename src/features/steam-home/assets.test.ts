import { describe, expect, it } from 'vitest';
import {
  applySteamHomeDocumentStyles,
  injectSteamHomeDocumentStyles,
  steamHomeAsset,
  steamHomeAssets
} from './assets';

describe('steam-home assets helpers', () => {
  it('builds local public asset paths under the steam home directory', () => {
    expect(steamHomeAsset('icons/arrow_left.svg')).toBe('/steam/home/icons/arrow_left.svg');
    expect(steamHomeAssets.logos.steam).toBe('/steam/home/logos/logo_steam.svg');
    expect(steamHomeAssets.logos.favicon).toBe('/steam/home/logos/favicon.ico');
    expect(steamHomeAssets.backgrounds.cluster).toBe('/steam/home/backgrounds/cluster_bg.png');
  });

  it('safely skips document style injection when no document is provided', () => {
    expect(() => applySteamHomeDocumentStyles(undefined)).not.toThrow();
  });

  it('injects font-face rules and shared CSS variables only once per document', () => {
    document.getElementById('steam-home-fonts')?.remove();
    document.documentElement.style.removeProperty('--steam-home-body-top');
    document.documentElement.style.removeProperty('--steam-home-cluster-bg');

    applySteamHomeDocumentStyles(document);
    applySteamHomeDocumentStyles(document);
    injectSteamHomeDocumentStyles();

    const styleTag = document.getElementById('steam-home-fonts');

    expect(styleTag).not.toBeNull();
    expect(styleTag?.textContent).toContain('Motiva Sans');
    expect(document.querySelectorAll('#steam-home-fonts')).toHaveLength(1);
    expect(document.documentElement.style.getPropertyValue('--steam-home-body-top')).toContain(
      '/steam/home/backgrounds/colored_body_top.png'
    );
    expect(document.documentElement.style.getPropertyValue('--steam-home-category-puzzle')).toContain(
      '/steam/home/backgrounds/category-puzzle.jpg'
    );
  });
});
