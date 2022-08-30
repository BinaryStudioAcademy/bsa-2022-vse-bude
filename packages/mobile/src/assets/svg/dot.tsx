import { ColorPalette } from '@vse-bude/shared';
import React from 'react';
import Svg, { Circle } from 'react-native-svg';

const DotSvg = () => {
  return (
    <Svg width="6" height="6" viewBox="0 0 6 6" fill="none">
      <Circle cx="3" cy="3" r="2.5" fill={ColorPalette.YELLOW_200} />
    </Svg>
  );
};

export { DotSvg };
