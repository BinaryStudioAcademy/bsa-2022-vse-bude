import { prismaClient } from './config/prismaClient';
import { updateUsers } from './controllers/update/user';

(async () => {
  await updateUsers(prismaClient);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
