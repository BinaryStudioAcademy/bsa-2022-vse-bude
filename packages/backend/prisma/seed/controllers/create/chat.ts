import type { Chat, PrismaClient, Product } from '@prisma/client';
import { fakeChat } from '../../data/chat';

export const seedChat = async (
  prismaClient: PrismaClient,
  existingProducts: Product[],
) => {
  const existingChats = await prismaClient.chat.findMany();
  const howManyToCreate = existingProducts.length - existingChats.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: Chat[] = await fakeChat(
    howManyToCreate,
    existingProducts,
    existingChats,
  );
  await prismaClient.chat.createMany({ data: data });
};
