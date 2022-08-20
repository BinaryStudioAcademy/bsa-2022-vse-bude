import type { ReactNode } from 'react';
import { Fragment, useEffect } from 'react';
import { auth as authHelper } from '@helpers';
import { useAppDispatch, useAuth } from '@hooks';
import { getCurrentUser } from 'store/auth';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user } = useAuth();

  const dispatch = useAppDispatch();

  const hasToken = !!authHelper.getAccessToken();
  const hasUser = !!user;

  useEffect(() => {
    if (!hasUser && hasToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, hasUser, hasToken]);

  return <Fragment>{children}</Fragment>;
};

export { AuthProvider };
