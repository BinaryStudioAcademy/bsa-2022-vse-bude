import type { PrismaClient, User } from '@prisma/client';

export class UserRepository {
  private _bdClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._bdClient = prismaClient;
  }

  public getAll(): Promise<User[]> {
    return this._bdClient.user.findMany();
  }
}
