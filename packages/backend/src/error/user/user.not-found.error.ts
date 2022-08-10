import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { USER_NOT_FOUND } from '../error.messages';

class UserNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: USER_NOT_FOUND,
    });
  }
}

export { UserNotFoundError };
