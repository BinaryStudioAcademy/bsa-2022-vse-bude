import { ApiRoutes } from '@vse-bude/shared';
import type { Services } from '@services';
import { initRandomDataRoutes } from './random-data';
import { initUserRoutes } from './user';
import { initAuthRoutes } from './auth';
import { initUploadImageRoutes } from './upload-image';
import { initHealthRoutes } from './health';

export const initRoutes = (services: Services) => [
  initRandomDataRoutes(services, ApiRoutes.RANDOM_DATA),
  initUserRoutes(services, ApiRoutes.USERS),
  initAuthRoutes(services, ApiRoutes.AUTH),
  initUploadImageRoutes(services, ApiRoutes.UPLOAD_IMAGE),
  initHealthRoutes(ApiRoutes.HEALTH),
];
