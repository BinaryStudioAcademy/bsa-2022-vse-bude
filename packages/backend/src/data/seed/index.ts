import { DBClient, log } from '@helpers';
import { seedUsers } from './user';

const dbClient = new DBClient({ log: ['query', 'info', 'warn', 'error'] });

(async () => {
  await seedUsers(dbClient);
})()
  .then(() => dbClient.$disconnect())
  .catch(async (e) => {
    log(e);
    await dbClient.$disconnect();
    process.exit(1);
  });
