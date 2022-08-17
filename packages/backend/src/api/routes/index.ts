import { ApiRoutes } from '@vse-bude/shared';
import type { Services } from '@services';
import { initUserRoutes } from './user';
import { initAuthRoutes } from './auth';
import { initUploadImageRoutes } from './upload-image';
import { initVerifyRoutes } from './verify';

export const initRoutes = (services: Services) => [
  initUserRoutes(services, ApiRoutes.USERS),
  initAuthRoutes(services, ApiRoutes.AUTH),
  initUploadImageRoutes(services, ApiRoutes.UPLOAD_IMAGE),
  initVerifyRoutes(services, ApiRoutes.VERIFY),
];
