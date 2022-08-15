import { useEffect } from 'react';
import { auth as authHelper } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { getCurrentUser } from 'store/profile';
import { useRouter } from 'next/router';
import { Routes } from '@enums';
import { Layout } from '@components';

export const withAuth = (Component) => {
  const Wrapper = (props) => {
    const { user } = useTypedSelector((state) => state.profile);

    const dispatch = useAppDispatch();
    const router = useRouter();

    const hasToken = !!authHelper.getAccessToken();
    const hasUser = !!user;
    const needToLoadUser = !hasUser && hasToken;

    useEffect(() => {
      if (needToLoadUser) {
        dispatch(getCurrentUser());
      }
    }, [dispatch, needToLoadUser]);

    useEffect(() => {
      if (!hasUser && !hasToken) {
        router.push(Routes.SIGN_IN);
      }
    }, [hasUser, router, hasToken]);

    if (needToLoadUser || !hasUser) {
      return <Layout>...Loading</Layout>;
    }

    return <Component {...props} />;
  };

  return Wrapper;
};
