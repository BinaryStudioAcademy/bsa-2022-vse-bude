import { HttpError, HttpStatusCode } from '@vse-bude/shared';

class ResetPassLinkInvalid extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: 'Reset Password Link is invalid!',
    });
  }
}

export { ResetPassLinkInvalid };
