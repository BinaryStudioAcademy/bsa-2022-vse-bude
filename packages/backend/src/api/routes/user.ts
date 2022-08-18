import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';

export const initUserRoutes = (
  { userService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /users:
   *  get:
   *    tag:
   *      - Users
   *    description: Get users.
   *    responses:
   *      200:
   *        description: Returns users list.
   */

  router.get(
    apiPath(path),
    wrap(() => userService.getAll()),
  );

  return router;
};
