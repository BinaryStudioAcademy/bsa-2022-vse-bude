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
 *       cancelReason:
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
 *       country:
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
 *       views:
 *         type: number
 *         format: integer
 *     type: object
 *     description: Model Product
 *
 */

export {};
