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

export const getAllCategories = ({ locale }: CategoryOptions) =>
  http.get({
    url: `${ApiRoutes.CATEGORIES}`,
    options: {
      acceptLanguage: locale,
    },
  });

export const getAllCategoriesSSR = ({
  httpSSR,
  locale,
}: CategoryOptionsSSR) =>
  httpSSR.get({
    url: `${ApiRoutes.CATEGORIES}`,
    options: {
      acceptLanguage: locale,
    },
  });
