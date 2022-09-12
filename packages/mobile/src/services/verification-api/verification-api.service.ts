import {
  HttpContentType,
  HttpMethod,
  ApiRoutes,
  VerifyApiRoutes,
  PhoneVerifyDto,
} from '@vse-bude/shared';
import { Http } from '../http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class VerificationApi {
  #http: Http;

  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  getVerificationCodePhone(): Promise<unknown> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.VERIFY}${
        VerifyApiRoutes.PHONE_RESEND_CODE
      }`,
      {
        method: HttpMethod.POST,
        contentType: HttpContentType.APPLICATION_JSON,
        hasAuth: true,
      },
    );
  }

  verifyPhone(_payload: PhoneVerifyDto): Promise<unknown> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.VERIFY}${VerifyApiRoutes.VERIFY_PHONE}`,
      {
        method: HttpMethod.POST,
        contentType: HttpContentType.APPLICATION_JSON,
        payload: JSON.stringify(_payload),
        hasAuth: true,
      },
    );
  }
}

export { VerificationApi };
