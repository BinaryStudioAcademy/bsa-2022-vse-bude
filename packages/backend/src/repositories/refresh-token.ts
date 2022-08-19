import type { PrismaClient } from '@prisma/client';
import { type CreateRefreshToken } from '@types';
import { Body, Delete, Get, Patch, Post, Query, Route } from 'tsoa';

@Route('refreshToken')
export class RefreshTokenRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  @Post('create')
  async create(@Body() tokenData: CreateRefreshToken) {
    return await this._dbClient.refreshToken.create({
      data: {
        userId: tokenData.userId,
        token: tokenData.token,
        expiresAt: tokenData.expiresAt,
      },
    });
  }

  @Delete('deleteByUserId')
  deleteByUserId(@Query() userId: string) {
    return this._dbClient.refreshToken.deleteMany({
      where: {
        userId: userId,
      },
    });
  }

  @Patch('updateTokenById')
  updateTokenById(
    @Body() tokenId: string,
    @Body() tokenValue: string,
    @Body() expiresAt: Date,
  ) {
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

  @Get('getTokenByValue')
  getTokenByValue(@Query() tokenValue: string) {
    return this._dbClient.refreshToken.findFirst({
      where: {
        token: tokenValue,
      },
    });
  }
}
