import { appWithTranslation } from 'next-i18next';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { UserProvider, ThemeProvider } from '@providers';
import '../public/css/fontawesome.css';
import { PagesLoader } from 'components/primitives/pages-loader';
import { useTypedSelector } from '@hooks';
import { VerificationModal } from '@components';

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
      <PagesLoader />
      {isVerifyPhoneModalOpen && <VerificationModal />}
    </ThemeProvider>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
