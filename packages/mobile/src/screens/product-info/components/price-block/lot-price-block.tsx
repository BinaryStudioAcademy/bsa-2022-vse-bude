import React, { FC } from 'react';
import {
  PrimaryButton,
  StarIcon,
  Text,
  View,
  PlusSvg,
} from '~/components/components';
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { ColorPalette, ProductDto } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { PriceWrapper } from './price-wrapper';
import { styles } from './styles';

type LotPriceBlockProps = Pick<ProductDto, 'currentPrice' | 'minimalBid'>;

const LotPriceBlock: FC<LotPriceBlockProps> = ({
  currentPrice,
  minimalBid,
}) => {
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
          {`${t('screens:welcome.UAH')} ${currentPrice}`}
        </Text>
      </View>
      <PriceWrapper>
        <>
          <Text style={[globalStyles.fs14, styles.minBid]}>{`${t(
            'screens:product_info.MIN_UAH',
          )} ${minimalBid}`}</Text>
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}
          >
            <View style={styles.btnWidth}>
              <PlusSvg style={styles.btnIcon} />
              <PrimaryButton label={`${t('common:components.BUTTON_BID')}`} />
            </View>
            <View style={[globalStyles.ml5, styles.iconBorder]}>
              <StarIcon
                size={25}
                color={ColorPalette.YELLOW_200}
                style={styles.icon}
              />
            </View>
          </View>
        </>
      </PriceWrapper>
    </>
  );
};

export { LotPriceBlock };
