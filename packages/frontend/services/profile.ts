import type {
  UserProfileDto,
  FullUserProfileDto,
  Http,
  UpdateFullUserProfileDto,
} from '@vse-bude/shared';
import { ApiRoutes, ProfileApiRoutes } from '@vse-bude/shared';
import { http } from '@helpers';

export const getUserProfileSSR = (params: {
  userId: string;
  http: Http;
}): Promise<UserProfileDto> =>
  params.http.get({
    url: `${ApiRoutes.PROFILE}/${params.userId}`,
  });

export const getFullUserProfile = (): Promise<FullUserProfileDto> =>
  http.get({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.GET_FULL_USER_DATA}`,
  });

export const updateUserData = ({
  data,
}: {
  data: UpdateFullUserProfileDto;
}): Promise<FullUserProfileDto> =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.UPDATE_DATA}`,
    body: data,
  });
