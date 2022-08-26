import { useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { auth as authHelper } from '@helpers';
import { useMemo } from 'react';
import type { UserDto } from '@vse-bude/shared';

type UseAuth = () => {
  user: UserDto;
  loading: boolean;
  hasToken: boolean;
};

export const useAuth: UseAuth = () => {
  const { user, loading } = useTypedSelector(
    (state) => state.auth,
    shallowEqual,
  );
  const hasToken = !!authHelper.getAccessToken();

  return useMemo(
    () => ({
      user,
      loading,
      hasToken,
    }),
    [user, loading, hasToken],
  );
};
