import type {
  VerifyPhoneDto,
  VerifyEmailDto,
  ApiRoutes,
} from '@vse-bude/shared';
import { VerificationTypes, VerifyApiRoutes } from '@vse-bude/shared';
import { type Request, Router } from 'express';
import { apiPath, wrap } from '@helpers';
import type { Services } from '@services';
import { authMiddleware } from '@middlewares';

export const initVerifyRoutes = (
  { verifyService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /verify/phone-verify:
   *   post:
   *     tags: [Verify]
   *     security:
   *      - Bearer: []
   *     description: Verifies user's phone using code -> phoneVerified = true
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/VerifyPhoneBody"
   *     responses:
   *       204:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, VerifyApiRoutes.VERIFY_PHONE),
    authMiddleware,
    wrap((req: Request) => {
      const dto: VerifyPhoneDto = {
        userId: req.userId,
        code: req.body.code,
        type: VerificationTypes.PHONE,
      };

      return verifyService.verifyPhone(dto);
    }),
  );

  /**
   * @openapi
   * /verify/phone/resend-code:
   *   post:
   *     tags: [Verify]
   *     security:
   *      - Bearer: []
   *     description: Resends phone verification code | Sends SMS to user's phone number
   *     produces:
   *       - application/json
   *     responses:
   *       204:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, VerifyApiRoutes.PHONE_RESEND_CODE),
    authMiddleware,
    wrap((req: Request) =>
      verifyService.resendPhoneCode(req.userId, VerificationTypes.PHONE),
    ),
  );

  /**
   * @openapi
   * /verify/email-verify:
   *   post:
   *     tags: [Verify]
   *     security:
   *      - Bearer: []
   *     description: Verifies user's email using code -> emailVerified = true
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/VerifyEmailBody"
   *     responses:
   *       204:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, VerifyApiRoutes.VERIFY_EMAIL),
    authMiddleware,
    wrap((req: Request) => {
      const dto: VerifyEmailDto = {
        userId: req.userId,
        code: req.body.code,
        type: VerificationTypes.EMAIL,
      };

      return verifyService.verifyEmail(dto);
    }),
  );

  /**
   * @openapi
   * /verify/email/resend-code:
   *   post:
   *     tags: [Verify]
   *     security:
   *      - Bearer: []
   *     description: Resends email verification code | Sends Email to user's email
   *     produces:
   *       - application/json
   *     responses:
   *       204:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, VerifyApiRoutes.EMAIL_RESEND_CODE),
    authMiddleware,
    wrap((req: Request) =>
      verifyService.resendEmailCode(req.userId, VerificationTypes.EMAIL),
    ),
  );

  return router;
};
