import WithBundleAnalyzer from '@next/bundle-analyzer';
import i18nConfig from './next-i18next.config.js';

const { i18n } = i18nConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    domains: [
      'gingkodesign.com',
      'cloudflare-ipfs.com',
      'loremflickr.com',
      'picsum.photos',
      'vse-bude.fra1.digitaloceanspaces.com',
    ],
  },
  compiler: {
    emotion: true,
  },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /libs\/.*src\/index.ts/i,
        sideEffects: false,
      },
    ];

    return config;
  },
};

export default WithBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
