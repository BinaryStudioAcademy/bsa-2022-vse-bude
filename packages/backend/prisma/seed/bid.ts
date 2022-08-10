import type { Bid, PrismaClient, User } from '@prisma/client';
import { BIDS_NUMBER } from './config';
import { fakeBid } from './data/bid';

export const seedBids = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingBids = await prismaClient.bid.findMany();
  const howManyToCreate = BIDS_NUMBER - existingBids.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const existingProducts = await prismaClient.product.findMany();

  const data: Bid[] = await fakeBid(
    howManyToCreate,
    existingUsers,
    existingProducts,
  );
  await prismaClient.bid.createMany({ data: data });
};
