import type { RefreshTokenRepository, UserRepository } from '@repositories';
import type {
  UserSignInDto,
  UserSignUpDto,
  AuthResponse,
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
import type { HashService } from '@services';
import type { Request } from 'express';
import type { VerifyService } from '@services';
import { authResponseMap } from '@mappers';

export class AuthService {
  private _userRepository: UserRepository;

  private _refreshTokenRepository: RefreshTokenRepository;

  private _hashService: HashService;

  private _verifyService: VerifyService;

  constructor(
    userRepository: UserRepository,
    refreshTokenRepository: RefreshTokenRepository,
    hashService: HashService,
    verifyService: VerifyService,
  ) {
    this._userRepository = userRepository;
    this._refreshTokenRepository = refreshTokenRepository;
    this._hashService = hashService;
    this._verifyService = verifyService;
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
      passwordHash: this._hashService.generatePasswordHash(signUpDto.password),
    };
    const newUser = await this._userRepository.create(createUserDto);
    await this._verifyService.initPhoneVerification(newUser.id);
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
      throw new UserNotFoundError(req);
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

    return authResponseMap(this.getTokenData(user.id), user);
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
