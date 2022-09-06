import { getEnv } from '@helpers';

export const socketCors = {
  origin: getEnv('APP_URL'),
};
