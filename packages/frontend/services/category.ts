import { http } from '@helpers';
import type { Http } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

export const getAllCategories = (limit: number) =>
  http.get({
    url: `${ApiRoutes.CATEGORIES}`,
    payload: {
      limit,
    },
  });

export const getAllCategoriesSSR = (httpSSR: Http, limit: number) =>
  httpSSR.get({
    url: `${ApiRoutes.CATEGORIES}`,
    payload: {
      limit,
    },
  });
