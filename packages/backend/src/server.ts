import { initRoutes } from '@routes';
import cors from 'cors';
import express, { json } from 'express';
import { initRepositories } from '@repositories';
import { getEnv, log } from '@helpers';
import { initServices } from '@services';
import { logger } from '@middlewares';
import { PrismaClient } from '@prisma/client';

const app = express();
const prismaClient = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
const repositories = initRepositories(prismaClient);
const services = initServices(repositories);
const routes = initRoutes(services);
const port = getEnv('PORT');

app
  .use(cors())
  .use(logger)
  .use(json())
  .use(routes)
  .on('close', () => prismaClient.$disconnect())
  .listen(port, () => log('server is running'));
