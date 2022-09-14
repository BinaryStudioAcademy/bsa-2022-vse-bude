import {
  HttpContentType,
  HttpMethod,
  ApiRoutes,
  AuthApiRoutes,
  UserSignInDto,
  UserSignUpDto,
  ResetPasswordLink,
  AuthResponse,
  UserResponseDto,
  ResetPasswordResponse,
} from '@vse-bude/shared';
import { Http } from '../http/http.service';

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

  getCurrentUser(): Promise<UserResponseDto> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.AUTH}${AuthApiRoutes.USER}`,
      {
        method: HttpMethod.GET,
        contentType: HttpContentType.APPLICATION_JSON,
        hasAuth: true,
      },
    );
  }

  resetPassword(_payload: ResetPasswordLink): Promise<ResetPasswordResponse> {
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
  
  refreshToken(_payload: { tokenValue: string }): Promise<AuthResponse> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.AUTH}${AuthApiRoutes.REFRESH_TOKEN}`,
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
