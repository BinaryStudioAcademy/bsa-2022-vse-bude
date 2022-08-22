import { http } from '@helpers';
import type { Http } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

interface CategoryOptions {
  limit: number;
}

interface CategoryOptionsSSR extends CategoryOptions {
  httpSSR: Http;
}

export const getAllCategories = ({ limit }: CategoryOptions) =>
  http.get({
    url: `${ApiRoutes.CATEGORIES}`,
    payload: {
      limit,
    },
  });

export const getAllCategoriesSSR = ({ httpSSR, limit }: CategoryOptionsSSR) =>
  httpSSR.get({
    url: `${ApiRoutes.CATEGORIES}`,
    payload: {
      limit,
    },
  });
