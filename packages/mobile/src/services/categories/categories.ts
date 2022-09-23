import { ApiRoutes, CategoryResponseDto } from '@vse-bude/shared';

import { Http } from '~/services/http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class CategoryService {
  #http: Http;

  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  getAllCategories(): Promise<CategoryResponseDto[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.CATEGORIES}`);
  }
}

export { CategoryService };
