import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class WrongPasswordError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:WRONG_PASSWORD'),
    });
  }
}

export { WrongPasswordError };
