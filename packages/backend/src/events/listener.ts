import type { Server } from 'socket.io';
import { UPDATE_PRODUCT_PRICE, AUCTION_ITEM_NS } from '@vse-bude/shared';
import type { UpdateProductPriceEvent } from '@vse-bude/shared';
import EventEmitter from 'eventemitter3';

export const eventListener = new EventEmitter();

export const appEventsListener = (io: Server): any => {
  io.on('connection', (socket) =>
    socket.join(socket.handshake.query.auctionRoom),
  );

  eventListener.on(
    UPDATE_PRODUCT_PRICE,
    ({ productId, price, bidderId }: UpdateProductPriceEvent) =>
      io.to(AUCTION_ITEM_NS(productId)).emit(UPDATE_PRODUCT_PRICE, {
        productId,
        price,
        bidderId,
      }),
  );

  return eventListener;
};
