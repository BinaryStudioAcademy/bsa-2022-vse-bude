import type { Address, PrismaClient, User } from '@prisma/client';
import { USERS_NUMBER } from '../config/config';
import { fakeAddress } from '../data/address';

export const seedAddress = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingAddress = await prismaClient.address.findMany();

  //check if all records exists
  if (existingUsers.length === existingAddress.length) {
    return;
  }

  //clear records
  await prismaClient.address.deleteMany({});

  //create new
  const data: Address[] = await fakeAddress(USERS_NUMBER, existingUsers);
  await prismaClient.address.createMany({ data: data });
};
