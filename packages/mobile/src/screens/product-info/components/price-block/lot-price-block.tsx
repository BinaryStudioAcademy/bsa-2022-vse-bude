import React, { FC } from 'react';
import { ColorPalette, ItemDto, ProductIdRequest } from '@vse-bude/shared';
import { selectFavoritesIds } from '~/store/selectors';
import { getBidValidationSchema } from '~/validation-schemas/bid/make-bid';
import {
  useAppForm,
  useAppSelector,
  useCustomTheme,
  useTranslation,
} from '~/hooks/hooks';
import {
  PrimaryButton,
  Text,
  View,
  PlusSvg,
  Input,
  Pressable,
  StarSvg,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { DEFAULT_BID_VALUE } from '../../common/constants';
import { PriceWrapper } from './price-wrapper';
import { styles } from './styles';

type LotPriceBlockProps = {
  product: Pick<ItemDto, 'currentPrice' | 'minimalBid' | 'id'>;
  isLoading: boolean;
  onFavoritePress: (
    id: string,
    isFavorite: boolean,
  ) => Promise<void | ProductIdRequest>;
};

const LotPriceBlock: FC<LotPriceBlockProps> = ({
  product,
  isLoading,
  onFavoritePress,
}) => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const favoritesIds = useAppSelector(selectFavoritesIds);
  const { minimalBid, currentPrice, id } = product;
  const isFavorite = favoritesIds.includes(id);

  const { control, errors } = useAppForm({
    defaultValues: DEFAULT_BID_VALUE,
    validationSchema: getBidValidationSchema(Number(minimalBid)),
  });

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
          <Input
            name="bid"
            control={control}
            errors={errors}
            placeholder={`${t('screens:product_info.MIN_UAH')} ${minimalBid}`}
          />
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
    </>
  );
};

export { LotPriceBlock };
