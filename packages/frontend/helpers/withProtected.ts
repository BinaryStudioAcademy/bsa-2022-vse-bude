export function withProtected(gssp) {
  return async (context) => {
    const accessToken = context.req.cookies['access-token'];

    console.log(context.req.cookies['access-token']);

    if (!accessToken) {
      return {
        redirect: {
          destination: '/sign-in',
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
