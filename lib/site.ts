const defaultSiteUrl = "https://dengwei-test.vercel.app";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export function withBasePath(path: string) {
  if (!basePath) return path;
  if (path === "/") return `${basePath}/`;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
