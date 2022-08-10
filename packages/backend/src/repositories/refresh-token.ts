import type { PrismaClient } from '@prisma/client';
import { type CreateRefreshTokenDto } from '../common/types/refresh-token/create.refresh-token.dto';

export class RefreshTokenRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  async create(tokenData: CreateRefreshTokenDto) {
    return await this._dbClient.refreshToken.create({
      data: {
        userId: tokenData.userId,
        token: tokenData.token,
        expiresAt: tokenData.expiresAt,
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
