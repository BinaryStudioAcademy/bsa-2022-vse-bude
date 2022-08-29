/**
 * @openapi
 * /auth/refresh-token:
 *   post:
 *     tags: [Auth]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - tokenValue
 *           properties:
 *             tokenValue:
 *               type: string
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 $ref: "#/definitions/RefreshToken"
 */

export {};
