import {
  ApiRoutes,
  HttpMethod,
  ProductApiRoutes,
  ProductDto,
  ProductQuery,
} from '@vse-bude/shared';

import { Http } from '~/services/http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class ProductService {
  #http: Http;

  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  getProducts(
    requestParams: ProductQuery & Record<string, unknown> = {},
  ): Promise<ProductDto[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.PRODUCTS}`, {
      params: requestParams,
    });
  }

  getProductById(productId: string): Promise<ProductDto> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}/${productId}`,
    );
  }

  incrementProductViews = (productId: string): Promise<ProductDto> => {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}/${productId}${
        ProductApiRoutes.VIEWS
      }`,
      {
        method: HttpMethod.PUT,
        payload: JSON.stringify({ productId }),
      },
    );
  };
}

export { ProductService };
