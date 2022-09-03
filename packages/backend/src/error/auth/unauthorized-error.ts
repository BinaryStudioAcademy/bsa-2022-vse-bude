import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class UnauthorizedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.UNAUTHORIZED,
      message: lang('translation:UNAUTHORIZED'),
    });
  }
}

export { UnauthorizedError };
