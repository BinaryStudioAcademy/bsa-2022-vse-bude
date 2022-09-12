/**
 * @openapi
 * definitions:
 *   Category:
 *     required:
 *       - id
 *       - title
 *       - image
 *       - createdAt
 *       - updatedAt
 *     properties:
 *       id:
 *         type: string
 *       title:
 *         type: string
 *       createdAt:
 *         type: string
 *         format: date-time
 *       image:
 *         type: string
 *         nullable: true
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       productsCount:
 *         type: number
 *         format: integer
 */

export {};
