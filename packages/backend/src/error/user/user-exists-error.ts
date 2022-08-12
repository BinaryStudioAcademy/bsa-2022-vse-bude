import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { USER_ALREADY_EXISTS } from '../error-messages';

class UserExistsError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: USER_ALREADY_EXISTS,
    });
  }
}

export { UserExistsError };
