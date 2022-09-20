import { http } from '@helpers';
import type { Http, HttpAcceptLanguage } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

interface CategoryOptions {
  limit: number;
  locale?: HttpAcceptLanguage;
}

interface CategoryOptionsSSR extends CategoryOptions {
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
