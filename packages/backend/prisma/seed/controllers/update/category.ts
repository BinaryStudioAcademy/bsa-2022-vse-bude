import type { Category, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { CATEGORY_FILE_NAME } from './../../config/config';

export const updateCategory = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${CATEGORY_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: Category[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.category.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.category.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          title: _dataJSON.title,
          image: _dataJSON.image,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.category.create({ data: _dataJSON });
    }
  }
};
