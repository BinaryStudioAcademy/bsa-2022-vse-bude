/**
 * @openapi
 * definitions:
 *   User:
 *     properties:
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       emailVerified:
 *         type: boolean
 *       phoneVerified:
 *         type: boolean
 *       createdAt:
 *         type: string
 *         format: date-time
 *       role:
 *         "$ref": "#/definitions/Role"
 *       avatar:
 *         type: string
 *         nullable: true
 *       lastName:
 *         type: string
 *       firstName:
 *         type: string
 *       phone:
 *         type: string
 *       email:
 *         type: string
 *       id:
 *         type: string
 *     type: object
 *     description: Model User
 */

export {};
