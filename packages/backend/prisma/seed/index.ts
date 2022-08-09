import { PrismaClient } from '@prisma/client';
import { seedUsers } from './user';

const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

(async () => {
  const users = prismaClient.user.findMany;
  if (users.length === 0) {
    await seedUsers(prismaClient);
  }
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
