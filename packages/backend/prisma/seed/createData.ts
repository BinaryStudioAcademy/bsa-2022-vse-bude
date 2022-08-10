import { prismaClient } from './config/prismaClient';
import { seedChat } from './controllers/chat';
import { seedAddress } from './controllers/address';
import { seedBids } from './controllers/bid';
import { seedCategory } from './controllers/category';
import { seedProducts } from './controllers/product';
import { seedSocialMedia } from './controllers/socialMedia';
import { seedUsers } from './controllers/user';
import { seedUserSettings } from './controllers/userSettings';
import { seedChatMember } from './controllers/chatMember';
import { seedMessage } from './controllers/message';

export const createData = async () => {
  try {
    await seedUsers(prismaClient);

    //optimizing requests
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
  } catch (e) {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
};
