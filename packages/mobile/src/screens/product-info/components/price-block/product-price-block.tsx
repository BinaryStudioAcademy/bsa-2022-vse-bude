import React, { FC } from 'react';
import {
  AddProductToFavorites,
  ColorPalette,
  DeleteProductFromFavorites,
  ProductDto,
} from '@vse-bude/shared';
import { selectFavoritesIds } from '~/store/selectors';
import { useAppSelector, useCustomTheme, useTranslation } from '~/hooks/hooks';
import {
  Pressable,
  PrimaryButton,
  StarIcon,
  Text,
  View,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { PriceWrapper } from './price-wrapper';
import { styles } from './styles';

type ProductPriceBlockProps = {
  product: Pick<ProductDto, 'price' | 'id'>;
  onFavoritePress: (
    id: string,
    array: string[] | [],
  ) => Promise<void | AddProductToFavorites | DeleteProductFromFavorites>;
};

const ProductPriceBlock: FC<ProductPriceBlockProps> = ({
  product,
  onFavoritePress,
}) => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const favoritesIds = useAppSelector(selectFavoritesIds);

  const { price, id } = product;

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
            onPress={() => onFavoritePress(id, favoritesIds)}
            style={[globalStyles.ml5, styles.iconBorder]}
          >
            <StarIcon
              size={25}
              color={ColorPalette.YELLOW_200}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </>
    </PriceWrapper>
  );
};

export { ProductPriceBlock };
