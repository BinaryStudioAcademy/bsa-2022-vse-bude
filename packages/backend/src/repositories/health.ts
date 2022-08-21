import type { PrismaClient } from '@prisma/client';

export class HealthRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  async getClient() {
    return await this._dbClient;
  }

  async select() {
    return await this._dbClient.$queryRaw`SELECT 1`;
  }
}
