import type { Request } from 'express';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
  ValidationRanges,
  NAME,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';

export const userNameValidation = ({ req }: { req: Request }): void => {
  const { firstName, lastName } = req.body;

  if (firstName.trim().length < ValidationRanges.MIN_NAME_SYMBOLS) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.FIRSTNAME_REQUIRED),
    });
  }

  if (firstName.trim().length > ValidationRanges.MAX_NAME_SYMBOLS) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.FIRSTNAME_MAX),
    });
  }

  if (lastName.trim().length < ValidationRanges.MIN_NAME_SYMBOLS) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.LASTNAME_REQUIRED),
    });
  }

  if (lastName.trim().length > ValidationRanges.MAX_NAME_SYMBOLS) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.LASTNAME_MAX),
    });
  }

  const isFirstName = NAME.test(firstName);

  if (!isFirstName) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.FIRSTNAME_PATTERN),
    });
  }

  const isLastName = NAME.test(lastName);

  if (!isLastName) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang(UserPersonalInfoValidationMessage.LASTNAME_PATTERN),
    });
  }
};
