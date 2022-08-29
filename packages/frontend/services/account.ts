import { ApiRoutes, AccountApiRoutes } from '@vse-bude/shared';
import { http } from '@helpers';

export const personalInfo = () =>
  http.get({
    url: ApiRoutes.ACCOUNT + AccountApiRoutes.PERSONAL_INFO,
  });
