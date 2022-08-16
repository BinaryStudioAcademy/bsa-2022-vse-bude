import type React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { AccountLayout } from '../../components/user-account-layout/layout';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale } = ctx;
    console.log(store);

    return Promise.resolve({
      props: {
        ...(await serverSideTranslations(locale, [
          'dashboard',
          'personal-info',
          'page-titles',
        ])),
      },
    });
  },
);

const UserAccount = ({ children }: { children: React.ReactNode }) => (
  <AccountLayout>{children}</AccountLayout>
);

export default UserAccount;
