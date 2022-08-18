import React, { FC } from 'react';
import { TouchableOpacity, Text, ColorValue } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';

type Props = {
  text: string;
  onPress: () => void;
  color?: ColorValue;
};

const TextButton: FC<Props> = ({
  text,
  onPress,
  color = ColorPalette.YELLOW_100,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text
        style={[{ color }, globalStyles.fs14, globalStyles.fontWeightRegular]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export { TextButton };
