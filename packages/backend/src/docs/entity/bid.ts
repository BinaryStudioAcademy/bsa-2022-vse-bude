/**
 * @openapi
 * definitions:
 *   Bid:
 *     properties:
 *       id:
 *         type: string
 *         format: uuid
 *       bidderId:
 *         type: string
 *         format: uuid
 *         description: User's id who created bid
 *       productId:
 *         type: string
 *         format: uuid
 *       price:
 *         type: number
 *         format: double
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       createdAt:
 *         type: string
 *         format: date-time
 *     type: object
 *     description: Bid entity
 */

export {};
