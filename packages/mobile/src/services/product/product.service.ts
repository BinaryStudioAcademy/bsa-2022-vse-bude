import {
  ApiRoutes,
  ProductDto,
  ProductApiRoutes,
  HttpMethod,
  HttpContentType,
  ProductIdRequest,
} from '@vse-bude/shared';
import { ProductRequestDto } from '~/common/types/types';

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

  getProducts(requestParams: ProductRequestDto = {}): Promise<ProductDto[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.PRODUCTS}`, {
      params: requestParams,
    });
  }

  getProductById(productId: string): Promise<ProductDto> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}/${productId}`,
    );
  }

  getFavorites(requestParams: ProductRequestDto = {}): Promise<ProductDto[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE}`,
      { params: requestParams },
    );
  }

  getFavoritesIds(): Promise<Array<string> | []> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE_IDS}`,
    );
  }

  uploadToFavorites(payload: ProductIdRequest): Promise<ProductIdRequest> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE}`,
      {
        method: HttpMethod.POST,
        contentType: HttpContentType.APPLICATION_JSON,
        payload: JSON.stringify(payload),
        hasAuth: true,
      },
    );
  }

  deleteFromFavorites(
    payload: Record<string, unknown>,
  ): Promise<ProductIdRequest> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PRODUCTS}${ProductApiRoutes.FAVORITE}`,
      {
        method: HttpMethod.DELETE,
        contentType: HttpContentType.APPLICATION_JSON,
        params: payload,
        hasAuth: true,
      },
    );
  }
}

export { ProductService };
