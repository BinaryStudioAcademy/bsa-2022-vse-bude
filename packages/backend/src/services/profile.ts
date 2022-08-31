import type { TFunction } from 'i18next';
import type { UserProfileRepository } from '@repositories';
import type {
  UpdateUserProfileDto,
  UserSocialMediaDto,
  UpdatePasswordDto,
  UploadFileRequest,
} from '@types';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import type { HashService } from '@services';
import { ProfileError } from '@errors';
import type { S3StorageService } from '@services';
import { getFilenameFromUrl } from '@helpers';

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

  public async getUser({ userId, t }: { userId: string; t: TFunction }) {
    const user = await this._userProfileRepository.getUser({ userId });
    if (!user) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: t(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
      });
    }

    return user;
  }

  public async getFullUserData({
    userId,
    t,
  }: {
    userId: string;
    t: TFunction;
  }) {
    const user = await this._userProfileRepository.getFullUserData({ userId });
    if (!user) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: t(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
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
      filename && (await this._storageService.deleteImage(filename));
    }

    if (req.file) {
      const imageUrl = await this._storageService.uploadImage(req);

      return this._userProfileRepository.updateAvatar({
        userId,
        avatar: imageUrl,
      });
    }

    if (!req.file) {
      return this._userProfileRepository.updateAvatar({
        userId,
        avatar: null,
      });
    }
  }

  public updateUserSocialMedia({
    userId,
    socialMedia,
  }: {
    userId: string;
    socialMedia: UserSocialMediaDto[];
  }) {
    return this._userProfileRepository.updateUserSocialMedia({
      userId,
      socialMedia,
    });
  }

  public async changePassword({
    t,
    userId,
    data,
  }: {
    t: TFunction;
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
        message: t(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
      });
    }

    const isCurrentPassword = this._hashService.verifyPasswordHash(
      passwordHash,
      password,
    );

    if (!isCurrentPassword) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: t(UserPersonalInfoValidationMessage.WRONG_PASSWORD),
      });
    }

    const newPasswordHash = this._hashService.generateHash(newPassword);

    this._userProfileRepository.changePassword({
      userId,
      passwordHash: newPasswordHash,
    });

    return {};
  }
}
