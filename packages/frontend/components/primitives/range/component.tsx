import Slider from 'rc-slider';
import type { StyledRangeProps } from './types';
import * as styles from './styles';

export const Range = ({
  min,
  max,
  value,
  handleChange,
  ref,
}: StyledRangeProps) => (
  <div css={styles.wrapperStyles}>
    <Slider
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
