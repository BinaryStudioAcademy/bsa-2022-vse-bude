import type { FC } from 'react';
import type { AccountPageProps } from './types';
import { AccountLayout } from './layout';

const UserAccount: FC<AccountPageProps> = ({ children }) => (
  <AccountLayout>{children}</AccountLayout>
);

export default UserAccount;
