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
   * definitions:
   *   Category:
   *     required:
   *       - id
   *       - title
   *       - image
   *       - createdAt
   *       - updatedAt
   *     properties:
   *       id:
   *         type: string
   *       title:
   *         type: string
   *       createdAt:
   *         type: string
   *         format: date-time
   *       image:
   *         type: string
   *         nullable: true
   *       updatedAt:
   *         type: string
   *         format: date-time
   */

  /**
   * @openapi
   * /category/getAll:
   *   get:
   *     description: Welcome to swagger-jsdoc!
   *     tags: [Category]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: take
   *         in: query
   *         description: Amount of records.
   *         required: true
   *         schema:
   *           format: double
   *           type: number
   *     responses:
   *       403:
   *         description: User is not authorized to perform the action.
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 contribution:
   *                   $ref: "#/definitions/Category"
   */

  router.get(
    apiPath(path),
    wrap((req: Request) => categoryService.getAll(req.query)),
  );

  return router;
};
