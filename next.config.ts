import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // If deploying to https://<username>.github.io/<repo-name>/
  // Set basePath to '/<repo-name>'
  // If deploying to https://<username>.github.io/ (user site), leave empty
  basePath: isGithubPages ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
};

export default nextConfig;
