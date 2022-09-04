import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class ExpiredRefreshTokenError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:EXPIRED_REFRESH_TOKEN'),
    });
  }
}

export { ExpiredRefreshTokenError };
