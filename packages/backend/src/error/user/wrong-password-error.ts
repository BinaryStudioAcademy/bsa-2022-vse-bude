import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { WRONG_PASSWORD } from '../error-messages';

class WrongPasswordError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: WRONG_PASSWORD,
    });
  }
}

export { WrongPasswordError };
