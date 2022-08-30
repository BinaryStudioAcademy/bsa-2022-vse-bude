import { Routes } from '@enums';
import { StorageKey } from '@vse-bude/shared';

export function withPublic(gssp) {
  return async (context) => {
    const restrictedRoutes: string[] = [Routes.SIGN_IN, Routes.SIGN_UP];

    const accessToken = context.req?.cookies[StorageKey.ACCESS_TOKEN];
    if (accessToken && restrictedRoutes.includes(context.req.url)) {
      return {
        redirect: {
          destination: Routes.DEFAULT,
        },
      };
    }

    const gsspData = await gssp(context);

    if (gsspData.redirect) {
      return gsspData;
    }

    return {
      props: {
        ...gsspData.props,
      },
    };
  };
}
