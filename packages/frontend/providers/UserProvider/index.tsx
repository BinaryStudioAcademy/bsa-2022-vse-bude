import type { ReactNode } from 'react';
import { Fragment, useEffect } from 'react';
import { useAppDispatch, useAuth } from '@hooks';
import { getCurrentUser } from 'store/auth';
import { getFavoriteIds } from '../../store/favorite-product';

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const { user, hasToken } = useAuth();
  const dispatch = useAppDispatch();

  const hasUser = !!user;

  useEffect(() => {
    if (!hasUser && hasToken) {
      dispatch(getCurrentUser());
      dispatch(getFavoriteIds());
    }
  }, [dispatch, hasToken, hasUser]);

  return <Fragment>{children}</Fragment>;
};

export { UserProvider };
