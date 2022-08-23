import { Spinner } from './spinner';
import type { LoaderProps } from './types';

export const Loader = ({ size = 'small' }: LoaderProps) => (
  <Spinner size={size} />
);
