import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { AccountLayout } from '@components';
import { PersonalInfo } from '@sub-pages';

export const getServerSideProps = wrapper.getServerSideProps(
  () => async (ctx) => {
    const { locale } = ctx;

    return Promise.resolve({
      props: {
        ...(await serverSideTranslations(locale, [
          'personal-info',
          'common',
          'account',
        ])),
      },
    });
  },
);

const ProfileInfo: NextPageWithLayout = () => <PersonalInfo></PersonalInfo>;

ProfileInfo.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default ProfileInfo;
