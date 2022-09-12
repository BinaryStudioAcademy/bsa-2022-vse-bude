import type { Bid, PrismaClient, Product, User } from '@prisma/client';
import { BIDS_NUMBER } from '../../config/config';
import { fakeBid } from '../../data/bid';
import { BID_FILE_NAME } from './../../config/config';
import { writeFile } from './../../helpers/wtireFile';

export const seedBids = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingProducts: Product[],
): Promise<void> => {
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

  writeFile(BID_FILE_NAME, data);

  await prismaClient.bid.createMany({ data: data });
};
