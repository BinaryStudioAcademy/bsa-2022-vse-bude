import type { PrismaClient } from '@prisma/client';

export const clearData = async (prismaClient: PrismaClient): Promise<void> => {
  await prismaClient.address.deleteMany({});
  await prismaClient.userSettings.deleteMany({});
  await prismaClient.category.deleteMany({});
  await prismaClient.bid.deleteMany({});
  await prismaClient.chatMember.deleteMany({});
  await prismaClient.message.deleteMany({});
  await prismaClient.chat.deleteMany({});
  await prismaClient.socialMedia.deleteMany({});
  await prismaClient.product.deleteMany({});
  await prismaClient.user.deleteMany({});
  await prismaClient.news.deleteMany({});
  await prismaClient.order.deleteMany({});
};
