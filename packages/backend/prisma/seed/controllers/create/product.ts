import type { PrismaClient, Product, User } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { fakeProducts } from '../../data/Product';
import { PRODUCTS_FILE_NAME } from '../../config/config';
import { writeFile } from './../../helpers/wtireFile';

export const seedProducts = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
): Promise<void> => {
  const existingCategories = await prismaClient.category.findMany();

  const productsNumber =
    faker.datatype.number({ min: 1, max: 3 }) * existingCategories.length;

  const existingProducts = await prismaClient.product.findMany();
  const howManyToCreate = productsNumber - existingProducts.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: Product[] = await fakeProducts(
    howManyToCreate,
    existingUsers,
    existingCategories,
  );

  writeFile(PRODUCTS_FILE_NAME, data);

  await prismaClient.product.createMany({ data: data });
};
