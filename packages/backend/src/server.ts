import { initRoutes } from '@routes';
import cors from 'cors';
import express, { json } from 'express';
import { initRepositories } from '@repositories';
import { getEnv, logger } from '@helpers';
import { initServices } from '@services';
import { loggerMiddleware, localizationMiddleware } from '@middlewares';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import { prismaClient as database } from './data/db';
import { errorHandler } from './error/error-handler';

const app = express();
const repositories = initRepositories(database);
const services = initServices(repositories);
const routes = initRoutes(services);
const port = getEnv('PORT');

app
  .use(cors())
  .use(loggerMiddleware)
  .use(json())
  .use(localizationMiddleware)
  .use(routes)
  .use(errorHandler)
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .on('close', () => database.$disconnect())
  .listen(port, () => {
    logger.log(`Server is running on port ${port}`);
  });
