import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import type { FC } from 'react';
import type { AccountPageProps } from './types';
import { AccountLayout } from './layout';

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

const UserAccount: FC<AccountPageProps> = ({ children }) => (
  <AccountLayout>{children}</AccountLayout>
);

export default UserAccount;
