import type { ApiRoutes } from '@vse-bude/shared';
import type { Request } from 'express';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';

export const initNewsRoutes = (
  { newsService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /news:
   *   get:
   *     tags: [News]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: limit
   *         in: query
   *         required: true
   *         schema:
   *           format: double
   *           type: number
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 contribution:
   *                   $ref: "#/definitions/News"
   */

  router.get(
    apiPath(path),
    wrap((req: Request) => newsService.getAll(req.query)),
  );

  return router;
};
