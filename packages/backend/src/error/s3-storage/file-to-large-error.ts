import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { FILE_SIZE_TOO_LARGE } from '../error-messages';

class FileSizeTooLargeError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: FILE_SIZE_TOO_LARGE,
    });
  }
}

export { FileSizeTooLargeError };
