import type { UserProfileDto } from '@vse-bude/shared';
import { SocialMediaType } from '@vse-bude/shared';

// import { ApiRoutes } from "@vse-bude/shared";

export const getUserProfileSSR = (_params): Promise<UserProfileDto> =>
  Promise.resolve({
    id: '21sdasds',
    firstName: 'Vasyl',
    lastName: 'Lukash',
    socialMedia: [
      {
        socialMedia: SocialMediaType.FACEBOOK,
        link: 'https://uk-ua.facebook.com/',
        id: '12345',
      },
      { socialMedia: SocialMediaType.INSTAGRAM, link: '#', id: '67891' },
      { socialMedia: SocialMediaType.LINKEDIN, link: '#', id: '01112' },
    ],
  });
// (params: { userId: string, http: Http }) =>
// params.http.get({
//   url: `${ApiRoutes.PROFILE}/${params.userId}`,
// });
