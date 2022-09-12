import type { ApiRoutes } from '@vse-bude/shared';
import type { IRouter } from 'express';
import { Router } from 'express';
import type { Services } from '@services';

function initHealthRoutes(
  { redisStorageService, healthService }: Services,
  path: ApiRoutes,
): IRouter {
  const router = Router();

  return router.get(path, async (req, res) => {
    try {
      await healthService.select();
      await redisStorageService.checkPing();
      res.status(200).send('healthy');
    } catch (error) {
      res.status(503).send('not healthy');
    }
  });
}

export { initHealthRoutes };
