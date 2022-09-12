import type { Request } from 'express';
import {
  HttpStatusCode,
  EMAIL,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';

export const emailValidation = ({ req }: { req: Request }): void => {
  const { email } = req.body;

  if (!email) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.EMAIL_REQUIRED),
    });
  }

  const isEmail = EMAIL.test(email);

  if (!isEmail) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.EMAIL_REQUIRED),
    });
  }
};
