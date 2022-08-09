import type { PrismaClient, Product, User } from '@prisma/client';
// import { faker } from '@faker-js/faker';
import { fakeProducts } from './data/Product';
import { USERS_NUMBER } from './config';

export const seedProducts = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingCategories = await prismaClient.category.findMany();

  // const howManyToCreate =
  //   faker.datatype.number({ min: 1, max: 3 }) * existingCategories.length;

  const data: Product[] = await fakeProducts(
    USERS_NUMBER,
    existingUsers,
    existingCategories,
  );
  await prismaClient.product.createMany({ data: data });
};
