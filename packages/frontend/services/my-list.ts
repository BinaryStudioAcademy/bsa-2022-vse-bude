import type { Http } from '@vse-bude/shared';
import {
  ApiRoutes,
  AccountApiRoutes,
} from '@vse-bude/shared';


export const getMyListSSR = (params: { http: Http }) =>
  params.http.get({
    url: `${ApiRoutes.PROFILE}${AccountApiRoutes.MY_LIST}`,
  });
