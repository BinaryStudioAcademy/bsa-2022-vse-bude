/**
 * @openapi
 * definitions:
 *   Order:
 *     required:
 *       - id
 *       - buyer
 *       - buyerId
 *       - cost
 *       - product
 *       - productId
 *       - status
 *       - createdAt
 *       - updatedAt
 *     properties:
 *       id:
 *         type: string
 *         format: uuid
 *       buyer:
 *         properties:
 *           id:
 *             type: string
 *             format: uuid
 *           lastName:
 *             type: string
 *           firstName:
 *             type: string
 *           phone:
 *             type: string
 *           email:
 *             type: string
 *       buyerId:
 *         type: string
 *         format: uuid
 *       cost:
 *         type: number
 *         format: integer
 *       product:
 *         $ref: "#/definitions/Product"
 *       productId:
 *         type: string
 *         format: uuid
 *       status:
 *         $ref: "#/definitions/OrderStatus"
 *       createdAt:
 *         type: string
 *         format: date-time
 *       updatedAt:
 *         type: string
 *         format: date-time
 */

export {};
