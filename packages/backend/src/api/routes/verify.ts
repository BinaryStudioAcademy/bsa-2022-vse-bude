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
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: userId
   *         in: query
   *         required: true
   *         schema:
   *           type: string
   *       - name: code
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           required:
   *             - code
   *           properties:
   *             code:
   *               type: string
   *     responses:
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
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: userId
   *         in: query
   *         required: true
   *         schema:
   *           type: string
   *     responses:
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

  router.post(
    apiPath(path, VerifyApiRoutes.PHONE_RESEND_CODE),
    authMiddleware,
    wrap((req: Request) =>
      verifyService.resendPhoneCode(req.userId, VerificationTypes.PHONE),
    ),
  );

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

  router.post(
    apiPath(path, VerifyApiRoutes.EMAIL_RESEND_CODE),
    authMiddleware,
    wrap((req: Request) =>
      verifyService.resendEmailCode(req.userId, VerificationTypes.EMAIL),
    ),
  );

  return router;
};
