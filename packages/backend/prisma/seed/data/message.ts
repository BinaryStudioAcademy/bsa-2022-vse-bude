import type { Chat, Message, User } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeMessage = async (
  amountOfRecords: number,
  existingUsers: User[],
  existingChats: Chat[],
): Promise<Message[]> => {
  const records: Message[] = [];

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

    const record: Message = {
      id: faker.datatype.uuid(),
      senderId: userId,
      chatId: chatId,
      text: faker.lorem.sentence(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
