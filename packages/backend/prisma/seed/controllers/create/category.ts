import type { Category, PrismaClient } from '@prisma/client';
import { categoriesFromJSON } from '../../helpers/categories';
import { fakeCategory } from '../../data/category';
import { CATEGORY_FILE_NAME } from './../../config/config';
import { writeFile } from './../../helpers/wtireFile';

export const seedCategory = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const existingCategories = await prismaClient.category.findMany();

  if (existingCategories.length >= categoriesFromJSON.length) {
    return;
  }

  const data: Category[] = await fakeCategory(
    existingCategories,
    categoriesFromJSON,
  );

  writeFile(CATEGORY_FILE_NAME, data);

  await prismaClient.category.createMany({ data: data });
};
