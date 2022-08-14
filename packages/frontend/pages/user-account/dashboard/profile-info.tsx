import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../../types';
import { AccountLayout } from '../layout';
import { NestedLayout } from './layout';

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
