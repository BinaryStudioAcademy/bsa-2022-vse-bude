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
   *   get:
   *     tags: [User]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 contribution:
   *                   $ref: "#/definitions/User"
   */

  router.get(
    apiPath(path),
    wrap(() => userService.getAll()),
  );

  return router;
};
