import { PrismaClient } from '@prisma/client';
import { seedUsers } from './user';
import { seedUserSettings } from './userSettings';

const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

(async () => {
  // await prismaClient.user.deleteMany({});
  await seedUsers(prismaClient);
  await prismaClient.userSettings.deleteMany({});
  await seedUserSettings(prismaClient);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
