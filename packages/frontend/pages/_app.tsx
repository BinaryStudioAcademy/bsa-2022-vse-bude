import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store';
import { setGlobalStyles } from 'theme';

setGlobalStyles();

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
);

export default wrapper.withRedux(appWithTranslation(App));
