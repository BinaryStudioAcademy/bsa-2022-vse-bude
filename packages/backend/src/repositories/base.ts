import type { PrismaClient } from '@prisma/client';

export class BaseRepository {
  protected _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }
}
