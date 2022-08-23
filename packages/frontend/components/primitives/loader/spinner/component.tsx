import { loader } from './styles';

export interface SpinnerProps {
  size: 'extraSmall' | 'small' | 'big' | 'large';
}

export const Spinner = ({ size }: SpinnerProps) => (
  <div css={loader} data-size={size}></div>
);
