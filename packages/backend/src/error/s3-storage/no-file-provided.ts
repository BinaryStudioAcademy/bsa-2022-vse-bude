import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class NoFileProvidedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:NO_FILE_ERROR'),
    });
  }
}

export { NoFileProvidedError };
