import { ApiRoutes } from '@vse-bude/shared';
import { http } from '../helpers';

export const getRandomData = () =>
  http.get<any[]>({
    url: ApiRoutes.RANDOM_DATA,
  });
