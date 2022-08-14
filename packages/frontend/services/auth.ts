import type { UserSignInDto } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { http } from '@helpers';

export const login = (loginData: UserSignInDto) =>
  http.post({
    url: AuthApiRoutes.SIGN_IN,
    body: loginData,
  });

// export const lo = (httpSSR: Http) =>
//   httpSSR.get({
//     url: ApiRoutes.RANDOM_DATA,
//   });

// export const token = {
//   set(token: string) {
//     axios.defaults.headers.common.authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.authorization = "";
//   },
// };
