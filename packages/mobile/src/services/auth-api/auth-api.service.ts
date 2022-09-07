import {
  HttpContentType,
  HttpMethod,
  ApiRoutes,
  AuthApiRoutes,
  UserSignInDto,
  UserSignUpDto,
  ResetPasswordLink,
  AuthResponse,
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

  signIn(_payload: UserSignInDto): Promise<AuthResponse> {
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

  signUp(_payload: UserSignUpDto): Promise<AuthResponse> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.AUTH}${AuthApiRoutes.SIGN_UP}`,
      {
        method: HttpMethod.POST,
        contentType: HttpContentType.APPLICATION_JSON,
        payload: JSON.stringify(_payload),
        hasAuth: false,
      },
    );
  }

  resetPassword(_payload: ResetPasswordLink): Promise<unknown> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.AUTH}${AuthApiRoutes.RESET_PASSWORD_LINK}`,
      {
        method: HttpMethod.POST,
        contentType: HttpContentType.APPLICATION_JSON,
        payload: JSON.stringify(_payload),
        hasAuth: false,
      },
    );
  }
}

export { AuthApi };
