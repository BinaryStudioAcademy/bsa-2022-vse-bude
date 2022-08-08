import type { UserRepository } from '@repositories';
import type { UserSignInDto, UserSignUpDto } from '@vse-bude/shared';

export class AuthService {
  private _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async signIn(signInDto: UserSignInDto) {
    return this._userRepository.getByEmail(signInDto.email);
  }

  async signUp(signUpDto: UserSignUpDto) {
    return this._userRepository.getByEmail(signUpDto.email);
  }
}
