import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../../types';
import { AccountLayout } from '../layout';
import { NestedLayout } from './layout';

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
