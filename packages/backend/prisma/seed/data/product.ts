import type { Category, Product, User } from '@prisma/client';
import { Condition } from '@prisma/client';
import { ProductStatus, ProductType } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { Decimal } from '@prisma/client/runtime';

export const fakeProducts = async (
  amountOfRecords: number,
  existingUsers: User[],
  existingCategories: Category[],
): Promise<Product[]> => {
  const records: Product[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const userIndex = i % existingUsers.length;
    const userId = existingUsers.at(userIndex)?.id;
    if (!userId) {
      continue;
    }

    const categoryIndex = i % existingCategories.length;
    const categoryId = existingCategories.at(categoryIndex)?.id;
    if (!categoryId) {
      continue;
    }
    const images: string[] = [
      faker.image.abstract(),
      faker.image.abstract(),
      faker.image.abstract(),
      faker.image.abstract(),
    ];

    const record: Product = {
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: new Decimal(faker.commerce.price(1000, 100000)),
      recommendedPrice: new Decimal(faker.commerce.price(500, 50000)),
      minimalBid: new Decimal(faker.commerce.price(10, 1000)),
      imageLinks: images,
      country: faker.address.country(),
      city: faker.address.city(),
      phone: faker.phone.number('+380 ## ### ####'),
      type: ProductType.AUCTION,
      status: ProductStatus.ACTIVE,
      condition: Condition.NEW,
      endDate: faker.date.future(),
      postDate: faker.date.recent(),
      cancelReason: faker.random.word(),
      authorId: userId,
      categoryId: categoryId,
      winnerId: null,
      views: faker.datatype.number({ min: 0, max: 100 }),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
