import React, { FC } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { globalStyles } from '~/styles/styles';
import { View, TouchableOpacity, Text } from '../components';
import { styles } from './styles';

type Props = {
  isSelected: boolean;
  size?: number;
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const RadioButton: FC<Props> = ({
  isSelected = true,
  size = 18,
  label,
  onPress,
  style,
}) => {
  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
        style,
      ]}
    >
      <TouchableOpacity
        style={[
          styles.container,
          { width: size, height: size },
          globalStyles.alignItemsCenter,
          globalStyles.justifyContentCenter,
          globalStyles.mr3,
        ]}
        onPress={onPress}
      >
        {isSelected && (
          <View
            style={[styles.filler, { width: size * 0.6, height: size * 0.6 }]}
          />
        )}
      </TouchableOpacity>
      <Text>{label}</Text>
    </View>
  );
};

export { RadioButton };
