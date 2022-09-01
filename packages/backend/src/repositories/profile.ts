import type { PrismaClient } from '@prisma/client';
import type {
  SocialMedia,
  SocialMediaType,
  UpdateUserProfileDto,
} from '@vse-bude/shared';

export class UserProfileRepository {
  private _dbClient: PrismaClient;

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
        email: true,
        phone: true,
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
        novaPoshtaRef: true,
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
    socialMedia: SocialMedia[];
  }) {
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
