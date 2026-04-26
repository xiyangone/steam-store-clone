export function normalizeBasePath(basePath: string) {
  return basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
}

export function withBasePathForBase(basePath: string, path: `/${string}`) {
  const normalizedBasePath = normalizeBasePath(basePath);
  return `${normalizedBasePath}${path}`;
}

const basePath = normalizeBasePath(import.meta.env.BASE_URL);

export function withBasePath(path: `/${string}`) {
  return withBasePathForBase(basePath, path);
}

export function getPendingLinkHref() {
  return withBasePath('/pending-link');
}

export function getHomeHref() {
  return withBasePath('/');
}

export function getAppPathnameForBase(basePathname: string, pathname: string) {
  const normalizedBasePath = normalizeBasePath(basePathname);

  if (!normalizedBasePath || normalizedBasePath === '/') {
    return pathname || '/';
  }

  if (pathname === normalizedBasePath) {
    return '/';
  }

  return pathname.startsWith(normalizedBasePath)
    ? pathname.slice(normalizedBasePath.length)
    : pathname || '/';
}

export function getAppPathname(pathname: string) {
  return getAppPathnameForBase(basePath, pathname);
}
