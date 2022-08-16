import type { PrismaClient, User } from '@prisma/client';
import type { CreateUser } from '@types';

export class UserRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(): Promise<User[]> {
    return this._dbClient.user.findMany();
  }

  public create(signUpData: CreateUser) {
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

  public getById(id: string) {
    return this._dbClient.user.findFirst({
      where: {
        id,
      },
    });
  }

  public getByEmail(email: string) {
    return this._dbClient.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  public verifyPhone(userId: string) {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        phoneVerified: true,
      },
    });
  }

  public getByEmailOrPhone(email: string, phone: string) {
    return this._dbClient.user.findFirst({
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
