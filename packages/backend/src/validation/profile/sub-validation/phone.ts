import type { Request } from 'express';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '../../../lang';

export const phoneValidation = ({ req }: { req: Request }) => {
  const { phone } = req.body;

  if (phone) {
    const isPhone = /^((\+\d{12,15})|(\+380\d{9}))$/.test(phone);

    if (!isPhone) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.PHONE_PATTERN),
      });
    }
  }
};
