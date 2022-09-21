import React, { FC } from 'react';
import { ColorPalette, ProductDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import { selectProductsDataStatus, selectCurrentUser } from '~/store/selectors';
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
  makeFavoritePending: boolean;
  onFavoritePress: (id: string) => void;
};

const ProductPriceBlock: FC<ProductPriceBlockProps> = ({
  product,
  isFavorite,
  makeFavoritePending,
  onFavoritePress,
}) => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const { price, id } = product;
  const dataStatus = useAppSelector(selectProductsDataStatus);
  const isLoading = dataStatus == DataStatus.PENDING;
  const user = useAppSelector(selectCurrentUser);
  const canUserMakeBid = Boolean(user?.phoneVerified && user?.emailVerified);

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
          {`${price} ${t('common:currency.UAH')}`}
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
          <Pressable
            onPress={() => onFavoritePress(id)}
            style={[globalStyles.ml5, styles.iconBorder]}
            disabled={isLoading}
          >
            {makeFavoritePending ? (
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
