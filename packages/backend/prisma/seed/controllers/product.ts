import type { PrismaClient, Product, User } from '@prisma/client';
// import { faker } from '@faker-js/faker';
import { fakeProducts } from '../data/Product';
import { USERS_NUMBER } from '../config/config';

export const seedProducts = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingCategories = await prismaClient.category.findMany();

  // const productsNumber =
  //   faker.datatype.number({ min: 1, max: 3 }) * existingCategories.length;
  const productsNumber = USERS_NUMBER;

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
  await prismaClient.product.createMany({ data: data });
};
