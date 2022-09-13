import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '@vse-bude/shared';

export const wrap =
  <
    P extends ParamsDictionary,
    ResBody = unknown,
    ReqBody = unknown,
    ReqQuery = Query,
  >(
    handler: (req?: Request<P, ResBody, ReqBody, ReqQuery>) => Promise<ResBody>,
  ) =>
  (
    req: Request<P, ResBody, ReqBody, ReqQuery>,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response<any, Record<string, any>>> =>
    handler(req)
      .then((result) => {
        if (!result) {
          return res.status(HttpStatusCode.OK).json({
            success: true,
          });
        }

        return res.status(HttpStatusCode.OK).json(result);
      })
      .catch(next);
