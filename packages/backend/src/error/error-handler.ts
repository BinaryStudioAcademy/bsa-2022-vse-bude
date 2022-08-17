import type { Request, Errback, Response, NextFunction } from 'express';
import { HttpError, HttpStatusCode } from '@vse-bude/shared';

export const errorHandler = (
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!err) {
    next();
  }

  if (err instanceof HttpError) {
    return res.status(err.status).json({
      error: err.message,
    });
  }

  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    error: req.t('INTERNAL_ERROR'),
  });
};
