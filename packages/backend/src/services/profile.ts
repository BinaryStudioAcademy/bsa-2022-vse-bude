import type { UserProfileRepository } from '@repositories';
import type {
  UpdateUserProfileDto,
  UpdatePasswordDto,
  UserAddressDto,
} from '@vse-bude/shared';
import type {
  AddressDto,
  UploadFileRequest,
  GetUserProfile,
  UserProfile,
  SocialNet,
  FullUserProfileDto,
} from '@types';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import type { HashService, S3StorageService } from '@services';
import { ProfileError } from '@errors';
import { getFilenameFromUrl } from '@helpers';
import type { SocialMedia } from '@prisma/client';
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

  public async getUser({
    userId,
  }: {
    userId: string;
  }): Promise<GetUserProfile> {
    const user = await this._userProfileRepository.getUser({ userId });
    if (!user) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
      });
    }

    return user;
  }

  public async getFullUserData({
    userId,
  }: {
    userId: string;
  }): Promise<FullUserProfileDto> {
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

  public getAddress({ userId }: { userId: string }): Promise<UserAddressDto> {
    return this._userProfileRepository.getAddress({ userId });
  }

  public getSocialMedia({ userId }: { userId: string }): Promise<SocialNet[]> {
    return this._userProfileRepository.getSocialMedia({ userId });
  }

  public updateUserProfile({
    userId,
    data,
  }: {
    userId: string;
    data: UpdateUserProfileDto;
  }): Promise<UserProfile> {
    return this._userProfileRepository.updateUserProfile({ userId, data });
  }

  public cancelPhoneVerified({
    userId,
  }: {
    userId: string;
  }): Promise<{ phoneVerified: boolean }> {
    return this._userProfileRepository.cancelPhoneVerified({ userId });
  }

  public cancelEmailVerified({
    userId,
  }: {
    userId: string;
  }): Promise<{ emailVerified: boolean }> {
    return this._userProfileRepository.cancelEmailVerified({ userId });
  }

  public async checkIsPhoneExists({
    userId,
    phone,
  }: {
    userId: string;
    phone: string;
  }): Promise<void> {
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
  }): Promise<{ avatar: string }> {
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
  }): Promise<AddressDto> {
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
  }): Promise<SocialNet[]> {
    const nets = this._userProfileRepository.updateUserSocialMedia({
      userId,
      socialMedia,
    });
    const mappedNets = (await Promise.all(nets)).filter((net) => net);

    return mappedNets;
  }

  public async changePassword({
    userId,
    data,
  }: {
    userId: string;
    data: UpdatePasswordDto;
  }): Promise<void> {
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
  }
}
