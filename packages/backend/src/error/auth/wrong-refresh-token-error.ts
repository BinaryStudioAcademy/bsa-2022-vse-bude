import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { WRONG_REFRESH_TOKEN } from '../error-messages';

class WrongRefreshTokenError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: WRONG_REFRESH_TOKEN,
    });
  }
}

export { WrongRefreshTokenError };
