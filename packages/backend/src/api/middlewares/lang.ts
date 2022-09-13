import type { NextFunction, Request, Response } from 'express';
import { DEFAULT_LOCALE, HttpHeader } from '@vse-bude/shared';
import { langService } from '@lang';

export const langMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const locale = req.headers[HttpHeader.ACCEPT_LANGUAGE] ?? DEFAULT_LOCALE;
  langService.setLocale(<string>locale);

  next();
};
