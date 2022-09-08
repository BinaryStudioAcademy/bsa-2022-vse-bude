import Range from 'rc-slider';
import type { StyledRangeProps } from './types';
import * as styles from './styles';

export const PriceRange = ({
  min, 
  max,
  value,
  handleChange,
  ref,
}: StyledRangeProps) => (
  <div css={styles.wrapperStyles}>
    <Range
      range
      ref={ref}
      allowCross={false}
      css={styles.globalSliderStyles}
      onChange={handleChange}
      defaultValue={value}
      min={min}
      max={max}
      />
  </div>
  
);
