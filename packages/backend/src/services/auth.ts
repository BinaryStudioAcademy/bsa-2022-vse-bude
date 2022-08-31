import type { RefreshTokenRepository, UserRepository } from '@repositories';
import type {
  UserSignInDto,
  UserSignUpDto,
  AuthResponse,
  UpdatePassword,
} from '@vse-bude/shared';
import { sign as jwtSign, type UserSessionJwtPayload } from 'jsonwebtoken';
import { getEnv } from '@helpers';
import {
  fromMilliToSeconds,
  fromMinToSeconds,
  fromSecondsToDate,
} from '@helpers';
import {
  UserNotFoundError,
  UserExistsError,
  WrongPasswordError,
  UnauthorizedError,
  WrongRefreshTokenError,
  ExpiredRefreshTokenError,
} from '@errors';
import type {
  CreateRefreshToken,
  AuthTokenData,
  CreateUser,
  UpdateRefreshToken,
  SignOut,
} from '@types';
import {
  type HashService,
  type VerifyService,
  type EmailService,
} from '@services';
import type { Request } from 'express';
import { authResponseMap } from '@mappers';
import { AuthApiRoutes } from '@vse-bude/shared';
import { ResetPasswordMailBuilder } from '../email/reset-password-mail-builder';
import { ResetPassLinkInvalid } from '../error/reset-password/reset-pass-link-invalid';
import type { RedisStorageService } from './redis-storage';

export class AuthService {
  private _userRepository: UserRepository;

  private _refreshTokenRepository: RefreshTokenRepository;

  private _hashService: HashService;

  private _verifyService: VerifyService;

  private _cache: RedisStorageService;

  private _emailService: EmailService;

  private resetLinkLifeTime = 3600000;

  constructor(
    userRepository: UserRepository,
    refreshTokenRepository: RefreshTokenRepository,
    hashService: HashService,
    verifyService: VerifyService,
    cache: RedisStorageService,
    emailService: EmailService,
  ) {
    this._userRepository = userRepository;
    this._refreshTokenRepository = refreshTokenRepository;
    this._hashService = hashService;
    this._verifyService = verifyService;
    this._cache = cache;
    this._emailService = emailService;
  }

  async signOut(signOutDto: SignOut) {
    await this._refreshTokenRepository.deleteByUserId(signOutDto.userId);
  }

  async signUp(signUpDto: UserSignUpDto, req: Request): Promise<AuthResponse> {
    const userByEmailOrPhone = await this._userRepository.getByEmailOrPhone(
      signUpDto.email,
      signUpDto.phone,
    );
    if (userByEmailOrPhone) {
      throw new UserExistsError(req);
    }
    const createUserDto: CreateUser = {
      firstName: signUpDto.firstName,
      lastName: signUpDto.lastName,
      email: signUpDto.email,
      phone: signUpDto.phone,
      passwordHash: this._hashService.generateHash(signUpDto.password),
    };
    const newUser = await this._userRepository.create(createUserDto);
    await this._verifyService.initPhoneVerification(newUser.id);
    await this._verifyService.initEmailVerification(newUser.id);
    const tokenData = this.getTokenData(newUser.id);

    const refreshToken: CreateRefreshToken = {
      userId: newUser.id,
      token: tokenData.refreshToken,
      expiresAt: this.getRefreshTokenExpiresAt(),
    };
    await this._refreshTokenRepository.create(refreshToken);

    return authResponseMap(tokenData, newUser);
  }

  async signIn(signInDto: UserSignInDto, req: Request): Promise<AuthResponse> {
    const user = await this._userRepository.getByEmail(signInDto.email);
    if (!user) {
      throw new UserNotFoundError();
    }

    if (
      !this._hashService.verifyPasswordHash(
        user.passwordHash,
        signInDto.password,
      )
    ) {
      throw new WrongPasswordError(req);
    }

    const tokenData = this.getTokenData(user.id);
    const refreshToken: CreateRefreshToken = {
      userId: user.id,
      token: tokenData.refreshToken,
      expiresAt: this.getRefreshTokenExpiresAt(),
    };
    await this._refreshTokenRepository.create(refreshToken);

    return authResponseMap(tokenData, user);
  }

