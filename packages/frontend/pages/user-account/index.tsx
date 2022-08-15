import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { AccountLayout } from '../../components/user-account-layout/layout';
import React from 'react';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale } = ctx;
    console.log(store);

    return Promise.resolve({
      props: {
        ...(await serverSideTranslations(locale, ['dashboard', 'page-titles'])),
      },
    });
  },
);

const UserAccount = ({ children }: { children: React.ReactNode }) => (
  <AccountLayout>{children}</AccountLayout>
);

export default UserAccount;
