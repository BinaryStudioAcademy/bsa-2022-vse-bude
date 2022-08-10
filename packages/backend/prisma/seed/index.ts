import { PrismaClient } from '@prisma/client';
import { seedChat } from './chat';
import { seedAddress } from './address';
import { seedBids } from './bid';
import { seedCategory } from './category';
import { seedProducts } from './product';
import { seedSocialMedia } from './socialMedia';
import { seedUsers } from './user';
import { seedUserSettings } from './userSettings';
import { seedChatMember } from './chatMember';
import { seedMessage } from './message';

const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

(async () => {
  //clear
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
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
