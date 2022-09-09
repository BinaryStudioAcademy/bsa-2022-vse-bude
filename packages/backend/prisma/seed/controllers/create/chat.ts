import type { Chat, PrismaClient, Product } from '@prisma/client';
import { fakeChat } from '../../data/chat';
import { writeFile } from './../../helpers/wtireFile';
import { CHAT_FILE_NAME } from './../../config/config';

export const seedChat = async (
  prismaClient: PrismaClient,
  existingProducts: Product[],
): Promise<void> => {
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

  writeFile(CHAT_FILE_NAME, data);

  await prismaClient.chat.createMany({ data: data });
};
