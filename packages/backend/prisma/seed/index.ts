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
  await prismaClient.product.deleteMany({});
  await prismaClient.user.deleteMany({});

  await seedUsers(prismaClient);

  //optimizing requests
  const existingUsers = await prismaClient.user.findMany();

  await seedUserSettings(prismaClient, existingUsers);
  await seedAddress(prismaClient, existingUsers);
  await seedCategory(prismaClient);
  await seedProducts(prismaClient, existingUsers);
  await seedSocialMedia(prismaClient, existingUsers);
  await seedBids(prismaClient, existingUsers);
  await seedChat(prismaClient);
  await seedChatMember(prismaClient, existingUsers);
  await seedMessage(prismaClient, existingUsers);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
