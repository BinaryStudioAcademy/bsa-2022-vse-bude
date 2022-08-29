import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode, ValidationKeys } from '@vse-bude/shared';
import { ValidationError } from '@errors';

export const emailValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  if (!email) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.EMAIL,
        message: req.t(''),
      }),
    });
  }

  const isEmail =
    /^(([^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,32})(.[^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,31}))*)|([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,64}))@[^-]([\da-zA-Z-]{1,63}\.)([a-zA-Z]{2,6})$/.test(
      email,
    );

  if (!isEmail) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new ValidationError({
        key: ValidationKeys.EMAIL,
        message: req.t(''),
      }),
    });
  }

  next();
};
