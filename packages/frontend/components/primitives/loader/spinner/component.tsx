import { loader } from './styles';

export interface SpinnerProps {
  size: string;
}

export const Spinner = ({ size }: SpinnerProps) => (
  <div css={loader} data-size={size}></div>
);
