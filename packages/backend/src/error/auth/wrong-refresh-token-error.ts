import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class WrongRefreshTokenError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t('WRONG_REFRESH_TOKEN'),
    });
  }
}

export { WrongRefreshTokenError };
