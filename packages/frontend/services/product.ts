import { http } from '@helpers';
import type { Http } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

export const getProducts = (limit: number, type?: string) =>
  http.get({
    url: type ? `${ApiRoutes.PRODUCTS}/${type}` : `${ApiRoutes.PRODUCTS}`,
    payload: {
      limit,
    },
  });

export const getProductsSSR = (httpSSR: Http, limit: number, type?: string) =>
  httpSSR.get({
    url: type ? `${ApiRoutes.PRODUCTS}/${type}` : `${ApiRoutes.PRODUCTS}`,
    payload: {
      limit,
    },
  });
