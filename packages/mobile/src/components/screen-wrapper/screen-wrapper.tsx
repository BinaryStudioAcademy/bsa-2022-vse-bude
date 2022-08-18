import React, { FC } from 'react';
import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { useCustomTheme } from '~/hooks/hooks';
import { StatusBar, View } from '../components';
import { styles } from './styles';

const ScreenWrapper: FC<NativeSafeAreaViewProps> = ({
  style,
  children,
  ...restProps
}) => {
  const { colors } = useCustomTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
      {...restProps}
    >
      <StatusBar backgroundColor="transparent" translucent={true} />
      {children}
    </View>
  );
};

export { ScreenWrapper };
