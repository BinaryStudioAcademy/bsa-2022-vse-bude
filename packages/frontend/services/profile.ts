import type {
  UserProfileDto,
  FullUserProfileDto,
  Http,
} from '@vse-bude/shared';
import { ApiRoutes, ProfileApiRoutes } from '@vse-bude/shared';

export const getUserProfileSSR = (params: {
  userId: string;
  http: Http;
}): Promise<UserProfileDto> =>
  params.http.get({
    url: `${ApiRoutes.PROFILE}/${params.userId}`,
  });

export const getFullUserProfileSSR = (params: {
  http: Http;
}): Promise<FullUserProfileDto> =>
  params.http.get({
    url: `${ApiRoutes.PROFILE}/${ProfileApiRoutes.GET_FULL_USER_DATA}`,
  });
