import type { PrismaClient } from '@prisma/client';
import { Body, Delete, Get, Patch, Post, Query, Route, Tags } from 'tsoa';
import type { CreateRefreshToken } from './types/CreateRefreshToken';

@Route('refreshToken')
@Tags('Refresh Token')
export class RefreshTokenRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  @Post('create')
  async create(
    @Body()
    tokenData: CreateRefreshToken,
  ) {
    return await this._dbClient.refreshToken.create({
      data: {
        userId: tokenData.userId,
        token: tokenData.token,
        expiresAt: tokenData.expiresAt,
      },
    });
  }

  @Delete('deleteByUserId')
  async deleteByUserId(
    @Query()
    userId: string,
  ) {
    return await this._dbClient.refreshToken.deleteMany({
      where: {
        userId: userId,
      },
    });
  }

  @Patch('updateTokenById')
  async updateTokenById(
    @Query()
    tokenId: string,
    @Query()
    tokenValue: string,
    @Query()
    expiresAt: Date,
  ) {
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

  @Get('getTokenByValue')
  async getTokenByValue(
    @Query()
    tokenValue: string,
  ) {
    return await this._dbClient.refreshToken.findFirst({
      where: {
        token: tokenValue,
      },
    });
  }
}
