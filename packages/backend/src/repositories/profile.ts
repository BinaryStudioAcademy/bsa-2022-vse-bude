import type { PrismaClient } from '@prisma/client';
import type {
  SocialMedia,
  SocialMediaType,
  UpdateUserProfileDto,
  UserAddressDto,
} from '@vse-bude/shared';

export class UserProfileRepository {
  private _dbClient: PrismaClient;

  private _isSocialNetTypeExists({
    userId,
    socialMedia,
  }: {
    userId: string;
    socialMedia: SocialMediaType;
  }) {
    return this._dbClient.socialMedia.findFirst({
      where: {
        ownedByUserId: userId,
        socialMedia,
      },
      select: {
        socialMedia: true,
      },
    });
  }

  private _updateSocialMediaLinks({ id, link }: { id: string; link: string }) {
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
  }) {
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

  private _deleteSocialMediaLinks({ id }: { id: string }) {
    return this._dbClient.socialMedia.delete({
      where: {
        id,
      },
    });
  }

  private async _updatePhoneVerifiedStatus({
    userId,
    phone,
  }: {
    userId: string;
    phone: string;
  }) {
    const dbPhone = await this._dbClient.user.findUnique({
      where: { id: userId },
      select: { phone: true },
    });
    if (dbPhone.phone !== phone) {
      await this.cancelPhoneVerified({ userId });
    }
  }

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getUser({ userId }: { userId: string }) {
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

  public getFullUserData({ userId }: { userId: string }) {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        avatar: true,
        firstName: true,
        lastName: true,
        phone: true,
        email: true,
        emailVerified: true,
        phoneVerified: true,
      },
    });
  }

  public getAddress({ userId }: { userId: string }) {
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

  public getSocialMedia({ userId }: { userId: string }) {
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
  }) {
    const { firstName, lastName, email, phone } = data;
    this._updatePhoneVerifiedStatus({ userId, phone });

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
        avatar: true,
        firstName: true,
        lastName: true,
        phone: true,
        email: true,
        emailVerified: true,
        phoneVerified: true,
      },
    });
  }

  public updateAddress({
    userId,
    data,
  }: {
    userId: string;
    data: UserAddressDto;
  }) {
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
  }) {
    return await this._dbClient.$transaction(async () =>
      socialMedia.map(async (userLink) => {
        const { id, link, socialMedia } = userLink;

        if (id && link) {
          return this._updateSocialMediaLinks({ id, link });
        } else if (!id && link) {
          const netType = await this._isSocialNetTypeExists({
            userId,
            socialMedia: userLink.socialMedia,
          });
          if (!netType) {
            return this._createSocialMediaLinks({ link, socialMedia, userId });
          }
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
  }) {
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

  public checkIsPhoneExists({
    userId,
    phone,
  }: {
    userId: string;
    phone: string;
  }) {
    return this._dbClient.user.findFirst({
      where: {
        id: {
          not: userId,
        },
        phone,
      },
      select: {
        phone: true,
      },
    });
  }

  public cancelPhoneVerified({ userId }: { userId: string }) {
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
