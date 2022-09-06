import { ApiRoutes, ProductDto } from '@vse-bude/shared';
import { ProductQuery } from '~/common/types/types';

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

  getProducts({ limit, type, categoryId }: ProductQuery = {}): Promise<
    ProductDto[]
  > {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.PRODUCTS}`, {
      params: {
        type,
        limit,
        categoryId,
      },
    });
  }
}

export { ProductService };
