import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store';
import { ThemeProvider } from '@providers';
import type { AppPropsWithLayout } from './types';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  
return (
    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
