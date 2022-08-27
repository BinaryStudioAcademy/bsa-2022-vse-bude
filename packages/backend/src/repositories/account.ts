import type { PrismaClient, Address, SocialMedia } from '@prisma/client';

export class UserAccountRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAddress({
    userId,
  }: {
    userId: string;
  }): Promise<Address> | Promise<null> {
    return this._dbClient.address.findUnique({
      where: {
        userId,
      },
    });
  }

  public getSocialMedia({
    userId,
  }: {
    userId: string;
  }): Promise<SocialMedia[]> | Promise<[]> {
    return this._dbClient.socialMedia.findMany({
      where: {
        ownedByUserId: userId,
      },
    });
  }
}
