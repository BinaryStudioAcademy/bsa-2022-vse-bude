import { http } from '@helpers';
import type { Http } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

interface CategoryOptionsSSR {
  httpSSR: Http;
}

export const getAllCategories = () =>
  http.get({
    url: `${ApiRoutes.CATEGORIES}`,
  });

export const getAllCategoriesSSR = ({ httpSSR }: CategoryOptionsSSR) =>
  httpSSR.get({
    url: `${ApiRoutes.CATEGORIES}`,
  });
