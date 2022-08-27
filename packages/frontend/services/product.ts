import { http } from '@helpers';
import type { Http, ProductDto, ProductType } from '@vse-bude/shared';
import { ProductApiRoutes } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

interface ProductOptions {
  limit: number;
  type?: ProductType;
}

interface ProductOptionsSSR extends ProductOptions {
  httpSSR: Http;
}

export const getProducts = ({
  limit,
  type,
}: ProductOptions): Promise<ProductDto[]> =>
  http.get({
    url: `${ApiRoutes.PRODUCTS}`,
    payload: {
      limit,
      type,
    },
  });

export const getProductsSSR = ({
  httpSSR,
  limit,
  type,
}: ProductOptionsSSR): Promise<ProductDto[]> =>
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
