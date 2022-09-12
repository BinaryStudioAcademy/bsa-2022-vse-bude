import type { PrismaClient, Product, SocialMedia, User } from '@prisma/client';
import { SOCIAL_MEDIA_FILE_NAME, USERS_NUMBER } from '../../config/config';
import { fakeSocialMedia } from '../../data/socialMedia';
import { writeFile } from './../../helpers/wtireFile';

export const seedSocialMedia = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingProducts: Product[],
): Promise<void> => {
  const existingSocialMedia = await prismaClient.socialMedia.findMany();

  if (existingSocialMedia.length >= existingUsers.length) {
    return;
  }

  const data: SocialMedia[] = await fakeSocialMedia(
    USERS_NUMBER,
    existingUsers,
    existingProducts,
  );

  writeFile(SOCIAL_MEDIA_FILE_NAME, data);

  await prismaClient.socialMedia.createMany({ data: data });
};
