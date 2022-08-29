import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode, ValidationKeys } from '@vse-bude/shared';
import { ValidationError } from '@errors';

export const phoneValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { phone } = req.body;

  if (phone) {
    const isPhone = /^((\+\d{12,15})|(\+380\d{9}))$/.test(phone);

    if (!isPhone) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({
        error: new ValidationError({
          key: ValidationKeys.PHONE,
          message: req.t(''),
        }),
      });
    }
  }

  next();
};
