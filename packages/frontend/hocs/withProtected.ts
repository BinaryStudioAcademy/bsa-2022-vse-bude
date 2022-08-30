import { Routes } from '@enums';
import { StorageKey } from '@vse-bude/shared';

export function withProtected(gssp) {
  return async (context) => {
    const accessToken = context.req.cookies[StorageKey.ACCESS_TOKEN];

    if (!accessToken) {
      return {
        redirect: {
          destination: Routes.SIGN_IN,
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
