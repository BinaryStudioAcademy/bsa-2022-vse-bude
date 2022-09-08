/**
 * @openapi
 * definitions:
 *   GetProfileFullUserData:
 *     allOf:
 *      - $ref: "#/definitions/User"
 *     properties:
 *       userAddress:
 *          $ref: "#/definitions/Address"
 *       socialMedia:
 *          type: array
 *          items:
 *            $ref: "#/definitions/SocialMedia"
 */

export {};
