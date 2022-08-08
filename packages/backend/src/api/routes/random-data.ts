import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';

export const initRandomDataRoutes = (
  { randomDataService }: Services,
  path: ApiRoutes,
) => {
  const router = Router();

  return router.get(
    path,
    wrap(() => randomDataService.get()),
  );
};
