import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class UnauthorizedError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.UNAUTHORIZED,
      message: req.t('UNAUTHORIZED'),
    });
  }
}

export { UnauthorizedError };
