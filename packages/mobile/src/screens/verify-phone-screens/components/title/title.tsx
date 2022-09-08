import React, { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useCustomTheme } from '~/hooks/hooks';
import { Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  label: string;
  textStyle?: StyleProp<TextStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const Title: FC<Props> = ({ label, contentContainerStyle, textStyle }) => {
  const { colors } = useCustomTheme();

  return (
    <View style={contentContainerStyle}>
      <Text
        style={[
          styles.title,
          globalStyles.fs22,
          globalStyles.fontWeightExtraBold,
          { color: colors.text },
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

export { Title };
