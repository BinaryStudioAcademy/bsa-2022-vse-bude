import { initRoutes } from '@routes';
import cors from 'cors';
import express, { json } from 'express';
import { initRepositories } from '@repositories';
import { getEnv, log, DBClient } from '@helpers';
import { initServices } from '@services';
import { logger } from '@middlewares';

const app = express();
const bdClient = new DBClient({ log: ['query', 'info', 'warn', 'error'] });
const repositories = initRepositories(bdClient);
const services = initServices(repositories);
const routes = initRoutes(services);
const port = getEnv('PORT');

app
  .use(cors())
  .use(logger)
  .use(json())
  .use(routes)
  .on('close', () => bdClient.$disconnect())
  .listen(port, () => log('server is running'));
