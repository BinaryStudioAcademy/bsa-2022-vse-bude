import React, { FC } from 'react';
import { TouchableOpacity, Text, TextStyle } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';

type Props = {
  onPress: () => void;
  children: string;
  alignSelf: 'flex-end' | 'flex-start' | 'center';
  textStyle?: TextStyle[];
};

const ButtonText: FC<Props> = ({
  onPress,
  children,
  alignSelf = 'flex-start',
  textStyle = [],
}) => {
  return (
    <TouchableOpacity style={{ alignSelf }} onPress={() => onPress()}>
      <Text
        style={[
          { color: ColorPalette.YELLOW_100 },
          globalStyles.fs12,
          ...textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { ButtonText };
