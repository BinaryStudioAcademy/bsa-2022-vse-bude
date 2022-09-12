import React, { FC, ReactNode } from 'react';
import { StatusBar, StatusBarProps, StyleProp, ViewStyle } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  statusBarProps?: StatusBarProps;
  containerProps?: SafeAreaViewProps;
};

const ScreenWrapper: FC<Props> = ({
  style,
  children,
  containerProps,
  statusBarProps,
}) => {
  const { colors, dark } = useCustomTheme();

  return (
    <SafeAreaView
      style={[
        globalStyles.flex1,
        { backgroundColor: colors.background },
        style,
      ]}
      {...containerProps}
    >
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
        {...statusBarProps}
      />
      {children}
    </SafeAreaView>
  );
};

export { ScreenWrapper };
