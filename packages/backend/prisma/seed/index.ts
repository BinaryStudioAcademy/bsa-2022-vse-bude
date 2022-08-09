import { PrismaClient } from '@prisma/client';
import { seedAddress } from './address';
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
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
