import { useTypedSelector } from '@hooks';
import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

export const useCheckAuth = () => {
  const user = useTypedSelector((state) => {
    state.profile;
  }, shallowEqual);
  const [isAuth, setIsAuth] = useState(false);

  const hasUser = !!user;

  useEffect(() => {
    if (hasUser) {
      setIsAuth(true);
    }
  }, [hasUser]);

  return { isAuth, user };
};
