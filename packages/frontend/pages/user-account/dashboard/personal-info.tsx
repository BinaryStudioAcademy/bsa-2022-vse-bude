import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from 'pages/_app';
import { AccountLayout } from '../../../components/user-account-layout/layout';
import { NestedLayout } from '../../../components/sub-pages/user-account/personal-info/common/layout';

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

const ProfileInfo: NextPageWithLayout = () => (
  <div style={{ width: '500px', backgroundColor: 'red' }}>Profile Info</div>
);

ProfileInfo.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <NestedLayout>{page}</NestedLayout>
    </AccountLayout>
  );
};

export default ProfileInfo;
