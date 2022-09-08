import { ColorPalette } from '@vse-bude/shared';
import React, { FC } from 'react';
import { BackIcon, Pressable, Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  label: string;
  onPress: () => void;
  color?: string;
};

const HeaderButton: FC<Props> = ({ label, onPress, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentStart,
      ]}
    >
      <BackIcon size={35} style={{ color: color || ColorPalette.WHITE_100 }} />
      <Text
        style={[
          styles.buttonText,
          globalStyles.fs17,
          globalStyles.fontWeightMedium,
          { color: color || ColorPalette.WHITE_100, textAlign: 'left' },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export { HeaderButton };
