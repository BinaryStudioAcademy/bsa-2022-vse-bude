import { initRoutes } from 'api/routes';
import cors from 'cors';
import { initRepositories } from 'data/repositories';
import express, { json } from 'express';
import { getEnv, log, DBClient } from 'helpers';
import { initServices } from 'services';
import { logger } from 'api/middlewares';

const app = express();
const bdClient = new DBClient();
const repositories = initRepositories(bdClient);
const services = initServices(repositories);
const routes = initRoutes(services);
const port = getEnv('PORT');

app
  .use(cors())
  .use(logger)
  .use(json())
  .use(routes)
  .listen(port, () => log('server is running'))
  .close(() => bdClient.$disconnect());
