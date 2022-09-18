import type { PrismaClient } from '@prisma/client';
import { seedChat } from './controllers/create/chat';
import { seedAddress } from './controllers/create/address';
import { seedBids } from './controllers/create/bid';
import { seedCategory } from './controllers/create/category';
import { seedProducts } from './controllers/create/product';
import { seedSocialMedia } from './controllers/create/socialMedia';
import { seedUsers } from './controllers/create/user';
import { seedUserSettings } from './controllers/create/userSettings';
import { seedChatMember } from './controllers/create/chatMember';
import { seedMessage } from './controllers/create/message';
import { seedNews } from './controllers/create/news';
import { seedOrders } from './controllers/create/orders';

export const createData = async (prismaClient: PrismaClient): Promise<void> => {
  await seedUsers(prismaClient);

  const existingUsers = await prismaClient.user.findMany();

  await seedUserSettings(prismaClient, existingUsers);
  await seedAddress(prismaClient, existingUsers);
  await seedCategory(prismaClient);
  await seedProducts(prismaClient, existingUsers);

  const existingProducts = await prismaClient.product.findMany();

  await seedSocialMedia(prismaClient, existingUsers, existingProducts);
  await seedBids(prismaClient, existingUsers, existingProducts);
  await seedChat(prismaClient, existingProducts);

  const existingChats = await prismaClient.chat.findMany();

  await seedChatMember(prismaClient, existingUsers, existingChats);
  await seedMessage(prismaClient, existingUsers, existingChats);
  await seedNews(prismaClient);
  await seedOrders(prismaClient, existingUsers, existingProducts);
};
