import type { Request, Response, NextFunction } from 'express';
import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { logger } from '@helpers';
import { langService } from 'lang';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response<any, Record<string, any>> => {
  if (!err) {
    next();
  }

  if (err instanceof HttpError) {
    const { method, url } = req;
    const errorResponse = {
      path: url,
      method: method,
      statusCode: err.status,
      message: err.message,
    };

    logger.error(errorResponse);

    return res.status(err.status).json({
      error: err.message,
    });
  }

  logger.error(err.message);

  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    error: langService.translate('INTERNAL_ERROR'),
  });
};
