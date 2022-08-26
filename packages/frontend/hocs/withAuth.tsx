import { useEffect } from 'react';
import { auth as authHelper } from '@helpers';
import { useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { Routes } from '@enums';
import { Layout } from '@components';

export const withAuth = (Component) => {
  const Wrapper = (props) => {
    const { user } = useTypedSelector((state) => state.auth);

    const router = useRouter();

    const hasToken = !!authHelper.getAccessToken();
    const hasUser = !!user;

    useEffect(() => {
      if (!hasUser && !hasToken) {
        router.push(Routes.SIGN_IN);
      }
    }, [hasUser, router, hasToken]);

    if (!hasUser) {
      return <Layout>...Loading</Layout>;
    }

    return <Component {...props} />;
  };

  return Wrapper;
};
