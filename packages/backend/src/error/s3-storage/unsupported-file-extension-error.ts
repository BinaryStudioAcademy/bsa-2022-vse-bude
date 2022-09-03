import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class UnsupportedFileExtensionError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation.UNSUPPORTED_FILE_EXTENSION'),
    });
  }
}

export { UnsupportedFileExtensionError };
