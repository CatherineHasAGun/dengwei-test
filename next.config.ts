import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "dengwei-test";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  assetPrefix: isGitHubPages ? `${basePath}/` : undefined,
  basePath: isGitHubPages ? basePath : undefined,
  images: {
    unoptimized: true,
  },
  output: isGitHubPages ? "export" : undefined,
  reactStrictMode: true,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
