import { ColorPalette } from '@vse-bude/shared';
import React, { FC } from 'react';
import { PlusSvg } from '~/assets/svg/plus';
import { PrimaryButton, StarIcon, Text, View } from '~/components/components';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const LotPriceBlock: FC = () => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  return (
    <>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentCenter,
          globalStyles.alignItemsCenter,
          styles.currentBid,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        <Text
          style={[
            globalStyles.mr3,
            globalStyles.fs12,
            { color: colors.subtitle },
          ]}
        >
          {t('screens:product_info.CURRENT_BID')}
        </Text>
        <Text
          style={[
            globalStyles.ml3,
            globalStyles.fs22,
            globalStyles.fontWeightExtraBold,
            { color: colors.titleSecondary },
          ]}
        >
          {`${t('screens:welcome.UAH')} 5800`}
        </Text>
      </View>
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
        <Text style={[globalStyles.fs14, styles.minBid]}>{`${t(
          'screens:product_info.MIN_UAH',
        )} 200`}</Text>
        <View
          style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
        >
          <View style={styles.btnWidth}>
            <PlusSvg style={styles.btnIcon} />
            <PrimaryButton label={t('common:components.BUTTON_BID')} />
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
    </>
  );
};

export { LotPriceBlock };
