import type { ReactNode } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { auth as authHelper } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { getCurrentUser } from 'store/profile';
import { useRouter } from 'next/router';

interface AuthProviderProps {
  children: ReactNode;
  isPrivate: boolean;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = useTypedSelector((state) => state.profile.user);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const hasToken = !!authHelper.getAccessToken();
  const hasUser = !!user;
  const needLoadUser = !hasUser && hasToken;

  useEffect(() => {
    if (needLoadUser) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, needLoadUser, router]);

  useEffect(() => {
    if (!hasToken) {
      router.push('/');
    }
  }, [hasToken, router]);

  if (needLoadUser || !hasToken) {
    return <div>Loading...</div>;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export { AuthProvider };
