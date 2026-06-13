import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
