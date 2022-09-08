/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { Handle } from './handle/component';
import { StyledRange } from './styled-range/component';

export const Range = React.forwardRef((ref, props) => {
  const [value, setValue] = useState([0, 50000]);

  const handleChange = (sliderValues) => {
    setValue(sliderValues);
  };

  return (
    <StyledRange
      ref={ref}
      allowCross={false}
      value={value}
      handleChange={handleChange}
      // handle={<Handle value={value} />}
    />
  );
});
