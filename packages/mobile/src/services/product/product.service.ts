import { ApiRoutes, ProductDto } from '@vse-bude/shared';

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

  getAllProducts(): Promise<ProductDto[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.PRODUCTS}`);
  }
}

export { ProductService };
