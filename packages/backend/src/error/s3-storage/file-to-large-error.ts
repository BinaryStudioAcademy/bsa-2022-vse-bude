import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class FileSizeTooLargeError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t('FILE_SIZE_TOO_LARGE'),
    });
  }
}

export { FileSizeTooLargeError };
