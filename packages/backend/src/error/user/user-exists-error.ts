import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '@lang';

class UserExistsError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:USER_ALREADY_EXISTS'),
    });
  }
}

class UserPhoneExistsError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:USER_PHONE_ALREADY_EXISTS'),
    });
  }
}

export { UserExistsError, UserPhoneExistsError };
