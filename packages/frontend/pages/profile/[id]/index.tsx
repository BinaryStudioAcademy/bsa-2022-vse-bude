import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ReactElement } from 'react';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { Http } from '@vse-bude/shared';
import { fetchUserProfileSSR } from 'store/profile/actions';
import { PersonalInfo } from '@components/profile/user-account';
import type { NextPageWithLayout } from 'pages/_app';
import { AccountLayout } from '@components/profile/user-account-layout';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale, query } = ctx;

    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, locale);

    await store.dispatch(
      fetchUserProfileSSR({
        http: httpClient,
        userId: query.id as string,
      }),
    );

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'account',
          'personal-info',
          'auth',
        ])),
      },
    };
  }),
);

const ProfileInfo: NextPageWithLayout = () => <PersonalInfo />;

ProfileInfo.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default ProfileInfo;
