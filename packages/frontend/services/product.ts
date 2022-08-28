import { http } from '@helpers';
import type { Http, ProductType } from '@vse-bude/shared';
import { ProductApiRoutes } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

interface ProductOptions {
  limit: number;
  type?: ProductType;
}

interface ProductOptionsSSR extends ProductOptions {
  httpSSR: Http;
}

export const getProducts = ({ limit, type }: ProductOptions) =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}`,
    payload: {
      limit,
      type,
    },
  });

export const getProductsSSR = ({ httpSSR, limit, type }: ProductOptionsSSR) =>
  httpSSR.get({
    url: `${ApiRoutes.PRODUCTS}`,
    payload: {
      limit,
      type,
    },
  });

export const incrementProductViews = (id: string) =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}/${id}${ProductApiRoutes.VIEWS}`,
  });

export const addToFavorites = (productId: string) =>
  http.post({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE}`,
    body: {
      productId,
    },
  });

export const deleteFromFavorites = (productId: string) =>
  http.delete({
    url: `${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE}?productId${productId}`,
  });
