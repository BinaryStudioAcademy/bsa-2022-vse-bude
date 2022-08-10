import type { UserRepository } from '@repositories';
import type { UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import { sign as jwtSign, type UserSessionJwtPayload } from 'jsonwebtoken';
import { getEnv } from '@helpers';
import type { RefreshTokenRepository } from '@repositories';
import { createHmac, createHash } from 'crypto';
import { UserNotFoundError } from '../error/user/user.not-found.error';
import { UserExistsError } from '../error/user/user.exists.error';
import type { AuthTokenData } from '../common/types/auth/auth.token.data';
import { fromMilliToSeconds, fromMinToSeconds } from '../helpers/time';
import type { CreateRefreshTokenDto } from '../common/types/refresh-token/create.refresh-token.dto';

export class AuthService {
  private _userRepository: UserRepository;

  private _refreshTokenRepository: RefreshTokenRepository;

  constructor(
    userRepository: UserRepository,
    refreshTokenRepository: RefreshTokenRepository,
  ) {
    this._userRepository = userRepository;
    this._refreshTokenRepository = refreshTokenRepository;
  }

  async signUp(signUpDto: UserSignUpDto) {
    const userByEmailOrPhone = await this._userRepository.getByEmailOrPhone(
      signUpDto.email,
      signUpDto.phone,
    );
    if (userByEmailOrPhone) {
      throw new UserExistsError();
    }
    const newUser = await this._userRepository.create(signUpDto);
    const tokenData = this.getTokenData(newUser.id);

    const refreshToken: CreateRefreshTokenDto = {
      userId: newUser.id,
      token: tokenData.refreshToken,
      expiresAt: this.getRefreshTokenExpiresAt(),
    };
    await this._refreshTokenRepository.create(refreshToken);

    return tokenData;
  }

  private getRefreshTokenExpiresAt(): string {
    return `${
      fromMilliToSeconds(Date.now()) +
      fromMinToSeconds(Number(getEnv('REFRESH_TOKEN_EXPIRATION_MIN')))
    }`;
  }

  async signIn(signInDto: UserSignInDto) {
    const userByEmail = await this._userRepository.getByEmail(signInDto.email);
    if (!userByEmail) {
      throw new UserNotFoundError();
    }

    return this.getTokenData('test');
  }

  private getAccessToken(userPayload: UserSessionJwtPayload): string {
    return jwtSign(userPayload, getEnv('JWT_SECRET_KEY'));
  }

  private getTokenData(userId: string): AuthTokenData {
    const accessExpiresIn: number = this.getAccessTokenExpiration();
    const userPayload: UserSessionJwtPayload = {
      userId: userId,
      exp: accessExpiresIn,
    };
    const token: string = this.getAccessToken(userPayload);
    const refreshToken: string = this.generateRefreshToken();

    return {
      accessToken: token,
      accessExpiresAt: accessExpiresIn,
      refreshToken: refreshToken,
    };
  }

  private generateRefreshToken(): string {
    return createHmac('sha256', createHash('sha256').digest('hex')).digest(
      'hex',
    );
  }

  private getAccessTokenExpiration(): number {
    return (
      fromMilliToSeconds(Date.now()) +
      fromMinToSeconds(Number(getEnv('JWT_ACCESS_TOKEN_EXPIRATION_MIN')))
    );
  }
}
