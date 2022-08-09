import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

type Props = {
  size?: number;
  color?: string;
  isOverflow?: boolean;
};

const Spinner: FC<Props> = ({ size, color, isOverflow }) => {
  if (isOverflow) {
    return (
      <View style={styles.overflowContainer}>
        <ActivityIndicator size={size ?? 45} color={color} />
      </View>
    );
  }

  return <ActivityIndicator size={size ?? 30} color={color} />;
};

export { Spinner };
