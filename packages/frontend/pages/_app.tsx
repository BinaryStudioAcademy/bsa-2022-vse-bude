import { appWithTranslation } from 'next-i18next';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { UserProvider, ThemeProvider } from '@providers';
import '../public/css/fontawesome.css';
import '@splidejs/react-splide/css';
import dynamic from 'next/dynamic';
import { Modals } from '@components/modals/component';
import { useRouter } from 'next/router';
import { http } from '@helpers';

const PageLoaderDynamic = dynamic(() => import('@components/pages-loader'));
const ToastStackDynamic = dynamic(() => import('@components/toasts/stack'));

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { locale } = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  http.setLocale(locale);

  return (
    <ThemeProvider>
      <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
      <Modals />
      <PageLoaderDynamic />
      <ToastStackDynamic />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
