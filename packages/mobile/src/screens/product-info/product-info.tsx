import React, { FC } from 'react';
import {
  ScreenWrapper,
  View,
  Text,
  EyeIcon,
  ScrollView,
} from '~/components/components';
import { selectProductById } from '~/store/products/selectors';
import { useAppSelector, useCustomTheme, useRoute } from '~/hooks/hooks';
import { ProductDto, ProductType } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { formatToDateTime } from '~/helpers/helpers';
import { Description } from './components/description/description';
import { ImageCarousel } from './components/image-carousel/image-carousel';
import { LotPriceBlock } from './components/price-block/lot-price-block';
import { ProductPriceBlock } from './components/price-block/product-price-block';
import { SellerInfo } from './components/seller-info/seller-info';

const ProductInfo: FC = () => {
  const route = useRoute();
  const { colors } = useCustomTheme();
  const id = route.params;

  const product = useAppSelector((state) =>
    selectProductById(state, id?.toString() as string),
  );

  const {
    title,
    description,
    price,
    minimalBid,
    city,
    type,
    status,
    endDate,
    imageLinks,
    views,
    currentPrice,
  } = product as ProductDto;

  const date = formatToDateTime(endDate as Date);

  return (
    <ScreenWrapper>
      {/** TODO: add countdown for auction item component */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.px5, globalStyles.mb5]}
      >
        <Text
          style={[
            globalStyles.fs36,
            globalStyles.fontWeightExtraBold,
            globalStyles.py6,
            { color: colors.text },
          ]}
        >
          {title || ''}
        </Text>
        <View
          style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}
        >
          <EyeIcon size={15} color={colors.icon} />
          <Text
            style={[
              globalStyles.px3,
              globalStyles.fs12,
              { color: colors.icon },
            ]}
          >
            {views?.toString() || ''}
          </Text>
        </View>
        {imageLinks && <ImageCarousel imageLinks={imageLinks} />}
        <Description
          description={description}
          city={city || ''}
          status={status}
          date={date}
        />
        <SellerInfo />
      </ScrollView>
      {type == ProductType.AUCTION ? (
        <LotPriceBlock
          currentPrice={Number(currentPrice)}
          minimalBid={Number(minimalBid)}
        />
      ) : (
        <ProductPriceBlock price={Number(price)} />
      )}
    </ScreenWrapper>
  );
};

export { ProductInfo };
