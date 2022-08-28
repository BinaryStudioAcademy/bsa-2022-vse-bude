import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';

export const initPostRoutes = (path: ApiRoutes): Router => {
  const router = Router();

  return router.post(path, async (_req, res) => {
    res.status(200).json('Success');
  });
};
