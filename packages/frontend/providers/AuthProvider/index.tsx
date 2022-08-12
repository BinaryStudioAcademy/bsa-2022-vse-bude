import type { ReactNode } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { auth } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { getCurrentUser } from 'store/profile';
import { useRouter } from 'next/router';

interface AuthProviderProps {
  children: ReactNode;
  isPrivate: boolean;
}

const AuthProvider = ({ children, isPrivate }: AuthProviderProps) => {
  const user = useTypedSelector((state) => state.profile.user);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const hasToken = !!auth.getAccessToken();
  const hasUser = !!user;

  useEffect(() => {
    if (hasToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, hasToken]);

  if (!hasUser && hasToken) {
    return <div>Loading...</div>;
  }

  if (isPrivate && !hasToken) {
    router.push('/');
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export { AuthProvider };
