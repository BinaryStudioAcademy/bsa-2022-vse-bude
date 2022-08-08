import type { PrismaClient, User } from '@prisma/client';

export class UserRepository {
  private _bdClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._bdClient = prismaClient;
  }

  public getAll(): Promise<User[]> {
    return this._bdClient.user.findMany();
  }

  public async getByEmail(email: string) {
    return await this._bdClient.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  public async getByPhone(phone: string) {
    return await this._bdClient.user.findFirst({
      where: {
        phone: phone,
      },
    });
  }
}
