import { ApiRoutes } from '@vse-bude/shared';
import type { Services } from '@services';
import { initRandomDataRoutes } from './random-data';
import { initUserRoutes } from './user';
import { initHealthRoutes } from './health';

export const initRoutes = (services: Services) => [
  initRandomDataRoutes(services, ApiRoutes.RANDOM_DATA),
  initUserRoutes(services, ApiRoutes.USERS),
  initHealthRoutes(ApiRoutes.HEALTH),
];
