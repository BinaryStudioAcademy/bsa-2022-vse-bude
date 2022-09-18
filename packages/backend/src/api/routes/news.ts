import type { ApiRoutes } from '@vse-bude/shared';
import type { Request } from 'express';
import { Router } from 'express';
import { wrap, apiPath } from '@helpers';
import type { Services } from '@services';

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
   *       - in: query
   *         required: false
   *         name: limit
   *         schema:
   *            type: number
   *            format: integer
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/GetNewsResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.get(
    apiPath(path),
    wrap((req: Request) => newsService.getAll(req.query)),
  );

  return router;
};
