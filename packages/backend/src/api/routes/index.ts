import { ApiRoutes } from '@vse-bude/shared';
import type { Services } from '@services';
import { initRandomDataRoutes } from './random-data';
import { initUserRoutes } from './user';
import { initCategoryRoutes } from './category';
import { initAuthRoutes } from './auth';
import { initUploadImageRoutes } from './upload-image';
import { initProductRoutes } from './product';
import { initNewsRoutes } from './news';

export const initRoutes = (services: Services) => [
  initRandomDataRoutes(services, ApiRoutes.RANDOM_DATA),
  initUserRoutes(services, ApiRoutes.USERS),
  initCategoryRoutes(services, ApiRoutes.CATEGORIES),
  initProductRoutes(services, ApiRoutes.PRODUCTS),
  initAuthRoutes(services, ApiRoutes.AUTH),
  initUploadImageRoutes(services, ApiRoutes.UPLOAD_IMAGE),
  initNewsRoutes(services, ApiRoutes.NEWS),
];
