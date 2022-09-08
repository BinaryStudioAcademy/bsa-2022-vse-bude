/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { StyledRange } from './styled-range/component';

export const Range = React.forwardRef((ref) => {
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
    />
  );
});
