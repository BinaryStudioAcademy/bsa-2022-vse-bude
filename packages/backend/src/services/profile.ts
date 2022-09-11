import type { UserProfileRepository } from '@repositories';
import type {
  UpdateUserProfileDto,
  UpdatePasswordDto,
  UserAddressDto,
  SocialMedia,
} from '@vse-bude/shared';
import type { UploadFileRequest } from '@types';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import type { HashService, S3StorageService } from '@services';
import { ProfileError } from '@errors';
import { getFilenameFromUrl } from '@helpers';
import { lang } from '@lang';

export class UserProfileService {
  private _userProfileRepository: UserProfileRepository;

  private _hashService: HashService;

  private _storageService: S3StorageService;

  constructor({
    userProfileRepository,
    hashService,
    storageService,
  }: {
    userProfileRepository: UserProfileRepository;
    hashService: HashService;
    storageService: S3StorageService;
  }) {
    this._userProfileRepository = userProfileRepository;
    this._hashService = hashService;
    this._storageService = storageService;
  }

  public async getUser({ userId }: { userId: string }) {
    const user = await this._userProfileRepository.getUser({ userId });
    if (!user) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
      });
    }

    return user;
  }

  public async getFullUserData({ userId }: { userId: string }) {
    const user = await this._userProfileRepository.getFullUserData({ userId });
    if (!user) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
      });
    }

    const userAddress = await this._userProfileRepository.getAddress({
      userId,
    });

    const socialMedia = await this._userProfileRepository.getSocialMedia({
      userId,
    });

    return {
      ...user,
      userAddress,
      socialMedia,
    };
  }

  public getAddress({ userId }: { userId: string }) {
    return this._userProfileRepository.getAddress({ userId });
  }

  public getSocialMedia({ userId }: { userId: string }) {
    return this._userProfileRepository.getSocialMedia({ userId });
  }

  public updateUserProfile({
    userId,
    data,
  }: {
    userId: string;
    data: UpdateUserProfileDto;
  }) {
    return this._userProfileRepository.updateUserProfile({ userId, data });
  }

  public cancelPhoneVerified({ userId }: { userId: string }) {
    return this._userProfileRepository.cancelPhoneVerified({ userId });
  }

  public cancelEmailVerified({ userId }: { userId: string }) {
    return this._userProfileRepository.cancelEmailVerified({ userId });
  }

  public async checkIsPhoneExists({
    userId,
    phone,
  }: {
    userId: string;
    phone: string;
  }) {
    const userPhone = await this._userProfileRepository.checkIsPhoneExists({
      userId,
      phone,
    });
    if (userPhone) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.PHONE_EXISTS),
      });
    }
  }

  public async updateAvatar({
    userId,
    req,
  }: {
    userId: string;
    req: UploadFileRequest;
  }) {
    const { avatar } = await this._userProfileRepository.getUser({ userId });
    if (avatar) {
      const filename = getFilenameFromUrl(avatar);
      if (filename) {
        await this._storageService.deleteImage(filename);
      }
    }

    if (req.file) {
      const imageUrl = await this._storageService.uploadImage(req);

      return this._userProfileRepository.updateAvatar({
        userId,
        avatar: imageUrl,
      });
    }

    return this._userProfileRepository.updateAvatar({
      userId,
      avatar: null,
    });
  }

  public updateUserAddress({
    userId,
    userAddress,
  }: {
    userId: string;
    userAddress: UserAddressDto;
  }) {
    if (!userAddress) {
      return null;
    }

    return this._userProfileRepository.updateAddress({
      userId,
      data: userAddress,
    });
  }

  public async updateUserSocialMedia({
    userId,
    socialMedia,
  }: {
    userId: string;
    socialMedia: SocialMedia[];
  }) {
    await this._userProfileRepository.updateUserSocialMedia({
      userId,
      socialMedia,
    });

    return {};
  }

  public async changePassword({
    userId,
    data,
  }: {
    userId: string;
    data: UpdatePasswordDto;
  }) {
    const { password, newPassword } = data;
    const { passwordHash } = await this._userProfileRepository.getPasswordHash({
      userId,
    });
    if (!passwordHash) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
      });
    }

    const isCurrentPassword = this._hashService.verifyPasswordHash(
      passwordHash,
      password,
    );

    if (!isCurrentPassword) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.WRONG_PASSWORD),
      });
    }

    const newPasswordHash = this._hashService.generateHash(newPassword);
    await this._userProfileRepository.changePassword({
      userId,
      passwordHash: newPasswordHash,
    });

    return {};
  }
}
