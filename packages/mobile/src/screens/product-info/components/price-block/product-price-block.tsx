import React, { FC } from 'react';
import { ColorPalette, ProductDto, ProductIdRequest } from '@vse-bude/shared';
import { selectFavoritesIds } from '~/store/selectors';
import { useAppSelector, useCustomTheme, useTranslation } from '~/hooks/hooks';
import {
  Pressable,
  PrimaryButton,
  StarSvg,
  Text,
  View,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { PriceWrapper } from './price-wrapper';
import { styles } from './styles';

type ProductPriceBlockProps = {
  product: Pick<ProductDto, 'price' | 'id'>;
  isLoading: boolean;
  onFavoritePress: (
    id: string,
    isFavorite: boolean,
  ) => Promise<void | ProductIdRequest>;
};

const ProductPriceBlock: FC<ProductPriceBlockProps> = ({
  product,
  isLoading,
  onFavoritePress,
}) => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const favoritesIds = useAppSelector(selectFavoritesIds);
  const { price, id } = product;
  const isFavorite = favoritesIds.includes(id);

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
          {`${t('screens:welcome.UAH')} ${price}`}
        </Text>
        <View
          style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
        >
          <View style={styles.btnWidth}>
            <PrimaryButton label={t('common:components.BUTTON_BUY')} />
          </View>
          <Pressable
            onPress={() => onFavoritePress(id, isFavorite)}
            style={[globalStyles.ml5, styles.iconBorder]}
            disabled={isLoading}
          >
            <StarSvg
              color={ColorPalette.YELLOW_200}
              width={30}
              height={30}
              fill={isFavorite ? ColorPalette.YELLOW_200 : 'none'}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </>
    </PriceWrapper>
  );
};

export { ProductPriceBlock };
