import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';

const ScreenWrapper: FC<NativeSafeAreaViewProps> = ({
  style,
  children,
  ...restProps
}) => {
  const { colors, dark } = useCustomTheme();

  return (
    <SafeAreaView
      style={[
        globalStyles.flex1,
        { backgroundColor: colors.background },
        style,
      ]}
      {...restProps}
    >
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      {children}
    </SafeAreaView>
  );
};

export { ScreenWrapper };
