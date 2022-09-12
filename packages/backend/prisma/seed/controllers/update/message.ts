import type { Message, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { MESSAGE_FILE_NAME } from './../../config/config';

export const updateMessage = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${MESSAGE_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: Message[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.message.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.message.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          senderId: _dataJSON.senderId,
          chatId: _dataJSON.chatId,
          text: _dataJSON.text,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.message.create({ data: _dataJSON });
    }
  }
};
