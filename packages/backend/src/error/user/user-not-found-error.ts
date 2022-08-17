import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class UserNotFoundError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: req.t('USER_NOT_FOUND'),
    });
  }
}

export { UserNotFoundError };
