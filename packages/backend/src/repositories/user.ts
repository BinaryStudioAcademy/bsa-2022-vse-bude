import type { PrismaClient, User } from '@prisma/client';
import type { CreateUser, GetUserVerifiedDto } from '@types';

export class UserRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(): Promise<User[]> {
    return this._dbClient.user.findMany();
  }

  public create(signUpData: CreateUser): Promise<User> {
    return this._dbClient.user.create({
      data: {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        phone: signUpData.phone,
        email: signUpData.email,
        passwordHash: signUpData.passwordHash,
      },
    });
  }

  public getById(id: string): Promise<User> {
    return this._dbClient.user.findFirst({
      where: {
        id,
      },
    });
  }

  public getByEmail(email: string): Promise<User> {
    return this._dbClient.user.findFirst({
      where: {
        email: { mode: 'insensitive', equals: email },
      },
    });
  }

  public verifyPhone(userId: string): Promise<User> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        phoneVerified: true,
      },
    });
  }

  public updatePassword(email: string, passwordValue: string): Promise<User> {
    return this._dbClient.user.update({
      where: {
        email: email,
      },
      data: {
        passwordHash: passwordValue,
      },
    });
  }

  public verifyEmail(userId: string): Promise<User> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        emailVerified: true,
      },
    });
  }

  public getByPhone({ phone }: { phone: string }): Promise<User> {
    return this._dbClient.user.findFirst({
      where: {
        phone: phone,
      },
    });
  }

  public getNewByEmail(email: string): Promise<User> {
    return this._dbClient.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  public getVerified({
    userId,
  }: {
    userId: string;
  }): Promise<GetUserVerifiedDto> {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        emailVerified: true,
        phoneVerified: true,
      },
    });
  }
}
