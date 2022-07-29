import type { NextFunction, Request, Response } from 'express';

export const wrap =
  <P extends ParamsDictionary, ResBody = unknown, ReqBody = unknown, ReqQuery = Query>(
    handler: (req?: Request<P, ResBody, ReqBody, ReqQuery>) => Promise<ResBody>
  ) =>
  (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction) =>
    handler(req)
      .then((result) => res.json(result))
      .catch(next);
