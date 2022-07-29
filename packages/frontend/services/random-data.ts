import type { Http } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';
import { http } from 'helpers';

export const getRandomData = () =>
  http.get({
    url: ApiRoutes.RANDOM_DATA,
  });

export const getRandomDataSSR = (httpSSR: Http) =>
  httpSSR.get({
    url: ApiRoutes.RANDOM_DATA,
  });
