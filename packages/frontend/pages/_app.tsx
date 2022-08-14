import type { AppPropsWithLayout } from './types';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store';
import { ThemeProvider } from '@providers';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
