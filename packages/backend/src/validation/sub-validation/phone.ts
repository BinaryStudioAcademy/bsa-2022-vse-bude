import type { Request } from 'express';
import {
  HttpStatusCode,
  PHONE,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';

export const phoneValidation = ({ req }: { req: Request }): void => {
  const { phone } = req.body;

  if (phone) {
    const isPhone = PHONE.test(phone);

    if (!isPhone) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.PHONE_PATTERN),
      });
    }
  }
};
