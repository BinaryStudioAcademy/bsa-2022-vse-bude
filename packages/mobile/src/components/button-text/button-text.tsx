import React, { FC } from 'react';
import { TouchableOpacity, Text, TextProps } from 'react-native';

type Props = TextProps & {
  onPress: () => void;
  children: string;
};

const ButtonText: FC<Props> = ({ onPress, children, ...textProps }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text {...textProps}>{children}</Text>
    </TouchableOpacity>
  );
};

export { ButtonText };
