import { HttpError, HttpStatusCode } from '@vse-bude/shared';

class AuctionEndedError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: 'Auction is already ended!',
    });
  }
}

export { AuctionEndedError };
