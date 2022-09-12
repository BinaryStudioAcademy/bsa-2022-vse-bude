import type { Address, PrismaClient, User } from '@prisma/client';
import { ADDRESS_FILE_NAME, USERS_NUMBER } from '../../config/config';
import { fakeAddress } from '../../data/address';
import { writeFile } from './../../helpers/wtireFile';

export const seedAddress = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
): Promise<void> => {
  const existingAddress = await prismaClient.address.findMany();

  if (existingUsers.length === existingAddress.length) {
    return;
  }

  const data: Address[] = await fakeAddress(
    USERS_NUMBER,
    existingUsers,
    existingAddress,
  );

  writeFile(ADDRESS_FILE_NAME, data);

  await prismaClient.address.createMany({ data: data });
};
