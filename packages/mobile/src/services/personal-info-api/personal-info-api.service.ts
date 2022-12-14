import { Asset } from 'react-native-image-picker';
import {
  HttpContentType,
  HttpMethod,
  ApiRoutes,
  ProfileApiRoutes,
  FullUserProfileDto,
  UpdateFullUserProfileDto,
} from '@vse-bude/shared';

import { Http } from '~/services/http/http.service';
import { UpdateAvatarResponseDto } from '~/common/types/types';

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

  updateAvatar(avatar: Asset | null): Promise<UpdateAvatarResponseDto> {
    const formData = new FormData();

    if (avatar) {
      const { uri, type, fileName: name } = avatar;
      formData.append('file', { uri, type, name });
    } else {
      formData.append('file', null);
    }

    return this.#http.load(
      `${this.#apiPrefix}${ApiRoutes.PROFILE}${ProfileApiRoutes.UPDATE_AVATAR}`,
      {
        method: HttpMethod.PUT,
        contentType: HttpContentType.FORM_DATA,
        payload: formData,
        hasAuth: true,
      },
    );
  }
}

export { PersonalInfoApi };
