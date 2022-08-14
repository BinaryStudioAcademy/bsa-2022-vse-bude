import type { FC } from 'react';
import type { NestedLayoutProps } from './types';
import { Row } from '@primitives';

export const NestedLayout: FC<NestedLayoutProps> = ({ children }) => (
  <Row>{children}</Row>
);
