import type { PrismaClient } from '@prisma/client';

export class UserRepository {
  private _bdClient: PrismaClient;

  constructor(bdClient: PrismaClient) {
    this._bdClient = bdClient;
  }

  public getAll() {
    return this._bdClient.user.findMany();
  }
}
