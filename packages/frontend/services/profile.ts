import { ApiRoutes, HttpContentType, ProfileApiRoutes } from '@vse-bude/shared';
import type { Http } from '@vse-bude/shared';
import { http } from '@helpers';

export const getUserProfileSSR = (params: { userId: string; http: Http }) =>
  params.http.get({ url: `${ApiRoutes.PROFILE}/${params.userId}` });

export const updateAvatar = (file: FormData) =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileApiRoutes.UPDATE_AVATAR}`,
    body: file ? file : null,
    options: {
      contentType: file ? HttpContentType.FORM_DATA : HttpContentType.APPLICATION_JSON,
      needAuthorization: true,
    },
  });
