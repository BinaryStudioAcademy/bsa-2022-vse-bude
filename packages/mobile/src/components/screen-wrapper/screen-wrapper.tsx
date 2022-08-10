import React, { FC } from 'react';
import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView } from '../components';
import { styles } from './styles';

const ScreenWrapper: FC<NativeSafeAreaViewProps> = ({
  style,
  children,
  ...restProps
}) => {
  return (
    <SafeAreaView style={styles.container} {...restProps}>
      {children}
    </SafeAreaView>
  );
};

export { ScreenWrapper };
