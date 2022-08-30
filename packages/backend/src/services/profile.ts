import type { Request } from 'express';
import type { UserProfileRepository } from '@repositories';
import type {
  UpdateUserProfileDto,
  UserSocialMediaDto,
  UpdatePasswordDto,
} from '@types';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import type { HashService } from '@services';
import { ProfileError } from '@errors';

export class UserProfileService {
  private _userProfileRepository: UserProfileRepository;

  private _hashService: HashService;

  constructor({
    userProfileRepository,
    hashService,
  }: {
    userProfileRepository: UserProfileRepository;
    hashService: HashService;
  }) {
    this._userProfileRepository = userProfileRepository;
    this._hashService = hashService;
  }

  public async getUser({ userId, req }: { userId: string; req: Request }) {
    const user = await this._userProfileRepository.getUser({ userId });
    if (!user) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: req.t(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
      });
    }

    return user;
  }

  public async getFullUserData({
    userId,
    req,
  }: {
    userId: string;
    req: Request;
  }) {
    const user = await this._userProfileRepository.getFullUserData({ userId });
    if (!user) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: req.t(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
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
    req,
    userId,
    data,
  }: {
    req: Request;
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
        message: req.t(UserPersonalInfoValidationMessage.USER_NOT_EXISTS),
      });
    }

    const isCurrentPassword = this._hashService.verifyPasswordHash(
      passwordHash,
      password,
    );

    if (!isCurrentPassword) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: req.t(UserPersonalInfoValidationMessage.WRONG_PASSWORD),
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
