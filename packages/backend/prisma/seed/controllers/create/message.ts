import type { Chat, Message, PrismaClient, User } from '@prisma/client';
import { fakeMessage } from '../../data/message';
import { MESSAGES_NUMBER, MESSAGE_FILE_NAME } from '../../config/config';
import { writeFile } from './../../helpers/wtireFile';

export const seedMessage = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingChats: Chat[],
): Promise<void> => {
  const existingMessages = await prismaClient.message.findMany();
  const howManyToCreate = MESSAGES_NUMBER - existingMessages.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: Message[] = await fakeMessage(
    howManyToCreate,
    existingUsers,
    existingChats,
  );

  writeFile(MESSAGE_FILE_NAME, data);

  await prismaClient.message.createMany({ data: data });
};
