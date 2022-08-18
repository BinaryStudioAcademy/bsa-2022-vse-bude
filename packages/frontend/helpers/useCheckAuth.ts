import { auth } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { useEffect, useState } from 'react';
import { getCurrentUser } from 'store/profile';

export const useCheckAuth = () => {
  const { user } = useTypedSelector((state) => state.profile);
  const [isAuth, setIsAuth] = useState(false);

  const dispatch = useAppDispatch();

  const hasToken = !!auth.getAccessToken();
  const hasUser = !!user;

  useEffect(() => {
    if (!hasUser && hasToken) {
      dispatch(getCurrentUser());
      setIsAuth(true);
    }
  }, [dispatch, hasToken, hasUser]);

  return isAuth;
};
