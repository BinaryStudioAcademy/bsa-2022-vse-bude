import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class WrongPasswordError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t('WRONG_PASSWORD'),
    });
  }
}

export { WrongPasswordError };
