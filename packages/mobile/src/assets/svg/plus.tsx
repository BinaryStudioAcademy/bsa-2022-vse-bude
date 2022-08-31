import { ColorPalette } from '@vse-bude/shared';
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PlusSvg = (props: SvgProps) => {
  return (
    <Svg width="35" height="13" viewBox="0 0 35 13" fill="none" {...props}>
      <Path
        d="M5.5338 5.41657V7.14457H3.88581V8.95257H1.9498V7.14457H0.301805V5.41657H1.9498V3.60857H3.88581V5.41657H5.5338ZM20.4639 8.88857Z"
        fill={ColorPalette.WHITE_100}
      />
    </Svg>
  );
};

export { PlusSvg };
