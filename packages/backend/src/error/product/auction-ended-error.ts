import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class AuctionEndedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:AUCTION_IS_ALREADY_ENDED'),
    });
  }
}

export { AuctionEndedError };
