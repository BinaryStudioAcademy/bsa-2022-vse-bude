import { io } from 'socket.io-client';
import { AUCTION_ITEM_NS } from '@vse-bude/shared';

const wsUrl = process.env.NEXT_PUBLIC_WEBSOCKETS_API_URL;

export const getAuctionItemIo = (itemId: string) =>
  io(`${wsUrl}/${AUCTION_ITEM_NS(itemId)}`, {
    query: {
      auctionRoom: AUCTION_ITEM_NS(itemId),
    },
  });
