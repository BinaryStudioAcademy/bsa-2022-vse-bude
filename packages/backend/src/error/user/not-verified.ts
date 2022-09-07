import { lang } from '@lang';
import { HttpError, HttpStatusCode } from '@vse-bude/shared';

class NotVerifiedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:userValidation.notVerified'),
    });
  }
}

export { NotVerifiedError };
