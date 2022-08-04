import {
  HttpContentType,
  HttpMethod,
  ApiRoutes,
  UserDto,
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

  signUp(payload: UserSignUpDto): Promise<UserDto> {
    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.RANDOM_DATA}`, {
      method: HttpMethod.POST,
      contentType: HttpContentType.APPLICATION_JSON,
      payload: JSON.stringify(payload),
      hasAuth: false,
    });
  }
}

export { AuthApi };
