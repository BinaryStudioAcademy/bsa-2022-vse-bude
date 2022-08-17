import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class ExpiredRefreshTokenError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t('EXPIRED_REFRESH_TOKEN'),
    });
  }
}

export { ExpiredRefreshTokenError };
