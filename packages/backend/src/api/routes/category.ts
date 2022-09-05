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
   *     tags: [Category]
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
   *               $ref: "#/definitions/GetCategoriesResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.get(
    apiPath(path),
    wrap((req: Request) => categoryService.getAll(req)),
  );

  return router;
};
