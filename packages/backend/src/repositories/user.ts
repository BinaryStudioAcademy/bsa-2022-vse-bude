import type { PrismaClient, User } from '@prisma/client';
import { Body, Get, Patch, Post, Query, Route } from 'tsoa';
import type { CreateUser } from './types/CreateUser';

@Route('user')
export class UserRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  @Get('getAll')
  public async getAll(): Promise<User[]> {
    return await this._dbClient.user.findMany();
  }

  @Post('create')
  public async create(@Body() signUpData: CreateUser) {
    return await this._dbClient.user.create({
      data: {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        phone: signUpData.phone,
        email: signUpData.email,
        passwordHash: signUpData.passwordHash,
      },
    });
  }

  @Get('getById')
  public async getById(@Query() id: string) {
    return await this._dbClient.user.findFirst({
      where: {
        id,
      },
    });
  }

  @Get('getByEmail')
  public async getByEmail(@Query() email: string) {
    return await this._dbClient.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  @Patch('verifyPhone')
  public async verifyPhone(@Query() userId: string) {
    return await this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        phoneVerified: true,
      },
    });
  }

  @Get('getByEmailOrPhone')
  public async getByEmailOrPhone(
    @Query() email: string,
    @Query() phone: string,
  ) {
    return await this._dbClient.user.findFirst({
      where: {
        OR: [
          {
            phone: phone,
          },
          {
            email: email,
          },
        ],
      },
    });
  }
}
