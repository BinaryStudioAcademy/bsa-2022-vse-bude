import React, { FC } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { useCustomTheme } from '~/hooks/hooks';
import { Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  label: string;
  contentStyle?: TextStyle;
  contentContainerStyle?: ViewStyle;
};

const Title: FC<Props> = ({ label, contentContainerStyle, contentStyle }) => {
  const { colors } = useCustomTheme();

  return (
    <View style={contentContainerStyle}>
      <Text
        style={[
          styles.title,
          globalStyles.fs22,
          globalStyles.fontWeightExtraBold,
          { color: colors.text },
          contentStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

export { Title };
