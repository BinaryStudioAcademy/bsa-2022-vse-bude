import {
  HttpContentType,
  HttpMethod,
  ApiRoutes,
  AuthApiRoutes,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { Auth } from '~/common/types/types';

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

  signIn(_payload: UserSignInDto): Promise<Auth> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.AUTH}${AuthApiRoutes.SIGN_IN}`,
      {
        method: HttpMethod.POST,
        contentType: HttpContentType.APPLICATION_JSON,
        payload: JSON.stringify(_payload),
        hasAuth: false,
      },
    );
  }

  signUp(_payload: UserSignUpDto): Promise<any> {
    return Promise.resolve([]);
  }
}

export { AuthApi };
