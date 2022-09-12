import type { ApiRoutes } from '@vse-bude/shared';
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
   *       - in: header
   *         name: accept-language
   *         schema:
   *            type: string
   *            enum: [en, ua]
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
    wrap(() => categoryService.getAll()),
  );

  return router;
};
