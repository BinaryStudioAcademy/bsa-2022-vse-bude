import {
  HttpContentType,
  HttpMethod,
  ApiRoutes,
  ProfileApiRoutes,
  FullUserProfileDto,
  UpdateFullUserProfileDto,
} from '@vse-bude/shared';

import { Http } from '~/services/http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class PersonalInfoApi {
  #http: Http;

  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  getPersonalInfo(): Promise<FullUserProfileDto> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PROFILE}${
        ProfileApiRoutes.GET_FULL_USER_DATA
      }`,
      {
        method: HttpMethod.GET,
        contentType: HttpContentType.APPLICATION_JSON,
        hasAuth: true,
      },
    );
  }

  updatePersonalInfo(
    _payload: UpdateFullUserProfileDto,
  ): Promise<FullUserProfileDto> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PROFILE}${ProfileApiRoutes.UPDATE_DATA}`,
      {
        method: HttpMethod.PUT,
        contentType: HttpContentType.APPLICATION_JSON,
        payload: JSON.stringify(_payload),
        hasAuth: true,
      },
    );
  }
}

export { PersonalInfoApi };
