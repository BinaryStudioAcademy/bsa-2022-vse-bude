import i18nConfig from './next-i18next.config.js';

const { i18n } = i18nConfig;

const nextConfig = {
  i18n,
  images: {
    domains: ['gingkodesign.com', 'cloudflare-ipfs.com'],
  },
};

export default nextConfig;
