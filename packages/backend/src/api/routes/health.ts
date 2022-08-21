import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { initServices } from '@services';
import type { Services } from '@services';
import { initRepositories } from '@repositories';

function initHealthRoutes({ healthService }: Services, path: ApiRoutes) {
  const router = Router();

  return router.get(path, async (req, res) => {
    try {
      await healthService.select();
      await initServices(
        initRepositories(await healthService.getClient()),
      ).redisStorageService.checkPing();
      res.status(200).send('healthy');
    } catch (error) {
      console.log(error);
      res.status(503).send('not healthy');
    }
  });
}

export { initHealthRoutes };
