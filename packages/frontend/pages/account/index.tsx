import type React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { AccountLayout } from '@components';
import { withProtected } from '@helpers';

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
