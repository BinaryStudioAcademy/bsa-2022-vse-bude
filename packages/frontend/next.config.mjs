import i18nConfig from './next-i18next.config.js';

const { i18n } = i18nConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    domains: ['gingkodesign.com'],
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
