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
   *     parameters:
   *       - in: query
   *         name: limit
   *         required: false
   *         type: number
   *         format: integer
   *       - in: query
   *         name: from
   *         required: false
   *         type: number
   *         format: integer
   *       - in: query
   *         name: type
   *         required: false
   *         schema:
   *            $ref: "#/definitions/ProductType"
   *       - in: query
   *         name: categoryId
   *         required: false
   *         type: string
   *         format: uuid
   *       - in: query
   *         name: sortBy
   *         required: false
   *         type: string
   *       - in: query
   *         name: order
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/GetAllProductsResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.get(
    apiPath(path),
    wrap<Empty, Product[], Empty, ProductQuery>((req) =>
      productService.getAll(req.query),
    ),
  );

  /**
   * @openapi
   * /products/favorite:
   *   get:
   *     description: Get list of favorite products
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *      - in: query
   *        name: limit
   *        type: number
   *        format: integer
   *        required: false
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/GetFavoriteProductsResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.get(
    apiPath(path, ProductApiRoutes.FAVORITE),
    authMiddleware,
    wrap((req: Request) => productService.getFavoriteProducts(req.userId)),
  );

  /**
   * @openapi
   * /products/favorite-ids:
   *   get:
   *     description: Get list of favorite product ids
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/GetFavoriteProductsIdsResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.get(
    apiPath(path, ProductApiRoutes.FAVORITE_IDS),
    authMiddleware,
    wrap((req: Request) => productService.getFavoriteIds(req.userId)),
  );

  /**
   * @openapi
   * /products/auction/permissions:
   *   get:
   *     description: Get permissions for certain product auction
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: productId
   *         type: string
   *         format: uuid
   *         required: true
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/GetAuctionPermissionsResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
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

  /**
   * @openapi
   * /products/auction/leave:
   *   post:
   *     description: User leaves from the auction
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: productId
   *         type: string
   *         format: uuid
   *         required: true
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/LeaveAuctionResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.post(
    apiPath(path, ProductApiRoutes.AUCTION_LEAVE),
    authMiddleware,
    wrap((req: Request) =>
      productService.leaveAuction(req.userId, <string>req.query.productId),
    ),
  );

  /**
   * @openapi
   * /products/:id:
   *   get:
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/GetProductByIdResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.get(
    apiPath(path, ProductApiRoutes.ID),
    wrap((req: Request) => productService.getById(req.params.id)),
  );

  router.put(
    apiPath(path, ProductApiRoutes.ID + ProductApiRoutes.VIEWS),
    wrap((req) => productService.incrementViews(req.params.id, req)),
  );

  /**
   * @openapi
   * /products/favorite:
   *   post:
   *     description: Add product to favorites list
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: productId
   *         type: string
   *         format: uuid
   *         required: true
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/AddProductToFavorites"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
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

  /**
   * @openapi
   * /products/favorite:
   *   delete:
   *     description: Delete product from favorites list
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: productId
   *         type: string
   *         format: uuid
   *         required: true
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/DeleteProductToFavorites"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
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

  /**
   * @openapi
   * /products:
   *   post:
   *     description: Create product
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: productId
   *         type: string
   *         format: uuid
   *         required: true
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/CreateProductBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/DeleteProductToFavorites"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
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
   *         required: true
   *         type: string
   *       - in: formData
   *         name: categoryId
   *         type: string
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
   *         type: string
   *       - in: formData
   *         name: categoryId
   *         type: string
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

  router.get(
    apiPath(path, ProductApiRoutes.SIMILAR),
    wrap((req: Request) =>
      productService.getSimilar(req.params.city, req.params.categoryId),
    ),
  );

  return router;
};
