import type { PrismaClient } from '@prisma/client';

export class HealthRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getClient(){
    return this._dbClient;
  }

  public select(){
    return this._dbClient.$queryRaw`SELECT 1`;
  }
}
