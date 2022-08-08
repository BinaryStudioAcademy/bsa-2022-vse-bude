import { initRoutes } from '@routes';
import cors from 'cors';
import express, { json } from 'express';
import { initRepositories } from '@repositories';
import { getEnv, log } from '@helpers';
import { initServices } from '@services';
import { logger } from '@middlewares';
import { PrismaClient } from '@prisma/client';
import { createClient } from 'redis';

const app = express();
const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const redisPort = Number(getEnv('REDIS_PORT')) || 6379;
const redisHost = getEnv('REDIS_HOST');
const redisPassword = getEnv('REDIS_PASSWORD');

const redisConnectionParams = {
  socket: {
    port: redisPort,
    host: redisHost,
  },
  password: redisPassword,
};

const redisClient = createClient(redisConnectionParams);

const repositories = initRepositories(prismaClient);
const services = initServices(repositories, redisClient);
const routes = initRoutes(services);
const port = getEnv('PORT');

app
  .use(cors())
  .use(logger)
  .use(json())
  .use(routes)
  .on('close', () => prismaClient.$disconnect())
  .listen(port, () => log('server is running'));
