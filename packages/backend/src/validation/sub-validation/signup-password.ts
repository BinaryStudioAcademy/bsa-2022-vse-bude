import type { Request } from 'express';
import {
  HttpStatusCode,
  PASSWORD,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';

export const signupPasswordValidation = ({ req }: { req: Request }): void => {
  const { password, repeatPassword } = req.body;

  const isPassword = PASSWORD.test(password);

  if (!isPassword) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.NEW_PASSWORD),
    });
  }

  if (password !== repeatPassword) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.DIFFERENT_PASSWORDS),
    });
  }
};
