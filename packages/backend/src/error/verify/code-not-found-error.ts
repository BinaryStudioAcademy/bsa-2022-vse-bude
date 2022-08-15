import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { CODE_NOT_FOUND } from '@errors';

class CodeNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: CODE_NOT_FOUND,
    });
  }
}

export { CodeNotFoundError };
