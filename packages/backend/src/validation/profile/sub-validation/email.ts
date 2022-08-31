import type { Request } from 'express';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';

export const emailValidation = ({ req }: { req: Request }) => {
  const { email } = req.body;

  if (!email) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t(UserPersonalInfoValidationMessage.EMAIL_REQUIRED),
    });
  }

  const isEmail =
    /^(([^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,32})(.[^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,31}))*)|([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,64}))@[^-]([\da-zA-Z-]{1,63}\.)([a-zA-Z]{2,6})$/.test(
      email,
    );

  if (!isEmail) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t(UserPersonalInfoValidationMessage.EMAIL_REQUIRED),
    });
  }
};
