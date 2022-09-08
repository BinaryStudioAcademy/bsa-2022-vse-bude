import Range from 'rc-slider';
import type { StyledRangeProps } from '../types';
import * as styles from '../styles';

export const StyledRange = ({
  allowCross,
  min, 
  max,
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
    min={min}
    max={max}
  />
);
