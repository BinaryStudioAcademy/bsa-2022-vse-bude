import { ApiRoutes } from '@vse-bude/shared';
import type { Services } from '@services';
import type { Router } from 'express';
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
import { initOrderRoutes } from './order';

export const initRoutes = (services: Services): Router[] => [
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
  initOrderRoutes(services, ApiRoutes.ORDERS),
];
