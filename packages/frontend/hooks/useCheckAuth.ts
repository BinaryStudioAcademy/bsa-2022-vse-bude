import { useAppDispatch, useTypedSelector } from '@hooks';
import { useEffect, useState } from 'react';
import { getCurrentUser } from 'store/profile';

export const useCheckAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const { user } = useTypedSelector((state) => state.profile);

  const dispatch = useAppDispatch();
  const hasUser = !!user;

  useEffect(() => {
    if (hasUser) {
      setIsAuth(true);
      setUserInfo(dispatch(getCurrentUser()));
    }
  }, [dispatch, hasUser]);

  return { isAuth, userInfo };
};