import type { Chat, ChatMember, User } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeChatMember = async (
  amountOfRecords: number,
  existingUsers: User[],
  existingChats: Chat[],
): Promise<ChatMember[]> => {
  const records: ChatMember[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const userIndex = i % existingUsers.length;
    const userId = existingUsers.at(userIndex)?.id;
    if (!userId) {
      continue;
    }

    const chatIndex = i % existingChats.length;
    const chatId = existingChats.at(chatIndex)?.id;
    if (!chatId) {
      continue;
    }

    const record: ChatMember = {
      id: faker.datatype.uuid(),
      userId: userId,
      chatId: chatId,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
