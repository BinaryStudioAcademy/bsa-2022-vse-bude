import type {
  Http,
  PhoneVerifyDto,
  ResetPasswordLink,
  UpdatePassword,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { ApiRoutes, VerifyApiRoutes } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { http } from '@helpers';
import type { IAuth } from '@types';

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

export const getUserSSR = (httpSSR: Http) =>
  httpSSR.get({
    url: `${ApiRoutes.AUTH}${AuthApiRoutes.USER}`,
  });

export const verifyPhone = (data: PhoneVerifyDto) =>
  http.post({
    url: `${ApiRoutes.VERIFY}${VerifyApiRoutes.VERIFY_PHONE}`,
    body: data,
  });

export const resendPhoneCode = () =>
  http.post({
    url: `${ApiRoutes.VERIFY}${VerifyApiRoutes.PHONE_RESEND_CODE}`,
    body: {},
  });

export const verifyEmail = (data: PhoneVerifyDto) =>
  http.post({
    url: `${ApiRoutes.VERIFY}${VerifyApiRoutes.VERIFY_EMAIL}`,
    body: data,
  });

export const resendEmailCode = () =>
  http.post({
    url: `${ApiRoutes.VERIFY}${VerifyApiRoutes.EMAIL_RESEND_CODE}`,
    body: {},
  });

export const resetPasswordLink = (data: ResetPasswordLink) =>
  http.post({
    url: `${ApiRoutes.AUTH}${AuthApiRoutes.RESET_PASSWORD_LINK}`,
    body: { ...data },
  });

export const updatePassword = (data: UpdatePassword) =>
  http.post({
    url: `${ApiRoutes.AUTH}${AuthApiRoutes.UPDATE_PASSWORD}`,
    body: { ...data },
  });
