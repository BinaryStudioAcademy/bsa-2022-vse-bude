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
   * definitions:
   *   News:
   *     required:
   *       - id
   *       - title
   *       - content
   *       - description
   *       - image
   *       - createdAt
   *       - updatedAt
   *     properties:
   *       id:
   *         type: string
   *       title:
   *         type: string
   *       content:
   *         type: string
   *       description:
   *         type: string
   *       image:
   *         type: string
   *       createdAt:
   *         type: string
   *         format: date-time
   *       updatedAt:
   *         type: string
   *         format: date-time
   */

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
   *                   $ref: "#/definitions/News"
   */

  router.get(
    apiPath(path),
    wrap((req: Request) => newsService.getAll(req.query)),
  );

  return router;
};
