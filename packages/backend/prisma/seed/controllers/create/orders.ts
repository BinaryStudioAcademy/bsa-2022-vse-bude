import type { PrismaClient, Order, User, Product } from '@prisma/client';
import { fakeOrders } from '../../data';
import { ORDER_FILE_NAME, ORDERS_NUMBER } from '../../config/config';
import { writeFile } from './../../helpers/wtireFile';

export const seedOrders = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingProducts: Product[],
): Promise<void> => {
  const existingOrders = await prismaClient.order.findMany();
  const howManyToCreate = ORDERS_NUMBER - existingOrders.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: Order[] = await fakeOrders(
    howManyToCreate,
    existingUsers,
    existingProducts,
  );

  writeFile(ORDER_FILE_NAME, data);

  await prismaClient.order.createMany({ data: data });
};
