import { initRoutes } from '@routes';
import cors from 'cors';
import express, { json } from 'express';
import { initRepositories } from '@repositories';
import { getEnv, logger } from '@helpers';
import { initServices } from '@services';
import { loggerMiddleware, localizationMiddleware } from '@middlewares';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerDocument from '../swagger.json';
import { prismaClient as database } from './data/db';
import { errorHandler } from './error/error-handler';

const app = express();
const repositories = initRepositories(database);
const services = initServices(repositories);
const routes = initRoutes(services);
const port = getEnv('PORT');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['**/*.ts'], // files containing annotations as above
};
const swaggerSpecification = swaggerJsdoc(options);

app
  .use(cors())
  .use(loggerMiddleware)
  .use(json())
  .use(localizationMiddleware)
  .use(routes)
  .use(errorHandler)
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecification))
  .on('close', () => database.$disconnect())
  .listen(port, () => {
    logger.log(`Server is running on port ${port}`);
  });
