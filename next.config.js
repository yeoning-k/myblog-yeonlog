/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const path = require('path');

const nextConfig = {
  output: 'export',
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
  images: {
    unoptimized: true
  },
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "src/styles/_mixins.scss";`
  },
  distDir: 'build',
  reactStrictMode: true
};

module.exports = nextConfig;
