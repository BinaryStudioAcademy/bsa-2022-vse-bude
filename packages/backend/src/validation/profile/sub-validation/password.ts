import type { Request } from 'express';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '../../../lang';

export const passwordValidation = ({ req }: { req: Request }) => {
  const { password, newPassword, repeatPassword } = req.body;

  if (password || newPassword) {
    const isNewPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^*\-_=+[{\]}/;:,.?]+$/.test(
        newPassword,
      );

    if (!isNewPassword) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.NEW_PASSWORD),
      });
    }

    if (newPassword !== repeatPassword) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.DIFFERENT_PASSWORDS),
      });
    }
  }
};
