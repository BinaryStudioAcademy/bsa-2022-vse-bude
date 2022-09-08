import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class WrongCodeError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:CODE_NOT_FOUND'),
    });
  }
}

export { WrongCodeError };
