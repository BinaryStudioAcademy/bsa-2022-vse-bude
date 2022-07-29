import { ApiRoutes } from '@vse-bude/shared';
import type { Services } from 'services';
import { initRandomDataRoutes } from './random-data';

export const initRoutes = (services: Services) => [
  initRandomDataRoutes(services, ApiRoutes.RANDOM_DATA),
];
