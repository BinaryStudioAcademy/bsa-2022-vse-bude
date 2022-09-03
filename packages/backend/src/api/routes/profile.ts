import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes } from '@vse-bude/shared';
import { ProfileApiRoutes, AccountApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { apiPath } from '@helpers';
import { authMiddleware, uploadImage } from '@middlewares';
import { profileValidation } from '@validation';
import type { UploadFileRequest } from '@types';

export const initProfileRoutes = (
  { profileService, myListService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path, ProfileApiRoutes.GET_FULL_USER_DATA),
    authMiddleware,
    wrap(async (req: Request) => {
      const { userId, t } = req;
      const fullUserProfile = await profileService.getFullUserData({
        userId,
        t,
      });

      return {
        ...fullUserProfile,
      };
    }),
  );

  router.get(
    apiPath(path, AccountApiRoutes.MY_LIST),
    //authMiddleware,
    wrap(async (req: Request) => {
      const { t } = req;
      const userId = '807f73fb-31b8-4e66-9f74-babc8ee95d94';
      await profileService.getUser({
        userId,
        t,
      });
      const purchased = await myListService.getPurchasedItems({ userId });
      const sold = await myListService.getPurchasedItems({ userId });
      const drafted = await myListService.getDraftedItems({ userId });
      const posted = await myListService.getPostedItems({ userId });

      return {
        purchased,
        sold,
        posted,
        drafted,
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

      await profileService.updateUserSocialMedia({
        userId,
        socialMedia,
      });

      const links = await profileService.getSocialMedia({ userId });

      if (newPassword) {
        await profileService.changePassword({
          userId,
          t,
          data: { newPassword, password },
        });
      }

      return { ...user, socialMedia: links };
    }),
  );

  router.put(
    apiPath(path, ProfileApiRoutes.UPDATE_AVATAR),
    authMiddleware,
    uploadImage,
    wrap(async (req: UploadFileRequest) => {
      const { userId } = req;
      const avatar = await profileService.updateAvatar({ userId, req });

      return avatar;
    }),
  );

  router.get(
    apiPath(path, ProfileApiRoutes.GET_USER_BY_ID),
    wrap(async (req: Request) => {
      const { userId } = req.params;
      const { t } = req;
      const user = await profileService.getUser({ userId, t });
      const socialMedia = await profileService.getSocialMedia({ userId });

      return {
        ...user,
        socialMedia,
      };
    }),
  );

  return router;
};
