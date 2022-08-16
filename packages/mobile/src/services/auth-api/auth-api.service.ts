import {
  // HttpContentType,
  // HttpMethod,
  // ApiRoutes,
  // UserDto,
  UserSignUpDto,
} from '@vse-bude/shared';

import { Http } from '~/services/http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class AuthApi {
  #http: Http;

  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  signUp(_payload: UserSignUpDto): Promise<any> {
    return Promise.resolve([]);
  }
}

export { AuthApi };
