import type {
  PrismaClient,
  SocialMedia,
  SocialMediaType,
} from '@prisma/client';
import type {
  AddressDto,
  SocialNet,
  UserProfile,
  GetUserProfile,
} from '@types';
import { ProfileError } from '@errors';
import { lang } from '@lang';
import type { UpdateUserProfileDto, UserAddressDto } from '@vse-bude/shared';
import {
  UserPersonalInfoValidationMessage,
  HttpStatusCode,
} from '@vse-bude/shared';

export class UserProfileRepository {
  private _dbClient: PrismaClient;

  private async _isSocialNetTypeExists({
    userId,
    socialMedia,
  }: {
    userId: string;
    socialMedia: SocialMediaType;
  }): Promise<void> {
    const isNet = await this._dbClient.socialMedia.findFirst({
      where: {
        ownedByUserId: userId,
        socialMedia,
      },
      select: {
        socialMedia: true,
      },
    });

    if (isNet) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.NET_TYPE_IS_EXISTS),
      });
    }

    return null;
  }

  private _updateSocialMediaLinks({
    id,
    link,
  }: {
    id: string;
    link: string;
  }): Promise<SocialNet> {
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
  }): Promise<SocialNet> {
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
  }): Promise<SocialMedia> {
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
  }): Promise<void> {
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

  public getUser({ userId }: { userId: string }): Promise<GetUserProfile> {
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

  public getFullUserData({ userId }: { userId: string }): Promise<UserProfile> {
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

  public getAddress({ userId }: { userId: string }): Promise<AddressDto> {
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

  public getSocialMedia({ userId }: { userId: string }): Promise<SocialNet[]> {
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
  }): Promise<UserProfile> {
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

  public async updateAddress({
    userId,
    data,
  }: {
    userId: string;
    data: UserAddressDto;
  }): Promise<AddressDto> {
    const { country, region, city, zip, deliveryData } = data;
    const addressDB = await this._dbClient.address.findFirst({
      where: {
        userId,
      },
    });
    if (addressDB) {
      return this._dbClient.address.update({
        where: {
          userId,
        },
        data: {
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

    return this._dbClient.address.create({
      data: {
        country,
        region,
        city,
        zip,
        deliveryData,
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

  public updateUserSocialMedia({
    userId,
    socialMedia,
  }: {
    userId: string;
    socialMedia: SocialMedia[];
  }): Promise<SocialNet>[] {
    return socialMedia.map(async (net) => {
      const { id, link, socialMedia } = net;
      if (id && link) {
        return await this._updateSocialMediaLinks({ id, link });
      } else if (!id && link) {
        this._isSocialNetTypeExists({
          userId,
          socialMedia,
        });

        return await this._createSocialMediaLinks({
          link,
          socialMedia,
          userId,
        });
      } else if (id && !link) {
        await this._deleteSocialMediaLinks({ id });
      }
    });
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

  public checkIsPhoneExists({
    userId,
    phone,
  }: {
    userId: string;
    phone: string;
  }): Promise<{ phone: string }> {
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

  public cancelEmailVerified({
    userId,
  }: {
    userId: string;
  }): Promise<{ emailVerified: boolean }> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        emailVerified: false,
      },
      select: {
        emailVerified: true,
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
  }): Promise<{ id: string }> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        passwordHash,
      },
      select: {
        id: true,
      },
    });
  }
}
