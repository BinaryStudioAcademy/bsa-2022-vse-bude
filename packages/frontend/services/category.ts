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

export const getAllCategories = ({ limit, locale }: CategoryOptions) =>
  http.get({
    url: `${ApiRoutes.CATEGORIES}`,
    payload: {
      limit,
    },
    options: {
      acceptLanguage: locale,
    },
  });

export const getAllCategoriesSSR = ({
  httpSSR,
  limit,
  locale,
}: CategoryOptionsSSR) =>
  httpSSR.get({
    url: `${ApiRoutes.CATEGORIES}`,
    payload: {
      limit,
    },
    options: {
      acceptLanguage: locale,
    },
  });
