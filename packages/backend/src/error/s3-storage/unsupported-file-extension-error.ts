import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { USUPPORTED_FILE_EXTENSION } from '../error-messages';

class UnsupportedFileExtensionError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: USUPPORTED_FILE_EXTENSION,
    });
  }
}

export { UnsupportedFileExtensionError };
