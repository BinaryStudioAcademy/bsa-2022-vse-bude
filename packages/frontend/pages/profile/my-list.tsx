import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ReactElement } from 'react';
import { withProtected } from '@hocs';
import { AuthHelper, CookieStorage } from '@helpers';
import { Http } from '@vse-bude/shared';
import { fetchMyListSSR, wrapper } from 'store';
import { MyListInfo } from '@components/profile/user-account';
import type { NextPageWithLayout } from 'pages/_app';
import { AccountLayout } from '@components/profile/user-account-layout';

export const getServerSideProps = withProtected(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale } = ctx;
    const cookieStorage = new CookieStorage(ctx);
    const auth = new AuthHelper(cookieStorage);

    const httpClient = new Http(
      process.env.NEXT_PUBLIC_API_ROUTE,
      locale,
      auth,
    );

    await store.dispatch(fetchMyListSSR({ http: httpClient }));

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'account',
          'personal-info',
          'my-list',
        ])),
      },
    };
  }),
);

const UserItemsInfo: NextPageWithLayout = () => <MyListInfo />;

UserItemsInfo.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default UserItemsInfo;
