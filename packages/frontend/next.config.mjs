import TerserPlugin from 'terser-webpack-plugin';
import i18nConfig from './next-i18next.config.js';

const { i18n } = i18nConfig;

const isProduction = process.env.NODE_ENV === 'production';

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
  swcMinify: false,
  webpack: (config) => {
    if (isProduction) {
      config.optimization = {
        minimize: true,
        usedExports: true,
        minimizer: [new TerserPlugin()],
      };
    }

    return config;
  },
};

export default nextConfig;
