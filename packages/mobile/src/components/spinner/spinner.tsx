import React, { FC } from 'react';
import { ActivityIndicator, ColorValue, View } from 'react-native';
import { styles } from './styles';

type Props = {
  size?: number;
  color?: ColorValue;
  isOverflow?: boolean;
};

const Spinner: FC<Props> = ({ size, color, isOverflow }) => {
  const spinnerSize = 40;

  if (isOverflow) {
    return (
      <View style={styles.overflowContainer}>
        <ActivityIndicator size={size ?? spinnerSize} color={color} />
      </View>
    );
  }

  return <ActivityIndicator size={size ?? spinnerSize} color={color} />;
};

export { Spinner };
