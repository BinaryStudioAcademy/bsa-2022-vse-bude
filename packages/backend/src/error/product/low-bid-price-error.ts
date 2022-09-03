import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class LowBidPriceError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:BID_PRICE_IS_TOO_LOW'),
    });
  }
}

export { LowBidPriceError };
