import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store';
import { ThemeProvider } from '@providers';

import { useEffect } from 'react';
import { auth as authHelper } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { getCurrentUser } from 'store/profile';

const App = ({ Component, pageProps }: AppProps) => {
  const { user } = useTypedSelector((state) => state.profile);

  const dispatch = useAppDispatch();

  const hasToken = !!authHelper.getAccessToken();
  const hasUser = !!user;

  useEffect(() => {
    if (!hasUser && hasToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, hasUser, hasToken]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default wrapper.withRedux(appWithTranslation(App));
