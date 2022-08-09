import type { Chat, PrismaClient } from '@prisma/client';
import { USERS_NUMBER } from './config';
import { fakeChat } from './data/chat';

export const seedChat = async (prismaClient: PrismaClient) => {
  const existingProducts = await prismaClient.product.findMany();

  const data: Chat[] = await fakeChat(USERS_NUMBER, existingProducts);
  await prismaClient.chat.createMany({ data: data });
};
