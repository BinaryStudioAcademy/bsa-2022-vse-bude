import { appWithTranslation } from 'next-i18next';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { UserProvider, ThemeProvider } from '@providers';
import '../public/css/fontawesome.css';
import { useTypedSelector } from '@hooks';
import dynamic from 'next/dynamic';
import { VerificationModal } from '../components';

const PageLoaderDynamic = dynamic(() => import('../components/pages-loader'));
const ToastStackDynamic = dynamic(() => import('../components/toasts/stack'));

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const { isVerifyPhoneModalOpen } = useTypedSelector((state) => state.verify);

  return (
    <ThemeProvider>
      <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
      {isVerifyPhoneModalOpen && <VerificationModal />}
      <PageLoaderDynamic />
      <ToastStackDynamic />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
