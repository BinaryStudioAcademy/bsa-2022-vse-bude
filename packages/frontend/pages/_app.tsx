import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { setGlobalStyles } from 'theme';
import { lightTheme } from 'theme/theme';

setGlobalStyles();

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider theme={lightTheme}>
    <Component {...pageProps} />
  </NextUIProvider>
);

export default wrapper.withRedux(App);
