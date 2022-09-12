import { prismaClient } from './config/prismaClient';
import { clearData } from './clearData';
import { createData } from './createData';

(async (): Promise<void> => {
  await clearData(prismaClient);
  await createData(prismaClient);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
