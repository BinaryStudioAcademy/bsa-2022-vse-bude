import React, { FC } from 'react';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { View, HeaderButton, Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  labelButton?: string;
  onPress?: () => void;
  hideButton?: boolean;
};

const Header: FC<Props> = ({ labelButton, onPress, hideButton }) => {
  const { t } = useTranslation();
  const { colors } = useCustomTheme();
  const isButtonVisible = !hideButton && onPress && labelButton;

  return (
    <View
      style={[
        globalStyles.justifyContentEnd,
        styles.header,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      >
        <View style={styles.section}>
          {isButtonVisible && (
            <HeaderButton
              label={labelButton}
              onPress={onPress}
              color={colors.accent}
            />
          )}
        </View>
        <View style={styles.section}>
          <Text
            style={[
              globalStyles.fs17,
              globalStyles.fontWeightSemiBold,
              styles.text,
              { color: colors.text },
            ]}
          >
            {t('verify.VERIFY')}
          </Text>
        </View>
        <View style={styles.section} />
      </View>
    </View>
  );
};

export { Header };
