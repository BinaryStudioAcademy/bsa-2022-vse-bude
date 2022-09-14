import type { Chat, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { CHAT_FILE_NAME } from './../../config/config';

export const updateChat = async (prismaClient: PrismaClient): Promise<void> => {
  const path = `./prisma/seed/mockData/${CHAT_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: Chat[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.chat.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.chat.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          title: _dataJSON.title,
          productId: _dataJSON.productId,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
          deletedAt: _dataJSON.deletedAt,
        },
      });
    } else {
      await prismaClient.chat.create({ data: _dataJSON });
    }
  }
};
