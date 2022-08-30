import { HttpError, HttpStatusCode } from '@vse-bude/shared';

class UserNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: 'User not found!',
    });
  }
}

export { UserNotFoundError };
