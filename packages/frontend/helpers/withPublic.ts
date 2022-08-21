import { Routes } from '@enums';

export function withPublic(gssp) {
  return async (context) => {
    const restrictedRoutes: string[] = [Routes.SIGN_IN, Routes.SIGN_UP];

    const accessToken = context.req.cookies['access-token'];
    if (accessToken && restrictedRoutes.includes(context.req.url)) {
      return {
        redirect: {
          destination: '/',
        },
      };
    }

    const gsspData = await gssp(context);

    return {
      props: {
        ...gsspData.props,
      },
    };
  };
}
