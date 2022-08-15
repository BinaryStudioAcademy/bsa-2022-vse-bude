import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store';
import { ThemeProvider } from '@providers';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);
export default wrapper.withRedux(appWithTranslation(App));
