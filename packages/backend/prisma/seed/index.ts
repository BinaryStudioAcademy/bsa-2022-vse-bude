import { PrismaClient } from '@prisma/client';
import { USERS_NUMBER } from './config';
import { seedUsers } from './user';

const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

(async () => {
  await prismaClient.user.deleteMany({});
  const users = await prismaClient.user.findMany();
  if (users.length === 0) {
    await seedUsers(prismaClient, USERS_NUMBER);
  }
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
