import { HttpError, HttpStatusCode } from '@vse-bude/shared';

class LowBidPriceError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: 'Bid price is too low!',
    });
  }
}

export { LowBidPriceError };
