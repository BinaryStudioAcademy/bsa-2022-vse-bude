import type {
  Prisma,
  PrismaClient,
  PrismaPromise,
  RefreshToken,
} from '@prisma/client';
import type { CreateRefreshToken } from '@types';

export class RefreshTokenRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  create(tokenData: CreateRefreshToken): Promise<RefreshToken> {
    return this._dbClient.refreshToken.create({
      data: {
        userId: tokenData.userId,
        token: tokenData.token,
        expiresAt: tokenData.expiresAt,
      },
    });
  }

  deleteByUserId(userId: string): PrismaPromise<Prisma.BatchPayload> {
    return this._dbClient.refreshToken.deleteMany({
      where: {
        userId: userId,
      },
    });
  }

  updateTokenById(
    tokenId: string,
    tokenValue: string,
    expiresAt: Date,
  ): Promise<RefreshToken> {
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

  getTokenByValue(tokenValue: string): Promise<RefreshToken> {
    return this._dbClient.refreshToken.findFirst({
      where: {
        token: tokenValue,
      },
    });
  }
}
