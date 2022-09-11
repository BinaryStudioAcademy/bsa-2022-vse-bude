import { getEnv } from './env';

export const getFilenameFromUrl = (url: string) => {
  const filename = url.split('/').pop();

  return filename ? filename : null;
};

export const productUrl = (productId: string) =>
  `${getEnv('APP_URL')}/item/${productId}`;
