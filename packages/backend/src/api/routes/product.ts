import type { ApiRoutes } from '@vse-bude/shared';
import type { Request } from 'express';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';
import type { Product } from '@prisma/client';
import type { ProductQuery } from '@types';
import { ProductApiRoutes } from '@vse-bude/shared';
import { authMiddleware } from '@middlewares';

export const initProductRoutes = (
  { productService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * definitions:
   *   Prisma.Decimal:
   *     type: string
   */

  /**
   * @openapi
   * /products:
   *   get:
   *     tags: [Product]
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
   *                   $ref: "#/definitions/Product"
   */

  router.get(
    apiPath(path),
    wrap<Empty, Product[], Empty, ProductQuery>((req) =>
      productService.getAll(req.query),
    ),
  );

  router.get(
    apiPath(path, ProductApiRoutes.FAVORITE),
    authMiddleware,
    wrap((req: Request) => productService.favorite(req.userId)),
  );

  /**
   * @openapi
   * /products/{type}:
   *   get:
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: type
   *         required: true
   *         schema:
   *           "$ref": "#/definitions/ProductType"
   *       - in: query
   *         name: limit
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
   *                   $ref: "#/definitions/Product"
   */

  router.get(
    apiPath(path, ProductApiRoutes.ID),
    wrap((req) => productService.getById(req.params.id)),
  );

  router.get(
    apiPath(path, ProductApiRoutes.ID + ProductApiRoutes.VIEWS),
    wrap((req) => productService.incrementViews(req.params.id, req)),
  );

  router.post(
    apiPath(path, ProductApiRoutes.FAVORITE),
    authMiddleware,
    wrap((req: Request) =>
      productService.addToFavorites({
        userId: req.userId,
        productId: req.body.productId,
      }),
    ),
  );

  router.delete(
    apiPath(path, ProductApiRoutes.FAVORITE),
    authMiddleware,
    wrap((req: Request) =>
      productService.deleteFromFavorites({
        userId: req.userId,
        productId: req.params.productId,
      }),
    ),
  );

  return router;
};
