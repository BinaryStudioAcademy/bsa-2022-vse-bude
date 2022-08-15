import type { VerifyPhoneDto } from '@vse-bude/shared';
import type { VerifyRepository, UserRepository } from '@repositories';
import type { VerificationTypes } from '@vse-bude/shared';
import { CodeNotFoundError } from '../error/verify/code-not-found-error';

export class VerifyService {
  private _verifyRepository: VerifyRepository;

  private _userRepository: UserRepository;

  constructor(
    verifyRepository: VerifyRepository,
    userRepository: UserRepository,
  ) {
    this._userRepository = userRepository;
    this._verifyRepository = verifyRepository;
  }

  async verifyPhone(dto: VerifyPhoneDto) {
    const code = await this._verifyRepository.getUserCodeByTypeAndCode(
      dto.userId,
      dto.type,
      dto.code,
    );
    if (!code) {
      throw new CodeNotFoundError();
    }
    await this._userRepository.verifyPhone(dto.userId);
    await this._verifyRepository.deleteByType(dto.userId, dto.type);
  }

  private generateCode(): number {
    const maxLimit = 999999;
    const minLimit = 100000;
    const diff = maxLimit - minLimit;

    return Math.floor(Math.random() * diff + minLimit);
  }

  async createVerificationCode(userId: string, type: VerificationTypes) {
    const code = this.generateCode();
    await this._verifyRepository.save({
      code: `${code}`,
      type,
      userId,
    });
  }
}
