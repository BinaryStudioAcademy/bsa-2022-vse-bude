import type { ApiRoutes } from '@vse-bude/shared';
import { CategoryApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';

export const initCategoryRoutes = (
  { categoryService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path, CategoryApiRoutes.POPULAR),
    wrap(() => categoryService.getPopular()),
  );

  return router;
};
