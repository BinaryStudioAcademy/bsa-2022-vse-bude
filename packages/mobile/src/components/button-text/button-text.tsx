import React, { FC } from 'react';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { TextStyle, ViewStyle, StyleProp } from 'react-native';
import { TouchableOpacity, Text } from '../components';

type Props = {
  onPress: () => void;
  children: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const ButtonText: FC<Props> = ({
  onPress,
  children,
  textStyle,
  contentContainerStyle,
}) => {
  return (
    <TouchableOpacity style={contentContainerStyle} onPress={onPress}>
      <Text
        style={[
          { color: ColorPalette.YELLOW_100 },
          globalStyles.fs12,
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { ButtonText };
