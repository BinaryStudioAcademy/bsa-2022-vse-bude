import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { NO_FILE_ERROR } from '../error-messages';

class NoFileProvidedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: NO_FILE_ERROR,
    });
  }
}

export { NoFileProvidedError };
