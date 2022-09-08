import { initRoutes } from '@routes';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import { initRepositories } from '@repositories';
import { getEnv, isProduction, logger } from '@helpers';
import { initServices } from '@services';
import { loggerMiddleware } from '@middlewares';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { Server } from 'socket.io';
import { prismaClient as database } from './data/db';
import { errorHandler } from './error/error-handler';
import { langMiddleware } from './api/middlewares/lang';
import { appEventsListener } from './events';
import { socketCors } from './config';
import { clearAllJobs, initAuctionJobs } from './scheduler';

const app = express();
const repositories = initRepositories(database);
const services = initServices(repositories);
const routes = initRoutes(services);
const port = getEnv('PORT');
const socketsPort = +getEnv('SOCKETS_PORT');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vse Bude API',
      version: '1.0.0',
    },
  },
  apis: ['**/routes/*.ts', '**/docs/**/*.ts'],
};
const swaggerSpecification = swaggerJsdoc(options);

if (isProduction) {
  clearAllJobs();
  initAuctionJobs(repositories.productRepository);
}

app
  .use(cors())
  .use(loggerMiddleware)
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(langMiddleware)
  .use(routes)
  .use(errorHandler)
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecification))
  .on('close', () => database.$disconnect())
  .listen(port, () => {
    logger.log(`Server is running on port ${port}`);
  });

const io = new Server(socketsPort, {
  cors: socketCors,
});

appEventsListener(io);

export { repositories };
