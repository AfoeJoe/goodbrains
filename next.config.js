/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*  rules: [
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    },
  ], */

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
      issuer: /\.[jt]sx?$/,
    });

    return config;
  },
};

module.exports = nextConfig;
