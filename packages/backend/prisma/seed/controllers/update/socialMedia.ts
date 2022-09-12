import type { PrismaClient, SocialMedia } from '@prisma/client';
import { readFileSync } from 'fs';
import { SOCIAL_MEDIA_FILE_NAME } from './../../config/config';

export const updateSocialMedia = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${SOCIAL_MEDIA_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: SocialMedia[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.socialMedia.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.socialMedia.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          socialMedia: _dataJSON.socialMedia,
          link: _dataJSON.link,
          ownedByUserId: _dataJSON.ownedByUserId,
          ownedByProductId: _dataJSON.ownedByProductId,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.socialMedia.create({ data: _dataJSON });
    }
  }
};
