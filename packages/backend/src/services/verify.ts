import type { VerifyEmailDto, VerifyPhoneDto } from '@vse-bude/shared';
import { VerificationTypes } from '@vse-bude/shared';
import type { UserRepository } from '@repositories';
import { logger } from '@helpers';
import { CodeNotFoundError } from '../error/verify/code-not-found-error';
import { WrongCodeError } from '../error/verify/wrong-code-error';
import type { SaveVerifyCode } from '../common/types/verification-code';
import type { RedisStorageService } from './redis-storage';
import type { SMSSenderService } from './sms';
import type { EmailService } from './email';

export class VerifyService {
  private phoneCodeLifeTime = 900000;

  private emailCodeLifeTime = 86400000;

  private _userRepository: UserRepository;

  private _cache: RedisStorageService;

  private _smsService: SMSSenderService;

  private _emailService: EmailService;

  constructor(
    userRepository: UserRepository,
    cache: RedisStorageService,
    smsService: SMSSenderService,
    emailService: EmailService,
  ) {
    this._userRepository = userRepository;
    this._cache = cache;
    this._smsService = smsService;
    this._emailService = emailService;
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
    await this.deleteCodeByType(dto.userId, dto.type);

    return {};
  }

  async initPhoneVerification(userId: string, type = VerificationTypes.PHONE) {
    await this.resendPhoneCode(userId, type);
  }

  async verifyEmail(dto: VerifyEmailDto) {
    const code = await this.getUserCodeByTypeAndCode(dto.userId, dto.type);
    if (!code) {
      throw new CodeNotFoundError();
    }
    if (dto.code !== code) {
      throw new WrongCodeError();
    }

    await this._userRepository.verifyEmail(dto.userId);
    await this.deleteCodeByType(dto.userId, dto.type);

    return {};
  }

  async initEmailVerification(userId: string, type = VerificationTypes.EMAIL) {
    await this.resendEmailCode(userId, type);
  }

  async createVerificationCode(
    userId: string,
    type: VerificationTypes,
  ): Promise<string> {
    const code = `${this.generateCode()}`;
    await this.saveCode({
      code,
      type,
      userId,
    });

    return code;
  }

  async resendPhoneCode(userId: string, type: VerificationTypes) {
    const user = await this._userRepository.getById(userId);
    await this.deleteCodeByType(userId, type);
    const code = await this.createVerificationCode(userId, type);

    return await this._smsService.send(user.phone, code);
  }

  async resendEmailCode(userId: string, type: VerificationTypes) {
    const user = await this._userRepository.getById(userId);
    await this.deleteCodeByType(userId, type);
    const code = await this.createVerificationCode(userId, type);
    logger.warn(`Sending email to ${user.email} with code ${code}`);

    return await this._emailService.send({
      to: [{ email: user.email }],
      subject: 'Verify your email',
      text: `Your code: ${code}`,
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

  private deleteCodeByType(userId: string, type: VerificationTypes) {
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
