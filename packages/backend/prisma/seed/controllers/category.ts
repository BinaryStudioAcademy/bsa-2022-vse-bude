import type { Category, PrismaClient } from '@prisma/client';
import { Categories } from '../config/Categories';
import { fakeCategory } from '../data/category';

export const seedCategory = async (prismaClient: PrismaClient) => {
  const existingCategories = await prismaClient.category.findMany();

  if (existingCategories.length >= Categories.length) {
    return;
  }

  const data: Category[] = await fakeCategory(existingCategories, Categories);
  await prismaClient.category.createMany({ data: data });
};
