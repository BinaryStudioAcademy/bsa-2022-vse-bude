import type { NextFunction, Request, Response } from 'express';
import { LOCALE_COOKIE_KEY, DEFAULT_LOCALE } from '@vse-bude/shared';
import { langService } from '../../lang';

export const langMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const locale = req.cookies[LOCALE_COOKIE_KEY] ?? DEFAULT_LOCALE;
  langService.setLocale(locale);
  next();
};
