import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class ResetPassLinkInvalid extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:INVALID_RESET_PASSWORD_LINK'),
    });
  }
}

export { ResetPassLinkInvalid };
