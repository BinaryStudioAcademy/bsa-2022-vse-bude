import React, { FC } from 'react';
import { ColorPalette, ProductDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import { selectProductsDataStatus } from '~/store/selectors';
import { useAppSelector, useCustomTheme, useTranslation } from '~/hooks/hooks';
import {
  Pressable,
  PrimaryButton,
  Spinner,
  StarSvg,
  Text,
  View,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { PriceWrapper } from './price-wrapper';
import { styles } from './styles';

type ProductPriceBlockProps = {
  product: Pick<ProductDto, 'price' | 'id'>;
  isFavorite: boolean;
  onFavoritePress: (id: string) => void;
};

const ProductPriceBlock: FC<ProductPriceBlockProps> = ({
  product,
  isFavorite,
  onFavoritePress,
}) => {
  const { colors } = useCustomTheme();
  const { t, i18n } = useTranslation();
  const { price, id } = product;
  const dataStatus = useAppSelector(selectProductsDataStatus);
  const isLoading = dataStatus == DataStatus.PENDING;

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
            <PrimaryButton label={t('common:components.BUTTON_BUY')} />
          </View>
          <Pressable
            onPress={() => onFavoritePress(id)}
            style={[globalStyles.ml5, styles.iconBorder]}
            disabled={isLoading}
          >
            {isLoading ? (
              <View style={globalStyles.py1}>
                <Spinner />
              </View>
            ) : (
              <StarSvg
                color={ColorPalette.YELLOW_200}
                width={30}
                height={30}
                fill={isFavorite ? ColorPalette.YELLOW_200 : 'none'}
                style={styles.icon}
              />
            )}
          </Pressable>
        </View>
      </>
    </PriceWrapper>
  );
};

export { ProductPriceBlock };
