import { initRoutes } from '@routes';
import cors from 'cors';
import express, { json } from 'express';
import { initRepositories } from '@repositories';
import { getEnv, log } from '@helpers';
import { initServices } from '@services';
import { logger } from '@middlewares';
import { prismaClient as database } from './data/db';
import { errorHandler } from './error/error-handler';

const app = express();
const repositories = initRepositories(database);
const services = initServices(repositories);
const routes = initRoutes(services);
const port = getEnv('PORT');

app
  .use(cors())
  .use(logger)
  .use(json())
  .use(routes)
  .use(errorHandler)
  .on('close', () => database.$disconnect())
  .listen(port, () => log(`Server is running on port ${port}`));
