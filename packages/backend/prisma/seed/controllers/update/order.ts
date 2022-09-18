import type { Order, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { ORDER_FILE_NAME } from './../../config/config';

export const updateOrders = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${ORDER_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: Order[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.order.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.order.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          productId: _dataJSON.productId,
          buyerId: _dataJSON.buyerId,
          cost: _dataJSON.cost,
          status: _dataJSON.status,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.order.create({ data: _dataJSON });
    }
  }
};
