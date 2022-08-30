import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes } from '@vse-bude/shared';
import { ProfileApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { apiPath } from '@helpers';
import { authMiddleware } from '@middlewares';
import { profileValidation } from '@validation';

export const initProfileRoutes = (
  { profileService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path, ProfileApiRoutes.GET_USER_BY_ID),
    wrap(async (req: Request) => {
      const { userId } = req.params;
      const { t } = req;
      const user = profileService.getUser({ userId, t });
      const socialMedia = profileService.getSocialMedia({ userId });

      return {
        ...user,
        socialMedia,
      };
    }),
  );

  router.get(
    apiPath(path, ProfileApiRoutes.GET_FULL_USER_DATA),
    authMiddleware,
    wrap(async (req: Request) => {
      const { userId, t } = req;
      const fullUserProfile = profileService.getFullUserData({ userId, t });

      return {
        ...fullUserProfile,
      };
    }),
  );

  router.put(
    apiPath(path, ProfileApiRoutes.UPDATE_DATA),
    authMiddleware,
    wrap(async (req: Request) => {
      const { userId, t } = req;
      profileValidation({ req });

      const {
        firstName,
        lastName,
        email,
        phone,
        socialMedia,
        password,
        newPassword,
      } = req.body;

      const user = await profileService.updateUserProfile({
        userId,
        data: { firstName, lastName, email, phone },
      });

      const links = await profileService.updateUserSocialMedia({
        userId,
        socialMedia,
      });

      if (password || newPassword) {
        await profileService.changePassword({
          userId,
          t,
          data: { newPassword, password },
        });
      }

      return { ...user, socialMedia: links };
    }),
  );

  return router;
};
