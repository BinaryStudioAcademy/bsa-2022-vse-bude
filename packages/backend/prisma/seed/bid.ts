import type { Bid, PrismaClient, User } from '@prisma/client';
import { USERS_NUMBER } from './config';
import { fakeBid } from './data/bid';

export const seedBids = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingProducts = await prismaClient.product.findMany();

  const data: Bid[] = await fakeBid(
    USERS_NUMBER,
    existingUsers,
    existingProducts,
  );
  await prismaClient.bid.createMany({ data: data });
};
