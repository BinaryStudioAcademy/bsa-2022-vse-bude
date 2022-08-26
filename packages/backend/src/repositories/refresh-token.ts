import type { PrismaClient } from '@prisma/client';
import type { CreateRefreshToken } from '@types';

export class RefreshTokenRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  create(tokenData: CreateRefreshToken) {
    return this._dbClient.refreshToken.create({
      data: {
        userId: tokenData.userId,
        token: tokenData.token,
        expiresAt: tokenData.expiresAt,
      },
    });
  }

  deleteByUserId(userId: string) {
    return this._dbClient.refreshToken.deleteMany({
      where: {
        userId: userId,
      },
    });
  }

  updateTokenById(tokenId: string, tokenValue: string, expiresAt: Date) {
    return this._dbClient.refreshToken.update({
      where: {
        id: tokenId,
      },
      data: {
        token: tokenValue,
        expiresAt: expiresAt,
      },
    });
  }

  getTokenByValue(tokenValue: string) {
    return this._dbClient.refreshToken.findFirst({
      where: {
        token: tokenValue,
      },
    });
  }
}
