import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class FileSizeTooLargeError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:FILE_SIZE_TOO_LARGE'),
    });
  }
}

export { FileSizeTooLargeError };
