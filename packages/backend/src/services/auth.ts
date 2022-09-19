import type { RefreshTokenRepository, UserRepository } from '@repositories';
import type {
  UserSignInDto,
  UserSignUpDto,
  AuthResponse,
  UpdatePassword,
  UserResponseDto,
} from '@vse-bude/shared';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
  AuthApiRoutes,
} from '@vse-bude/shared';
import { sign as jwtSign, type UserSessionJwtPayload } from 'jsonwebtoken';
import {
  getEnv,
  fromMilliToSeconds,
  fromMinToSeconds,
  fromSecondsToDate,
} from '@helpers';
import {
  UserNotFoundError,
  UserExistsError,
  ProfileError,
  UnauthorizedError,
  WrongRefreshTokenError,
  ExpiredRefreshTokenError,
  WrongPasswordOrEmailError,
  ResetPassLinkInvalid,
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
import { authResponseMap, userMap } from '@mappers';
import { lang } from '@lang';
import type { User } from '@prisma/client';
import { ResetPasswordMailBuilder } from '../email/reset-password-mail-builder';
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

  async signOut(signOutDto: SignOut): Promise<void> {
    await this._refreshTokenRepository.deleteByUserId(signOutDto.userId);
  }

  async signUp(signUpDto: UserSignUpDto): Promise<AuthResponse> {
    const userByEmail = await this._userRepository.getByEmail(signUpDto.email);

    if (userByEmail) {
      throw new UserExistsError();
    }

    if (signUpDto.phone) {
      const userByPhone = await this._userRepository.getByPhone({
        phone: signUpDto.phone,
      });
      if (userByPhone) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.PHONE_EXISTS),
        });
      }
    }
    const phone = signUpDto.phone ? signUpDto.phone : null;
    const createUserDto: CreateUser = {
      firstName: signUpDto.firstName,
      lastName: signUpDto.lastName,
      email: signUpDto.email,
      phone,
      passwordHash: this._hashService.generateHash(signUpDto.password),
    };
    const newUser = await this._userRepository.create(createUserDto);

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

  async getByEmail(email: string): Promise<User> {
    return this._userRepository.getByEmail(email);
  }

  async signIn(signInDto: UserSignInDto): Promise<AuthResponse> {
    const user = await this._userRepository.getByEmail(signInDto.email);
    if (!user) {
      throw new WrongPasswordOrEmailError();
    }

    if (
      !this._hashService.verifyPasswordHash(
        user.passwordHash,
        signInDto.password,
      )
    ) {
      throw new WrongPasswordOrEmailError();
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

  async getCurrentUser(userId: string): Promise<UserResponseDto> {
    const user = await this._userRepository.getById(userId);

    return userMap(user);
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

  async refreshToken(updateDto: UpdateRefreshToken): Promise<AuthTokenData> {
    if (!updateDto.tokenValue) {
      throw new WrongRefreshTokenError();
    }
    const token = await this._refreshTokenRepository.getTokenByValue(
      updateDto.tokenValue,
    );
    if (!token) {
      throw new UnauthorizedError();
    }

    if (new Date(token.expiresAt) < new Date()) {
      throw new ExpiredRefreshTokenError();
    }

    const newTokenData = this.getTokenData(token.userId);
    await this._refreshTokenRepository.updateTokenById(
      token.id,
      newTokenData.refreshToken,
      this.getRefreshTokenExpiresAt(),
    );

    return newTokenData;
  }

  private async saveLink(email: string, hashValue: string): Promise<void> {
    await this._cache.set(
      this.getResetPasswordCacheKey(email),
      hashValue,
      this.resetLinkLifeTime,
    );
  }

  private async deleteLinksByEmail(email: string): Promise<void> {
    await this._cache.del(this.getResetPasswordCacheKey(email));
  }

  async resetPasswordLink(email: string): Promise<void> {
    const userByEmail = await this._userRepository.getByEmail(email);

    if (!userByEmail) {
      throw new UserNotFoundError();
    }

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
  }

  async updatePassword(updateDto: UpdatePassword): Promise<void> {
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
    await this._userRepository.updatePassword(updateDto.email, newPassHash);
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
