import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { globalStyles } from 'theme';

globalStyles();

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
);

export default wrapper.withRedux(App);
