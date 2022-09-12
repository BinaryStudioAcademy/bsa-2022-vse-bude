import type { PrismaClient, News } from '@prisma/client';
import { NEWS_FILE_NAME, NEWS_NUMBER } from '../../config/config';
import { fakeNews } from '../../data/news';
import { writeFile } from './../../helpers/wtireFile';

export const seedNews = async (prismaClient: PrismaClient): Promise<void> => {
  const existingNews = await prismaClient.news.findMany();
  const howManyToCreate = NEWS_NUMBER - existingNews.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: News[] = await fakeNews(howManyToCreate);

  writeFile(NEWS_FILE_NAME, data);

  await prismaClient.news.createMany({ data: data });
};
