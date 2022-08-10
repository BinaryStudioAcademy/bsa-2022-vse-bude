import type { Category, PrismaClient } from '@prisma/client';
import { Categories } from '../Categories';
import { fakeCategory } from '../data/category';

export const seedCategory = async (prismaClient: PrismaClient) => {
  const existingCategories = await prismaClient.category.findMany();

  if (existingCategories.length >= Categories.length) {
    return;
  }

  const data: Category[] = await fakeCategory(existingCategories);
  await prismaClient.category.createMany({ data: data });
};
