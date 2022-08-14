import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../../types';
import { AccountLayout } from '../layout';
import { NestedLayout } from './layout';

const MyList: NextPageWithLayout = () => <div>My List</div>;

MyList.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <NestedLayout>{page}</NestedLayout>
    </AccountLayout>
  );
};

export default MyList;
