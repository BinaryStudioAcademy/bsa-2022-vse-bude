import { ApiRoutes } from '@vse-bude/shared';
import type { Http } from '@vse-bude/shared';

export const getUserProfileSSR = (params: { userId: string; http: Http }) =>
  params.http.get({ url: `${ApiRoutes.PROFILE}/${params.userId}` });
