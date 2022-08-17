import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { CODE_NOT_FOUND } from 'error/error-messages';

class CodeNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: CODE_NOT_FOUND,
    });
  }
}

export { CodeNotFoundError };
