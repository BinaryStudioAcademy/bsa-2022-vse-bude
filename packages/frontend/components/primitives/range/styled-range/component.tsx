import Range from 'rc-slider';
import type { StyledRangeProps } from '../types';
import * as styles from '../styles';

export const StyledRange = ({
  allowCross,
  value,
  handleChange,
  ref,
}: StyledRangeProps) => (
  <Range
    range
    ref={ref}
    allowCross={allowCross}
    css={styles.globalSliderStyles}
    onChange={handleChange}
    defaultValue={value}
    min={0}
    max={50000}
  />
);
