import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class NoFileProvidedError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t('NO_FILE_ERROR'),
    });
  }
}

export { NoFileProvidedError };
