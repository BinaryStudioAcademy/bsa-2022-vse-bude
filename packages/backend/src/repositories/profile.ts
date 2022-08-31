import type { PrismaClient } from '@prisma/client';
import type { SocialMedia, UpdateUserProfileDto } from '@vse-bude/shared';

export class UserProfileRepository {
  private _dbClient: PrismaClient;

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
    return await this._dbClient.$transaction(
      socialMedia.map((userLink) => {
        const { id, link, socialMedia } = userLink;

        if (id && link) {
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
        } else if (link) {
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
        } else if (id && !link) {
          return this._dbClient.socialMedia.delete({
            where: {
              id,
            },
          });
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
