import { HttpError, HttpStatusCode } from '@vse-bude/shared';

class FieldError extends HttpError {
  constructor(message: string) {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: message,
    });
  }
}

export { FieldError };
