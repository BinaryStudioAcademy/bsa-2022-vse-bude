import type { PrismaClient, User } from '@prisma/client';

export class UserRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(): Promise<User[]> {
    return this._dbClient.user.findMany();
  }
}
