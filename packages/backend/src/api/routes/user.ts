import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';

export const initUserRoutes = (
  { userService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * definitions:
   *   Role:
   *     type: string
   *     enum:
   *     - USER
   *     - ADMIN
   */

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
   *       passwordHash:
   *         type: string
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
   *     required:
   *     - updatedAt
   *     - emailVerified
   *     - phoneVerified
   *     - passwordHash
   *     - createdAt
   *     - role
   *     - avatar
   *     - lastName
   *     - firstName
   *     - phone
   *     - email
   *     - id
   *     type: object
   *     description: Model User
   */

  /**
   * @openapi
   * /users:
   *   get:
   *     tags: [User]
   *     produces:
   *       - application/json
   *     responses:
   *       403:
   *         description: User is not authorized to perform the action.
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 contribution:
   *                   $ref: "#/definitions/User"
   */

  router.get(
    apiPath(path),
    wrap(() => userService.getAll()),
  );

  return router;
};
