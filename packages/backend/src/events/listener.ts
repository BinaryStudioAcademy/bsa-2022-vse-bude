import type { Server } from 'socket.io';
import { UPDATE_PRODUCT_PRICE, AUCTION_ITEM_NS } from '@vse-bude/shared';
import type { UpdateProductPriceEvent } from '@vse-bude/shared';
import { EventEmitter } from 'events';

export const eventListener = new EventEmitter();

export const appEventsListener = (io: Server) => {
  eventListener.on(
    UPDATE_PRODUCT_PRICE,
    ({ productId, price }: UpdateProductPriceEvent) => {
      io.of(AUCTION_ITEM_NS(productId)).emit(UPDATE_PRODUCT_PRICE, {
        productId,
        price,
      });
    },
  );

  return eventListener;
};
