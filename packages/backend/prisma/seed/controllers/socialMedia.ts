import type { PrismaClient, Product, SocialMedia, User } from '@prisma/client';
import { USERS_NUMBER } from '../config/config';
import { fakeSocialMedia } from '../data/socialMedia';

export const seedSocialMedia = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingProducts: Product[],
) => {
  const existingSocialMedia = await prismaClient.socialMedia.findMany();

  if (existingSocialMedia.length >= existingUsers.length) {
    return;
  }

  const data: SocialMedia[] = await fakeSocialMedia(
    USERS_NUMBER,
    existingUsers,
    existingProducts,
  );
  await prismaClient.socialMedia.createMany({ data: data });
};
