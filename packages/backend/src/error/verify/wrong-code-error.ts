import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { CODE_NOT_FOUND } from 'error/error-messages';

class WrongCodeError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: CODE_NOT_FOUND,
    });
  }
}

export { WrongCodeError };
