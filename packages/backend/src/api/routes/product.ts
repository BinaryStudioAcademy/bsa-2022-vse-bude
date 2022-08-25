import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';
import type { Product } from '@prisma/client';
import type { ProductQuery } from '@types';
import { ProductApiRoutes } from '@vse-bude/shared';

export const initProductRoutes = (
  { productService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * definitions:
   *   ProductStatus:
   *     type: string
   *     enum:
   *     - CREATED
   *     - ACTIVE
   *     - CANCELLED
   *     - FINISHED
   *     - CLOSED
   *     - DRAFT
   */

  /**
   * @openapi
   * definitions:
   *   ProductType:
   *     type: string
   *     enum:
   *     - AUCTION
   *     - SELLING
   */

  /**
   * @openapi
   * definitions:
   *   Prisma.Decimal:
   *     type: string
   */

  /**
   * @openapi
   * definitions:
   *   Product:
   *     properties:
   *       updatedAt:
   *         type: string
   *         format: date-time
   *       createdAt:
   *         type: string
   *         format: date-time
   *       winnerId:
   *         type: string
   *         nullable: true
   *       categoryId:
   *         type: string
   *         nullable: true
   *       authorId:
   *         type: string
   *       cancellReason:
   *         type: string
   *         nullable: true
   *       endDate:
   *         type: string
   *         format: date-time
   *         nullable: true
   *       status:
   *         "$ref": "#/definitions/ProductStatus"
   *       type:
   *         "$ref": "#/definitions/ProductType"
   *       city:
   *         type: string
   *         nullable: true
   *       imageLinks:
   *         items:
   *           type: string
   *         type: array
   *       minimalBid:
   *         allOf:
   *         - "$ref": "#/definitions/Prisma.Decimal"
   *         nullable: true
   *       recommendedPrice:
   *         allOf:
   *         - "$ref": "#/definitions/Prisma.Decimal"
   *         nullable: true
   *       price:
   *         "$ref": "#/definitions/Prisma.Decimal"
   *       description:
   *         type: string
   *       title:
   *         type: string
   *       id:
   *         type: string
   *     required:
   *     - updatedAt
   *     - createdAt
   *     - winnerId
   *     - categoryId
   *     - authorId
   *     - cancellReason
   *     - endDate
   *     - status
   *     - type
   *     - city
   *     - imageLinks
   *     - minimalBid
   *     - recommendedPrice
   *     - price
   *     - description
   *     - title
   *     - id
   *     type: object
   *     description: Model Product
   *
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
    wrap((req) => productService.incrementViews(req.params.id)),
  );

  return router;
};
