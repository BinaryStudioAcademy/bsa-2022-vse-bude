import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode, ValidationKeys } from '@vse-bude/shared';
import { ValidationError } from '@errors';

export const passwordValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password, newPassword, repeatPassword } = req.body;

  if (!password && !newPassword && !repeatPassword) {
    return next();
  } else {
    if (!password.trim()) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({
        error: new ValidationError({
          key: ValidationKeys.PASSWORD,
          message: req.t(''),
        }),
      });
    }

    const isNewPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^*\-_=+[{\]}/;:,.?]+$/.test(
        newPassword,
      );

    if (!isNewPassword) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({
        error: new ValidationError({
          key: ValidationKeys.NEW_PASSWORD,
          message: req.t(''),
        }),
      });
    }

    if (newPassword !== repeatPassword) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({
        error: new ValidationError({
          key: ValidationKeys.REPEAT_PASSWORD,
          message: req.t(''),
        }),
      });
    }
  }

  next();
};
