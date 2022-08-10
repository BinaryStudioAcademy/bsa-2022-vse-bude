import type { Chat, PrismaClient } from '@prisma/client';
import { CHAT_NUMBER } from './config';
import { fakeChat } from './data/chat';

export const seedChat = async (prismaClient: PrismaClient) => {
  const existingChats = await prismaClient.chat.findMany();
  const howManyToCreate = CHAT_NUMBER - existingChats.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const existingProducts = await prismaClient.product.findMany();

  const data: Chat[] = await fakeChat(howManyToCreate, existingProducts);
  await prismaClient.chat.createMany({ data: data });
};
