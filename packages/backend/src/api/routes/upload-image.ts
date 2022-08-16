﻿import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { uploadImage } from '@middlewares';
import type { UploadFileRequest } from '@types';

export const initUploadImageRoutes = (
  { s3StorageService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.post(
    path,
    uploadImage,
    wrap((req: UploadFileRequest) => s3StorageService.uploadImage(req)),
  );

  return router;
};
