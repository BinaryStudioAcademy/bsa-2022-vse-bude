import { ColorPalette } from '@vse-bude/shared';
import React, { FC } from 'react';
import { PrimaryButton, StarIcon, Text, View } from '~/components/components';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const ProductPriceBlock: FC = () => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.justifyContentSpaceBetween,
        globalStyles.alignItemsCenter,
        globalStyles.px6,
        globalStyles.py4,
        styles.footer,
      ]}
    >
      <Text
        style={[
          globalStyles.fs18,
          globalStyles.fontWeightBold,
          { color: colors.text },
        ]}
      >
        {`${t('screens:welcome.UAH')} 6500`}
      </Text>
      <View
        style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
      >
        <View style={styles.btnWidth}>
          <PrimaryButton label={t('common:components.BUTTON_BUY')} />
        </View>
        <View style={[globalStyles.ml5, styles.iconBorder]}>
          <StarIcon
            size={25}
            color={ColorPalette.YELLOW_200}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export { ProductPriceBlock };
