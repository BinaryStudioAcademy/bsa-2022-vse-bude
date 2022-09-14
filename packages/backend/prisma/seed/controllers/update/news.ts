import type { PrismaClient, News } from '@prisma/client';
import { readFileSync } from 'fs';
import { NEWS_FILE_NAME } from '../../config/config';

export const updateNews = async (prismaClient: PrismaClient): Promise<void> => {
  const path = `./prisma/seed/mockData/${NEWS_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: News[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.news.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.news.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          title: _dataJSON.title,
          description: _dataJSON.description,
          content: _dataJSON.content,
          image: _dataJSON.image,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.news.create({ data: _dataJSON });
    }
  }
};
