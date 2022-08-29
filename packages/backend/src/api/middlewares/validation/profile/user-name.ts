import type { NextFunction, Request, Response } from 'express';
import {
  ValidationRanges,
  ValidationKeys,
  HttpStatusCode,
} from '@vse-bude/shared';
import { ValidationError } from '@errors';

export const userNameValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { firstName, lastName } = req.body;

  if (!firstName) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.FIRSTNAME,
        message: req.t(''),
      }),
    });
  }

  if (firstName.trim().length < ValidationRanges.MIN_NAME_SYMBOLS) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.FIRSTNAME,
        message: req.t(''),
      }),
    });
  }

  if (firstName.trim().length > ValidationRanges.MAX_NAME_SYMBOLS) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.FIRSTNAME,
        message: req.t(''),
      }),
    });
  }

  if (!lastName) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.LASTNAME,
        message: req.t(''),
      }),
    });
  }

  if (lastName.trim().length < ValidationRanges.MIN_NAME_SYMBOLS) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.LASTNAME,
        message: req.t(''),
      }),
    });
  }

  if (lastName.trim().length > ValidationRanges.MAX_NAME_SYMBOLS) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.LASTNAME,
        message: req.t(''),
      }),
    });
  }

  const isFirstName = /^[^-](([a-zA-Z]+)|([а-яёіїґєА-ЯЁIЇҐЄ]+))$/.test(
    firstName,
  );

  if (!isFirstName) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.FIRSTNAME,
        message: req.t(''),
      }),
    });
  }

  const isLastName = /^[^-](([a-zA-Z]+)|([а-яёіїґєА-ЯЁIЇҐЄ]+))$/.test(lastName);

  if (!isLastName) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.LASTNAME,
        message: req.t(''),
      }),
    });
  }

  next();
};
