import type { Category, PrismaClient } from '@prisma/client';
import { CATEGORY_NUMBER } from './config';
import { fakeCategory } from './data/category';

export const seedCategory = async (prismaClient: PrismaClient) => {
  const existingCategories = await prismaClient.category.findMany();
  const howManyToCreate = CATEGORY_NUMBER - existingCategories.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: Category[] = await fakeCategory(howManyToCreate);
  await prismaClient.category.createMany({ data: data });
};
