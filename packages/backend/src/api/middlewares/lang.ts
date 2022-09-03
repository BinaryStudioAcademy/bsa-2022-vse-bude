import type { NextFunction, Request, Response } from 'express';
import { LOCALE_HEADER_KEY, DEFAULT_LOCALE } from '@vse-bude/shared';
import { langService } from '../../lang';

export const langMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const locale = req.headers[LOCALE_HEADER_KEY] ?? DEFAULT_LOCALE;
  langService.setLocale(<string>locale);
  next();
};
