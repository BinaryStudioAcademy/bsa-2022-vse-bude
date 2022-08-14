import { NestedLayout } from './layout';
import type { NextPageWithLayout } from '../../types';
import { ReactElement } from 'react';
import { AccountLayout } from '../layout';

const MyList: NextPageWithLayout = () => {
  return <div>My List</div>;
};

MyList.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <NestedLayout>{page}</NestedLayout>
    </AccountLayout>
  );
};

export default MyList;

