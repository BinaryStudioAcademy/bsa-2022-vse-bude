import type { UserProfileRepository } from '@repositories';
import type { UpdateUserProfileDto, UserSocialMediaDto } from '@types';

export class UserProfileService {
  private _userProfileRepository: UserProfileRepository;

  constructor(userProfileRepository: UserProfileRepository) {
    this._userProfileRepository = userProfileRepository;
  }

  public getUser({ userId }: { userId: string }) {
    return this._userProfileRepository.getUser({ userId });
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
}
