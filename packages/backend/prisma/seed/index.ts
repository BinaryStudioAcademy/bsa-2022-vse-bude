import { PrismaClient } from '@prisma/client';
import { seedAddress } from './address';
import { seedCategory } from './category';
import { seedProducts } from './product';
// import { seedSocialMedia } from './socialMedia';
import { seedUsers } from './user';
import { seedUserSettings } from './userSettings';

const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

(async () => {
  //clear
  // await prismaClient.address.deleteMany({});
  // await prismaClient.userSettings.deleteMany({});
  // await prismaClient.user.deleteMany({});

  await seedUsers(prismaClient);

  //optimizing requests
  const existingUsers = await prismaClient.user.findMany();

  await seedUserSettings(prismaClient, existingUsers);
  await seedAddress(prismaClient, existingUsers);
  // await seedSocialMedia(prismaClient, existingUsers);
  await seedCategory(prismaClient);
  await seedProducts(prismaClient, existingUsers);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
