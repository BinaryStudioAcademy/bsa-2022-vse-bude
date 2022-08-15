import { ApiRoutes, AuthApiRoutes } from '@vse-bude/shared';
import { http } from '@helpers';

export const getUser = () =>
  http.get({
    url: `${ApiRoutes.AUTH}${AuthApiRoutes.USER}`,
  });
