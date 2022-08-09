import type { PrismaClient, SocialMedia, User } from '@prisma/client';
import { USERS_NUMBER } from './config';
import { fakeSocialMedia } from './data/socialMedia';

export const seedSocialMedia = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingSocialMedia = await prismaClient.socialMedia.findMany();

  //check if all exists
  if (existingUsers.length === existingSocialMedia.length) {
    return;
  }

  //clear records
  await prismaClient.socialMedia.deleteMany({});

  //create new
  const data: SocialMedia[] = await fakeSocialMedia(
    USERS_NUMBER,
    existingUsers,
  );
  await prismaClient.socialMedia.createMany({ data: data });
};
