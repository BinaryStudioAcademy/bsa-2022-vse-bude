import { prismaClient } from './config/prismaClient';
import { createData } from './createData';

(async () => {
  await createData(prismaClient);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
