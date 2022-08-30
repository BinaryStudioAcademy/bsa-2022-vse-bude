import type { Request } from 'express';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
  ValidationRanges
} from '@vse-bude/shared';
import { ProfileError } from '@errors';

export const userNameValidation = ({ req }: { req: Request }) => {
  const { firstName, lastName } = req.body;

  if (firstName.trim().length < ValidationRanges.MIN_NAME_SYMBOLS) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t(UserPersonalInfoValidationMessage.FIRSTNAME_REQUIRED),
    });
  }

  if (firstName.trim().length > ValidationRanges.MAX_NAME_SYMBOLS) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t(UserPersonalInfoValidationMessage.FIRSTNAME_MAX),
    });
  }

  if (lastName.trim().length < ValidationRanges.MIN_NAME_SYMBOLS) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t(UserPersonalInfoValidationMessage.LASTNAME_REQUIRED),
    });
  }

  if (lastName.trim().length > ValidationRanges.MAX_NAME_SYMBOLS) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t(UserPersonalInfoValidationMessage.LASTNAME_MAX),
    });
  }

  const isFirstName = /^[^-](([a-zA-Z]+)|([а-яёіїґєА-ЯЁIЇҐЄ]+))$/.test(
    firstName,
  );

  if (!isFirstName) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t(UserPersonalInfoValidationMessage.FIRSTNAME_PATTERN),
    });
  }

  const isLastName = /^[^-](([a-zA-Z]+)|([а-яёіїґєА-ЯЁIЇҐЄ]+))$/.test(lastName);

  if (!isLastName) {
    throw new ProfileError({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t(UserPersonalInfoValidationMessage.LASTNAME_PATTERN),
    });
  }
};
