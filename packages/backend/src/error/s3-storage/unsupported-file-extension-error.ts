import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class UnsupportedFileExtensionError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: req.t('UNSUPPORTED_FILE_EXTENSION'),
    });
  }
}

export { UnsupportedFileExtensionError };
