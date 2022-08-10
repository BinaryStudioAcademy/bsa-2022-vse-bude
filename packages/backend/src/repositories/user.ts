import type { PrismaClient, User } from '@prisma/client';
import type { CreateUserDto } from '../common/types/user/create.user.dto';

export class UserRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(): Promise<User[]> {
    return this._dbClient.user.findMany();
  }

  public create(signUpData: CreateUserDto) {
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

  public async getByEmail(email: string) {
    return await this._dbClient.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  public async getByEmailOrPhone(email: string, phone: string) {
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
