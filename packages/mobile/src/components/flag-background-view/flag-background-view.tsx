import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

import { ColorPalette } from '@vse-bude/shared';

type FlagBackgroundViewProps = Omit<
  LinearGradientProps,
  'start' | 'end' | 'colors'
>;

const FlagBackgroundView: React.FC<FlagBackgroundViewProps> = ({
  children,
  style,
  ...viewProps
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0.15 }}
      end={{ x: 0, y: 0.85 }}
      colors={[ColorPalette.BLUE_100, ColorPalette.YELLOW_200]}
      style={style}
      {...viewProps}
    >
      {children}
    </LinearGradient>
  );
};

export { FlagBackgroundView };
