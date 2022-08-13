import React, { FC } from 'react';
import { Text, View } from '~/components/components';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const Line: FC = () => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

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
        {t('verification.LINE')}
      </Text>
      <View style={[styles.line, { backgroundColor: colors.line }]} />
    </View>
  );
};

export { Line };
