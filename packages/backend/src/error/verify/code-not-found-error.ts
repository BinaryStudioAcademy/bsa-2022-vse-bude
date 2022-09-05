import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class CodeNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: lang('translation:CODE_NOT_FOUND'),
    });
  }
}

export { CodeNotFoundError };
