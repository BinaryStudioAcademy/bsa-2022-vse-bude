import { HttpHeader } from '@vse-bude/shared';
import type { Request } from 'express';
import type { UserSessionJwtPayload } from 'jsonwebtoken';
import { verify as jwtVerify } from 'jsonwebtoken';
import { getEnv } from '@helpers';

export const getBearerValue = (token: string): string =>
  token.replace('Bearer', '').trim();

export const getUserIdFromRequest = (req: Request): null | string => {
  const authHeader = req.header(HttpHeader.AUTHORIZATION);
  if (authHeader) {
    try {
      const tokenValue = getBearerValue(authHeader);

      const tokenPayload: UserSessionJwtPayload = <UserSessionJwtPayload>(
        jwtVerify(tokenValue, getEnv('JWT_SECRET_KEY'))
      );
      const userId = tokenPayload.userId;

      return userId;
    } catch (e) {
      return null;
    }
  }
};
