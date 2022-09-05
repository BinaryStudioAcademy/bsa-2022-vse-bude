import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class UserNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: lang('translation:USER_NOT_FOUND'),
    });
  }
}

export { UserNotFoundError };
