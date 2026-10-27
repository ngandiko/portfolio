/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
  },
  output: "export",
  images: { unoptimized: true },
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

module.exports = nextConfig;
