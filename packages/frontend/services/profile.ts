import type {
  UserProfileDto,
  FullUserProfileDto,
  Http,
  UpdateFullUserProfileDto,
  NotificationQuery,
} from '@vse-bude/shared';
import { ApiRoutes, HttpContentType, ProfileApiRoutes } from '@vse-bude/shared';
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

export const updateAvatar = (file: FormData) =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.UPDATE_AVATAR}`,
    body: file ? file : null,
    options: {
      contentType: file
        ? HttpContentType.FORM_DATA
        : HttpContentType.APPLICATION_JSON,
    },
  });

export const getUserNotifications = ({
  from,
  limit,
  viewed,
}: NotificationQuery) =>
  http.get({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.GET_NOTIFICATIONS}`,
    payload: {
      from,
      limit,
      viewed,
    },
    options: {
      needAuthorization: true,
    },
  });

export const setViewedNotification = (id) =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.GET_NOTIFICATIONS}/${id}`,
    body: null,
    options: {
      needAuthorization: true,
    },
  });
