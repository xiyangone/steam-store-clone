import { describe, expect, it } from 'vitest';
import {
  getAppPathname,
  getAppPathnameForBase,
  getHomeHref,
  getPendingLinkHref,
  normalizeBasePath,
  withBasePath,
  withBasePathForBase
} from './navigation';

describe('navigation helpers', () => {
  it('normalizes base paths and prefixes routes correctly', () => {
    expect(normalizeBasePath('/repo/')).toBe('/repo');
    expect(normalizeBasePath('/')).toBe('');
    expect(withBasePathForBase('/repo/', '/pending-link')).toBe('/repo/pending-link');
    expect(withBasePathForBase('/', '/pending-link')).toBe('/pending-link');
  });

  it('computes app-relative paths across root and base-path deployments', () => {
    expect(getAppPathnameForBase('/', '/pending-link')).toBe('/pending-link');
    expect(getAppPathnameForBase('/', '')).toBe('/');
    expect(getAppPathnameForBase('/repo/', '/repo')).toBe('/');
    expect(getAppPathnameForBase('/repo/', '/repo/pending-link')).toBe('/pending-link');
    expect(getAppPathnameForBase('/repo/', '/repo/')).toBe('/');
    expect(getAppPathnameForBase('/repo/', '')).toBe('/');
    expect(getAppPathnameForBase('/repo/', '/outside')).toBe('/outside');
  });

  it('exposes the current-session home and pending-link hrefs', () => {
    expect(withBasePath('/pending-link')).toBe('/pending-link');
    expect(getPendingLinkHref()).toBe('/pending-link');
    expect(getHomeHref()).toBe('/');
    expect(getAppPathname('/pending-link')).toBe('/pending-link');
  });
});
