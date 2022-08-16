import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { RedisStorageService } from 'services/redis-storage';

export const initHealthRoutes = (path: ApiRoutes) => {
  const router = Router();
  let status = 200;

  const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

  try {
    prisma.user.findMany();
    new RedisStorageService();
  } catch (e) {
    status = 503;
  }

  return router.get(path, (req, res) => {
    res.send(`status: ${status}`);
  });
};
