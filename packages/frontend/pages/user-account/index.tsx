import type React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { withProtected } from '@helpers';
import { AccountLayout } from '../../components/user-account-layout/layout';

export const getServerSideProps = withProtected(
  wrapper.getServerSideProps(() => async (ctx) => {
    const { locale } = ctx;

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'user-account'])),
      },
    };
  }),
);

const UserAccount = ({ children }: { children: React.ReactNode }) => (
  <AccountLayout>{children}</AccountLayout>
);

export default UserAccount;
