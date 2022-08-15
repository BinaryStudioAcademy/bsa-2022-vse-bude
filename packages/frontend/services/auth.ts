import type { UserSignInDto } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { http } from '@helpers';

export const login = (loginData: UserSignInDto) =>
  http.post({
    url: ApiRoutes.AUTH + AuthApiRoutes.SIGN_IN,
    body: loginData,


export const getUser = () =>
  http.get({
    url: `${ApiRoutes.AUTH}${AuthApiRoutes.USER}`,

  });
