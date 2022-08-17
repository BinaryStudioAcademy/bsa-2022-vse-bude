import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class UserExistsError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t('USER_ALREADY_EXISTS'),
    });
  }
}

export { UserExistsError };
