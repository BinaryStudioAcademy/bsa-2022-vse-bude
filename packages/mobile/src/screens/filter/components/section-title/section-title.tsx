import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useCustomTheme } from '~/hooks/hooks';

type Props = {
  title: string;
  style?: StyleProp<TextStyle>;
};

const SectionTitle: FC<Props> = ({ title, style }) => {
  const { colors } = useCustomTheme();

  return (
    <Text
      style={[
        globalStyles.fontWeightSemiBold,
        { color: colors.titlePrimary },
        style,
      ]}
    >
      {title}
    </Text>
  );
};

export { SectionTitle };
