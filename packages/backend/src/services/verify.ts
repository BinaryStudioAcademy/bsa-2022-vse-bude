import type { VerifyPhoneDto } from '@vse-bude/shared';
import { VerificationTypes } from '@vse-bude/shared';
import type { UserRepository } from '@repositories';
import { CodeNotFoundError } from '../error/verify/code-not-found-error';
import { WrongCodeError } from '../error/verify/wrong-code-error';
import type { SaveVerifyCode } from '../common/types/verification-code';
import type { RedisStorageService } from './redis-storage';

export class VerifyService {
  private phoneCodeLifeTime = 900000;

  private emailCodeLifeTime = 86400000;

  private _userRepository: UserRepository;

  private _cache: RedisStorageService;

  constructor(userRepository: UserRepository, cache: RedisStorageService) {
    this._userRepository = userRepository;
    this._cache = cache;
  }

  async verifyPhone(dto: VerifyPhoneDto) {
    const code = await this.getUserCodeByTypeAndCode(dto.userId, dto.type);
    if (!code) {
      throw new CodeNotFoundError();
    }
    if (dto.code !== code) {
      throw new WrongCodeError();
    }

    await this._userRepository.verifyPhone(dto.userId);
    await this.deleteByType(dto.userId, dto.type);

    return {};
  }

  async createVerificationCode(userId: string, type: VerificationTypes) {
    const code = this.generateCode();
    await this.saveCode({
      code: `${code}`,
      type,
      userId,
    });
  }

  private generateCode(): number {
    const maxLimit = 999999;
    const minLimit = 100000;
    const diff = maxLimit - minLimit;

    return Math.floor(Math.random() * diff + minLimit);
  }

  private getUserCodeByTypeAndCode(userId: string, type: VerificationTypes) {
    return this._cache.get(this.getVerificationCodeCacheKey(userId, type));
  }

  private deleteByType(userId: string, type: VerificationTypes) {
    return this._cache.del(this.getVerificationCodeCacheKey(userId, type));
  }

  private async saveCode(data: SaveVerifyCode) {
    return this._cache.set(
      this.getVerificationCodeCacheKey(data.userId, data.type),
      data.code,
      this.getLifeTime(data.type),
    );
  }

  private getLifeTime(type: VerificationTypes) {
    const lifeTimes = {
      [VerificationTypes.PHONE]: this.phoneCodeLifeTime,
      [VerificationTypes.EMAIL]: this.emailCodeLifeTime,
    };

    return lifeTimes[type];
  }

  private getVerificationCodeCacheKey(
    userId: string,
    type: VerificationTypes,
  ): string {
    return `verification_code:user_id:${userId}:type:${type}`;
  }
}
