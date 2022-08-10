import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { UNAUTHORIZED } from '../error.messages';

class UnauthorizedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.UNAUTHORIZED,
      message: UNAUTHORIZED,
    });
  }
}

export { UnauthorizedError };
