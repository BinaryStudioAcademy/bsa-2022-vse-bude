import type { Product, User, Order } from '@prisma/client';
import { OrderStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { Decimal } from '@prisma/client/runtime';

export const fakeOrders = async (
  amountOfRecords: number,
  existingUsers: User[],
  existingProducts: Product[],
): Promise<Order[]> => {
  const records: Order[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const userIndex = i % existingUsers.length;
    const userId = existingUsers.at(userIndex)?.id;
    const orderIndex = i % existingProducts.length;
    const orderId = existingProducts.at(orderIndex)?.id;
    if (!userId || !orderId) {
      continue;
    }

    const record: Order = {
      id: faker.datatype.uuid(),
      productId: orderId,
      buyerId: userId,
      cost: new Decimal(faker.commerce.price(1000, 100000)),
      status: OrderStatus.PAID,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
