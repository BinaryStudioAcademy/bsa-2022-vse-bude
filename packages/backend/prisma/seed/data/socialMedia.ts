import type { SocialMedia, User, Product } from '@prisma/client';
import { SocialMediaType } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeSocialMedia = async (
  amountOfRecords: number,
  existingUsers: User[],
  existingProducts: Product[],
): Promise<SocialMedia[]> => {
  const records: SocialMedia[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const userId = existingUsers.at(i)?.id;
    if (!userId) {
      continue;
    }

    const productIndex = i % existingProducts.length;
    const productId = existingProducts.at(productIndex)?.id;
    if (!productId) {
      continue;
    }

    const record: SocialMedia = {
      id: faker.datatype.uuid(),
      socialMedia: SocialMediaType.INSTAGRAM,
      link: faker.internet.url(),
      ownedByUserId: userId,
      ownedByProductId: productId,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
