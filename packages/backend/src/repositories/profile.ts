import type {
  Prisma,
  PrismaClient,
  PrismaPromise,
  User,
  SocialMedia,
  SocialMediaType,
} from '@prisma/client';
import type { AddressDto } from '@types';
import type { UpdateUserProfileDto, UserAddressDto } from '@vse-bude/shared';

export class UserProfileRepository {
  private _dbClient: PrismaClient;

  private _updateSocialMediaLinks({
    id,
    link,
  }: {
    id: string;
    link: string;
  }): Prisma.Prisma__SocialMediaClient<{
    id: string;
    link: string;
    socialMedia: SocialMediaType;
  }> {
    return this._dbClient.socialMedia.update({
      where: {
        id,
      },
      data: {
        link,
      },
      select: {
        id: true,
        socialMedia: true,
        link: true,
      },
    });
  }

  private _createSocialMediaLinks({
    link,
    socialMedia,
    userId,
  }: {
    link: string;
    socialMedia: SocialMediaType;
    userId: string;
  }): Prisma.Prisma__SocialMediaClient<{
    id: string;
    link: string;
    socialMedia: SocialMediaType;
  }> {
    return this._dbClient.socialMedia.create({
      data: {
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
  }

  private _deleteSocialMediaLinks({
    id,
  }: {
    id: string;
  }): Prisma.Prisma__SocialMediaClient<SocialMedia> {
    return this._dbClient.socialMedia.delete({
      where: {
        id,
      },
    });
  }

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getUser({ userId }: { userId: string }): Promise<User> {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  public getFullUserData({ userId }: { userId: string }): Promise<User> {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  public getAddress({
    userId,
  }: {
    userId: string;
  }): Prisma.Prisma__AddressClient<{
    country: string;
    region: string;
    city: string;
    zip: string;
    deliveryData: string;
  }> {
    return this._dbClient.address.findUnique({
      where: {
        userId,
      },
      select: {
        country: true,
        region: true,
        city: true,
        zip: true,
        deliveryData: true,
      },
    });
  }

  public getSocialMedia({ userId }: { userId: string }): PrismaPromise<
    {
      id: string;
      link: string;
      socialMedia: SocialMediaType;
    }[]
  > {
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
  }): Promise<User> {
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
    });
  }

  public updateAddress({
    userId,
    data,
  }: {
    userId: string;
    data: UserAddressDto;
  }): Promise<AddressDto> {
    const { country, region, city, zip, deliveryData } = data;

    return this._dbClient.address.upsert({
      where: {
        userId,
      },
      update: {
        country,
        region,
        city,
        zip,
        deliveryData,
      },
      create: {
        country,
        region,
        city,
        zip,
        deliveryData,
      },
      select: {
        country: true,
        region: true,
        city: true,
        zip: true,
        deliveryData: true,
      },
    });
  }

  public async updateUserSocialMedia({
    userId,
    socialMedia,
  }: {
    userId: string;
    socialMedia: SocialMedia[];
  }): Promise<{ id: string; link: string; socialMedia: SocialMediaType }[]> {
    return this._dbClient.$transaction(
      socialMedia.map((userLink) => {
        const { id, link, socialMedia } = userLink;

        if (id && link) {
          return this._updateSocialMediaLinks({ id, link });
        } else if (link) {
          return this._createSocialMediaLinks({ link, socialMedia, userId });
        } else if (id && !link) {
          return this._deleteSocialMediaLinks({ id });
        }
      }),
    );
  }

  public async updateAvatar({
    userId,
    avatar,
  }: {
    userId: string;
    avatar: string | null;
  }): Promise<{ avatar: string }> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar,
      },
      select: {
        avatar: true,
      },
    });
  }

  public cancelPhoneVerified({
    userId,
  }: {
    userId: string;
  }): Promise<{ phoneVerified: boolean }> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        phoneVerified: false,
      },
      select: {
        phoneVerified: true,
      },
    });
  }

  public getPasswordHash({
    userId,
  }: {
    userId: string;
  }): Promise<{ passwordHash: string }> {
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
  }): Promise<User> {
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
