import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class AlreadyLeftAuctionError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:ALREADY_LEAVE_AUCTION'),
    });
  }
}

export { AlreadyLeftAuctionError };
