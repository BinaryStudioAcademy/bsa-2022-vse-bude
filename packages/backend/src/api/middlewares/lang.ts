import type { NextFunction, Request, Response } from 'express';
import { DEFAULT_LOCALE } from '@config';
import { langService } from '../../lang';

export const langMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const locale = req.cookies?.locale_name ?? DEFAULT_LOCALE;
  langService.setLocale(locale);
  next();
};
