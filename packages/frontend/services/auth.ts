import type {
  PhoneVerifyDto,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { http } from '@helpers';
import type { IAuth } from '../common/types/auth';

export const login = (loginData: UserSignInDto) =>
  http.post({
    url: ApiRoutes.AUTH + AuthApiRoutes.SIGN_IN,
    body: loginData,
  });

export const signUp = async (signUpData: UserSignUpDto): Promise<IAuth> =>
  await http.post({
    url: ApiRoutes.AUTH + AuthApiRoutes.SIGN_UP,
    body: signUpData,
  });

export const getUser = () =>
  http.get({
    url: `${ApiRoutes.AUTH}${AuthApiRoutes.USER}`,
  });

export const verifyPhone = async (data: PhoneVerifyDto) =>
  await http.post({
    url: '',
    body: data,
  });
