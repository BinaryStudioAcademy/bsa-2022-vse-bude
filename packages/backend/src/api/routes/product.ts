import type { ApiRoutes } from '@vse-bude/shared';
import { ProductApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';
import type { ProductType } from '@prisma/client';

type RequestParams = {
  type: ProductType;
};

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
   *       recomendedPrice:
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
   *     - recomendedPrice
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
    wrap(() => productService.getAll()),
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
    apiPath(path, ProductApiRoutes.$TYPE),
    wrap<RequestParams>((req) =>
      productService.getByType(req.params.type, req.query),
    ),
  );

  return router;
};
