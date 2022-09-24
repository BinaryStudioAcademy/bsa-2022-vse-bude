import { ColorPalette } from '@vse-bude/shared';
import React from 'react';
import Svg, { Polygon, SvgProps } from 'react-native-svg';

const StarSvg = (props: SvgProps) => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      stroke={ColorPalette.YELLOW_200}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></Polygon>
    </Svg>
  );
};

export { StarSvg };
