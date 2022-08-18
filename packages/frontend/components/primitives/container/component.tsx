import type { ContainerProps } from './types';
import * as styles from './styles';

export const Container = ({ cssExtend, children, ...rest }: ContainerProps) => (
  <div css={[styles.container, cssExtend]} {...rest}>
    {children}
  </div>
);
