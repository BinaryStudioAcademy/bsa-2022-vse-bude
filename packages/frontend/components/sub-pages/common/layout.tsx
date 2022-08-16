import type { FC } from 'react';
import { Row } from '@primitives';
import type { NestedLayoutProps } from '../user-account/personal-info/types';

export const NestedLayout: FC<NestedLayoutProps> = ({ children }) => (
  <Row>{children}</Row>
);
