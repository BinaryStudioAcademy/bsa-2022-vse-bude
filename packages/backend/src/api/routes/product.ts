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
import multer from 'multer';

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
    wrap((req: Request) => productService.getFavoriteProducts(req.userId)),
  );

  router.get(
    apiPath(path, ProductApiRoutes.FAVORITE_IDS),
    authMiddleware,
    wrap((req: Request) => productService.getFavoriteIds(req.userId)),
  );

  router.get(
    apiPath(path, ProductApiRoutes.AUCTION_PERMISSIONS),
    authMiddleware,
    wrap((req: Request) =>
      productService.getAuctionPermissions(
        req.userId,
        <string>req.query.productId,
      ),
    ),
  );

  router.post(
    apiPath(path, ProductApiRoutes.AUCTION_LEAVE),
    authMiddleware,
    wrap((req: Request) =>
      productService.leaveAuction(req.userId, <string>req.query.productId),
    ),
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
    wrap((req: Request) => productService.getById(req.params.id)),
  );

  router.put(
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
        productId: <string>req.query.productId,
      }),
    ),
  );

  router.post(
    apiPath(path),
    authMiddleware,
    multer().any(),
    wrap((req: Request) =>
      productService.createProduct({
        req,
        userId: req.userId,
        fieldsData: req.body,
      }),
    ),
  );

  /**
   * @openapi
   * /products/:
   *   post:
   *     summary: Uploads a file.
   *     consumes:
   *       - multipart/form-data
   *     parameters:
   *       - in: formData
   *         name: images
   *         type: file
   *         description: receive array of files
   *       - in: formData
   *         name: city
   *         type: string
   *       - in: formData
   *         required: true
   *         name: country
   *         type: string
   *       - in: formData
   *         name: status
   *         required: true
   *         type: string
   *       - in: formData
   *         name: description
   *         required: true
   *         type: string
   *       - in: formData
   *         name: title
   *         required: true
   *         type: string
   *       - in: formData
   *         name: type
   *         required: true
   *         type: string
   *       - in: formData
   *         name: price
   *         type: number
   *       - in: formData
   *         name: categoryId
   *         type: string
   *       - in: formData
   *         name: endDate
   *         type: string
   *       - in: formData
   *         name: recommendedPrice
   *         type: number
   *       - in: formData
   *         name: minimalBid
   *         type: number
   *     tags: [Product]
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
  router.put(
    apiPath(path, ProductApiRoutes.UPDATE),
    authMiddleware,
    multer().any(),
    wrap((req: Request) =>
      productService.updateProduct({
        req,
        productId: req.params.id,
        userId: req.userId,
        fieldsData: req.body,
      }),
    ),
  );

  /**
   * @openapi
   * /products/:id:
   *   put:
   *     tags: [Product]
   *     consumes:
   *       - multipart/form-data
   *     parameters:
   *       - in: formData
   *         name: images
   *         type: file
   *         description: receive array of files and url
   *       - in: formData
   *         name: city
   *         type: string
   *       - in: formData
   *         type: string
   *         name: country
   *       - in: formData
   *         name: status
   *         type: string
   *       - in: formData
   *         name: description
   *         type: string
   *       - in: formData
   *         name: title
   *         type: string
   *       - in: formData
   *         name: type
   *         type: string
   *       - in: formData
   *         name: price
   *         type: number
   *       - in: formData
   *         name: categoryId
   *         type: string
   *       - in: formData
   *         name: endDate
   *         type: string
   *       - in: formData
   *         name: recommendedPrice
   *         type: number
   *       - in: formData
   *         name: minimalBid
   *         type: number
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
  router.post(
    apiPath(path, ProductApiRoutes.BUY),
    authMiddleware,
    wrap((req: Request) =>
      productService.buy({
        userId: req.userId,
        productId: req.body.productId,
      }),
    ),
  );

  return router;
};
