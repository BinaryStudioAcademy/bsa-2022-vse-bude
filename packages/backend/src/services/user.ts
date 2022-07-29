import type { UserRepository } from 'data/repositories/user';

export class UserService {
  private _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  public getAll() {
    return this._userRepository.getAll();
  }
}
