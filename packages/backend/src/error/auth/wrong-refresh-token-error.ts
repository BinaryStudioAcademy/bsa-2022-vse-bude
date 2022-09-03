import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class WrongRefreshTokenError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:WRONG_REFRESH_TOKEN'),
    });
  }
}

export { WrongRefreshTokenError };
