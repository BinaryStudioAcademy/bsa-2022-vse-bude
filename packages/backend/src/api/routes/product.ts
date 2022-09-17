import type { ApiRoutes, ProductQuery } from '@vse-bude/shared';
import type { Request } from 'express';
import { Router } from 'express';
import { wrap, apiPath } from '@helpers';
import type { Services } from '@services';
import { ProductApiRoutes } from '@vse-bude/shared';
import { authMiddleware } from '@middlewares';
import multer from 'multer';
import type { AllProductsResponse } from '@types';

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
   *       - in: query
   *         name: priceGt
   *         required: false
   *         type: number
   *         description: filters greater than the passed value
   *       - in: query
   *         name: priceLt
   *         required: false
   *         type: number
   *         description: filters less than the passed value
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                  items:
   *                      type: array
   *                      items:
   *                         $ref: "#/definitions/Product"
   *                  count:
   *                      type: integer
   *
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.get(
    apiPath(path),
    wrap<Empty, AllProductsResponse, Empty, ProductQuery>((req) =>
      productService.getAll(req.query),
    ),
  );

  /**
   * @openapi
   * /products/search:
   *   get:
   *     summary: Search by product title.
   *     description: |
   *       # Search by product title
   *       Returns products with title containing the search query.
   *       The search is **case insensitive**.
   *       **Fuzzy search** is used.
   *       Max **10** results are returned.
   *     tags: [Product]
   *     produces:
   *      - application/json
   *     parameters:
   *      - in: query
   *        name: q
   *        type: string
   *        required: true
   *        example: "car"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               minItems: 0
   *               maxItems: 10
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: string
   *                     format: uuid
   *                   title:
   *                     type: string
   *                     example: "Ride on car"
   */
  router.get(
    apiPath(path, ProductApiRoutes.SEARCH),
    wrap((req) => {
      const { query } = req;

      return productService.search({ q: query.q as string });
    }),
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
   * /products/similar:
   *   get:
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: productId
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Product"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.get(
    apiPath(path, ProductApiRoutes.SIMILAR),
    wrap((req: Request) =>
      productService.getSimilar(<string>req.query.productId),
    ),
  );

  /**
   * @openapi
   * /products/popular-lots:
   *   get:
   *     description: Get list of most popular products
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: limit
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Product"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.get(
    apiPath(path, ProductApiRoutes.POPULAR_LOTS),
    wrap((req: Request) =>
      productService.getMostPopularLots(<string>req.query.limit),
    ),
  );

  /**
   * @openapi
   * /products/popular-products:
   *   get:
   *     description: Get list of most popular products
   *     tags: [Product]
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: limit
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Product"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.get(
    apiPath(path, ProductApiRoutes.POPULAR_PRODUCTS),
    wrap((req: Request) =>
      productService.getMostPopularProducts(<string>req.query.limit),
    ),
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
   *     summary: Create post.
   *     consumes:
   *       - multipart/form-data
   *     security:
   *       - Bearer: []
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
   *         name: condition
   *         required: true
   *         description: oneOf [USED, NEW]
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
   * /products/update/:id:
   *   put:
   *     tags: [Product]
   *     summary: Edit post.
   *     security:
   *       - Bearer: []
   *     consumes:
   *       - multipart/form-data
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         type: string
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
   *         name: condition
   *         description: oneOf [USED, NEW]
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
   * /products/edit/:id:
   *   get:
   *     tags: [Product]
   *     summary: Get edit post info.
   *     security:
   *       - Bearer: []
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
    apiPath(path, ProductApiRoutes.EDIT_ID),
    authMiddleware,
    wrap((req: Request) =>
      productService.getEditProductById({
        userId: req.userId,
        productId: req.params.id,
      }),
    ),
  );
  /**
   * @openapi
   * /products/buy/:id:
   *   post:
   *     tags: [Product]
   *     security:
   *       - Bearer: []
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
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                   example: true
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, ProductApiRoutes.BUY),
    authMiddleware,
    wrap((req: Request) =>
      productService.buy({
        userId: req.userId,
        productId: req.params.id,
      }),
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

  return router;
};
