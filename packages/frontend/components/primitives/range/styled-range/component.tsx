import Range  from 'rc-slider';
import type { StyledRangeProps } from '../types';
import * as styles from '../styles';

export const StyledRange = ({allowCross, handle, value, ref}: StyledRangeProps) => (
        <Range 
            css={styles.globalStyles}
            ref={ref} 
            allowCross={allowCross} 
            // handle={handle}
            min={0} 
            max={100}
            defaultValue={0}
            value={value}
            />
    );