import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store';
import { AuthProvider, ThemeProvider } from '@providers';
import type { NextComponentType } from 'next';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean };
};

const App = ({ Component, pageProps }: CustomAppProps) => (
  <ThemeProvider>
    {Component.auth ? (
      <AuthProvider isPrivate={pageProps.isPrivate}>
        <Component {...pageProps} />
      </AuthProvider>
    ) : (
      <Component {...pageProps} />
    )}
  </ThemeProvider>
);
export default wrapper.withRedux(appWithTranslation(App));