  async getCurrentUser(userId: string) {
    return this._userRepository.getById(userId);
  }

  private getAccessToken(userPayload: UserSessionJwtPayload): string {
    return jwtSign(userPayload, getEnv('JWT_SECRET_KEY'));
  }

  private getRefreshTokenExpiresAt(): Date {
    return fromSecondsToDate(
      fromMilliToSeconds(Date.now()) +
        fromMinToSeconds(Number(getEnv('REFRESH_TOKEN_EXPIRATION_MIN'))),
    );
  }

  async refreshToken(updateDto: UpdateRefreshToken, req) {
    if (!updateDto.tokenValue) {
      throw new WrongRefreshTokenError(req);
    }
    const token = await this._refreshTokenRepository.getTokenByValue(
      updateDto.tokenValue,
    );
    if (!token) {
      throw new UnauthorizedError(req);
    }

    if (new Date(token.expiresAt) < new Date()) {
      throw new ExpiredRefreshTokenError(req);
    }

    const newTokenData = this.getTokenData(token.userId);
    await this._refreshTokenRepository.updateTokenById(
      token.id,
      newTokenData.refreshToken,
      this.getRefreshTokenExpiresAt(),
    );

    return newTokenData;
  }

  private async saveLink(email: string, hashValue: string) {
    await this._cache.set(
      this.getResetPasswordCacheKey(email),
      hashValue,
      this.resetLinkLifeTime,
    );
  }

  private async deleteLinksByEmail(email: string) {
    await this._cache.del(this.getResetPasswordCacheKey(email));
  }

  async resetPasswordLink(email: string) {
    const hashValue = this._hashService.generateHash(
      `${email}${this._hashService.getRandomHash()}`,
    );
    await this.deleteLinksByEmail(email);
    await this.saveLink(email, hashValue);
    const link = this.getResetPasswordEmailLink(hashValue, email);

    const resetMail = new ResetPasswordMailBuilder(this._emailService)
      .setText(link)
      .setTo(email);

    await resetMail.send();

    return undefined;
  }

  async updatePassword(updateDto: UpdatePassword) {
    const resetHash = await this._cache.get<string>(
      this.getResetPasswordCacheKey(updateDto.email),
    );

    if (!resetHash || resetHash !== updateDto.updateHash) {
      throw new ResetPassLinkInvalid();
    }

    const user = this._userRepository.getByEmail(updateDto.email);

    if (!user) {
      throw new UserNotFoundError();
    }

    const newPassHash = this._hashService.generateHash(updateDto.password);
    this._userRepository.updatePassword(updateDto.email, newPassHash);

    return {};
  }

  private getResetPasswordEmailLink(hash: string, email: string): string {
    return `${getEnv('APP_URL')}${
      AuthApiRoutes.RESET_PASSWORD
    }?email=${email}&value=${hash}`;
  }

  private getResetPasswordCacheKey(email: string): string {
    return `reset_password:email:${email}`;
  }

  private getTokenData(userId: string): AuthTokenData {
    const accessExpiresIn: number = this.getAccessTokenExpiration();

    const userPayload: UserSessionJwtPayload = {
      userId: userId,
      exp: accessExpiresIn,
    };
    const token: string = this.getAccessToken(userPayload);
    const refreshToken: string = this._hashService.generateRefreshToken();

    return {
      accessToken: token,
      accessExpiresAt: accessExpiresIn,
      refreshToken: refreshToken,
    };
  }

  private getAccessTokenExpiration(): number {
    return (
      fromMilliToSeconds(Date.now()) +
      fromMinToSeconds(Number(getEnv('JWT_ACCESS_TOKEN_EXPIRATION_MIN')))
    );
  }
}
