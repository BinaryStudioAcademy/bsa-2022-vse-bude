import type { UserRepository } from '@repositories';
import type { UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import { sign as jwtSign, type UserSessionJwtPayload } from 'jsonwebtoken';
import { getEnv } from '@helpers';
import type { RefreshTokenRepository } from '@repositories';
import { UserNotFoundError } from '../error/user/user.not-found.error';
import { UserExistsError } from '../error/user/user.exists.error';
import type { AuthTokenData } from '../common/types/auth/auth.token.data';
import {
  fromMilliToSeconds,
  fromMinToSeconds,
  fromSecondsToDate,
} from '../helpers/time';
import type { CreateRefreshTokenDto } from '../common/types/refresh-token/create.refresh-token.dto';
import type { CreateUserDto } from '../common/types/user/create.user.dto';
import { WrongPasswordError } from '../error/user/wrong.password.error';
import type { UpdateRefreshTokenDto } from '../common/types/refresh-token/update.refresh-token.dto';
import type { SignOutDto } from '../common/types/auth/sign-out.dto';
import { UnauthorizedError } from '../error/auth/unauthorized.error';
import { WrongRefreshTokenError } from '../error/auth/wrong.refresh-token.error';
import type { HashService } from './hash';

export class AuthService {
  private _userRepository: UserRepository;

  private _refreshTokenRepository: RefreshTokenRepository;

  private _hashService: HashService;

  constructor(
    userRepository: UserRepository,
    refreshTokenRepository: RefreshTokenRepository,
    hashService: HashService,
  ) {
    this._userRepository = userRepository;
    this._refreshTokenRepository = refreshTokenRepository;
    this._hashService = hashService;
  }

  async signOut(signOutDto: SignOutDto) {
    await this._refreshTokenRepository.deleteByUserId(signOutDto.userId);
  }

  async signUp(signUpDto: UserSignUpDto) {
    const userByEmailOrPhone = await this._userRepository.getByEmailOrPhone(
      signUpDto.email,
      signUpDto.phone,
    );
    if (userByEmailOrPhone) {
      throw new UserExistsError();
    }
    const createUserDto: CreateUserDto = {
      firstName: signUpDto.firstName,
      lastName: signUpDto.lastName,
      email: signUpDto.email,
      phone: signUpDto.phone,
      passwordHash: this._hashService.generatePasswordHash(signUpDto.password),
    };
    const newUser = await this._userRepository.create(createUserDto);
    const tokenData = this.getTokenData(newUser.id);

    const refreshToken: CreateRefreshTokenDto = {
      userId: newUser.id,
      token: tokenData.refreshToken,
      expiresAt: this.getRefreshTokenExpiresAt(),
    };
    await this._refreshTokenRepository.create(refreshToken);

    return tokenData;
  }

  async signIn(signInDto: UserSignInDto) {
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
      throw new WrongPasswordError();
    }

    const tokenData = this.getTokenData(user.id);
    const refreshToken: CreateRefreshTokenDto = {
      userId: user.id,
      token: tokenData.refreshToken,
      expiresAt: this.getRefreshTokenExpiresAt(),
    };
    await this._refreshTokenRepository.create(refreshToken);

    return this.getTokenData(user.id);
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

  async refreshToken(updateDto: UpdateRefreshTokenDto) {
    if (!updateDto.tokenValue) {
      throw new WrongRefreshTokenError();
    }
    const token = await this._refreshTokenRepository.getTokenByValue(
      updateDto.tokenValue,
    );
    if (!token) {
      throw new UnauthorizedError();
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
