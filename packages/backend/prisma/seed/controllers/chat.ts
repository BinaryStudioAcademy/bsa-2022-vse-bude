import type { Chat, PrismaClient, Product } from '@prisma/client';
import { CHAT_NUMBER } from '../config/config';
import { fakeChat } from '../data/chat';

export const seedChat = async (
  prismaClient: PrismaClient,
  existingProducts: Product[],
) => {
  const existingChats = await prismaClient.chat.findMany();
  const howManyToCreate = CHAT_NUMBER - existingChats.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: Chat[] = await fakeChat(howManyToCreate, existingProducts);
  await prismaClient.chat.createMany({ data: data });
};
