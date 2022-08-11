import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '@vse-bude/shared';
import { verify as jwtVerify } from 'jsonwebtoken';
import { getEnv } from '@helpers';
import type { UserSessionJwtPayload } from 'jsonwebtoken';
import { UNAUTHORIZED } from '@errors';
import { AUTH_HEADER_NAME } from '../constants';
import { getBearerValue } from '../functions';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.header(AUTH_HEADER_NAME);
  if (!authHeader) {
    return res.status(HttpStatusCode.UNAUTHORIZED).json({
      error: UNAUTHORIZED,
    });
  }
  const tokenValue = getBearerValue(authHeader);
  try {
    const tokenPayload: UserSessionJwtPayload = <UserSessionJwtPayload>(
      jwtVerify(tokenValue, getEnv('JWT_SECRET_KEY'))
    );
    req.userId = tokenPayload.userId;
  } catch (e) {
    return res.status(HttpStatusCode.UNAUTHORIZED).json({
      error: UNAUTHORIZED,
    });
  }

  next();
};
