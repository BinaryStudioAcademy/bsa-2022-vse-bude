import type { ReactNode } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { auth as authHelper } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { getCurrentUser } from 'store/profile';
import { useRouter } from 'next/router';
import { Routes } from '@enums';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
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
      router.push(Routes.DEFAULT);
    }
  }, [hasUser, router, hasToken]);

  if (needToLoadUser || !hasUser) {
    return <div>Loading...</div>;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export { AuthProvider };
