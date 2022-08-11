import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { EXPIRED_REFRESH_TOKEN } from '../error-messages';

class ExpiredRefreshTokenError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: EXPIRED_REFRESH_TOKEN,
    });
  }
}

export { ExpiredRefreshTokenError };
