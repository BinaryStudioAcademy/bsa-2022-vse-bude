import type { PrismaClient } from '@prisma/client';

export class HealthRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  async select(): Promise<unknown> {
    return await this._dbClient.$queryRaw`SELECT 1`;
  }
}
