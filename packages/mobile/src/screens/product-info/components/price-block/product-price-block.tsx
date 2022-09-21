import React, { FC } from 'react';
import { PrimaryButton, StarIcon, Text, View } from '~/components/components';
import { useAppSelector, useCustomTheme, useTranslation } from '~/hooks/hooks';
import { ColorPalette, ProductDto } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { selectCurrentUser } from '~/store/selectors';
import { PriceWrapper } from './price-wrapper';
import { styles } from './styles';

type ProductPriceBlockProps = Pick<ProductDto, 'price'>;

const ProductPriceBlock: FC<ProductPriceBlockProps> = ({ price }) => {
  const { colors } = useCustomTheme();
  const { t, i18n } = useTranslation();
  const user = useAppSelector(selectCurrentUser);
  const canUserMakeBid = Boolean(
    user?.phoneVerified && user?.emailVerified,
  );

  const priceText =
    i18n.language === 'ua'
      ? `${price} ${t('screens:welcome.UAH')}`
      : `${t('screens:welcome.UAH')} ${price}`;

  return (
    <PriceWrapper>
      <>
        <Text
          style={[
            globalStyles.fs18,
            globalStyles.fontWeightBold,
            { color: colors.text },
          ]}
        >
          {priceText}
        </Text>
        <View
          style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
        >
          <View style={styles.btnWidth}>
            <PrimaryButton
              label={t('common:components.BUTTON_BUY')}
              disabled={!canUserMakeBid}
            />
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
  );
};

export { ProductPriceBlock };
