import type { Category, PrismaClient } from '@prisma/client';
import { categoriesFromJSON } from '../../helpers/categories';
import { fakeCategory } from '../../data/category';

export const seedCategory = async (prismaClient: PrismaClient) => {
  const existingCategories = await prismaClient.category.findMany();

  if (existingCategories.length >= categoriesFromJSON.length) {
    return;
  }

  const data: Category[] = await fakeCategory(
    existingCategories,
    categoriesFromJSON,
  );
  await prismaClient.category.createMany({ data: data });
};
