import type {
  PhoneVerifyDto,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { ApiRoutes, VerifyApiRoutes } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { http } from '@helpers';
import type { IAuth } from '../common/types/auth';

export const login = (loginData: UserSignInDto) =>
  http.post({
    url: ApiRoutes.AUTH + AuthApiRoutes.SIGN_IN,
    body: loginData,
  });

export const signUp = (signUpData: UserSignUpDto): Promise<IAuth> =>
  http.post({
    url: ApiRoutes.AUTH + AuthApiRoutes.SIGN_UP,
    body: signUpData,
  });

export const getUser = () =>
  http.get({
    url: `${ApiRoutes.AUTH}${AuthApiRoutes.USER}`,
  });

export const verifyPhone = (data: PhoneVerifyDto) =>
  http.post({
    url: `${ApiRoutes.VERIFY}${VerifyApiRoutes.VERIFY_PHONE}`,
    body: data,
  });
