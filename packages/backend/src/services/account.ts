import type { UserAccountRepository } from '@repositories';

export class UserAccountService {
  private _userAccountRepository: UserAccountRepository;

  constructor(userAccountRepository: UserAccountRepository) {
    this._userAccountRepository = userAccountRepository;
  }

  public getAddress({ userId }: { userId: string }) {
    return this._userAccountRepository.getAddress({ userId });
  }

  public getSocialMedia({ userId }: { userId: string }) {
    return this._userAccountRepository.getSocialMedia({ userId });
  }
}
