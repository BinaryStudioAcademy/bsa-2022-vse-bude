import type { PrismaClient } from '@prisma/client';
import type {
  GetUserAddressDto,
  GetUserProfileDto,
  GetUserPersonalDataDto,
  UserSocialMediaDto,
  UpdateUserProfileDto,
} from '@types';

export class UserProfileRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getUser({ userId }: { userId: string }): Promise<GetUserProfileDto> {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        avatar: true,
        firstName: true,
        lastName: true,
      },
    });
  }

  public getFullUserData({
    userId,
  }: {
    userId: string;
  }): Promise<GetUserPersonalDataDto> {
    return this._dbClient.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        avatar: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
      },
    });
  }

  public getAddress({
    userId,
  }: {
    userId: string;
  }): Promise<GetUserAddressDto> | Promise<null> {
    return this._dbClient.address.findUnique({
      where: {
        userId,
      },
      select: {
        country: true,
        region: true,
        city: true,
        address: true,
        zip: true,
        novaPoshtaRef: true,
      },
    });
  }

  public getSocialMedia({
    userId,
  }: {
    userId: string;
  }): Promise<UserSocialMediaDto[]> | Promise<[]> {
    return this._dbClient.socialMedia.findMany({
      where: {
        ownedByUserId: userId,
      },
      select: {
        id: true,
        socialMedia: true,
        link: true,
      },
    });
  }

  public updateUserProfile({
    userId,
    data,
  }: {
    userId: string;
    data: UpdateUserProfileDto;
  }): Promise<GetUserProfileDto> {
    const { firstName, lastName, email, phone } = data;

    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName,
        lastName,
        email,
        phone,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
      },
    });
  }

  public async updateUserSocialMedia({
    userId,
    socialMedia,
  }: {
    userId: string;
    socialMedia: UserSocialMediaDto[];
  }): Promise<UserSocialMediaDto[]> {
    return await this._dbClient.$transaction(
      socialMedia.map((userLink) => {
        const { id, link, socialMedia } = userLink;

        return this._dbClient.socialMedia.upsert({
          where: { id },
          update: {
            link,
          },
          create: {
            socialMedia,
            link,
            ownedByUserId: userId,
          },
          select: {
            id: true,
            socialMedia: true,
            link: true,
          },
        });
      }),
    );
  }

  public getPasswordHash({ userId }: { userId: string }) {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        passwordHash: true,
      },
    });
  }

  public changePassword({
    userId,
    passwordHash,
  }: {
    userId: string;
    passwordHash: string;
  }) {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        passwordHash,
      },
    });
  }
}
