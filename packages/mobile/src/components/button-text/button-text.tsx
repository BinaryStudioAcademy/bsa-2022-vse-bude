import React, { FC } from 'react';
import { TouchableOpacity, Text, TextStyle } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';

type Props = {
  onPress: () => void;
  children: string;
  style?: TextStyle[];
};

const ButtonText: FC<Props> = ({ onPress, children, style = [] }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text
        style={[{ color: ColorPalette.YELLOW_100 }, globalStyles.mt5, ...style]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { ButtonText };
