import type { ApiRoutes } from '@vse-bude/shared';
import type { Request } from 'express';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';

export const initCategoryRoutes = (
  { categoryService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /categories:
   *   get:
   *    tags:
   *     - Categories
   *    description: Get categories.
   *    responses:
   *      200:
   *        description: Returns categories list
   */

  router.get(
    apiPath(path),
    wrap((req: Request) => categoryService.getAll(req.query)),
  );

  return router;
};
