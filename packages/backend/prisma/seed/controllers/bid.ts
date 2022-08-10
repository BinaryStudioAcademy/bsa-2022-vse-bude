import type { Bid, PrismaClient, Product, User } from '@prisma/client';
import { BIDS_NUMBER } from '../config';
import { fakeBid } from '../data/bid';

export const seedBids = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingProducts: Product[],
) => {
  const existingBids = await prismaClient.bid.findMany();
  const howManyToCreate = BIDS_NUMBER - existingBids.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: Bid[] = await fakeBid(
    howManyToCreate,
    existingUsers,
    existingProducts,
  );
  await prismaClient.bid.createMany({ data: data });
};
