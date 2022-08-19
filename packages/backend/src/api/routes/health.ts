import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { initServices } from '@services';
import { initRepositories } from '@repositories';

function initHealthRoutes(path: ApiRoutes) {
  const router = Router();
  let status: number;

  const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

  const check = new Promise((resolve, reject) => {
    try {
      prisma.$queryRaw`SELECT 1`;
      initServices(initRepositories(prisma)).redisStorageService.client.ping;
      resolve(200);
    } catch (err) {
      reject(503);
    }
  });

  const result = (result) => {
    status = result;
    console.log(status);
  };

  Promise.resolve(check).then(result);

  return router.get(path, (_req, res) => {
    res.send(`status: ${status}`);
  });
}

export { initHealthRoutes };
