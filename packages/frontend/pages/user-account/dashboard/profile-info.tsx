import { NestedLayout } from './layout';
import type { NextPageWithLayout } from '../../types';
import { ReactElement } from 'react';
import { AccountLayout } from '../layout';

const ProfileInfo: NextPageWithLayout = () => {
  return <div style={{width: "500px", backgroundColor: 'red'}}>Profile Info</div>;
};

ProfileInfo.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <NestedLayout>{page}</NestedLayout>
    </AccountLayout>
  );
};

export default ProfileInfo;
