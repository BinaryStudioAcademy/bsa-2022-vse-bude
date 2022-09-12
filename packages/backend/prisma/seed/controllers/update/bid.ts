import type { Bid, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { BID_FILE_NAME } from './../../config/config';

export const updateBid = async (prismaClient: PrismaClient): Promise<void> => {
  const path = `./prisma/seed/mockData/${BID_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: Bid[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.bid.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.bid.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          bidderId: _dataJSON.bidderId,
          productId: _dataJSON.productId,
          price: _dataJSON.price,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.bid.create({ data: _dataJSON });
    }
  }
};
