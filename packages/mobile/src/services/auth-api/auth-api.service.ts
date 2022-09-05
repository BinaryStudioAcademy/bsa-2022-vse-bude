import {
  HttpContentType,
  HttpMethod,
  ApiRoutes,
  AuthApiRoutes,
  UserSignInDto,
  UserSignUpDto,
  AuthResponse,
  VerifyApiRoutes,
  PhoneVerifyDto,
  UserResponseDto,
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

  getCurrentUser(_userId: string): Promise<UserResponseDto> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.AUTH}${AuthApiRoutes.USER}`,
      {
        method: HttpMethod.GET,
        contentType: HttpContentType.APPLICATION_JSON,
        params: {
          userId: _userId,
        },
        hasAuth: true,
      },
    );
  }

  sendCodeVerifyPhone(_payload: string): Promise<boolean> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.VERIFY}${
        VerifyApiRoutes.PHONE_RESEND_CODE
      }`,
      {
        method: HttpMethod.POST,
        contentType: HttpContentType.APPLICATION_JSON,
        params: {
          userId: _payload,
        },
        hasAuth: true,
      },
    );
  }

  verifyPhone(_payload: PhoneVerifyDto, _userId: string): Promise<unknown> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.VERIFY}${VerifyApiRoutes.VERIFY_PHONE}`,
      {
        method: HttpMethod.POST,
        contentType: HttpContentType.APPLICATION_JSON,
        payload: JSON.stringify(_payload),
        params: {
          userId: _userId,
        },
        hasAuth: true,
      },
    );
  }
}

export { AuthApi };
