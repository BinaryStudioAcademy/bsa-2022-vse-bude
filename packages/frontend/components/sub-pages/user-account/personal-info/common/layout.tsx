import type { FC } from 'react';
import { Row } from '@primitives';
import type { NestedLayoutProps } from '../types';

export const NestedLayout: FC<NestedLayoutProps> = ({ children }) => (
  <Row>{children}</Row>
);
