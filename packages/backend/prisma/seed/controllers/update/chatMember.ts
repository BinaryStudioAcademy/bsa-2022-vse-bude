import type { ChatMember, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { CHAT_MEMBER_FILE_NAME } from './../../config/config';

export const updateChatMember = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${CHAT_MEMBER_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: ChatMember[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.chatMember.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.chatMember.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          userId: _dataJSON.userId,
          chatId: _dataJSON.chatId,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.chatMember.create({ data: _dataJSON });
    }
  }
};
