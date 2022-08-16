import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store';
import { AuthProvider, ThemeProvider } from '@providers';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </ThemeProvider>
);
export default wrapper.withRedux(appWithTranslation(App));
