import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ReactElement } from 'react';
import { withProtected } from '@hocs';
import { wrapper } from 'store';
import type { NextPageWithLayout } from 'pages/_app';
import { AccountLayout } from '@components/profile/user-account-layout';
import NotificationsFilter from '@components/profile/user-account/notifications-filter/component';

export const getServerSideProps = withProtected(
  wrapper.getServerSideProps((_store) => async (ctx) => {
    const { locale } = ctx;

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'account'])),
      },
    };
  }),
);

const Notifications: NextPageWithLayout = () => <NotificationsFilter />;

Notifications.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default Notifications;
