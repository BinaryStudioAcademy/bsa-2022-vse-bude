import React, { FC } from 'react';
import { Text, View } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const Line: FC = () => {
  const { colors } = useCustomTheme();

  return (
    <View
      style={[
        styles.container,
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
      ]}
    >
      <View style={[styles.line, { backgroundColor: colors.line }]} />
      <Text
        style={[
          styles.text,
          globalStyles.px3,
          globalStyles.fs18,
          globalStyles.fontWeightSemiBold,
          { color: colors.line },
        ]}
      >
        or
      </Text>
      <View style={[styles.line, { backgroundColor: colors.line }]} />
    </View>
  );
};

export { Line };
