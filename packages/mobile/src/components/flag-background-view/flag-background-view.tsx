import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

import { ColorPalette } from '@vse-bude/shared';

type FlagBackgroundViewProps = Omit<LinearGradientProps, 'colors'>;

const FlagBackgroundView: React.FC<FlagBackgroundViewProps> = ({
  start = { x: 0, y: 0.15 },
  end = { x: 0, y: 0.85 },
  children,
  style,
  ...viewProps
}) => {
  return (
    <LinearGradient
      start={start}
      end={end}
      colors={[ColorPalette.BLUE_100, ColorPalette.YELLOW_200]}
      style={style}
      {...viewProps}
    >
      {children}
    </LinearGradient>
  );
};

export { FlagBackgroundView };
