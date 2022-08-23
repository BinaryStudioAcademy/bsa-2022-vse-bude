import type { PrismaClient } from '@prisma/client';
import type { CreateRefreshToken } from '@types';

export class RefreshTokenRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  async create(tokenData: CreateRefreshToken) {
    return await this._dbClient.refreshToken.create({
      data: {
        userId: tokenData.userId,
        token: tokenData.token,
        expiresAt: tokenData.expiresAt,
      },
    });
  }

  async deleteByUserId(userId: string) {
    return await this._dbClient.refreshToken.deleteMany({
      where: {
        userId: userId,
      },
    });
  }

  async updateTokenById(tokenId: string, tokenValue: string, expiresAt: Date) {
    return await this._dbClient.refreshToken.update({
      where: {
        id: tokenId,
      },
      data: {
        token: tokenValue,
        expiresAt: expiresAt,
      },
    });
  }

  async getTokenByValue(tokenValue: string) {
    return await this._dbClient.refreshToken.findFirst({
      where: {
        token: tokenValue,
      },
    });
  }
}
