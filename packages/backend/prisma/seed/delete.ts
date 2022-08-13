import { clearData } from './clearData';
import { prismaClient } from './config/prismaClient';

(async () => {
  await clearData(prismaClient);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
