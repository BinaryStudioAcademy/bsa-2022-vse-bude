import type { Chat, Message, PrismaClient, User } from '@prisma/client';
import { fakeMessage } from './data/message';
import { MESSAGES_NUMBER } from './config';

export const seedMessage = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingChats: Chat[],
) => {
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
  await prismaClient.message.createMany({ data: data });
};
