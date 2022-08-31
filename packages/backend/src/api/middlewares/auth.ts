import type { NextFunction, Request, Response } from 'express';
import { HttpHeader, HttpStatusCode } from '@vse-bude/shared';
import { verify as jwtVerify } from 'jsonwebtoken';
import { getEnv, getBearerValue } from '@helpers';
import type { UserSessionJwtPayload } from 'jsonwebtoken';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.header(HttpHeader.AUTHORIZATION);
  if (!authHeader) {
    return res.status(HttpStatusCode.UNAUTHORIZED).json({
      error: req.t('UNAUTHORIZED'),
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
      error: req.t('UNAUTHORIZED'),
    });
  }

  next();
};
