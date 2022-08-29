import type { PrismaClient } from '@prisma/client';
import type {
  GetUserAddressDto,
  GetUserProfileDto,
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
    const { avatar, firstName, lastName } = data;

    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar,
        firstName,
        lastName,
      },
      select: {
        id: true,
        avatar: true,
        firstName: true,
        lastName: true,
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
}
