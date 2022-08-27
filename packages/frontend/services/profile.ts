import type { UserProfileDto } from '@vse-bude/shared';
// import { ApiRoutes } from "@vse-bude/shared";

export const getUserProfileSSR = (_params): Promise<UserProfileDto> =>
  Promise.resolve({
    id: '21sdasds',
    firstName: 'Vasyl',
    lastName: 'Lukash',
    socialMedia: [],
  });
// (params: { userId: string, http: Http }) =>
// params.http.get({
//   url: `${ApiRoutes.PROFILE}/${params.userId}`,
// });
