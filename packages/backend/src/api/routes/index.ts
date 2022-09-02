import { ApiRoutes } from '@vse-bude/shared';
import type { Services } from '@services';
import { initCategoryRoutes } from './category';
import { initAuthRoutes } from './auth';
import { initUploadImageRoutes } from './upload-image';
import { initVerifyRoutes } from './verify';
import { initProductRoutes } from './product';
import { initNewsRoutes } from './news';
import { initHealthRoutes } from './health';
import { initProfileRoutes } from './profile';
import { initPostRoutes } from './post';
import { initBidRoutes } from './bid';

export const initRoutes = (services: Services) => [
  initCategoryRoutes(services, ApiRoutes.CATEGORIES),
  initProductRoutes(services, ApiRoutes.PRODUCTS),
  initAuthRoutes(services, ApiRoutes.AUTH),
  initUploadImageRoutes(services, ApiRoutes.UPLOAD_IMAGE),
  initNewsRoutes(services, ApiRoutes.NEWS),
  initVerifyRoutes(services, ApiRoutes.VERIFY),
  initHealthRoutes(services, ApiRoutes.HEALTH),
  initProfileRoutes(services, ApiRoutes.PROFILE),
  initPostRoutes(ApiRoutes.CREATE_POST),
  initBidRoutes(services, ApiRoutes.BIDS),
];
