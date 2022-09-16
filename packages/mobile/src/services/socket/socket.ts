import { io } from 'socket.io-client';
import { AUCTION_ITEM_NS } from '@vse-bude/shared';

type Constructor = {
  apiPrefix: string;
};

class SocketService {
  #apiPrefix: string;

  constructor({ apiPrefix }: Constructor) {
    this.#apiPrefix = apiPrefix;
  }

  getAuctionItemIo = (itemId: string) => {
    return io(this.#apiPrefix, {
      query: {
        auctionRoom: AUCTION_ITEM_NS(itemId),
      },
    });
  };
}

export { SocketService };
